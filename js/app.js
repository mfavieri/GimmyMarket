// GimmyMarket - Lógica Principal da Aplicação

const GimmyApp = {
  // Estado local em memória (sincronizado com IndexedDB)
  grupos: [],
  apresentacoes: [],
  produtos: [],
  supermercados: [],
  listaAtiva: null,
  supermercadoAtivoId: 'sm_padrao',
  filtroAtual: 'todos', // 'todos', 'pendentes', 'carrinho'

  // Mapas para lookup rápido O(1)
  gruposMap: {},
  apresMap: {},
  produtosMap: {},

  async init() {
    try {
      await GimmyDB.init();
      await this.carregarDadosBase();
      this.bindEvents();
      this.renderSupermarketSelectors();
      this.renderShoppingList();
      this.carregarListagensConfig();
    } catch (err) {
      console.error('Erro ao inicializar GimmyMarket:', err);
      this.showToast('Erro ao carregar banco local.');
    }
  },

  async carregarDadosBase() {
    this.grupos = await GimmyDB.getAll('grupos');
    this.apresentacoes = await GimmyDB.getAll('apresentacoes');
    this.produtos = await GimmyDB.getAll('produtos');
    this.supermercados = await GimmyDB.getAll('supermercados');
    this.listaAtiva = await GimmyDB.getListaAtiva();

    if (this.listaAtiva && this.listaAtiva.supermercadoId) {
      this.supermercadoAtivoId = this.listaAtiva.supermercadoId;
    }

    // Atualiza mapas
    this.gruposMap = {};
    for (const g of this.grupos) this.gruposMap[g.id] = g;

    this.apresMap = {};
    for (const a of this.apresentacoes) this.apresMap[a.id] = a;

    this.produtosMap = {};
    for (const p of this.produtos) this.produtosMap[p.id] = p;
  },

  bindEvents() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';
        this.executarBusca(val);
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.fecharBusca();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        this.fecharBusca();
        searchInput.focus();
      });
    }

    // Fecha o painel de busca se clicar fora
    document.addEventListener('click', (e) => {
      const panel = document.getElementById('searchResultsPanel');
      const searchBox = document.querySelector('.search-box-card');
      if (panel && searchBox && !searchBox.contains(e.target)) {
        panel.style.display = 'none';
      }
    });
  },

  // ==========================================
  // Navegação de Módulos
  // ==========================================
  switchModule(moduleName) {
    const modCompra = document.getElementById('moduleCompra');
    const modConfig = document.getElementById('moduleConfig');
    const btnCompra = document.getElementById('btnNavCompra');
    const btnConfig = document.getElementById('btnNavConfig');

    if (moduleName === 'compra') {
      modCompra.classList.add('active');
      modConfig.classList.remove('active');
      btnCompra.classList.add('active');
      btnConfig.classList.remove('active');
      this.renderShoppingList();
    } else {
      modCompra.classList.remove('active');
      modConfig.classList.add('active');
      btnCompra.classList.remove('active');
      btnConfig.classList.add('active');
      this.carregarListagensConfig();
    }
  },

  switchConfigTab(tabName, btnElement) {
    document.querySelectorAll('.config-subview').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.config-tab-btn').forEach(el => el.classList.remove('active'));

    const tabId = 'tab' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');
    if (btnElement) btnElement.classList.add('active');
  },

  // ==========================================
  // Módulo de Compras: Busca Inteligente
  // ==========================================
  executarBusca(termo) {
    const panel = document.getElementById('searchResultsPanel');
    if (!termo || termo.length < 2) {
      panel.style.display = 'none';
      panel.innerHTML = '';
      return;
    }

    const matches = GimmySearch.searchProducts(termo, this.produtos, this.gruposMap);

    if (matches.length === 0) {
      panel.innerHTML = `
        <div style="padding: 18px 14px; text-align: center; color: var(--text-muted);">
          <p>Nenhum produto encontrado para "<b>${termo}</b>".</p>
          <button class="btn-action-sec" style="margin: 10px auto 0;" onclick="GimmyApp.abrirCadastroRapido('${termo}')">
            ➕ Cadastrar no Catálogo
          </button>
        </div>
      `;
      panel.style.display = 'block';
      return;
    }

    // Renderiza até os 15 melhores resultados
    const topMatches = matches.slice(0, 15);
    panel.innerHTML = topMatches.map(prod => {
      const grupo = this.gruposMap[prod.grupoId] || { nome: 'Geral', icone: '📦' };
      const apres = this.apresMap[prod.apresId] || { sigla: 'Un' };
      const marcas = (prod.marcas && prod.marcas.length > 0) ? `• ${prod.marcas.join(', ')}` : '';

      return `
        <div class="search-result-item" data-prod-id="${prod.id}">
          <div class="res-prod-info">
            <div class="res-prod-nome">${grupo.icone} ${prod.nome}</div>
            <div class="res-prod-meta">
              <span>${grupo.nome}</span>
              <span>${marcas}</span>
            </div>
          </div>
          <div class="res-prod-actions">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="GimmyApp.alterarInputQty(this, -1)">-</button>
              <input type="text" class="qty-input" value="1" readonly>
              <button class="qty-btn" onclick="GimmyApp.alterarInputQty(this, 1)">+</button>
            </div>
            <button class="btn-add-item" onclick="GimmyApp.adicionarItemNaLista('${prod.id}', this)">
              <span>➕</span>
              <span>${apres.sigla}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    panel.style.display = 'block';
  },

  alterarInputQty(btn, delta) {
    const parent = btn.closest('.qty-stepper');
    const input = parent.querySelector('.qty-input');
    let val = parseInt(input.value, 10) || 1;
    val = Math.max(1, val + delta);
    input.value = val;
  },

  fecharBusca() {
    const panel = document.getElementById('searchResultsPanel');
    if (panel) panel.style.display = 'none';
  },

  abrirCadastroRapido(termo) {
    this.switchModule('config');
    this.switchConfigTab('produtos', document.querySelector('.config-tab-btn'));
    const input = document.getElementById('novoProdNome');
    if (input) {
      input.value = termo;
      input.focus();
    }
    this.fecharBusca();
  },

  // ==========================================
  // Módulo de Compras: Gestão da Lista & Carrinho
  // ==========================================
  async adicionarItemNaLista(produtoId, triggerBtn) {
    const prod = this.produtosMap[produtoId];
    if (!prod) return;

    let quantidade = 1;
    if (triggerBtn) {
      const stepper = triggerBtn.closest('.search-result-item')?.querySelector('.qty-input');
      if (stepper) quantidade = parseInt(stepper.value, 10) || 1;
    }

    if (!this.listaAtiva.itens) this.listaAtiva.itens = [];

    // Se já estiver na lista, apenas incrementa
    const itemExistente = this.listaAtiva.itens.find(i => i.produtoId === produtoId);
    if (itemExistente) {
      itemExistente.quantidade += quantidade;
      this.showToast(`+${quantidade} adicionado a ${prod.nome}`);
    } else {
      this.listaAtiva.itens.push({
        id: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        produtoId: prod.id,
        nome: prod.nome,
        grupoId: prod.grupoId,
        apresId: prod.apresId,
        quantidade: quantidade,
        comprado: false,
        adicionadoEm: new Date().toISOString()
      });
      this.showToast(`"${prod.nome}" adicionado à lista!`);
    }

    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();
    this.fecharBusca();

    // Limpa o input de busca para a próxima consulta
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
  },

  async alternarComprado(itemId) {
    const item = this.listaAtiva.itens.find(i => i.id === itemId);
    if (!item) return;

    item.comprado = !item.comprado;
    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();

    if (item.comprado) {
      this.showToast(`🧺 "${item.nome}" colocado no carrinho!`);
    } else {
      this.showToast(`↩️ "${item.nome}" devolvido para a lista!`);
    }
  },

  async alterarQuantidadeItem(itemId, delta) {
    const item = this.listaAtiva.itens.find(i => i.id === itemId);
    if (!item) return;

    item.quantidade = Math.max(1, item.quantidade + delta);
    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();
  },

  async removerItemLista(itemId) {
    const item = this.listaAtiva.itens.find(i => i.id === itemId);
    const nome = item ? item.nome : 'Item';
    this.listaAtiva.itens = this.listaAtiva.itens.filter(i => i.id !== itemId);
    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();
    this.showToast(`🗑️ "${nome}" removido da lista.`);
  },

  async desmarcarTodos() {
    if (!this.listaAtiva.itens || this.listaAtiva.itens.length === 0) return;
    this.listaAtiva.itens.forEach(i => i.comprado = false);
    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();
    this.showToast('Todos os itens foram desmarcados!');
  },

  async limparLista() {
    if (!this.listaAtiva.itens || this.listaAtiva.itens.length === 0) return;
    if (!confirm('Deseja realmente limpar toda a lista de compras?')) return;

    this.listaAtiva.itens = [];
    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();
    this.showToast('Lista de compras esvaziada!');
  },

  setFilter(filtro, btnElement) {
    this.filtroAtual = filtro;
    document.querySelectorAll('.filter-pill').forEach(el => el.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    this.renderShoppingList();
  },

  // ==========================================
  // Módulo de Compras: Renderização & Roteiro
  // ==========================================
  async onSelectSupermarket(smId) {
    this.supermercadoAtivoId = smId;
    this.listaAtiva.supermercadoId = smId;
    await GimmyDB.salvarListaAtiva(this.listaAtiva);
    this.renderShoppingList();
    const sm = this.supermercados.find(s => s.id === smId);
    this.showToast(`Roteiro ajustado para: ${sm ? sm.nome : 'Padrão'}`);
  },

  renderSupermarketSelectors() {
    const selectCompra = document.getElementById('supermarketSelect');
    const selectConfig = document.getElementById('configSMSelect');

    const optionsHtml = this.supermercados.map(sm => {
      const selected = sm.id === this.supermercadoAtivoId ? 'selected' : '';
      return `<option value="${sm.id}" ${selected}>${sm.nome}</option>`;
    }).join('');

    if (selectCompra) selectCompra.innerHTML = optionsHtml;
    if (selectConfig) selectConfig.innerHTML = optionsHtml;
  },

  renderShoppingList() {
    const container = document.getElementById('shoppingListContainer');
    const emptyState = document.getElementById('emptyListState');
    const actionsBar = document.getElementById('listActionsBar');
    const items = this.listaAtiva.itens || [];

    // Atualiza métricas e barra de progresso
    const totalItens = items.length;
    const totalComprados = items.filter(i => i.comprado).length;
    const percent = totalItens > 0 ? Math.round((totalComprados / totalItens) * 100) : 0;

    document.getElementById('progressSummaryText').textContent = `${totalItens} ${totalItens === 1 ? 'item' : 'itens'} na lista`;
    document.getElementById('progressPercentText').textContent = `${totalComprados} no carrinho (${percent}%)`;
    document.getElementById('progressBarFill').style.width = `${percent}%`;

    if (totalItens === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      actionsBar.style.display = 'none';
      return;
    }

    emptyState.style.display = 'none';
    actionsBar.style.display = 'flex';

    // Filtra itens
    let itensFiltrados = items;
    if (this.filtroAtual === 'pendentes') {
      itensFiltrados = items.filter(i => !i.comprado);
    } else if (this.filtroAtual === 'carrinho') {
      itensFiltrados = items.filter(i => i.comprado);
    }

    // Identifica o supermercado ativo e a ordem dos grupos (O ROTEIRO)
    const smAtivo = this.supermercados.find(s => s.id === this.supermercadoAtivoId) || this.supermercados[0];
    const ordemGrupos = (smAtivo && smAtivo.ordemGrupos) ? smAtivo.ordemGrupos : this.grupos.map(g => g.id);

    // Agrupa itens por grupoId
    const itensPorGrupo = {};
    for (const item of itensFiltrados) {
      if (!itensPorGrupo[item.grupoId]) {
        itensPorGrupo[item.grupoId] = [];
      }
      itensPorGrupo[item.grupoId].push(item);
    }

    // Renderiza na ordem dos corredores do supermercado selecionado!
    let html = '';
    for (const grupoId of ordemGrupos) {
      const itensDoGrupo = itensPorGrupo[grupoId];
      if (!itensDoGrupo || itensDoGrupo.length === 0) continue;

      const grupo = this.gruposMap[grupoId] || { nome: 'Geral', icone: '📦' };
      const compradosNoGrupo = itensDoGrupo.filter(i => i.comprado).length;

      html += `
        <div class="group-section">
          <div class="group-header">
            <div class="group-title-info">
              <span>${grupo.icone}</span>
              <span>${grupo.nome}</span>
            </div>
            <span class="group-counter">${compradosNoGrupo}/${itensDoGrupo.length}</span>
          </div>
          <div class="group-items-list">
            ${itensDoGrupo.map(item => this.renderItemHtml(item)).join('')}
          </div>
        </div>
      `;
    }

    // Se houver itens de grupos não mapeados na ordem específica
    for (const grupoId in itensPorGrupo) {
      if (!ordemGrupos.includes(grupoId)) {
        const itensDoGrupo = itensPorGrupo[grupoId];
        const grupo = this.gruposMap[grupoId] || { nome: 'Outros', icone: '📦' };
        html += `
          <div class="group-section">
            <div class="group-header">
              <div class="group-title-info">
                <span>${grupo.icone}</span>
                <span>${grupo.nome}</span>
              </div>
              <span class="group-counter">${itensDoGrupo.length}</span>
            </div>
            <div class="group-items-list">
              ${itensDoGrupo.map(item => this.renderItemHtml(item)).join('')}
            </div>
          </div>
        `;
      }
    }

    if (html === '') {
      html = `
        <div style="text-align: center; padding: 30px; color: var(--text-muted);">
          Nenhum item com o filtro selecionado ("${this.filtroAtual}").
        </div>
      `;
    }

    container.innerHTML = html;
  },

  renderItemHtml(item) {
    const apres = this.apresMap[item.apresId] || { sigla: 'Un' };
    const purchasedClass = item.comprado ? 'purchased' : '';

    return `
      <div class="shopping-item ${purchasedClass}" id="item_card_${item.id}">
        <div class="item-left" onclick="GimmyApp.alternarComprado('${item.id}')">
          <div class="item-checkbox">
            ${item.comprado ? '✓' : ''}
          </div>
          <div class="item-details">
            <div class="item-name">${item.nome}</div>
            <div class="item-sub">
              <span class="item-badge-apres">${item.quantidade} ${apres.sigla}</span>
              <span>${item.comprado ? '• No carrinho 🛒' : '• Toque para ticar'}</span>
            </div>
          </div>
        </div>
        <div class="item-right">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="GimmyApp.alterarQuantidadeItem('${item.id}', -1)">-</button>
            <input type="text" class="qty-input" value="${item.quantidade}" readonly>
            <button class="qty-btn" onclick="GimmyApp.alterarQuantidadeItem('${item.id}', 1)">+</button>
          </div>
          <button class="btn-icon-del" title="Remover da lista" onclick="GimmyApp.removerItemLista('${item.id}')">
            🗑️
          </button>
        </div>
      </div>
    `;
  },

  compartilharLista() {
    const items = this.listaAtiva.itens || [];
    if (items.length === 0) {
      this.showToast('Sua lista está vazia.');
      return;
    }

    const smAtivo = this.supermercados.find(s => s.id === this.supermercadoAtivoId);
    let texto = `🛒 *Lista de Compras GimmyMarket*\n`;
    texto += `📍 Supermercado: ${smAtivo ? smAtivo.nome : 'Geral'}\n\n`;

    // Agrupa por grupos
    const itensPorGrupo = {};
    for (const item of items) {
      if (!itensPorGrupo[item.grupoId]) itensPorGrupo[item.grupoId] = [];
      itensPorGrupo[item.grupoId].push(item);
    }

    for (const grupoId in itensPorGrupo) {
      const g = this.gruposMap[grupoId] || { nome: 'Outros', icone: '📦' };
      texto += `*${g.icone} ${g.nome}:*\n`;
      for (const item of itensPorGrupo[grupoId]) {
        const apres = this.apresMap[item.apresId] || { sigla: 'Un' };
        const check = item.comprado ? '✅' : '⬜';
        texto += `${check} ${item.quantidade} ${apres.sigla} - ${item.nome}\n`;
      }
      texto += `\n`;
    }

    if (navigator.share) {
      navigator.share({
        title: 'Lista de Compras GimmyMarket',
        text: texto
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(texto).then(() => {
        this.showToast('📋 Lista copiada para a área de transferência!');
      }).catch(() => {
        alert(texto);
      });
    }
  },

  // ==========================================
  // MÓDULO DE CONFIGURAÇÃO (Alma do Sistema)
  // ==========================================
  carregarListagensConfig() {
    this.preencherSelectsConfig();
    this.renderListaProdutosConfig();
    this.renderListaGruposConfig();
    this.renderListaApresentacoesConfig();
    this.carregarRoteiroSupermercado(this.supermercadoAtivoId);
  },

  preencherSelectsConfig() {
    const selectGrupo = document.getElementById('novoProdGrupo');
    const selectApres = document.getElementById('novoProdApres');

    if (selectGrupo) {
      selectGrupo.innerHTML = this.grupos.map(g => `<option value="${g.id}">${g.icone} ${g.nome}</option>`).join('');
    }

    if (selectApres) {
      selectApres.innerHTML = this.apresentacoes.map(a => `<option value="${a.id}">${a.sigla} - ${a.nome}</option>`).join('');
    }
  },

  async salvarNovoProduto(e) {
    e.preventDefault();
    const nome = document.getElementById('novoProdNome').value.trim();
    const marcasStr = document.getElementById('novoProdMarcas').value.trim();
    const grupoId = document.getElementById('novoProdGrupo').value;
    const apresId = document.getElementById('novoProdApres').value;

    if (!nome) return;

    const marcas = marcasStr ? marcasStr.split(',').map(m => m.trim()).filter(Boolean) : [];
    const id = 'prod_' + Date.now();

    const novoProduto = { id, nome, marcas, grupoId, apresId };
    await GimmyDB.put('produtos', novoProduto);
    this.produtos.push(novoProduto);
    this.produtosMap[id] = novoProduto;

    e.target.reset();
    this.renderListaProdutosConfig();
    this.showToast(`✅ Produto "${nome}" cadastrado com sucesso!`);
  },

  renderListaProdutosConfig() {
    const container = document.getElementById('listaProdutosCadastrados');
    const badge = document.getElementById('totalProdutosBadge');
    if (!container) return;

    if (badge) badge.textContent = this.produtos.length;

    container.innerHTML = this.produtos.map(p => {
      const g = this.gruposMap[p.grupoId] || { nome: 'Geral', icone: '📦' };
      const a = this.apresMap[p.apresId] || { sigla: 'Un' };
      const marcas = (p.marcas && p.marcas.length > 0) ? `(${p.marcas.join(', ')})` : '';

      return `
        <div class="config-item-row">
          <div class="config-item-info">
            <span>${g.icone}</span>
            <div>
              <div style="font-weight: 700; font-size: 0.9rem;">${p.nome} <span style="font-weight: normal; color: var(--text-muted);">${marcas}</span></div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${g.nome} • Apresentação: ${a.sigla}</div>
            </div>
          </div>
          <div class="config-item-actions">
            <button class="btn-icon-del" onclick="GimmyApp.excluirProduto('${p.id}')">🗑️</button>
          </div>
        </div>
      `;
    }).join('');
  },

  async excluirProduto(prodId) {
    if (!confirm('Deseja excluir este produto do catálogo?')) return;
    await GimmyDB.delete('produtos', prodId);
    this.produtos = this.produtos.filter(p => p.id !== prodId);
    delete this.produtosMap[prodId];
    this.renderListaProdutosConfig();
    this.showToast('Produto excluído.');
  },

  // --- Grupos ---
  async salvarNovoGrupo(e) {
    e.preventDefault();
    const nome = document.getElementById('novoGrupoNome').value.trim();
    const icone = document.getElementById('novoGrupoIcone').value.trim() || '📦';
    if (!nome) return;

    const id = 'grp_' + Date.now();
    const novoGrupo = { id, nome, icone, ordem: this.grupos.length + 1 };
    await GimmyDB.put('grupos', novoGrupo);
    this.grupos.push(novoGrupo);
    this.gruposMap[id] = novoGrupo;

    e.target.reset();
    document.getElementById('novoGrupoIcone').value = '📦';
    this.renderListaGruposConfig();
    this.preencherSelectsConfig();
    this.showToast(`Grupo "${nome}" adicionado!`);
  },

  renderListaGruposConfig() {
    const container = document.getElementById('listaGruposCadastrados');
    if (!container) return;

    container.innerHTML = this.grupos.map(g => `
      <div class="config-item-row">
        <div class="config-item-info">
          <span style="font-size: 1.2rem;">${g.icone}</span>
          <span style="font-weight: 700; font-size: 0.92rem;">${g.nome}</span>
        </div>
      </div>
    `).join('');
  },

  // --- Apresentações ---
  async salvarNovaApresentacao(e) {
    e.preventDefault();
    const sigla = document.getElementById('novaApresSigla').value.trim();
    const nome = document.getElementById('novaApresNome').value.trim();
    if (!sigla || !nome) return;

    const id = 'apr_' + Date.now();
    const novaApres = { id, sigla, nome };
    await GimmyDB.put('apresentacoes', novaApres);
    this.apresentacoes.push(novaApres);
    this.apresMap[id] = novaApres;

    e.target.reset();
    this.renderListaApresentacoesConfig();
    this.preencherSelectsConfig();
    this.showToast(`Apresentação "${sigla}" criada!`);
  },

  renderListaApresentacoesConfig() {
    const container = document.getElementById('listaApresentacoesCadastradas');
    if (!container) return;

    container.innerHTML = this.apresentacoes.map(a => `
      <div class="config-item-row">
        <div class="config-item-info">
          <span class="item-badge-apres">${a.sigla}</span>
          <span style="font-weight: 600; font-size: 0.9rem;">${a.nome}</span>
        </div>
      </div>
    `).join('');
  },

  // --- Supermercados & Roteiro ---
  async salvarNovoSupermercado(e) {
    e.preventDefault();
    const nome = document.getElementById('novoSMNome').value.trim();
    if (!nome) return;

    const id = 'sm_' + Date.now();
    const novoSM = {
      id,
      nome,
      descricao: 'Supermercado personalizado',
      ordemGrupos: this.grupos.map(g => g.id)
    };

    await GimmyDB.put('supermercados', novoSM);
    this.supermercados.push(novoSM);
    this.supermercadoAtivoId = id;

    e.target.reset();
    this.renderSupermarketSelectors();
    this.carregarRoteiroSupermercado(id);
    this.showToast(`Supermercado "${nome}" cadastrado!`);
  },

  carregarRoteiroSupermercado(smId) {
    const sm = this.supermercados.find(s => s.id === smId);
    if (!sm) return;

    if (!sm.ordemGrupos) {
      sm.ordemGrupos = this.grupos.map(g => g.id);
    }

    const list = document.getElementById('routeOrderList');
    if (!list) return;

    list.innerHTML = sm.ordemGrupos.map((grupoId, index) => {
      const g = this.gruposMap[grupoId] || { nome: 'Grupo ' + grupoId, icone: '📦' };
      const isFirst = index === 0;
      const isLast = index === sm.ordemGrupos.length - 1;

      return `
        <li class="route-order-item">
          <div class="route-item-title">
            <span class="route-item-index">${index + 1}</span>
            <span>${g.icone}</span>
            <span>${g.nome}</span>
          </div>
          <div class="route-item-actions">
            <button class="btn-arrow" ${isFirst ? 'disabled style="opacity:0.3;"' : ''} onclick="GimmyApp.moverGrupoRoteiro('${sm.id}', ${index}, -1)">⬆️</button>
            <button class="btn-arrow" ${isLast ? 'disabled style="opacity:0.3;"' : ''} onclick="GimmyApp.moverGrupoRoteiro('${sm.id}', ${index}, 1)">⬇️</button>
          </div>
        </li>
      `;
    }).join('');
  },

  async moverGrupoRoteiro(smId, index, direction) {
    const sm = this.supermercados.find(s => s.id === smId);
    if (!sm || !sm.ordemGrupos) return;

    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= sm.ordemGrupos.length) return;

    // Inverte a posição dos dois grupos
    const temp = sm.ordemGrupos[index];
    sm.ordemGrupos[index] = sm.ordemGrupos[targetIndex];
    sm.ordemGrupos[targetIndex] = temp;

    await GimmyDB.put('supermercados', sm);
    this.carregarRoteiroSupermercado(smId);
    if (this.supermercadoAtivoId === smId) {
      this.renderShoppingList();
    }
    this.showToast('Ordem do corredor atualizada!');
  },

  // --- Backup e Dados ---
  async exportarDados() {
    const backup = {
      app: 'GimmyMarket',
      versao: 1,
      exportadoEm: new Date().toISOString(),
      grupos: this.grupos,
      apresentacoes: this.apresentacoes,
      produtos: this.produtos,
      supermercados: this.supermercados,
      listaAtiva: this.listaAtiva
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backup, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `GimmyMarket_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast('📥 Backup exportado com sucesso!');
  },

  async importarDados(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const backup = JSON.parse(event.target.result);
        if (!backup.app || backup.app !== 'GimmyMarket') {
          throw new Error('Arquivo não reconhecido como backup do GimmyMarket.');
        }

        if (backup.grupos) for (const g of backup.grupos) await GimmyDB.put('grupos', g);
        if (backup.apresentacoes) for (const a of backup.apresentacoes) await GimmyDB.put('apresentacoes', a);
        if (backup.produtos) for (const p of backup.produtos) await GimmyDB.put('produtos', p);
        if (backup.supermercados) for (const s of backup.supermercados) await GimmyDB.put('supermercados', s);
        if (backup.listaAtiva) await GimmyDB.salvarListaAtiva(backup.listaAtiva);

        await this.carregarDadosBase();
        this.renderSupermarketSelectors();
        this.renderShoppingList();
        this.carregarListagensConfig();
        this.showToast('✅ Dados importados com sucesso!');
      } catch (err) {
        alert('Erro ao importar backup: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  },

  async restaurarFabrica() {
    if (!confirm('ATENÇÃO: Isso apagará todas as listas e alterações e restaurará os dados originais. Deseja continuar?')) return;

    await GimmyDB.restaurarFabrica();
    await this.carregarDadosBase();
    this.renderSupermarketSelectors();
    this.renderShoppingList();
    this.carregarListagensConfig();
    this.showToast('✨ GimmyMarket restaurado com sucesso!');
  },

  // --- Utilitários ---
  showToast(mensagem) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;

    toast.textContent = mensagem;
    toast.classList.add('show');

    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
};

// Inicia aplicação assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  GimmyApp.init();
});


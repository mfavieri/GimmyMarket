// GimmyMarket - Camada de Banco de Dados Local (IndexedDB 100% Offline)

const GimmyDB = {
  dbName: 'GimmyMarketDB',
  version: 1,
  db: null,

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains('grupos')) {
          db.createObjectStore('grupos', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('apresentacoes')) {
          db.createObjectStore('apresentacoes', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('produtos')) {
          db.createObjectStore('produtos', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('supermercados')) {
          db.createObjectStore('supermercados', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('listas')) {
          db.createObjectStore('listas', { keyPath: 'id' });
        }
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        await this.checkSeedData();
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('Erro ao abrir o IndexedDB do GimmyMarket:', event.target.error);
        reject(event.target.error);
      };
    });
  },

  seedVersion: 'mundial_v4',

  async checkSeedData() {
    const produtos = await this.getAll('produtos');
    const versaoAtual = localStorage.getItem('gimmymarket_seed_version');

    if (!produtos || produtos.length === 0 || versaoAtual !== this.seedVersion) {
      console.log('🌱 Atualizando dados do GimmyMarket para o catálogo do Supermercados Mundial...');
      await this.carregarCargaInicial();
      localStorage.setItem('gimmymarket_seed_version', this.seedVersion);
    }
  },

  async carregarCargaInicial() {
    const tx = this.db.transaction(['grupos', 'apresentacoes', 'supermercados', 'produtos', 'listas'], 'readwrite');

    // Grupos
    const grupoStore = tx.objectStore('grupos');
    for (const g of SEED_GRUPOS) {
      grupoStore.put(g);
    }

    // Apresentações
    const apresStore = tx.objectStore('apresentacoes');
    for (const a of SEED_APRESENTACOES) {
      apresStore.put(a);
    }

    // Supermercados
    const smStore = tx.objectStore('supermercados');
    for (const sm of SEED_SUPERMERCADOS) {
      smStore.put(sm);
    }

    // Produtos
    const prodStore = tx.objectStore('produtos');
    for (const p of SEED_PRODUTOS) {
      prodStore.put(p);
    }

    // Mantém ou cria lista ativa padrão com Supermercados Mundial
    const listaStore = tx.objectStore('listas');
    const listaReq = listaStore.get('lista_ativa');
    listaReq.onsuccess = () => {
      const listaAtual = listaReq.result;
      listaStore.put({
        id: 'lista_ativa',
        nome: 'Minha Lista de Compras',
        supermercadoId: 'sm_mundial',
        atualizadoEm: new Date().toISOString(),
        itens: (listaAtual && listaAtual.itens) ? listaAtual.itens : []
      });
    };

    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  async getAll(storeName) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([storeName], 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  },

  async get(storeName, key) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([storeName], 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async put(storeName, item) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.put(item);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async delete(storeName, key) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([storeName], 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  },

  async getListaAtiva() {
    let lista = await this.get('listas', 'lista_ativa');
    if (!lista) {
      lista = {
        id: 'lista_ativa',
        nome: 'Minha Lista de Compras',
        supermercadoId: 'sm_padrao',
        atualizadoEm: new Date().toISOString(),
        itens: []
      };
      await this.put('listas', lista);
    }
    return lista;
  },

  async salvarListaAtiva(lista) {
    lista.id = 'lista_ativa';
    lista.atualizadoEm = new Date().toISOString();
    return this.put('listas', lista);
  },

  async restaurarFabrica() {
    const tx = this.db.transaction(['grupos', 'apresentacoes', 'supermercados', 'produtos', 'listas'], 'readwrite');
    tx.objectStore('grupos').clear();
    tx.objectStore('apresentacoes').clear();
    tx.objectStore('supermercados').clear();
    tx.objectStore('produtos').clear();
    tx.objectStore('listas').clear();

    await new Promise((resolve) => {
      tx.oncomplete = resolve;
    });

    await this.carregarCargaInicial();
  }
};


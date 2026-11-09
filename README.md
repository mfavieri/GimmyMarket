# 🛒 GimmyMarket - Compras Inteligentes & Roteiro de Supermercado

> **Aplicativo PWA 100% Offline para anotação inteligente de compras de supermercado.**  
> Criado por **Favi & Gimmy** seguindo a filosofia: *"A simplicidade é o último grau de sofisticação"*.

---

## 🚀 Como Executar

O **GimmyMarket** não depende de internet, Node.js ou instalação externa de banco de dados. Ele roda direto no navegador com **IndexedDB local**.

### Opção 1: Servidor Local Leve (Recomendado para PWA & Service Worker)
No PowerShell, dentro da pasta `d:\Projetos_Antigravity\GimmyMarket`:
```powershell
# Usando Python (já disponível no ambiente):
python -m http.server 8080
```
Depois abra no navegador do PC ou do celular conectado na mesma rede Wi-Fi:
👉 `http://localhost:8080` ou `http://<IP_DO_SEU_PC>:8080`

### Opção 2: Como Instalar no Celular (PWA)
1. Abra o endereço no Chrome, Safari ou Edge do seu celular.
2. Toque no menu do navegador (ou botão de compartilhamento).
3. Selecione **"Adicionar à Tela de Início"** ou **"Instalar Aplicativo"**.
4. O ícone do GimmyMarket aparecerá junto aos seus aplicativos e funcionará **mesmo em Modo Avião (100% sem internet)**!

---

## ✨ Funcionalidades Principais

### 1. 🛒 Módulo de Compra (Modo Principal)
- **Busca Inteligente Bidirecional (Fuzzy Search):**
  - Digite o nome do item (ex: `Detergente`) ➔ Veja marcas como `Ypê`, `ODD`, `Limpol`, `Minerva`.
  - Digite a marca (ex: `ODD`, `Camil`, `Downy`) ➔ Encontre o produto instantaneamente.
  - Tolerância a pequenos erros de digitação e acentos (`detergt`, `ype`).
- **Roteiro dos Corredores por Supermercado:**
  - Troque de supermercado com 1 toque no topo (`Supermercado Central`, `Atacadão`, etc.).
  - A lista se reorganiza automaticamente na ordem exata dos corredores configurados para aquela loja.
- **Folha de Papel Digital:**
  - Tique com um toque no quadrado para marcar o item como comprado (risca o nome).
  - Pode desmarcar a qualquer momento se devolver o item à prateleira.
  - Altere a quantidade (`+` ou `-`) direto no card.
- **Filtros e Compartilhamento:**
  - Filtre por `Todos`, `Falta Comprar` e `No Carrinho`.
  - Compartilhe a lista organizada por categorias via WhatsApp com 1 clique.

### 2. ⚙️ Módulo de Configuração (Alma do Sistema)
- **🏷️ Produtos:** Cadastre novos produtos com nome, marcas de busca, grupo e apresentação.
- **🗂️ Grupos:** Crie novos grupos com ícones personalizados.
- **📐 Apresentações:** Crie novas unidades de medida (Un, Kg, Litro, Lata, Frasco, Caixa, etc.).
- **🏪 Supermercados & Roteiro:** Crie seus mercados habituais e ordene a sequência dos corredores usando as setas `⬆️` e `⬇️`.
- **💾 Backup & Dados:** Exporte e importe backups em JSON a qualquer momento ou restaure a carga inicial.

---

## 📂 Estrutura de Arquivos

```
d:\Projetos_Antigravity\GimmyMarket\
├── index.html          # Shell da aplicação (Mobile-First)
├── manifest.json       # Manifesto PWA para instalação no celular
├── sw.js               # Service Worker com cache offline completo
├── README.md           # Guia do projeto
├── css/
│   └── style.css       # Estilos responsivos, modernos e botões acessíveis
├── js/
│   ├── seed-data.js    # Carga inicial com mais de 200 produtos populares
│   ├── fuzzy.js        # Motor de busca difusa tolerante a erros e acentos
│   ├── db.js           # Gerenciador IndexedDB local offline
│   └── app.js          # Controladora da aplicação (Compra e Configuração)
└── icons/
    ├── icon.svg        # Ícone vetorial oficial
    ├── icon-192.png    # Ícone PWA 192x192
    └── icon-512.png    # Ícone PWA 512x512
```


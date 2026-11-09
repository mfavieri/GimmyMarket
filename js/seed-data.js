// GimmyMarket - Base de Dados Oficial Ajustada para o Supermercados Mundial

const SEED_GRUPOS = [
  {
    "id": "hortifruti",
    "nome": "Hortifrúti",
    "icone": "🍎",
    "ordem": 1
  },
  {
    "id": "padaria",
    "nome": "Padaria",
    "icone": "🥖",
    "ordem": 2
  },
  {
    "id": "frios-e-laticinios",
    "nome": "Frios & Laticínios",
    "icone": "🧀",
    "ordem": 3
  },
  {
    "id": "acougue",
    "nome": "Açougue & Carnes",
    "icone": "🥩",
    "ordem": 4
  },
  {
    "id": "peixaria",
    "nome": "Peixaria",
    "icone": "🐟",
    "ordem": 5
  },
  {
    "id": "matinais",
    "nome": "Matinais & Cafés",
    "icone": "☕",
    "ordem": 6
  },
  {
    "id": "mercearia",
    "nome": "Mercearia & Grãos",
    "icone": "🍚",
    "ordem": 7
  },
  {
    "id": "massas-sopas-e-molhos",
    "nome": "Massas, Sopas & Molhos",
    "icone": "🍝",
    "ordem": 8
  },
  {
    "id": "biscoitos-doces-e-chocolates",
    "nome": "Biscoitos & Doces",
    "icone": "🍪",
    "ordem": 9
  },
  {
    "id": "mais-saudaveis",
    "nome": "Mais Saudáveis",
    "icone": "🥗",
    "ordem": 10
  },
  {
    "id": "congelados",
    "nome": "Congelados",
    "icone": "❄️",
    "ordem": 11
  },
  {
    "id": "bebidas-nao-alcoolicas",
    "nome": "Bebidas não Alcoólicas",
    "icone": "🥤",
    "ordem": 12
  },
  {
    "id": "bebidas-alcoolicas",
    "nome": "Cervejas & Destilados",
    "icone": "🍺",
    "ordem": 13
  },
  {
    "id": "adega",
    "nome": "Adega & Vinhos",
    "icone": "🍷",
    "ordem": 14
  },
  {
    "id": "limpeza",
    "nome": "Limpeza Doméstica",
    "icone": "🧹",
    "ordem": 15
  },
  {
    "id": "higiene-e-beleza",
    "nome": "Higiene & Beleza",
    "icone": "🪥",
    "ordem": 16
  },
  {
    "id": "bazar",
    "nome": "Bazar & Utilidades",
    "icone": "🧺",
    "ordem": 17
  },
  {
    "id": "salgados",
    "nome": "Salgados & Aperitivos",
    "icone": "🥨",
    "ordem": 18
  }
];

const SEED_APRESENTACOES = [
  {
    "id": "un",
    "sigla": "Un",
    "nome": "Unidade"
  },
  {
    "id": "kg",
    "sigla": "Kg",
    "nome": "Quilograma"
  },
  {
    "id": "g",
    "sigla": "g",
    "nome": "Gramas"
  },
  {
    "id": "l",
    "sigla": "L",
    "nome": "Litro"
  },
  {
    "id": "ml",
    "sigla": "mL",
    "nome": "Mililitro"
  },
  {
    "id": "frasco",
    "sigla": "Frasco",
    "nome": "Frasco"
  },
  {
    "id": "lata",
    "sigla": "Lata",
    "nome": "Lata"
  },
  {
    "id": "pct",
    "sigla": "Pct",
    "nome": "Pacote"
  },
  {
    "id": "cx",
    "sigla": "Cx",
    "nome": "Caixa"
  },
  {
    "id": "gfa",
    "sigla": "Gfa",
    "nome": "Garrafa"
  },
  {
    "id": "bdj",
    "sigla": "Bdj",
    "nome": "Bandeja"
  },
  {
    "id": "rolo",
    "sigla": "Rolo",
    "nome": "Rolo"
  }
];

const SEED_SUPERMERCADOS = [
  {
    "id": "sm_mundial",
    "nome": "Supermercados Mundial",
    "descricao": "Roteiro oficial das lojas Mundial: Hortifrúti, Padaria, Açougue e Mercearia na frente, Bebidas, Limpeza e Bazar no final",
    "ordemGrupos": [
      "hortifruti",
      "padaria",
      "frios-e-laticinios",
      "acougue",
      "peixaria",
      "matinais",
      "mercearia",
      "massas-sopas-e-molhos",
      "biscoitos-doces-e-chocolates",
      "mais-saudaveis",
      "congelados",
      "bebidas-nao-alcoolicas",
      "bebidas-alcoolicas",
      "adega",
      "limpeza",
      "higiene-e-beleza",
      "bazar",
      "salgados"
    ]
  },
  {
    "id": "sm_padrao",
    "nome": "Supermercado Central",
    "descricao": "Roteiro alternativo tradicional",
    "ordemGrupos": [
      "hortifruti",
      "padaria",
      "frios-e-laticinios",
      "acougue",
      "peixaria",
      "matinais",
      "mercearia",
      "massas-sopas-e-molhos",
      "biscoitos-doces-e-chocolates",
      "mais-saudaveis",
      "congelados",
      "bebidas-nao-alcoolicas",
      "bebidas-alcoolicas",
      "adega",
      "limpeza",
      "higiene-e-beleza",
      "bazar",
      "salgados"
    ]
  }
];

const SEED_PRODUTOS = [
  {
    "id": "b_banana_prata",
    "nome": "Banana Prata",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_maca_gala",
    "nome": "Maçã Gala",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_laranja_pera",
    "nome": "Laranja Pêra",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_limao_taiti",
    "nome": "Limão Taiti",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_tomate",
    "nome": "Tomate Longa Vida",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_cebola",
    "nome": "Cebola Amarela",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_alho",
    "nome": "Alho Cartela / Granel",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "b_batata",
    "nome": "Batata Inglesa",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_cenoura",
    "nome": "Cenoura Fresca",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "b_ovos_30",
    "nome": "Cartela de Ovos c/ 30",
    "marcas": [
      "Mantiqueira"
    ],
    "grupoId": "hortifruti",
    "apresId": "cx"
  },
  {
    "id": "b_pao_frances",
    "nome": "Pão Francês",
    "marcas": [],
    "grupoId": "padaria",
    "apresId": "kg"
  },
  {
    "id": "b_detergente_odd",
    "nome": "Detergente ODD Líquido",
    "marcas": [
      "ODD"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "b_detergente_ype",
    "nome": "Detergente Ypê Neutro",
    "marcas": [
      "Ypê"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "b_detergente_limpol",
    "nome": "Detergente Limpol Neutro",
    "marcas": [
      "Limpol",
      "Bombril"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "b_detergente_minerva",
    "nome": "Detergente Minerva",
    "marcas": [
      "Minerva"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "b_feijao_camil",
    "nome": "Feijão Carioca Camil 1kg",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "b_feijao_preto",
    "nome": "Feijão Preto Camil 1kg",
    "marcas": [
      "Camil",
      "Kicaldo"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "b_arroz_camil",
    "nome": "Arroz Branco Camil Tipo 1 5kg",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "b_arroz_tio_joao",
    "nome": "Arroz Tio João 5kg",
    "marcas": [
      "Tio João"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "b_acucar_uniao",
    "nome": "Açúcar Refinado União 1kg",
    "marcas": [
      "União"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "b_sal_refinado",
    "nome": "Sal Refinado 1kg",
    "marcas": [
      "Cisne"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "b_leite_integral",
    "nome": "Leite UHT Integral 1L",
    "marcas": [
      "Piracanjuba",
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "b_coca_2l",
    "nome": "Refrigerante Coca-Cola 2L",
    "marcas": [
      "Coca-Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "b_coca_lata",
    "nome": "Refrigerante Coca-Cola Lata 350ml",
    "marcas": [
      "Coca-Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "b_guarana_2l",
    "nome": "Refrigerante Guaraná Antarctica 2L",
    "marcas": [
      "Antarctica"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "b_agua_tonica",
    "nome": "Água Tônica Antarctica Lata",
    "marcas": [
      "Antarctica"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_003126",
    "nome": "Nozes S/Casca Importado  A Granel Kg",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "mundial_003129",
    "nome": "Amêndoa S/Casca Importada  A Granel Kg",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "mundial_009526",
    "nome": "Damasco Seco Importado  A Granel Kg",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "mundial_003996",
    "nome": "Ameixa Seca Importada S/Caroço A Granel Kg",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "mundial_008699",
    "nome": "Filezinho Suíno Rainha  Kg",
    "marcas": [
      "RAINHA"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "mundial_068073",
    "nome": "Linguiça Congelada Aurora Premium 500G",
    "marcas": [
      "AURORA"
    ],
    "grupoId": "acougue",
    "apresId": "un"
  },
  {
    "id": "mundial_071964",
    "nome": "Ling.Cg Aurora Esp.Fininha 600G",
    "marcas": [
      "AURORA"
    ],
    "grupoId": "acougue",
    "apresId": "un"
  },
  {
    "id": "mundial_045726",
    "nome": "Filezinho De Frango Le Vida  Bandeja 1 Kg",
    "marcas": [
      "LEVIDA"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "mundial_073142",
    "nome": "Ling.Cg Aurora Churrasco Frango 700G",
    "marcas": [
      "AURORA"
    ],
    "grupoId": "acougue",
    "apresId": "un"
  },
  {
    "id": "mundial_042293",
    "nome": "Moela De Frango Le Vida  Bandeja 1 Kg",
    "marcas": [
      "LEVIDA"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "mundial_052280",
    "nome": "Coxinha Da Asa De Frango Nat  Pacote 1 Kg",
    "marcas": [
      "NAT."
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "mundial_052281",
    "nome": "Sobrecoxa De Frango Nat.  Pacote 1 Kg",
    "marcas": [
      "NAT."
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "mundial_071650",
    "nome": "File Truta Korin Pct 500G Pacote 500g",
    "marcas": [
      "KORIN"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_046230",
    "nome": "Filé De Linguado Congelado Frescatto  Pacote 500G",
    "marcas": [
      "FRESCATTO"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_066695",
    "nome": "Filé De Tilápia Congelado Nobredo  Pacote 800G",
    "marcas": [
      "NOBREDO"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_009896",
    "nome": "Sardinha Congelada Portuguesa Nigel  Pacote 1 Kg",
    "marcas": [
      "NIGEL"
    ],
    "grupoId": "peixaria",
    "apresId": "kg"
  },
  {
    "id": "mundial_066141",
    "nome": "Filé De Panga Congelado Costa Sul Premium Pacote 500G",
    "marcas": [
      "COSTA SUL"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_043703",
    "nome": "Filé De Polaca Congelado Bacalanor  500G Pacote 500g",
    "marcas": [
      "BACALANOR"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_069747",
    "nome": "Empanado Congelado Costa Sul Tirinhas De Salmão Pacote 300G",
    "marcas": [
      "COSTA SUL"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_052629",
    "nome": "Kani Kama Congelado Frescatto  Pacote 200G",
    "marcas": [
      "FRESCATTO"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "mundial_004189",
    "nome": "Queijo Parmesão Nacon Casca Negra Kg",
    "marcas": [
      "NACON"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_009119",
    "nome": "Queijo Gouda Vitória  Kg",
    "marcas": [
      "VITÓRIA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_008086",
    "nome": "Queijo Minas Padrão Présidant  Kg",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_008900",
    "nome": "Queijo Minas Padrão Aviação  Kg",
    "marcas": [
      "AVIAÇÃO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_003416",
    "nome": "Salame Majestade  A Granel Kg",
    "marcas": [
      "MAJESTADE"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_002347",
    "nome": "Queijo Coalho Pama Espeto/Forma Kg",
    "marcas": [
      "PAMA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_061232",
    "nome": "Queijo Parmesão Président  180G Forma/Cilindro 180g",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_002522",
    "nome": "Mortadela Defumada Sadia A Granel Kg",
    "marcas": [
      "SADIA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_009032",
    "nome": "Mortadela Defumada Seara Gourmet A Granel Kg",
    "marcas": [
      "SEARA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_042595",
    "nome": "Manteiga Aviação C/Sal Ou S/Sal Pote Ou Tablete 200G",
    "marcas": [
      "AVIAÇÃO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_061233",
    "nome": "Manteiga Président C/Sal Pote 200G Pote/Tablete 200g",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_032898",
    "nome": "Manteiga Président C/Sal Tablete 200G C/Sal Tablete/Pote 200g",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_029898",
    "nome": "Requeijão Aviação Tradicional/Light Copo 250G",
    "marcas": [
      "AVIAÇÃO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_011254",
    "nome": "Iogurte Batavo Coco Potão 500G",
    "marcas": [
      "BATAVO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_054589",
    "nome": "Queijo Parmesão Ralado Président  100G",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_057805",
    "nome": "Iogurte Batavo Pedaços Pense Zero Potão 500G Potão 450g",
    "marcas": [
      "BATAVO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_054008",
    "nome": "Fatiados Président Mussarela/Prato 150G",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "mundial_073929",
    "nome": "Creme De Ricota Itambe Light 200G",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_058959",
    "nome": "Creme De Ricota Président Tradicional/Light 200G",
    "marcas": [
      "PRÉSIDENT"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_003127",
    "nome": "Margarina Delícia C/Creme De Leite C/Sal 500G",
    "marcas": [
      "DELÍCIA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "mundial_023353",
    "nome": "Requeijão Polenghi Tradicional/Light Copo 200G",
    "marcas": [
      "POLENGHI"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_059801",
    "nome": "Panettone Panco Frutas 400G",
    "marcas": [
      "PANCO"
    ],
    "grupoId": "padaria",
    "apresId": "un"
  },
  {
    "id": "mundial_063693",
    "nome": "Panettone Seven Boys Frutas/Gotas 400G",
    "marcas": [
      "SEVEN BOYS"
    ],
    "grupoId": "padaria",
    "apresId": "un"
  },
  {
    "id": "mundial_055604",
    "nome": "Pão Integral Wickbold Grão Sabor Vários Tipos 450G",
    "marcas": [
      "WICKBOLD"
    ],
    "grupoId": "padaria",
    "apresId": "un"
  },
  {
    "id": "mundial_066153",
    "nome": "Pão De Forma Grão Lev Tradicional 420G",
    "marcas": [
      "GRÃO LEV"
    ],
    "grupoId": "padaria",
    "apresId": "un"
  },
  {
    "id": "mundial_021197",
    "nome": "Bolo Ana Maria Chocolate 70G",
    "marcas": [
      "ANA MARIA"
    ],
    "grupoId": "padaria",
    "apresId": "un"
  },
  {
    "id": "mundial_070121",
    "nome": "Bolinho Grão Lev Pandoka 70G",
    "marcas": [
      "GRÃO LEV"
    ],
    "grupoId": "padaria",
    "apresId": "un"
  },
  {
    "id": "mundial_071875",
    "nome": "Café Gourmet Em Grãos 3 Corações Espresso 500G",
    "marcas": [
      "3 CORAÇÕES"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_061133",
    "nome": "Café Marques Da Costa Vários Tipos 500G",
    "marcas": [
      "MARQUES DA COSTA"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_063748",
    "nome": "Café Gourmet 3Corações Vários Tipos 250G",
    "marcas": [
      "3 CORAÇÕES"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_061796",
    "nome": "Café Em Cápsula L'Or Espresso India C/10 Unids.",
    "marcas": [
      "L'OR"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_002881",
    "nome": "Café Cappuccino 3Corações Tradicional Pote 200G",
    "marcas": [
      "3 CORAÇÕES"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_042020",
    "nome": "Café Melitta Gourmet Melitta Vários Tipos 250G",
    "marcas": [
      "MELITTA"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_064185",
    "nome": "Chá Gelado Leão Vários Tipos 16G/25G 15g/16g/20g/23g/25g",
    "marcas": [
      "LEÃO"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_069573",
    "nome": "Café L´Or Classique/Intense Sachê 40G",
    "marcas": [
      "L'OR"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_070559",
    "nome": "Café L´Or Intense Sachê 40G",
    "marcas": [
      "L'OR"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_069815",
    "nome": "Café Instantâneo Sachê 40g",
    "marcas": [
      "NESCAFÉ"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_060487",
    "nome": "Torrada Bauducco Vários Tipos 142G",
    "marcas": [
      "BAUDUCCO"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_043849",
    "nome": "Azeite 1492 Extravirgem Arbequina 500Ml",
    "marcas": [
      "1492"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_066238",
    "nome": "Azeite Borges Primeira Colheita Extravirgem 500Ml",
    "marcas": [
      "BORGES PRIMEIRA COLHEITA"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_051814",
    "nome": "Azeite Dulfar Extravirgem 500Ml",
    "marcas": [
      "DULFAR"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_044837",
    "nome": "Azeite 500ml",
    "marcas": [
      "BORGES"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_010315",
    "nome": "Azeitonas Verdes Vale Fértil Gordal 360G",
    "marcas": [
      "VALE FÉRTIL"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_057542",
    "nome": "Vinagre Balsâmico De Modena Ortalli  500Ml",
    "marcas": [
      "ORTALLI"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "mundial_049173",
    "nome": "Azeite Andorinha Extravirgem Spray 200Ml",
    "marcas": [
      "ANDORINHA"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_034558",
    "nome": "Creme De Avelã Nutella C/Cacau 350G",
    "marcas": [
      "NUTELLA"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_066311",
    "nome": "Cacau Em Pó Dr. Oetker  150G",
    "marcas": [
      "DR. OETKER"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_054863",
    "nome": "Chocolate Em Pó Dr. Oetker 70% Cacau 200G",
    "marcas": [
      "DR. OETKER"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_041737",
    "nome": "Azeite Quinta Do Arieiro Extravirgem 500Ml",
    "marcas": [
      "QUINTA DO ARIEIRO"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_018500",
    "nome": "Milho-Verde Importado Bonduelle  Lata 285G",
    "marcas": [
      "BONDUELLE"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "mundial_048451",
    "nome": "Arroz Costazzurra P/Risoto Vários Tipos 1 Kg",
    "marcas": [
      "COSTAZZURRA"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "mundial_071201",
    "nome": "Caldo Davozzi Carne 1 L TP 1 L",
    "marcas": [
      "DAVOZZI"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_027079",
    "nome": "Molho/Geleia Queensberry Linha Gourmet 310G/320G",
    "marcas": [
      "QUEENSBERRY"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_016032",
    "nome": "Grão-De-Bico Vapza  Pacote 500G",
    "marcas": [
      "VAPZA"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "mundial_067911",
    "nome": "Kit Cereal Matinal Snow Flakes + Nescau",
    "marcas": [
      "SNOW FLAKES 230g + NESCAU 210g"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_056160",
    "nome": "Arroz Nikkoh Grão Longo 1 Kg",
    "marcas": [
      "NIKKOH"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "mundial_016034",
    "nome": "Canjica Vapza Longa Vida Pacote 500G",
    "marcas": [
      "VAPZA"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "mundial_050704",
    "nome": "Azeitonas Verdes Vale Fértil Recheadas 130G",
    "marcas": [
      "VALE FÉRTIL"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_021624",
    "nome": "Alcaparras Luca Vd 100G Vidro 100g",
    "marcas": [
      "LUCA"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_064144",
    "nome": "Atum Sólido Robinson Crusoe Vários Tipos 170G",
    "marcas": [
      "ROBINSON CRUSOE"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_073603",
    "nome": "Farinha De Mandioca Alemão Açafrão 1 Kg",
    "marcas": [
      "ALEMÃO"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "mundial_073833",
    "nome": "Feijao Branco Catado Alemao 500G",
    "marcas": [
      "ALEMÃO"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "mundial_068474",
    "nome": "Leite De Coco Copra Tradicional 500Ml",
    "marcas": [
      "COPRA"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "mundial_067532",
    "nome": "Lentilha Urbano 500G",
    "marcas": [
      "URBANO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_067524",
    "nome": "Grão-De-Bico Urbano  500G",
    "marcas": [
      "URBANO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_017304",
    "nome": "Coco Ralado Sococo Tradicional/Sweet 100G",
    "marcas": [
      "SOCOCO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_004665",
    "nome": "Leite De Coco Sococo Tradicional 200Ml",
    "marcas": [
      "SOCOCO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_020177",
    "nome": "Creme De Leite Itambé  Lata 300G",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "mundial_074645",
    "nome": "Doce De Leite De Colher Itambé Tradicional 350G",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_073604",
    "nome": "Cereal Sucrilhos Kelloggs Lv240G Pg200G",
    "marcas": [
      "SUCRILHOS KELLOGG'S"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_074489",
    "nome": "Bolo P/Air Fryer Dr.Oetker Vários Tipos 240G",
    "marcas": [
      "DR.OETKER"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_010435",
    "nome": "Ervilha Granfino  500G",
    "marcas": [
      "GRANFINO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_067531",
    "nome": "Feijão Fradinho Urbano  500G",
    "marcas": [
      "URBANO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_071951",
    "nome": "Farinha De Trigo Farina Tradicional 1 Kg",
    "marcas": [
      "FARINA"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "mundial_043550",
    "nome": "Molho Barilla Vários Tipos 400G",
    "marcas": [
      "BARILLA"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "mundial_066074",
    "nome": "Extrato De Tomate Elefante Vários Tipos Pote 300G",
    "marcas": [
      "ELEFANTE"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "mundial_006364",
    "nome": "Massa C/Ovos Renata Espaguete N,8 500G",
    "marcas": [
      "RENATA"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "mundial_067956",
    "nome": "Molho Pomarola Tradicional Sachê 300G",
    "marcas": [
      "POMAROLA"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "mundial_054781",
    "nome": "Bombom Ferrero Rocher T2 150G",
    "marcas": [
      "FERRERO ROCHER"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_030615",
    "nome": "Chocolate Lindt Excellence 100G",
    "marcas": [
      "LINDT"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_030612",
    "nome": "Chocolate Importado Lindt Swiss Classic Vários Sabores 100G",
    "marcas": [
      "LINDT"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_064013",
    "nome": "Castanha De Caju Salgada Amigos Do Bem 100G",
    "marcas": [
      "AMIGOS DO BEM"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_064806",
    "nome": "Amendoim Elma Chips Vários Tipos 400G",
    "marcas": [
      "ELMA CHIPS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_056567",
    "nome": "Amendoim Santa Helena Mendorato/Grelhadito’S 400G",
    "marcas": [
      "SANTA HELENA"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_053787",
    "nome": "Salgadinho Elma Chips Cheetos 125G/131G/143G/160G",
    "marcas": [
      "ELMA CHIPS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_073067",
    "nome": "Salg.E.Chips Doritos Ketchup 110G 110g/120g/140g",
    "marcas": [
      "ELMA CHIPS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_065317",
    "nome": "Batata Elma Chips Ruffles 110G/115G",
    "marcas": [
      "ELMA CHIPS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_070754",
    "nome": "Batata Elma Chips Ruffles Tubo Vários Sabores 100G",
    "marcas": [
      "ELMA CHIPS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_071767",
    "nome": "Salgadinho Tostitos Pimenta Mexicana/Sal Marinho 110G",
    "marcas": [
      "TOSTITOS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_073126",
    "nome": "Biscoito Nestlé Choco Biscuit Milk 78G",
    "marcas": [
      "NESTLÉ"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_068814",
    "nome": "Wafer Kinder Tronky 18G",
    "marcas": [
      "KINDER"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_005150",
    "nome": "Biscoito Piraquê Salgadinho 100G",
    "marcas": [
      "PIRAQUÊ"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_069269",
    "nome": "Biscoito Recheado Nestlé Bono/Negresco 90G",
    "marcas": [
      "NESTLÉ"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_069270",
    "nome": "Biscoito Nestlé Vários Sabores 90G",
    "marcas": [
      "NESTLÉ"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_073309",
    "nome": "Bisc.Parati Wafer Chocolate 81G 73g/81g",
    "marcas": [
      "PARATI"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_024182",
    "nome": "Torta Sadia  500G",
    "marcas": [
      "SADIA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_069337",
    "nome": "Empanado Seara Tekitos Queijo Pacote 1 Kg",
    "marcas": [
      "SEARA"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "mundial_071206",
    "nome": "Batata Cg Mccain Airfryer Crinkle 500G 500g/600g",
    "marcas": [
      "MCCAIN"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_067392",
    "nome": "Empanado Vegetal Sadia Nuggets 275G",
    "marcas": [
      "SADIA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_069173",
    "nome": "Hot Bowl Sadia Vários Tipos 300G",
    "marcas": [
      "SADIA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_070144",
    "nome": "Mac N´Cheese Sadia Tradadicional 300G",
    "marcas": [
      "SADIA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_056296",
    "nome": "Lasanha Forno De Minas Vários Sabores 600G",
    "marcas": [
      "FORNO DE MINAS"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_071245",
    "nome": "Waffle !Waaw! Tipo Americano 210G",
    "marcas": [
      "!WAAW!"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_049361",
    "nome": "Lasanha Sadia Míni Vários Sabores 350G",
    "marcas": [
      "SADIA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_063441",
    "nome": "Pão De Queijo Forno De Minas Waffle 200G",
    "marcas": [
      "FORNO DE MINAS"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_065346",
    "nome": "Suco De Uva Aliança Tinto 1,5 L",
    "marcas": [
      "ALIANÇA"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_055497",
    "nome": "Concentrado Líquido Imbiara Maracujá 980Ml",
    "marcas": [
      "IMBIARA"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_016439",
    "nome": "Água De Coco Kero Coco  Tp 1 L",
    "marcas": [
      "KERO COCO"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_036855",
    "nome": "Néctar Tial Maracujá Tp 1 L",
    "marcas": [
      "TIAL"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_065882",
    "nome": "Concentrado Líquido Jandaia Caju 1 L",
    "marcas": [
      "JANDAIA"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_068567",
    "nome": "Isotônico Powerade Vários Tipos 500Ml",
    "marcas": [
      "POWERADE"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "mundial_017479",
    "nome": "Água Mineral Prata S/Gás 1,5 L",
    "marcas": [
      "PRATA"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_024862",
    "nome": "Água Mineral Prata C/Gás 510Ml",
    "marcas": [
      "PRATA"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_068658",
    "nome": "Água Mineral Preciosa S/Gás Pet 1,5 L",
    "marcas": [
      "PRECIOSA"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_041763",
    "nome": "Vodka Grey Goose  750Ml",
    "marcas": [
      "GREY GOOSE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_055479",
    "nome": "Gin Bombay Sapphire  750Ml",
    "marcas": [
      "BOMBAY SAPPHIRE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_074431",
    "nome": "Whisky Grant'S Gf 750Ml",
    "marcas": [
      "GRANT'S"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_045048",
    "nome": "Vodka Skyy Gf 980Ml",
    "marcas": [
      "SKYY"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_024852",
    "nome": "Aguardente  Sagatiba  700Ml",
    "marcas": [
      "SAGATIBA"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_000092",
    "nome": "Vodka 1 L",
    "marcas": [
      "KOVAK"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_074573",
    "nome": "Cerveja Hocus Pocus Interstellar/Magic Trap 500Ml",
    "marcas": [
      "HOCUS POCUS"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_067675",
    "nome": "Cerveja Hocus Pocus Vários Tipos 500Ml",
    "marcas": [
      "HOCUS POCUS"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_055837",
    "nome": "Cerveja Praya Witbier 600Ml",
    "marcas": [
      "PRAYA"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_048420",
    "nome": "Cerveja Portuguesa Superbock  250Ml Long Neck 250ml",
    "marcas": [
      "SUPER BOCK"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_063491",
    "nome": "Cerveja Lagunitas Ipa Long Neck 355Ml",
    "marcas": [
      "LAGUNITAS"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_061758",
    "nome": "Cerveja Blue Moon Belgian White Ale Long Neck 355Ml",
    "marcas": [
      "BLUE MOON"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_071744",
    "nome": "Cerveja 1906 La Milnueve Puro Malte Long Neck 355Ml",
    "marcas": [
      "LA MILNUEVE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_029283",
    "nome": "Cerveja Cerpa Export Long Neck 350Ml",
    "marcas": [
      "CERPA EXPORT"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_066648",
    "nome": "Cerveja Estrella Galicia",
    "marcas": [
      "ESTRELLA GALICIA"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_066647",
    "nome": "Cerveja Estrella Galicia Lt 473Ml Lata 473ml",
    "marcas": [
      "ESTRELLA GALICIA"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_068104",
    "nome": "Cerveja Blue Moon Belgian White Lata 350Ml",
    "marcas": [
      "BLUE MOON"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_067818",
    "nome": "Cerveja Therezópolis Gold Long Neck 355Ml",
    "marcas": [
      "THEREZÓPOLIS"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_018261",
    "nome": "Drink Kovak Ice Vários Tipos 275Ml",
    "marcas": [
      "KOVAK"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_070087",
    "nome": "Cerveja Império Ultra Long Neck 275Ml",
    "marcas": [
      "IMPÉRIO"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_053913",
    "nome": "Cerveja Amstel Lt 473Ml Lata 473ml",
    "marcas": [
      "AMSTEL"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_062422",
    "nome": "Cerveja Stella Artois Lt 350Ml Lata 350ml",
    "marcas": [
      "STELLA ARTOIS"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_074528",
    "nome": "Cerveja Stella Artois Pure Gold Lata 269Ml",
    "marcas": [
      "STELLA ARTOIS"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_057948",
    "nome": "Cerveja Império Gold Long Neck 210Ml",
    "marcas": [
      "IMPÉRIO"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_058783",
    "nome": "Cerveja Eisenbahn Long Neck 355Ml",
    "marcas": [
      "EISENBAHN"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_074925",
    "nome": "Cerveja Baden Baden Lager Lt 350Ml",
    "marcas": [
      "BADEN BADEN"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_069753",
    "nome": "Cerveja Sul Americana  Lata 473Ml",
    "marcas": [
      "SULAMERICANA"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_073121",
    "nome": "Cerveja Antarctica Original Lata 269Ml",
    "marcas": [
      "ANTARCTICA"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_061305",
    "nome": "Vinho Espanhol Faustino I Gran Reserva 750Ml",
    "marcas": [
      "FAUSTINO I GRAN RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_065620",
    "nome": "Vinho Italiano Amarone Castelnuovo Docg  750Ml",
    "marcas": [
      "AMARONE CASTELNUOVO DOCG"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_056054",
    "nome": "Vinho Tto Por Papa Figos Gf 750 Ml 750ml",
    "marcas": [
      "PAPA FIGOS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_055017",
    "nome": "Vinho Italiano Conte Di Campiano Primitivo Reserva  750Ml",
    "marcas": [
      "CONTE DI CAMPIANO PRIMITIVO RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_022528",
    "nome": "Vinho Tto Por Esteva Gf 750 Ml 750ml",
    "marcas": [
      "ESTEVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_049143",
    "nome": "Vinho Tinto 750ml",
    "marcas": [
      "CONTE DI CAMPIANO PRIMITIVO DI MANDURIA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_042716",
    "nome": "Vinho Italiano Valpolicella Doc Ripasso  750Ml",
    "marcas": [
      "AMERIGO VESPUCCI VALPOLICELLA DOC RIPASSO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_065600",
    "nome": "Vinho Português Vinhas Velhas Do Barão Reserva  750Ml",
    "marcas": [
      "VINHAS VELHAS DO BARÃO RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_068394",
    "nome": "Vinho Português S. Sebastião Reserva  750Ml",
    "marcas": [
      "S. SEBASTIÃO RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_061309",
    "nome": "Vinho Tinto Faustino Vii Tempranillo 750Ml",
    "marcas": [
      "FAUSTINO VII"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_042220",
    "nome": "Vinho Do Porto Português Tower´S Ruby/Tawny 750Ml",
    "marcas": [
      "TOWER'S"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_074940",
    "nome": "Prosecco Salton Ouro 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_019312",
    "nome": "Espumante Salton Brut Ouro/Rosé/Extra 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_067933",
    "nome": "Vinho Português Varanda Dos Reis Alvarinho  750Ml",
    "marcas": [
      "VARANDA DOS REIS ALVARINHO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_074799",
    "nome": "Vinho Tinto Nero D'Avola Desideri 750Ml",
    "marcas": [
      "NERO D'AVOLA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_069522",
    "nome": "Vinho Português Mateus  750Ml",
    "marcas": [
      "MATEUS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_042206",
    "nome": "Vinho Italiano Amerigo Vespucci Valpolicella Doc  750Ml",
    "marcas": [
      "AMERIGO VESPUCCI VALPOLICELLA DOC"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_054546",
    "nome": "Espumante Francês Veuve Noire  750Ml",
    "marcas": [
      "VEUVE NOIRE"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_070759",
    "nome": "Espumante Solpiantez Millesimato Brut 750Ml",
    "marcas": [
      "SOLPIANTEZ MILLESIMATO"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_049142",
    "nome": "Vinho Italiano Corte Viola Doc Pinot Grigio 750Ml",
    "marcas": [
      "CORTE VIOLA DOC PINOT GRIGIO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_065598",
    "nome": "Vinho Português Tapada Dos Ganhões  750G 750ml",
    "marcas": [
      "TAPADA DOS GANHÕES"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_059230",
    "nome": "Vinho Italiano Sapere Negroamaro Primitivo/Puglia  750Ml",
    "marcas": [
      "SAPERE NEGROAMARO PUGLIA/PRIMITIVO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_004858",
    "nome": "Espumante Salton Brut/Demi-Sec/Moscatel 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_014819",
    "nome": "Vinho Português Jp Azeitão  750Ml",
    "marcas": [
      "JP AZEITÃO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_011175",
    "nome": "Espumante Prosecco Salton Brut/Rosé 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_060069",
    "nome": "Vinho Português Carvalho Real  750Ml",
    "marcas": [
      "CARVALHO REAL"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_055007",
    "nome": "Vinho Português Terra De Felgueiras Loureiro  750Ml",
    "marcas": [
      "TERRAS DE FELGUEIRAS LOUREIRO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_066809",
    "nome": "Vinho Italiano Ponte Di Paulino  750Ml",
    "marcas": [
      "PONTE DI PAULINO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_053713",
    "nome": "Vinho Italiano Amerigo Vespucci Lambrusco 750Ml Lambrusco",
    "marcas": [
      "AMERIGO VESPUCCI"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_055003",
    "nome": "Vinho Português Felgueiras  750Ml",
    "marcas": [
      "FELGUEIRAS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_041484",
    "nome": "Vinho Português Casal Mor Bairrada  750Ml",
    "marcas": [
      "CASAL MOR BAIRRADA RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_068872",
    "nome": "Vinho Tto Chi Heroes Merlot 750Ml",
    "marcas": [
      "HEROES"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_071828",
    "nome": "Vinho Tto Arg Almirante Cab.Sauvignon 750Ml",
    "marcas": [
      "ALMIRANTE"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_060521",
    "nome": "Vinho Latitude Alentejo 750Ml",
    "marcas": [
      "LATITUDE"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_058635",
    "nome": "Vinho Chileno Monte Blanco  750Ml",
    "marcas": [
      "MONTE BLANCO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_071952",
    "nome": "Vinho Tto Por Terras Lusas Gf 750Ml",
    "marcas": [
      "TERRAS LUSAS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_032587",
    "nome": "Tira Manchas M.Uso Vanish Po Pink 450G",
    "marcas": [
      "VANISH"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_002505",
    "nome": "Alvejante Vanish Pink 1500Ml 1,5 L",
    "marcas": [
      "VANISH"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_022307",
    "nome": "Saco P/Lixo",
    "marcas": [
      "BAGLIXO"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_071693",
    "nome": "Lava-Roupas Em Pó Tixan Ypê Maciez/Primavera 2,2 Kg",
    "marcas": [
      "TIXAN YPÊ"
    ],
    "grupoId": "limpeza",
    "apresId": "kg"
  },
  {
    "id": "mundial_059471",
    "nome": "Desinfetante Pinho Sol Original/Limão 1,75 L",
    "marcas": [
      "PINHO SOL"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_049220",
    "nome": "Loção Repelente Off! Kids 200Ml",
    "marcas": [
      "OFF!"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_069503",
    "nome": "Limpador Desengordurante Cif Derrete Gordura 500Ml",
    "marcas": [
      "CIF"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_063776",
    "nome": "Inseticida Elétrico Raid 45 Noites Aparelho Family",
    "marcas": [
      "RAID"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_070318",
    "nome": "Inseticida Aerossol Sbp Vários Tipos 360Ml",
    "marcas": [
      "SBP"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_071384",
    "nome": "Desinfetante Pinho Bril Lavanda 1,75 L",
    "marcas": [
      "PINHO BRIL"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_074714",
    "nome": "Difusor Glade Brinde A Noronha 100Ml",
    "marcas": [
      "GLADE"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_074006",
    "nome": "Limpador Perfumado Coala Vários Tipos 120Ml",
    "marcas": [
      "COALA"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_069568",
    "nome": "Limpador Ajax Limpeza Pesada Fresh Lemon 1 L",
    "marcas": [
      "AJAX"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_073994",
    "nome": "Difusor De Aromas Secar Cha Branco 100Ml",
    "marcas": [
      "SECAR"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_074786",
    "nome": "Limp.Perf.Conc.Veja Algodao 100Ml",
    "marcas": [
      "VEJA"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_073166",
    "nome": "Odorizante De Roupas Comfort Boom 275G",
    "marcas": [
      "COMFORT"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_010585",
    "nome": "Limpador P/Sanitário Harpic Vários Tipos 500Ml",
    "marcas": [
      "HARPIC"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_070061",
    "nome": "Limpador P/Banheiro Veja S/Cloro Refil 400Ml",
    "marcas": [
      "VEJA"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_063774",
    "nome": "Lava-Roupas Líquido Ruth Care Coco 1 L",
    "marcas": [
      "RUTH CARE"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_074549",
    "nome": "Lava-Roupas Líquido Omo Ciclo Rápido 750Ml",
    "marcas": [
      "OMO"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_056233",
    "nome": "Pano Multiúso Limppano Toalex C/44 Folhas",
    "marcas": [
      "LIMPPANO"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_073999",
    "nome": "Limp.Perf.Conc.Secar Cha Branco Conc.120Ml",
    "marcas": [
      "SECAR"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_044967",
    "nome": "Limpador Perfumado Ajax Vários Tipos 1 L",
    "marcas": [
      "AJAX"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_041810",
    "nome": "Amaciante Concentrado Mon Bijou Clássico 500Ml",
    "marcas": [
      "MON BIJOU"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_020674",
    "nome": "Sabão De Coco Pastoso Ruth Care  500G",
    "marcas": [
      "RUTH CARE"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_011326",
    "nome": "Amac.Ype Aconchego 2L 2 L",
    "marcas": [
      "YPÊ"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_042666",
    "nome": "Cloro Pro Water  2 L",
    "marcas": [
      "PRO WATER"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_049850",
    "nome": "Esponja Multiúso Bombril",
    "marcas": [
      "BOMBRIL"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_063925",
    "nome": "Lava-Louças Líquido Cif Concentrado 420G",
    "marcas": [
      "CIF"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_064141",
    "nome": "Protetor Solar Facial Neutrogena Fps 70 40G",
    "marcas": [
      "NEUTROGENA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_064137",
    "nome": "Protetor Solar Sundown Fps 50 200Ml",
    "marcas": [
      "SUNDOWN"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_069492",
    "nome": "Condicionador Eudora Siàge 200Ml",
    "marcas": [
      "EUDORA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_074670",
    "nome": "Sh.Eudora Siage Nutri Acid.Complex 250Ml",
    "marcas": [
      "EUDORA SIÀGE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_048381",
    "nome": "Gel De Limpeza Neutrogena Grapefruit 150G",
    "marcas": [
      "NEUTROGENA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_067835",
    "nome": "Enxaguante Bucal Listerine Cool Mint Tradicional/Zero 1 L",
    "marcas": [
      "LISTERINE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_069809",
    "nome": "Aparelho Depilatório Gillette Venus 3 C/4 Unids.",
    "marcas": [
      "GILLETTE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_067491",
    "nome": "Shampoo Head & Shoudersmenthol  400Ml",
    "marcas": [
      "HEAD & SHOULDERS"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_074883",
    "nome": "Desodorante Secret Gel 45G",
    "marcas": [
      "SECRET"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_051373",
    "nome": "Absorvente Always Noturno Seca/Suave C/32 Unids.",
    "marcas": [
      "ALWAYS"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_064549",
    "nome": "Escova Dental Colgate Slim Soft Black C/4 Unids.",
    "marcas": [
      "COLGATE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_067516",
    "nome": "Sabonete Líquido Palmolive Nutri Milk Refil 900Ml",
    "marcas": [
      "PALMOLIVE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_073941",
    "nome": "Aparelho Depilatório c/3 Unids.",
    "marcas": [
      "BIC"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_066456",
    "nome": "Desodorante Aerossol Rexona Vários Tipos 250Ml",
    "marcas": [
      "REXONA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_051735",
    "nome": "Creme Dental Oral-B 3D White Brilliant Fresh 70G C/3 Unids.",
    "marcas": [
      "ORAL-B"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_046484",
    "nome": "Protetor Diário Intimus Regular",
    "marcas": [
      "INTIMUS"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_073545",
    "nome": "Sab.Protex Antibac.Fresh Promo C/6 85G 85g c/6 Unids.",
    "marcas": [
      "PROTEX"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_060620",
    "nome": "Creme Dental Colgate Pró-Alívio Vários Tipos 90G",
    "marcas": [
      "COLGATE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_060106",
    "nome": "Sabonete Líquido Granado Bebê Refil 250Ml",
    "marcas": [
      "GRANADO"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_056309",
    "nome": "Desod.Aer Dove Original 150Ml",
    "marcas": [
      "DOVE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_069113",
    "nome": "Creme Dental Colgate Vários Tipos 90G",
    "marcas": [
      "COLGATE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_047890",
    "nome": "Sabonete Neutrogena Deep Clean Facial 80G",
    "marcas": [
      "NEUTROGENA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_034927",
    "nome": "Cadeira De Alumínio Mor 4 Posições",
    "marcas": [
      "MOR"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_054962",
    "nome": "Caixa Térmica Mor Várias Cores 26 L",
    "marcas": [
      "MOR"
    ],
    "grupoId": "bazar",
    "apresId": "cx"
  },
  {
    "id": "mundial_034926",
    "nome": "Cadeira De Alumínio Mor Alta",
    "marcas": [
      "MOR"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_067654",
    "nome": "Ração Seca Whiskas Vários Tipos 2,7 Kg",
    "marcas": [
      "WHISKAS"
    ],
    "grupoId": "bazar",
    "apresId": "kg"
  },
  {
    "id": "mundial_067656",
    "nome": "Racao Pedigree Seca Carne/Frango 2,7Kg 2,7 kg",
    "marcas": [
      "PEDIGREE/WHISKAS"
    ],
    "grupoId": "bazar",
    "apresId": "kg"
  },
  {
    "id": "mundial_042687",
    "nome": "Guarda-Sol Mor Fashion Várias Cores",
    "marcas": [
      "MOR"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_034736",
    "nome": "Pilha Alcalina Duracell Aaa Ou Aa C/4 Unids.",
    "marcas": [
      "DURACELL"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_067653",
    "nome": "Racao Whiskas Seca Carne 900G",
    "marcas": [
      "WHISKAS"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_067655",
    "nome": "Racao Pedigree Seca Carne/Frango/Cereais 900G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_056301",
    "nome": "Taça Bohemia Gastro 450Ml",
    "marcas": [
      "BOHEMIA"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_036135",
    "nome": "Shampoo E Condicionador Procao 500 Ml 500ml",
    "marcas": [
      "PROCÃO"
    ],
    "grupoId": "bazar",
    "apresId": "frasco"
  },
  {
    "id": "mundial_068822",
    "nome": "Conjunto De Potes 360ml/785ml/800ml c/3 Unids. ou c/4 Unids.",
    "marcas": [
      "SANREMO"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_017400",
    "nome": "Folha De Alumínio Pratsy  Rolo 30Cm X 7,5M",
    "marcas": [
      "PRATSY"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "mundial_017399",
    "nome": "Filme Pvc Pratsy  Rolo 28Cm X 15M",
    "marcas": [
      "PRATSY"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "mundial_036444",
    "nome": "Coador De Papel Melitta Grande 103 C/30 Unids.",
    "marcas": [
      "MELITTA"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "mundial_036443",
    "nome": "Coador De Papel Melitta Médio 102 C/30 Unids.",
    "marcas": [
      "MELITTA"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "mundial_064834",
    "nome": "Mel Orgânico Korin  300G",
    "marcas": [
      "KORIN"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_064630",
    "nome": "Adoçante Líquido Sóstevia  80Ml",
    "marcas": [
      "SÓSTEVIA"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_074352",
    "nome": "Geleia De Fr.Light Hero Amora 320G",
    "marcas": [
      "HERO"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_055608",
    "nome": "Doce De Leite Reserva De Minas Diet/Zero 210G",
    "marcas": [
      "RESERVA DE MINAS"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_071849",
    "nome": "Bebida Veg.Nude Aveia Org.Baunilha 1L TP 1 L",
    "marcas": [
      "NUDE"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "frasco"
  },
  {
    "id": "mundial_073214",
    "nome": "Salgadinho Natural Life Rice Cracker 84G",
    "marcas": [
      "NATURAL LIFE"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_066140",
    "nome": "Açúcar De Coco Copra  100G",
    "marcas": [
      "COPRA"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_073091",
    "nome": "Barra Proteica Nutry Crispy 30G",
    "marcas": [
      "NUTRY"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_032341",
    "nome": "Biscoito Wafer Lowçucar Vários Sabores 115G",
    "marcas": [
      "LOWÇUCAR"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_062457",
    "nome": "Chips De Arroz S/Glúten Natural Life Vários Sabores 70G",
    "marcas": [
      "NATURAL LIFE"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "pct"
  },
  {
    "id": "mundial_035600",
    "nome": "Gelatina Royal Vários Sabores 12G",
    "marcas": [
      "ROYAL"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  }
];

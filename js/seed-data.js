// GimmyMarket - Base de Dados Oficial Expandida com Catálogo Mundial + Supermercados Brasil

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
    "id": "saco",
    "sigla": "Saco",
    "nome": "Saco / Sachê"
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
    "id": "p_arroz_generico",
    "nome": "Arroz Branco Tipo 1",
    "marcas": [
      "Camil",
      "Tio João",
      "Brejeiro",
      "Prato Fino",
      "Namorado"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_arroz_parboilizado",
    "nome": "Arroz Parboilizado",
    "marcas": [
      "Tio João",
      "Brejeiro",
      "Camil",
      "Panelaço"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_arroz_integral",
    "nome": "Arroz Integral",
    "marcas": [
      "Camil",
      "Tio João"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_feijao_carioca",
    "nome": "Feijão Carioca",
    "marcas": [
      "Camil",
      "Kicaldo",
      "Tio João",
      "Combrasil",
      "Máximo"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_feijao_preto",
    "nome": "Feijão Preto",
    "marcas": [
      "Camil",
      "Kicaldo",
      "Combrasil",
      "Tio João"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_feijao_fradinho",
    "nome": "Feijão Fradinho / Macássar",
    "marcas": [
      "Camil",
      "Kicaldo"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_acucar_refinado",
    "nome": "Açúcar Refinado",
    "marcas": [
      "União",
      "Caravelas",
      "Da Barra",
      "Guarani"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_acucar_cristal",
    "nome": "Açúcar Cristal",
    "marcas": [
      "União",
      "Caravelas",
      "Colombo"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_acucar_demerara",
    "nome": "Açúcar Demerara",
    "marcas": [
      "União",
      "Mãe Terra"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_sal_refinado",
    "nome": "Sal Refinado",
    "marcas": [
      "Cisne",
      "Lebre"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_sal_grosso",
    "nome": "Sal Grosso para Churrasco",
    "marcas": [
      "Cisne",
      "Churrasul"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_oleo_soja",
    "nome": "Óleo de Soja 900ml",
    "marcas": [
      "Soya",
      "Liza",
      "Salada",
      "Leve"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "p_oleo_milho",
    "nome": "Óleo de Milho / Girassol",
    "marcas": [
      "Liza",
      "Salada"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "p_azeite_ev",
    "nome": "Azeite de Oliva Extra Virgem 500ml",
    "marcas": [
      "Gallo",
      "Borges",
      "Andorinha",
      "Carbonell",
      "Cocoricó"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "p_farinha_trigo",
    "nome": "Farinha de Trigo Tradicional 1kg",
    "marcas": [
      "Dona Benta",
      "Renata",
      "Sol",
      "Rosa Branca"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_farinha_trigo_fermento",
    "nome": "Farinha de Trigo com Fermento 1kg",
    "marcas": [
      "Dona Benta",
      "Sol"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_farinha_mandioca",
    "nome": "Farinha de Mandioca Torrada / Crua",
    "marcas": [
      "Yoki",
      "Dona Benta"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_farofa_pronta",
    "nome": "Farofa Pronta Tradicional",
    "marcas": [
      "Yoki",
      "Da Terrinha"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_fuba_mimoso",
    "nome": "Fubá Mimoso",
    "marcas": [
      "Yoki",
      "Sinhá"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_amido_milho",
    "nome": "Amido de Milho Maizena",
    "marcas": [
      "Maizena"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "p_fermento_quimico",
    "nome": "Fermento em Pó Químico para Bolo",
    "marcas": [
      "Royal",
      "Dona Benta"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "p_fermento_biologico",
    "nome": "Fermento Biológico Seco para Pão",
    "marcas": [
      "Dr. Oetker",
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "p_vinagre_alcool",
    "nome": "Vinagre de Álcool / Maçã",
    "marcas": [
      "Castelo",
      "Minhoto"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "p_molho_tomate",
    "nome": "Molho de Tomate Peneirado / Tradicional",
    "marcas": [
      "Pomarola",
      "Quero",
      "Fugini",
      "Tarantella",
      "Predilecta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "p_extrato_tomate",
    "nome": "Extrato de Tomate",
    "marcas": [
      "Elefante",
      "Cica",
      "Quero",
      "Predilecta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "lata"
  },
  {
    "id": "p_passata_tomate",
    "nome": "Passata de Tomate Rústica",
    "marcas": [
      "De Cecco",
      "Mutti",
      "Barilla",
      "Cirio"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "gfa"
  },
  {
    "id": "p_ketchup",
    "nome": "Ketchup Tradicional / Picante",
    "marcas": [
      "Heinz",
      "Hellmann's",
      "Hemmer",
      "Quero"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "frasco"
  },
  {
    "id": "p_maionese",
    "nome": "Maionese Tradicional",
    "marcas": [
      "Hellmann's",
      "Heinz",
      "Liza"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "frasco"
  },
  {
    "id": "p_mostarda",
    "nome": "Mostarda Amarela / Dijon",
    "marcas": [
      "Heinz",
      "Hemmer",
      "Hellmann's"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "frasco"
  },
  {
    "id": "p_shoyu",
    "nome": "Molho Shoyu Tradicional",
    "marcas": [
      "Sakura",
      "Kikkoman",
      "Hinode"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "frasco"
  },
  {
    "id": "p_macarrao_espaguete",
    "nome": "Macarrão Espaguete nº 8 / nº 5",
    "marcas": [
      "Barilla",
      "Adria",
      "Renata",
      "Dona Benta",
      "Piraquê"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "p_macarrao_penne",
    "nome": "Macarrão Penne Rigate",
    "marcas": [
      "Barilla",
      "Renata",
      "Adria",
      "Vilma"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "p_macarrao_parafuso",
    "nome": "Macarrão Parafuso (Fusilli)",
    "marcas": [
      "Barilla",
      "Adria",
      "Renata",
      "Dona Benta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "p_macarrao_instantaneo",
    "nome": "Macarrão Instantâneo Lámen",
    "marcas": [
      "Nissin",
      "Miojo",
      "Turma da Mônica"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "p_atum_conserva",
    "nome": "Atum Ralado / Sólido em Óleo ou Natural",
    "marcas": [
      "Gomes da Costa",
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "p_sardinha_conserva",
    "nome": "Sardinha em Óleo / Tomate",
    "marcas": [
      "Coqueiro",
      "Gomes da Costa",
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "p_milho_verde_lata",
    "nome": "Milho Verde em Conserva",
    "marcas": [
      "Quero",
      "Fugini",
      "Bonduelle",
      "Predilecta"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "p_ervilha_lata",
    "nome": "Ervilha em Conserva",
    "marcas": [
      "Quero",
      "Fugini",
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "p_azeitona_verde",
    "nome": "Azeitona Verde sem Caroço",
    "marcas": [
      "Rivoli",
      "Vale Fértil",
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "p_palmito_conserva",
    "nome": "Palmito Pupunha / Açaí em Conserva",
    "marcas": [
      "Palmeira",
      "Gini",
      "Hemmer"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "p_banana_prata",
    "nome": "Banana Prata",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_banana_nanica",
    "nome": "Banana Nanica / D'Água",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_maca_gala",
    "nome": "Maçã Gala / Fuji",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_laranja_pera",
    "nome": "Laranja Pêra para Suco",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_limao_taiti",
    "nome": "Limão Taiti",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_tomate",
    "nome": "Tomate Longa Vida / Italiano",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_tomate_cereja",
    "nome": "Tomate Cereja Sweet Grape",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "bdj"
  },
  {
    "id": "p_cebola_amarela",
    "nome": "Cebola Amarela",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_cebola_roxa",
    "nome": "Cebola Roxa",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_alho_granel",
    "nome": "Alho Cartela / Granel",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_batata_inglesa",
    "nome": "Batata Inglesa Lavada",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_batata_doce",
    "nome": "Batata Doce Roxa",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_cenoura",
    "nome": "Cenoura Fresca",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_chuchu",
    "nome": "Chuchu",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_abobrinha_italiana",
    "nome": "Abobrinha Italiana",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_pimentao_verde",
    "nome": "Pimentão Verde",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_alface_crespa",
    "nome": "Alface Crespa / Americana",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_rucula",
    "nome": "Rúcula Hidropônica",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_couve_manteiga",
    "nome": "Couve Manteiga Maço / Picada",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_cheiro_verde",
    "nome": "Cheiro Verde (Salsa e Cebolinha)",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_manga_tommy",
    "nome": "Manga Tommy / Palmer",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_mamao_papaya",
    "nome": "Mamão Papaya / Formosa",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_abacaxi_perola",
    "nome": "Abacaxi Pérola",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "un"
  },
  {
    "id": "p_melancia",
    "nome": "Melancia Inteira ou Pedaço",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "p_ovos_brancos_30",
    "nome": "Cartela de Ovos Brancos Grandes c/ 30",
    "marcas": [
      "Mantiqueira",
      "Granja"
    ],
    "grupoId": "hortifruti",
    "apresId": "cx"
  },
  {
    "id": "p_ovos_vermelhos_10",
    "nome": "Caixa de Ovos Vermelhos c/ 10 ou 20",
    "marcas": [
      "Mantiqueira"
    ],
    "grupoId": "hortifruti",
    "apresId": "cx"
  },
  {
    "id": "p_alcatra_bov",
    "nome": "Alcatra Bovina Bife / Peça",
    "marcas": [
      "Friboi",
      "Maturatta",
      "Swift"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_contra_file",
    "nome": "Contrafilé Bovino",
    "marcas": [
      "Friboi",
      "Swift"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_coxao_mole",
    "nome": "Coxão Mole Bovino Bife",
    "marcas": [
      "Friboi"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_patinho_moido",
    "nome": "Patinho Moído Bovino",
    "marcas": [
      "Friboi"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_picanha_bov",
    "nome": "Picanha Bovina Resfriada",
    "marcas": [
      "Friboi",
      "Maturatta",
      "Swift"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_costela_bov",
    "nome": "Costela Bovina para Churrasco",
    "marcas": [
      "Friboi"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_acem_bov",
    "nome": "Acém Bovino em Cubos / Moído",
    "marcas": [
      "Friboi"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_file_peito_frango",
    "nome": "Filé de Peito de Frango",
    "marcas": [
      "Sadia",
      "Seara",
      "Korin"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_coxa_sobrecoxa",
    "nome": "Coxa e Sobrecoxa de Frango",
    "marcas": [
      "Sadia",
      "Seara"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_frango_inteiro",
    "nome": "Frango Inteiro Resfriado",
    "marcas": [
      "Sadia",
      "Seara"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_linguica_toscana",
    "nome": "Linguiça Toscana para Churrasco",
    "marcas": [
      "Perdigão",
      "Sadia",
      "Seara"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_linguica_calabresa",
    "nome": "Linguiça Calabresa Defumada",
    "marcas": [
      "Perdigão",
      "Sadia",
      "Seara"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_costelinha_porco",
    "nome": "Costelinha Suína Resfriada",
    "marcas": [
      "Sadia",
      "Seara"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_bacon_manta",
    "nome": "Bacon em Pedaço / Fatiado",
    "marcas": [
      "Sadia",
      "Seara"
    ],
    "grupoId": "acougue",
    "apresId": "kg"
  },
  {
    "id": "p_file_tilapia",
    "nome": "Filé de Tilápia Congelado",
    "marcas": [
      "Sadia",
      "Seara",
      "Costa Sul"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "p_file_salmao",
    "nome": "Filé de Salmão Fresco / Congelado",
    "marcas": [
      "Costa Sul",
      "Swift"
    ],
    "grupoId": "peixaria",
    "apresId": "kg"
  },
  {
    "id": "p_bacalhau_gadus",
    "nome": "Bacalhau Gadus Morhua em Lascas / Postas",
    "marcas": [
      "Bomporto",
      "Mundial"
    ],
    "grupoId": "peixaria",
    "apresId": "kg"
  },
  {
    "id": "p_camarao_limpo",
    "nome": "Camarão Limpo Cinza / Rosa",
    "marcas": [
      "Costa Sul",
      "Swift"
    ],
    "grupoId": "peixaria",
    "apresId": "pct"
  },
  {
    "id": "p_pao_frances",
    "nome": "Pão Francês",
    "marcas": [],
    "grupoId": "padaria",
    "apresId": "kg"
  },
  {
    "id": "p_pao_forma_trad",
    "nome": "Pão de Forma Tradicional",
    "marcas": [
      "Wickbold",
      "Pullman",
      "Bauducco",
      "Visconti"
    ],
    "grupoId": "padaria",
    "apresId": "pct"
  },
  {
    "id": "p_pao_forma_integral",
    "nome": "Pão de Forma Integral / Grãos",
    "marcas": [
      "Wickbold",
      "Pullman",
      "Nutrella"
    ],
    "grupoId": "padaria",
    "apresId": "pct"
  },
  {
    "id": "p_pao_hamburguer",
    "nome": "Pão de Hambúrguer c/ Gergelim",
    "marcas": [
      "Pullman",
      "Wickbold"
    ],
    "grupoId": "padaria",
    "apresId": "pct"
  },
  {
    "id": "p_pao_hotdog",
    "nome": "Pão de Hot Dog",
    "marcas": [
      "Pullman",
      "Wickbold"
    ],
    "grupoId": "padaria",
    "apresId": "pct"
  },
  {
    "id": "p_torrada_trad",
    "nome": "Torrada Tradicional",
    "marcas": [
      "Bauducco",
      "Visconti",
      "Marilan"
    ],
    "grupoId": "padaria",
    "apresId": "pct"
  },
  {
    "id": "p_cafe_moido",
    "nome": "Café Torrado e Moído Tradicional 500g",
    "marcas": [
      "Pilão",
      "Melitta",
      "3 Corações",
      "Caboclo",
      "Pimpinela"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "p_cafe_soluvel",
    "nome": "Café Solúvel Nescafé",
    "marcas": [
      "Nescafé",
      "3 Corações"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "p_cafe_capsula",
    "nome": "Cápsulas de Café Nespresso / Três",
    "marcas": [
      "3 Corações",
      "Pilão",
      "L'Or",
      "Dolce Gusto"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "p_filtro_cafe",
    "nome": "Filtro de Papel para Café nº 103 / 102",
    "marcas": [
      "Melitta",
      "Mellita",
      "Brigitta"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "p_cha_sache",
    "nome": "Chá em Sachê Camomila / Hortelã / Preto",
    "marcas": [
      "Leão",
      "Twinings",
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "p_achocolatado",
    "nome": "Achocolatado em Pó",
    "marcas": [
      "Nescau",
      "Toddy",
      "Três Corações"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "p_aveia_flocos",
    "nome": "Aveia em Flocos / Farelo",
    "marcas": [
      "Quaker",
      "Yoki"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "p_cereal_matinal",
    "nome": "Cereal Matinal Sucrilhos / Corn Flakes",
    "marcas": [
      "Kellogg's",
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "p_leite_integral",
    "nome": "Leite UHT Integral 1L",
    "marcas": [
      "Piracanjuba",
      "Itambé",
      "Parmalat",
      "Ninho",
      "Elegê"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "p_leite_desnatado",
    "nome": "Leite UHT Desnatado / Semidesnatado 1L",
    "marcas": [
      "Piracanjuba",
      "Itambé",
      "Molico"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "p_leite_zero_lactose",
    "nome": "Leite UHT Zero Lactose 1L",
    "marcas": [
      "Piracanjuba",
      "Itambé",
      "Parmalat"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "p_manteiga_sal",
    "nome": "Manteiga com Sal Pote / Barra 200g",
    "marcas": [
      "Aviação",
      "Itambé",
      "President",
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "p_margarina",
    "nome": "Margarina com Sal 500g",
    "marcas": [
      "Qualy",
      "Doriana",
      "Delícia",
      "Claybom"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "p_requeijao",
    "nome": "Requeijão Cremoso Tradicional 200g",
    "marcas": [
      "Vigor",
      "Nestlé",
      "Danone",
      "Itambé",
      "Catupiry"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "p_queijo_mussarela",
    "nome": "Queijo Mussarela Fatiado",
    "marcas": [
      "Tirolez",
      "President",
      "Scala",
      "Mundial"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "p_queijo_prato",
    "nome": "Queijo Prato Fatiado",
    "marcas": [
      "Tirolez",
      "President",
      "Scala"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "p_queijo_parmesao_ralado",
    "nome": "Queijo Parmesão Ralado 50g / 100g",
    "marcas": [
      "Vigor",
      "Tirolez",
      "President",
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "saco"
  },
  {
    "id": "p_queijo_minas_frescal",
    "nome": "Queijo Minas Frescal",
    "marcas": [
      "Tirolez",
      "Ipanema",
      "Quatá"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "p_presunto_cozido",
    "nome": "Presunto Cozido Fatiado",
    "marcas": [
      "Sadia",
      "Seara",
      "Perdigão"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "p_peito_peru",
    "nome": "Peito de Peru Defumado Fatiado",
    "marcas": [
      "Sadia",
      "Seara"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "p_salame_italiano",
    "nome": "Salame Italiano Fatiado",
    "marcas": [
      "Sadia",
      "Seara",
      "Ceratti"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "p_iogurte_natural",
    "nome": "Iogurte Natural / Grego",
    "marcas": [
      "Nestlé",
      "Vigor",
      "Danone",
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "p_creme_leite",
    "nome": "Creme de Leite 200g",
    "marcas": [
      "Nestlé",
      "Piracanjuba",
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "p_leite_condensado",
    "nome": "Leite Condensado 395g",
    "marcas": [
      "Moça",
      "Nestlé",
      "Piracanjuba",
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "lata"
  },
  {
    "id": "p_coca_cola_2l",
    "nome": "Refrigerante Coca-Cola 2L",
    "marcas": [
      "Coca-Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_coca_cola_zero_2l",
    "nome": "Refrigerante Coca-Cola Sem Açúcar 2L",
    "marcas": [
      "Coca-Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_coca_cola_lata",
    "nome": "Refrigerante Coca-Cola Lata 350ml",
    "marcas": [
      "Coca-Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "p_guarana_antarctica_2l",
    "nome": "Refrigerante Guaraná Antarctica 2L",
    "marcas": [
      "Antarctica",
      "Ambev"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_agua_tonica",
    "nome": "Água Tônica Antarctica / Schweppes Lata 350ml",
    "marcas": [
      "Antarctica",
      "Schweppes"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "p_suco_uva_integral",
    "nome": "Suco de Uva Integral 1,5L",
    "marcas": [
      "Campo Largo",
      "Aurora",
      "Aliança",
      "Mitto"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_suco_laranja_pronto",
    "nome": "Suco de Laranja Integral 1L / 900ml",
    "marcas": [
      "Natural One",
      "Prats",
      "Del Valle"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_agua_mineral_sem_gas",
    "nome": "Água Mineral sem Gás 500ml / 1,5L",
    "marcas": [
      "Crystal",
      "Minalba",
      "Bonafont",
      "Indaiá"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_agua_mineral_com_gas",
    "nome": "Água Mineral com Gás 500ml",
    "marcas": [
      "Crystal",
      "Minalba",
      "Prata",
      "Caxambu"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_cerveja_heineken",
    "nome": "Cerveja Heineken Puro Malte Long Neck / Lata",
    "marcas": [
      "Heineken"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_cerveja_amstel",
    "nome": "Cerveja Amstel Puro Malte Lata",
    "marcas": [
      "Amstel"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "p_cerveja_brahma",
    "nome": "Cerveja Brahma Duplo Malte",
    "marcas": [
      "Brahma"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "p_cerveja_stella",
    "nome": "Cerveja Stella Artois",
    "marcas": [
      "Stella Artois"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_cerveja_corona",
    "nome": "Cerveja Corona Extra Long Neck",
    "marcas": [
      "Corona"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "p_detergente_liquido",
    "nome": "Detergente Líquido Neutro / Maçã / Coco",
    "marcas": [
      "Ypê",
      "ODD",
      "Limpol",
      "Minerva",
      "Bombril"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_sabao_po",
    "nome": "Sabão em Pó Lavagem Perfeita",
    "marcas": [
      "Omo",
      "Tixan Ypê",
      "Brilhante",
      "Surf",
      "Ariel"
    ],
    "grupoId": "limpeza",
    "apresId": "cx"
  },
  {
    "id": "p_sabao_liquido",
    "nome": "Sabão Líquido Lava Roupas Concentrado",
    "marcas": [
      "Omo",
      "Ariel",
      "Brilhante",
      "Tixan"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_amaciante_concentrado",
    "nome": "Amaciante Concentrado",
    "marcas": [
      "Downy",
      "Comfort",
      "Ypê",
      "Baby Soft"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_desinfetante_pinho",
    "nome": "Desinfetante Perfumado / Pinho",
    "marcas": [
      "Pinho Sol",
      "Lysoform",
      "Veja",
      "Ypê Bak"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_agua_sanitaria",
    "nome": "Água Sanitária 1L / 2L",
    "marcas": [
      "Q-Boa",
      "Dragão",
      "Brilux",
      "Candura"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_multiuso",
    "nome": "Limpador Multiuso Tradicional",
    "marcas": [
      "Veja",
      "Ypê",
      "Urca"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_tira_manchas",
    "nome": "Tira Manchas O2 Pó ou Líquido",
    "marcas": [
      "Vanish"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "p_esponja_dupla",
    "nome": "Esponja Multiuso Dupla Face",
    "marcas": [
      "Scotch-Brite",
      "Assolan",
      "Bombril"
    ],
    "grupoId": "limpeza",
    "apresId": "pct"
  },
  {
    "id": "p_esponja_aco",
    "nome": "Esponja de Lã de Aço",
    "marcas": [
      "Bombril",
      "Assolan"
    ],
    "grupoId": "limpeza",
    "apresId": "pct"
  },
  {
    "id": "p_saco_lixo_30",
    "nome": "Sacos de Lixo 30 Litros",
    "marcas": [
      "Embalixo",
      "BagLixo",
      "Dover"
    ],
    "grupoId": "limpeza",
    "apresId": "pct"
  },
  {
    "id": "p_saco_lixo_50",
    "nome": "Sacos de Lixo 50 Litros Reforçado",
    "marcas": [
      "Embalixo",
      "BagLixo"
    ],
    "grupoId": "limpeza",
    "apresId": "pct"
  },
  {
    "id": "p_saco_lixo_100",
    "nome": "Sacos de Lixo 100 Litros",
    "marcas": [
      "Embalixo",
      "BagLixo"
    ],
    "grupoId": "limpeza",
    "apresId": "pct"
  },
  {
    "id": "p_papel_toalha",
    "nome": "Papel Toalha Folha Dupla",
    "marcas": [
      "Snob",
      "Scala",
      "Milli"
    ],
    "grupoId": "bazar",
    "apresId": "pct"
  },
  {
    "id": "p_papel_aluminio",
    "nome": "Papel Alumínio Rolo",
    "marcas": [
      "Wyda",
      "Dover"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "p_filme_pvc",
    "nome": "Filme Plástico PVC Esticável",
    "marcas": [
      "Wyda",
      "Dover"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "p_papel_higienico",
    "nome": "Papel Higiênico Folha Dupla / Tripla",
    "marcas": [
      "Neve",
      "Personal",
      "Sublime",
      "Paloma",
      "Milli"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "pct"
  },
  {
    "id": "p_creme_dental",
    "nome": "Creme Dental Proteção Anticáries / Clareador",
    "marcas": [
      "Colgate",
      "Oral-B",
      "Sensodyne",
      "Close-Up"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "p_escova_dentes",
    "nome": "Escova Dental Macia",
    "marcas": [
      "Colgate",
      "Oral-B",
      "Curaprox"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "p_fio_dental",
    "nome": "Fio Dental 50m",
    "marcas": [
      "Colgate",
      "Johnson & Johnson",
      "Oral-B"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "p_sabonete_barra",
    "nome": "Sabonete em Barra Hidratante",
    "marcas": [
      "Dove",
      "Lux",
      "Protex",
      "Palmolive",
      "Nivea",
      "Phebo"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "p_sabonete_liquido",
    "nome": "Sabonete Líquido para as Mãos / Corpo",
    "marcas": [
      "Palmolive",
      "Dove",
      "Protex"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "p_shampoo",
    "nome": "Shampoo Cabelos Normais / Anticaspa",
    "marcas": [
      "Head & Shoulders",
      "Pantene",
      "Seda",
      "Elseve",
      "Clear"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "p_condicionador",
    "nome": "Condicionador Hidratante",
    "marcas": [
      "Pantene",
      "Elseve",
      "Seda",
      "Dove"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "p_desodorante_aerosol",
    "nome": "Desodorante Antitranspirante Aerosol",
    "marcas": [
      "Rexona",
      "Dove",
      "Nivea",
      "Axe",
      "Old Spice"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "p_desodorante_rollon",
    "nome": "Desodorante Roll-on",
    "marcas": [
      "Rexona",
      "Dove",
      "Nivea"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "p_haste_algodao",
    "nome": "Hastes Flexíveis com Algodão",
    "marcas": [
      "Cotonetes",
      "Johnson",
      "Cremer"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "p_algodao_disco",
    "nome": "Algodão em Discos / Bolas",
    "marcas": [
      "Apolo",
      "Cremer"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "pct"
  },
  {
    "id": "p_lenco_umedecido",
    "nome": "Lenços Umedecidos",
    "marcas": [
      "Pampers",
      "Huggies",
      "Mundial"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "pct"
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
    "id": "mundial_003928",
    "nome": "Tâmaras Jumbo C/Caroço Premium Importadas  A Granel Kg",
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
    "id": "mundial_004497",
    "nome": "Passas Imp.Escura S/Semente Emb Kg Embaladas kg",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "kg"
  },
  {
    "id": "mundial_040792",
    "nome": "Ovos Mantiqueira Brancos Jumbo C/10 C/10 UNIDADES",
    "marcas": [],
    "grupoId": "hortifruti",
    "apresId": "cx"
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
    "id": "mundial_042295",
    "nome": "Sobrecoxas De Frango Le Vida  Bandeja 1 Kg",
    "marcas": [
      "LEVIDA"
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
    "id": "mundial_036753",
    "nome": "Filé De Tilápia Congelado Costa Sul  Pacote 500G",
    "marcas": [],
    "grupoId": "peixaria",
    "apresId": "pct"
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
    "id": "mundial_002985",
    "nome": "Peito Seara Frango Defumado Granel Kg",
    "marcas": [
      "SEARA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_000202",
    "nome": "Quejo Muçarela A Granel Kg",
    "marcas": [],
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
    "id": "mundial_056551",
    "nome": "Iog.Liq.Gfe Itambe Morango 1150G 1,25 kg",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_067461",
    "nome": "Iog.Liq.Itambe Gfe Zero %  Morango 1150G 1,15 kg",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "mundial_065920",
    "nome": "L.Ferm.Gf Itambe 1.150Kg 1,15 kg",
    "marcas": [
      "ITAMBÉ"
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
    "id": "mundial_032898",
    "nome": "Manteiga Président C/Sal Tablete 200G C/Sal Tablete/Pote 200g",
    "marcas": [
      "PRÉSIDENT"
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
    "id": "mundial_029898",
    "nome": "Requeijão Aviação Tradicional/Light Copo 250G",
    "marcas": [
      "AVIAÇÃO"
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
    "id": "mundial_011254",
    "nome": "Iogurte Batavo Coco Potão 500G",
    "marcas": [
      "BATAVO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_060503",
    "nome": "Iogurte Natural Itambé Milk Potão 450G",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_063158",
    "nome": "Iogurte Grego Itambé Vários Sabores Potão 500G",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_066110",
    "nome": "Iogurte Itambé Pedaços/Grego Potão 450G/500G",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_071605",
    "nome": "Iog.Ped.Itambe Potao Zero % Morango 450G Potão 450g/500g",
    "marcas": [
      "ITAMBÉ"
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
    "id": "mundial_059206",
    "nome": "Leite Tp Piracanjuba Desnatado 1L TP 1 L",
    "marcas": [
      "PIRACANJUBA"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "mundial_073473",
    "nome": "Iogurte Copo 160g/170g",
    "marcas": [
      "ITAMBÉ"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_074425",
    "nome": "Bebida Láctea Piracanjuba + Milky Moo Pirakids Chicletin 200Ml",
    "marcas": [
      "PIRACANJUBA + MILKY MOO"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "mundial_063679",
    "nome": "Panettone Panco Banoffee, Strudel Ou Tiramissu 550G",
    "marcas": [
      "PANCO"
    ],
    "grupoId": "padaria",
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
    "id": "mundial_071685",
    "nome": "Café Evolutto Premium 500G",
    "marcas": [
      "EVOLUTTO"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_070788",
    "nome": "Café Gourmet Prima Qualità  250G",
    "marcas": [
      "PRIMA QUALITÀ"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_001912",
    "nome": "Geleia  Queensberry Vários Sabores 310G/320G",
    "marcas": [
      "QUEENSBERRY"
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
    "id": "mundial_047428",
    "nome": "Achoc.Toddy Sache 700G Sachê 700g",
    "marcas": [
      "TODDY"
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
    "id": "mundial_070559",
    "nome": "Café L´Or Intense Sachê 40G",
    "marcas": [
      "L'OR"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_039777",
    "nome": "Chá Mate Real  250G",
    "marcas": [
      "REAL"
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
    "id": "mundial_069815",
    "nome": "Café Instantâneo Nescafé Tradição/Original/Matinal Sachê 40G",
    "marcas": [
      "NESCAFÉ"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_067451",
    "nome": "Chá Real Vários Tipos C/10 Unids. c/10 Saquinhos",
    "marcas": [
      "REAL"
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
    "id": "mundial_064914",
    "nome": "Geleia De Mocotó Indali Vários Tipos Tp 210G/220G",
    "marcas": [
      "INDALI"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "mundial_073694",
    "nome": "Azeite Vallado Extravirgem 500Ml",
    "marcas": [
      "VALLADO"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "mundial_029933",
    "nome": "Azeite Ea Extravirgem 500Ml",
    "marcas": [
      "EA"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
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
    "id": "mundial_055373",
    "nome": "Azeitonas Vale Fértil Verdes S/Caroço Sachê 1,01 Kg",
    "marcas": [
      "VALE FÉRTIL"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
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
    "id": "mundial_074580",
    "nome": "Goiabada Zelia Lt 400G Lata 400g",
    "marcas": [
      "ZÉLIA"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
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
    "id": "mundial_069376",
    "nome": "Chantilly Fleischmann Gran Finale Spray 232Ml",
    "marcas": [
      "FLEISCHMANN"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_073234",
    "nome": "Vinagre Fruta Organobio Maca Organico 250Ml",
    "marcas": [
      "ORGANOBIO"
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
    "id": "mundial_048638",
    "nome": "Creme De Avela C/Cacau Ritter 250G",
    "marcas": [
      "RITTER"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
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
    "id": "mundial_071201",
    "nome": "Caldo Davozzi Carne 1 L TP 1 L",
    "marcas": [
      "DAVOZZI"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_019447",
    "nome": "Feijao Branco Imp.Bonduelle 250G",
    "marcas": [
      "BONDUELLE"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
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
    "id": "mundial_071649",
    "nome": "Condimento Kitano Dry-Rub Churrasquear Carne Bovina/Suína 115G",
    "marcas": [
      "KITANO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_056852",
    "nome": "Azeitonas Pretas La Violetera Azapa 200G",
    "marcas": [
      "LA VIOLETERA"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_069796",
    "nome": "Molho De Pimenta Mexicana Cêpera  270G",
    "marcas": [
      "CEPÊRA"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_052710",
    "nome": "Condimento Tempemar Moedor Pimenta-Preta Grão 56G",
    "marcas": [
      "TEMPEMAR"
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
    "id": "mundial_023273",
    "nome": "Azeitonas Vale Fértil Pretas Fatiadas Ou S/Caroço 160G",
    "marcas": [
      "VALE FÉRTIL"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_026452",
    "nome": "Vinagre Importado Borges Balsâmico De Modena 250Ml",
    "marcas": [
      "BORGES"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
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
    "id": "mundial_038510",
    "nome": "Mel De Abelhas Imbiara 270G",
    "marcas": [
      "IMBIARA"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_057736",
    "nome": "Óleo De Canola Soya  900Ml",
    "marcas": [
      "SOYA"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "mundial_064741",
    "nome": "Mel Silvestre Expressão Da Natureza  Bisnaga 270G",
    "marcas": [
      "EXPRESSÃO DA NATUREZA"
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
    "id": "mundial_070253",
    "nome": "Bananada Reserva De Minas Cremosa 400G",
    "marcas": [
      "RESERVA DE MINAS"
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
    "id": "mundial_057626",
    "nome": "Tapioca Amafil  1 Kg",
    "marcas": [
      "AMAFIL"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "mundial_067155",
    "nome": "Tomate S/Pele Importado Mastroiani  Lata 240G",
    "marcas": [
      "MASTROIANI"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
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
    "id": "mundial_075035",
    "nome": "Maionese Hemmer Receita Caseira 500G",
    "marcas": [
      "HEMMER"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
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
    "id": "mundial_046837",
    "nome": "Doce De Leite Reserva De Minas Vários Sabores Pote 400G",
    "marcas": [
      "RESERVA DE MINAS"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_051897",
    "nome": "Condimento Kitano Chimichurri 12G",
    "marcas": [
      "KITANO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
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
    "id": "mundial_002156",
    "nome": "Açúcar União Doçúcar 1 Kg",
    "marcas": [
      "UNIÃO"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
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
    "id": "mundial_017304",
    "nome": "Coco Ralado Sococo Tradicional/Sweet 100G",
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
    "id": "mundial_028693",
    "nome": "Doce De Coco Sococo Branco 335G",
    "marcas": [
      "SOCOCO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_020496",
    "nome": "Condimento Kitano Cebola, Alho E Salsa 40G",
    "marcas": [
      "KITANO"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
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
    "id": "mundial_071267",
    "nome": "Cond.Tempemar Zahtar 24G 20g/24g",
    "marcas": [
      "TEMPEMAR"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_071268",
    "nome": "Condimento Tempemar Zimbro 20G",
    "marcas": [
      "TEMPEMAR"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_033245",
    "nome": "Condimento Tempemar Curry 24G",
    "marcas": [
      "TEMPEMAR"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "mundial_011845",
    "nome": "Feijão Branco Granfino  500G",
    "marcas": [
      "GRANFINO"
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
    "id": "mundial_023803",
    "nome": "Goiabada Predilecta  Pacote 300G",
    "marcas": [
      "PREDILECTA"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "mundial_017213",
    "nome": "Farinha De Mandioca Tipity Vários Tipos 500G",
    "marcas": [
      "TIPITY"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
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
    "id": "mundial_048414",
    "nome": "Molho Shoyu Satis Intenso/Suave 150Ml",
    "marcas": [
      "SATIS"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
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
    "id": "mundial_070743",
    "nome": "Massa Instantânea Nissin Lámen Galinha Caipira 85G C/6 Unids.",
    "marcas": [
      "NISSIN"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
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
    "id": "mundial_067837",
    "nome": "Sopa Vono Proteína 35G",
    "marcas": [
      "VONO"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "mundial_020056",
    "nome": "Cup Noodles Nissin Bolonhesa 72G 69g/70g/72g",
    "marcas": [
      "NISSIN"
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
    "id": "mundial_056454",
    "nome": "Sopa Vono Chef Creme 53G/58G",
    "marcas": [
      "VONO"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
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
    "id": "mundial_046803",
    "nome": "Sopa Vono  17G 18g",
    "marcas": [
      "VONO"
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
    "id": "mundial_062827",
    "nome": "Chocolate Suíço Lindt Milk Lindor Ao Leite 75G",
    "marcas": [
      "LINDT"
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
    "id": "mundial_064873",
    "nome": "Amendoim Agtal Salgado 400G",
    "marcas": [
      "AGTAL"
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
    "id": "mundial_053078",
    "nome": "Salg.Kalassi Rice Cracker Barbecue 100G",
    "marcas": [
      "KALASSI"
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
    "id": "mundial_064011",
    "nome": "Mix De Castanhas Amigos Do Bem  100G",
    "marcas": [
      "AMIGOS DO BEM"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_064872",
    "nome": "Amendoim Salgado Agtal  200G",
    "marcas": [
      "AGTAL"
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
    "id": "mundial_068836",
    "nome": "Chocolate Lacta Amaro 80G 80g/90g/98g/104g",
    "marcas": [
      "LACTA"
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
    "id": "mundial_054244",
    "nome": "Batata Elma Chips Ruffles 33G",
    "marcas": [
      "ELMA CHIPS"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_063826",
    "nome": "Biscoito Piraquê Roladinho Goiabinha 75G",
    "marcas": [
      "PIRAQUÊ"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "mundial_070423",
    "nome": "Biscoito Maizena Piraque  175G",
    "marcas": [
      "PIRAQUÊ"
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
    "id": "mundial_044123",
    "nome": "Salg.Torcida Bacon 60G",
    "marcas": [
      "TORCIDA"
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
    "id": "mundial_069269",
    "nome": "Biscoito Recheado Nestlé Bono/Negresco 90G",
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
    "id": "mundial_071963",
    "nome": "Batata Congelada Bem Brasil Fininhas 1,5 Kg",
    "marcas": [
      "BEM BRASIL"
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
    "id": "mundial_070707",
    "nome": "Batata Congelada Mccain Fininhas Pacote 1,05 Kg",
    "marcas": [
      "MCCAIN"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "mundial_059980",
    "nome": "Batata Rostie Beluga Bacon 300G",
    "marcas": [
      "BELUGA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_071329",
    "nome": "Pão De Queijo Barão De Minas Tradicional/Coquetel Pacote 800G",
    "marcas": [
      "BARÃO DE MINAS"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
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
    "id": "mundial_069669",
    "nome": "Hamburguer Maturatta Costela Um 180G",
    "marcas": [
      "MATURATTA"
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
    "id": "mundial_049803",
    "nome": "Beef Burger Friboi C/Queijo 120G",
    "marcas": [
      "FRIBOI"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_073137",
    "nome": "Recheado Fgo Seara Cheddar/Bacon 110G",
    "marcas": [
      "SEARA"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "mundial_000451",
    "nome": "Costela Salgada Kg",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "mundial_073948",
    "nome": "Energetico Red Bull Pomelo 250Ml C/4 250ml c/4 Unids.",
    "marcas": [
      "RED BULL"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
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
    "id": "mundial_029416",
    "nome": "Água De Coco Sococo  Tp 1 L",
    "marcas": [
      "SOCOCO"
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
    "id": "mundial_073200",
    "nome": "Energetico Red Bull Amora Edition F.Verm 250Ml",
    "marcas": [
      "RED BULL"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_073881",
    "nome": "Sup.Alim Engov After Pink Lemonade 250Ml",
    "marcas": [
      "ENGOV"
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
    "id": "mundial_027075",
    "nome": "Refr.Grapette Pet 2L PET 2 L",
    "marcas": [
      "GRAPETTE"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
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
    "id": "mundial_039207",
    "nome": "Refrigerante Grapette Framboesa Pet 290Ml",
    "marcas": [
      "GRAPETTE"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_039790",
    "nome": "Licor Neto Costa Amêndoa Amarga 700Ml",
    "marcas": [
      "NETO COSTA"
    ],
    "grupoId": "bebidas-alcoolicas",
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
    "id": "mundial_051173",
    "nome": "Cachaça Fazenda Soledade Ipê 750Ml",
    "marcas": [
      "FAZENDA SOLEDADE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_035392",
    "nome": "Cerveja Heineken Barril 5L Barril 5 L",
    "marcas": [
      "HEINEKEN"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "mundial_073006",
    "nome": "Whisky Jim Beam Vários Tipos 1 L",
    "marcas": [
      "JIM BEAM"
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
    "id": "mundial_073383",
    "nome": "Cerveja Heineken Lt 473Ml C/12 Lata 473ml c/12 Unids.",
    "marcas": [
      "HEINEKEN"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "mundial_069684",
    "nome": "Cachaça Fazenda Soledade Carvalho/Jequitibá 700Ml/750Ml",
    "marcas": [
      "FAZENDA SOLEDADE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "mundial_051023",
    "nome": "Aguardente Fazenda Soledade Gf 750Ml",
    "marcas": [
      "FAZENDA SOLEDADE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
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
    "id": "mundial_068061",
    "nome": "Coquetel Bananinha  950Ml",
    "marcas": [
      "BANANINHA"
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
    "id": "mundial_063215",
    "nome": "Cerveja Heineken Lt 473Ml Lata 473ml",
    "marcas": [
      "HEINEKEN"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
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
    "id": "mundial_061758",
    "nome": "Cerveja Blue Moon Belgian White Ale Long Neck 355Ml",
    "marcas": [
      "BLUE MOON"
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
    "id": "mundial_029283",
    "nome": "Cerveja Cerpa Export Long Neck 350Ml",
    "marcas": [
      "CERPA EXPORT"
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
    "id": "mundial_074132",
    "nome": "Suplemento Alimentar St. Pierre Pink Lemon/Red Mint Lata 310Ml",
    "marcas": [
      "ST. PIERRE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
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
    "id": "mundial_074130",
    "nome": "Refrigerante St. Pierre Pink Lemon/Red Mint Lata 270Ml",
    "marcas": [
      "ST. PIERRE"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
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
    "id": "mundial_065372",
    "nome": "Cerveja Petra Origem Puro Malte Lata 473Ml",
    "marcas": [
      "PETRA"
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
    "id": "mundial_063492",
    "nome": "Vinho Tto Por Conde Cantanhede Gran Res 750Ml",
    "marcas": [
      "CONDE DE CANTANHEDE GRAN RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_063493",
    "nome": "Vinho Bco Por Conde Cantanhede Gran Res 750Ml",
    "marcas": [
      "CONDE DE CANTANHEDE GRAN RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
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
    "id": "mundial_063964",
    "nome": "Vinho Tinto Luigi Bosca Malbec 750Ml",
    "marcas": [
      "LUIGI BOSCA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_049908",
    "nome": "Vinho Tto Chi Marques C.Concha Carmenere 750Ml",
    "marcas": [
      "MARQUES DE CASA CONCHA"
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
    "id": "mundial_069872",
    "nome": "Vinho Chileno Medalla Real Cabernet Sauvignon Gran Reserva 750Ml",
    "marcas": [
      "MEDALLA REAL CABERNET SAUVIGNON GRAN RESERVA"
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
    "id": "mundial_065599",
    "nome": "Vinho Português Tapada Dos Ganhões Reserva  750Ml",
    "marcas": [
      "TAPADA DOS GANHÕES RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_074917",
    "nome": "Vinho Tto Chi Tarapaca Gran Res.Cab.Sauv 750Ml",
    "marcas": [
      "TARAPACÁ GRAN RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_049143",
    "nome": "Vinho Italiano Conte Di Campiano Primitivo Di Manduria  750Ml",
    "marcas": [
      "CONTE DI CAMPIANO PRIMITIVO DI MANDURIA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_041613",
    "nome": "Espumante Espanhol Freixenet C. Negro Brut/Rosé 750Ml",
    "marcas": [
      "FREIXENET"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_071638",
    "nome": "Vinho Tto Por Rotas D'Mar Grande Reserva 750Ml",
    "marcas": [
      "ROTAS D'MAR GRANDE RESERVA"
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
    "id": "mundial_061303",
    "nome": "Vinho Tto Por Jmf Reserva Gf 750 Ml 750ml",
    "marcas": [
      "JMF RESERVA"
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
    "id": "mundial_065600",
    "nome": "Vinho Português Vinhas Velhas Do Barão Reserva  750Ml",
    "marcas": [
      "VINHAS VELHAS DO BARÃO RESERVA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_062909",
    "nome": "Vinho Tinto Centoventi Special Edition 750Ml",
    "marcas": [
      "CENTOVENTI"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_070991",
    "nome": "Vinho Tto Por S.Sebastiao Syrah 750Ml",
    "marcas": [
      "S.SEBASTIÃO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_069440",
    "nome": "Vinho Branco Argentino Donã Paula Chardonnay 750Ml",
    "marcas": [
      "DOÑA PAULA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_063963",
    "nome": "Vinho Tinto Argentino La Linda Malbec 750Ml",
    "marcas": [
      "LA LINDA"
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
    "id": "mundial_023761",
    "nome": "Vinho Português Fundação Ea  750Ml",
    "marcas": [
      "CARTUXA EA"
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
    "id": "mundial_014558",
    "nome": "Vinho Português Casal Garcia  750Ml",
    "marcas": [
      "CASAL GARCIA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_011791",
    "nome": "Vinho Português Periquita  750Ml",
    "marcas": [
      "PERIQUITA"
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
    "id": "mundial_059231",
    "nome": "Vinho Tinto Passo Dei Sani Premium 750Ml",
    "marcas": [
      "PASSO DEI SANI"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
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
    "id": "mundial_074682",
    "nome": "Vinho Tto Por Vinha Das Mouras Reserva 750Ml",
    "marcas": [
      "VINHA DAS MOURAS RESERVA"
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
    "id": "mundial_065714",
    "nome": "Vinho Tinto Aurora Gran Reserva 750Ml",
    "marcas": [
      "AURORA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_070950",
    "nome": "Vinho Tinto Terra Del Giglio Sangiovese Toscana 750Ml",
    "marcas": [
      "TERRA DEL GIGLIO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_071382",
    "nome": "Vinho Tto Por Passaros Da Primavera 750Ml",
    "marcas": [
      "PÁSSAROS DA PRIMAVERA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_058640",
    "nome": "Vinho Chileno Monte Blanco Cabernet Gran Reserva 750Ml",
    "marcas": [
      "MONTE BLANCO CABERNET GRAN RESERVA"
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
    "id": "mundial_074681",
    "nome": "Vinho Tto Por Vinha Das Mouras 750Ml",
    "marcas": [
      "VINHA DAS MOURAS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
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
    "id": "mundial_074316",
    "nome": "Vinho Bco Chi 120 Sauvignon Blanc 750Ml",
    "marcas": [
      "120"
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
    "id": "mundial_045825",
    "nome": "Vinho Tinto Português Pinta Negra  750Ml",
    "marcas": [
      "PINTA NEGRA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
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
    "id": "mundial_004858",
    "nome": "Espumante Salton Brut/Demi-Sec/Moscatel 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_068392",
    "nome": "Vinho Português Fonte Das Setas  750Ml",
    "marcas": [
      "FONTE DAS SETAS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_042955",
    "nome": "Vinho Português Syrah/Roriz  750Ml",
    "marcas": [
      "SYRAH & TINTA RORIZ"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_061265",
    "nome": "Espumante Garibaldi Moscatel Rosé 750Ml",
    "marcas": [
      "GARIBALDI"
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
    "id": "mundial_032525",
    "nome": "Vinho Rose Ita Lambrusco Montecchio Gf 750Ml",
    "marcas": [
      "MONTECCHIO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_025972",
    "nome": "Vinho Italiano Lambrusco Montecchio  750Ml",
    "marcas": [
      "MONTECCHIO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_025973",
    "nome": "Vinho Tto Ita Lambrusco Montecchio Gf 750Ml",
    "marcas": [
      "MONTECCHIO"
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
    "id": "mundial_073029",
    "nome": "Espumante Salton Poética 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_044467",
    "nome": "Vinho Tinto Amerigo Vespucci Merlot 750Ml",
    "marcas": [
      "AMERIGO VESPUCCI"
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
    "id": "mundial_042715",
    "nome": "Vinho Italiano Amerigo Vespucci  750Ml",
    "marcas": [
      "AMERIGO VESPUCCI"
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
    "id": "mundial_073665",
    "nome": "Vinho Tto Ita Gutturnio Superiore Doc 750Ml",
    "marcas": [
      "GUTTURNIO SUPERIORE DOC"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_057097",
    "nome": "Espumante Garibaldi Rosé Vero 750Ml",
    "marcas": [
      "GARIBALDI"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "mundial_057458",
    "nome": "Vinho Estancia Mendoza Bivarietal 750Ml",
    "marcas": [
      "ESTANCIA MENDOZA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_069036",
    "nome": "Vinho Português Quinta Archeira  750Ml",
    "marcas": [
      "QUINTA ARCHEIRA"
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
    "id": "mundial_068958",
    "nome": "Vinho Branco Espanhol Oro Del Toro  750Ml",
    "marcas": [
      "ORO DEL TORO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_070838",
    "nome": "Vinho Português Visconde De Chanceleiros  750Ml",
    "marcas": [
      "VISCONDE DE CHANCELEIROS"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_071439",
    "nome": "Vinho Espanhol Nueva Hacienda  750Ml",
    "marcas": [
      "NUEVA HACIENDA"
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
    "id": "mundial_073468",
    "nome": "Vinho Bco Por Cartola 750Ml",
    "marcas": [
      "CARTOLA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_016521",
    "nome": "Vinho Tinto Chileno Santa Helena Cabernet 750Ml",
    "marcas": [
      "SANTA HELENA"
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
    "id": "mundial_062317",
    "nome": "Vinho Português Conde De Cantanhede  750Ml",
    "marcas": [
      "CONDE DE CANTANHEDE"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_035592",
    "nome": "Vinho Salton Lunae 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_065889",
    "nome": "Vinho Tinto Verza Suave 1 L",
    "marcas": [
      "VERZA"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_014997",
    "nome": "Vinho Tinto Salton Classic 750Ml",
    "marcas": [
      "SALTON"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_070978",
    "nome": "Vinho Tto Amare Seco 750Ml",
    "marcas": [
      "AMARÉ SECO"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "mundial_070344",
    "nome": "Mop Bettanin Noviça Compacto 10 L",
    "marcas": [
      "BETTANIN"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_070343",
    "nome": "Mop Bettanin Noviça Compacto/Spray Fit 10 L",
    "marcas": [
      "BETTANIN"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_067373",
    "nome": "Pá P/Lixo Bettanin Noviça Coletora",
    "marcas": [
      "BETTANIN"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_069770",
    "nome": "Rolo Adesivo Bettanin C/2 Refil Refil c/2 Unids.",
    "marcas": [
      "BETTANIN"
    ],
    "grupoId": "limpeza",
    "apresId": "rolo"
  },
  {
    "id": "mundial_015601",
    "nome": "Pá P/Lixo Bettanin Noviça C/Cabo",
    "marcas": [
      "BETTANIN"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_067259",
    "nome": "Lava-Roupas Líquido Tixan Ypê Power Act 3 L",
    "marcas": [
      "TIXAN"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
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
    "id": "mundial_074964",
    "nome": "Lava-Roupas Líquido Coala Chá Branco/Orquídea Negra 3 L",
    "marcas": [
      "COALA"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_068956",
    "nome": "Saco P/Lixo Dover Roll Reforçado 50 L C/20",
    "marcas": [
      "DOVER ROLL"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_068957",
    "nome": "Saco P/Lixo Dover Roll Reforcado 100L C/10",
    "marcas": [
      "DOVER ROLL"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_071172",
    "nome": "Desinfetante Lysoform Citrus 2 L",
    "marcas": [
      "LYSOFORM"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_071173",
    "nome": "Desinfetante Lysoform Lavanda 2 L",
    "marcas": [
      "LYSOFORM"
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
    "id": "mundial_042383",
    "nome": "Rolo Adesivo Bettanin - 201",
    "marcas": [
      "BETTANIN"
    ],
    "grupoId": "limpeza",
    "apresId": "rolo"
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
    "id": "mundial_074276",
    "nome": "Amac.Downy Conc.Brisa De Verao Refil 750Ml",
    "marcas": [
      "DOWNY"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "mundial_074976",
    "nome": "Amaciante Concentrado Coala Chá Branco/Orquídea Negra 1 L",
    "marcas": [
      "COALA"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
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
    "id": "mundial_074121",
    "nome": "Limp.Multiuso Ype Oferta Especial C/4 500ml c/4 Unids.",
    "marcas": [
      "YPÊ"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
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
    "id": "mundial_069504",
    "nome": "Cloro Gel Vim Original 700Ml",
    "marcas": [
      "VIM"
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
    "id": "mundial_037795",
    "nome": "Lava Louças Líquido Coco Limpol Vários Tipos 500Ml",
    "marcas": [
      "LIMPOL"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_071628",
    "nome": "Sh.Siage Nutri Rose 250Ml+Cond 125Ml+Leave-In 30Ml",
    "marcas": [
      "EUDORA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_068202",
    "nome": "Roupa Íntima Plenitud Vários Tamanhos C/16 Unids.",
    "marcas": [
      "PLENITUD"
    ],
    "grupoId": "higiene-e-beleza",
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
    "id": "mundial_064549",
    "nome": "Escova Dental Colgate Slim Soft Black C/4 Unids.",
    "marcas": [
      "COLGATE"
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
    "id": "mundial_074883",
    "nome": "Desodorante Secret Gel 45G",
    "marcas": [
      "SECRET"
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
    "id": "mundial_067274",
    "nome": "Sabonete Líquido Palmolive Camélia 650Ml",
    "marcas": [
      "PALMOLIVE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_073256",
    "nome": "Sab.Liq.Lux Refil Buque De Jasmim 900Ml Refil 900ml",
    "marcas": [
      "LUX"
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
    "id": "mundial_062332",
    "nome": "Cr.Tratamento Pantene Hidratacao 270Ml 270g",
    "marcas": [
      "PANTENE"
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
    "id": "mundial_066456",
    "nome": "Desodorante Aerossol Rexona Vários Tipos 250Ml",
    "marcas": [
      "REXONA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_026589",
    "nome": "Enxaguante Bucal Oral-B Complete Hortelã/Menta 500Ml",
    "marcas": [
      "ORAL-B"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
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
    "id": "mundial_048610",
    "nome": "Shampoo Head & Shoulders Vários Tipos 200Ml",
    "marcas": [
      "HEAD & SHOULDERS"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "frasco"
  },
  {
    "id": "mundial_022524",
    "nome": "Fio Dental Oral-B Essential Floss 50M",
    "marcas": [
      "ORAL-B"
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
    "id": "mundial_066339",
    "nome": "Sabonete Alma De Flores Clássico 130G C/3 Unids.",
    "marcas": [
      "ALMA DE FLORES"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_066340",
    "nome": "Sabonete Senador Classic 130G C/3 Unids.",
    "marcas": [
      "SENADOR"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_061070",
    "nome": "Escova Dental Oral-B Kids Mickey C/2 Unids.",
    "marcas": [
      "ORAL-B"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
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
    "id": "mundial_060620",
    "nome": "Creme Dental Colgate Pró-Alívio Vários Tipos 90G",
    "marcas": [
      "COLGATE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_069460",
    "nome": "Absorvente Diana Noturno C/28 Unids.",
    "marcas": [
      "DIANA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
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
    "id": "mundial_069461",
    "nome": "Absorvente Diana Suave C/28 Unids.",
    "marcas": [
      "DIANA"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "mundial_050315",
    "nome": "Sabonete Dove Baby Hidratação Enriquecida 75G",
    "marcas": [
      "DOVE"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_070722",
    "nome": "Sabonete Cloy Hidratante 80G",
    "marcas": [
      "CLOY"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "cx"
  },
  {
    "id": "mundial_070355",
    "nome": "Panela Tramontina Aco Inox Brava C/Tampa Vidro",
    "marcas": [
      "TRAMONTINA"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_073066",
    "nome": "Frigideira Tramontina Aco Inox Inducao",
    "marcas": [
      "TRAMONTINA"
    ],
    "grupoId": "bazar",
    "apresId": "un"
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
    "id": "mundial_073487",
    "nome": "Panelas Tramontina Preto/Verm",
    "marcas": [
      "TRAMONTINA"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_069666",
    "nome": "Assadeira Tramontina Aluminio Preta/Verm",
    "marcas": [
      "TRAMONTINA"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_070837",
    "nome": "Tapete Smiles Goods Higienico C/30 c/30 Unids.",
    "marcas": [
      "SMILES GOODS"
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
    "id": "mundial_073490",
    "nome": "Panquequeira De Alumínio Tramontina Turim Preta E Vermelha 22Cm",
    "marcas": [
      "TRAMONTINA"
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
    "id": "mundial_067655",
    "nome": "Racao Pedigree Seca Carne/Frango/Cereais 900G",
    "marcas": [
      "PEDIGREE"
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
    "id": "mundial_056301",
    "nome": "Taça Bohemia Gastro 450Ml",
    "marcas": [
      "BOHEMIA"
    ],
    "grupoId": "bazar",
    "apresId": "un"
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
    "id": "mundial_036135",
    "nome": "Shampoo E Condicionador Procao 500 Ml 500ml",
    "marcas": [
      "PROCÃO"
    ],
    "grupoId": "bazar",
    "apresId": "frasco"
  },
  {
    "id": "mundial_050112",
    "nome": "Petisco P/Cães Pedigree Dentastix 45G/77G/110G/180G/270G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_027664",
    "nome": "Biscoito Pedigree Biscrok 500G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_051354",
    "nome": "Petisco P/Cães Pedigree Dentastix Raças Médias 180G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_051355",
    "nome": "Petisco P/Cães Pedigree Dentastix Raças Pequenas 110G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_048979",
    "nome": "Guardanapo De Papel Elite Folha Dupla Grande C/50 Unids.",
    "marcas": [
      "ELITE"
    ],
    "grupoId": "bazar",
    "apresId": "rolo"
  },
  {
    "id": "mundial_050113",
    "nome": "Petisco P/Cães Pedigree Dentastix Raças Médias 77G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_073912",
    "nome": "Petiscos Dreamies Carne 80G",
    "marcas": [
      "DREAMIES"
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
    "id": "mundial_069475",
    "nome": "Petiscos Whiskas Antibola De Pelo 40G",
    "marcas": [
      "WHISKAS"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_010898",
    "nome": "Guardanapo De Papel Elite Folha Dupla Pequeno C/50 Unids.",
    "marcas": [
      "ELITE"
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
    "id": "mundial_074609",
    "nome": "Petisco Pedigree Tasty Bites Sabor Carne 80G",
    "marcas": [
      "PEDIGREE"
    ],
    "grupoId": "bazar",
    "apresId": "un"
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
    "id": "mundial_047312",
    "nome": "Petisco Dreamies Vários Sabores 40G",
    "marcas": [
      "DREAMIES"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_063386",
    "nome": "Ração Dog Chow Vários Sabores Sachê 100G 85g/100g",
    "marcas": [
      "DOG CHOW"
    ],
    "grupoId": "bazar",
    "apresId": "un"
  },
  {
    "id": "mundial_063380",
    "nome": "Ração Friskies Vários Sabores Sachê 85G Sachê 80g/85g",
    "marcas": [
      "FRISKIES"
    ],
    "grupoId": "bazar",
    "apresId": "un"
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
    "id": "mundial_064986",
    "nome": "Bebida Vegetal A Tal Da Castanha Aveia Vários Sabores Tp 1 L",
    "marcas": [
      "A TAL DA CASTANHA"
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
    "id": "mundial_051291",
    "nome": "Barra De Cereais Nutry Vários Sabores 66G",
    "marcas": [
      "NUTRY"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_035600",
    "nome": "Gelatina Royal Vários Sabores 12G",
    "marcas": [
      "ROYAL"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  },
  {
    "id": "mundial_074685",
    "nome": "Barra Cereais Ritter Aveia/Avela Lv4 Pg3 80G 60g/75g/80g",
    "marcas": [
      "RITTER"
    ],
    "grupoId": "mais-saudaveis",
    "apresId": "un"
  }
];

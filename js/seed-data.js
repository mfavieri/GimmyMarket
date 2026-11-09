// GimmyMarket - Dicionário de Produtos Expandido com Código de Barras (EAN-13)

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
  },
  {
    "id": "ean_7896006779674",
    "ean": "7896006779674",
    "nome": "Mini Biscoitos De Arroz Integral Camil Natural 150 g",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_8001860260315",
    "ean": "8001860260315",
    "nome": "Riso Scotti - Arroz Basmati Natural Scotti 500g",
    "marcas": [
      "Riso Scotti"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896006716471",
    "ean": "7896006716471",
    "nome": "Biscoitos De Arroz Integral Chia E Linhaça 150 g",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896006716464",
    "ean": "7896006716464",
    "nome": "Biscoito De Arroz",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896079431158",
    "ean": "7896079431158",
    "nome": "Arroz Namorando",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000319543",
    "ean": "7891000319543",
    "nome": "Cereal Infantil Integral Arroz Aveia Mucilon Pacote 180G",
    "marcas": [
      "Integral"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7896062699961",
    "ean": "7896062699961",
    "nome": "Arroz Polido Tipo 1 Solito Pacote 5Kg",
    "marcas": [
      "Solito"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896006755517",
    "ean": "7896006755517",
    "nome": "Arroz Integral 1 kg",
    "marcas": [
      "Camil",
      "Camil Alimentos S.A."
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7893500020110",
    "ean": "7893500020110",
    "nome": "Arroz Tio João 100 Grãos Nobres Tipo 1 Classe Longo Fino 1 Kg",
    "marcas": [
      "Tio Joao"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896256065602",
    "ean": "7896256065602",
    "nome": "Bisc Arroz Integr 80G Naturallife Mini",
    "marcas": [
      "Naturallife"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038314195",
    "ean": "7896038314195",
    "nome": "Urbano Macarrão Espaguete De Arroz Integral Urbano 500g",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7893500066545",
    "ean": "7893500066545",
    "nome": "Meu Biju Arroz Meu Biju 8 Grãos Integrais Com Aveia 1 kg",
    "marcas": [
      "Meu Biju"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896290300714",
    "ean": "7896290300714",
    "nome": "Arroz Integral Prato Fino 1 kg",
    "marcas": [
      "Pirahy"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896038311194",
    "ean": "7896038311194",
    "nome": "Massa Alimentícia De Arroz Integral 500g",
    "marcas": [
      "Urbano",
      "Urbano Agroindustrial Ltda."
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7804646450273",
    "ean": "7804646450273",
    "nome": "Mizos Galletitas De Arroz 150 g",
    "marcas": [
      "Mizos"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000073100",
    "ean": "7891000073100",
    "nome": "Cereal Infantil Arroz E Aveia Mucilon Pacote 600G Embalagem Econômica",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7893500018483",
    "ean": "7893500018483",
    "nome": "Arroz Integral Tio João Tipo 1 1Kg",
    "marcas": [
      "Tio Joao"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896006711155",
    "ean": "7896006711155",
    "nome": "Arroz Tipo 1 Camil 5Kg",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_8005121218107",
    "ean": "8005121218107",
    "nome": "Divella Arroz Arbório Divella Italiano 1kg",
    "marcas": [
      "Divella"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891000333600",
    "ean": "7891000333600",
    "nome": "Nesfit Cacau 220 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000288801",
    "ean": "7891000288801",
    "nome": "Nesfit Original 220 g",
    "marcas": [
      "Nestlé",
      "Nesfit"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038305193",
    "ean": "7896038305193",
    "nome": "Urbano Zero Glúten - Massa Alimentícia De Arroz 500 g",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7896356800035",
    "ean": "7896356800035",
    "nome": "Arroz Polido Tipo 1 Pilecco Nobre Pacote 1Kg",
    "marcas": [
      "Pilecco Nobre"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896038350056",
    "ean": "7896038350056",
    "nome": "Farinha De Arroz Urbano 1Kg",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896196060361",
    "ean": "7896196060361",
    "nome": "Arroz Negro Tipo 1 Integral La Pastina Caixa 500G",
    "marcas": [
      "La Pastina"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7896290300189",
    "ean": "7896290300189",
    "nome": "Arroz Prato Fino Branco 1 kg",
    "marcas": [
      "Prato Fino"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896022207571",
    "ean": "7896022207571",
    "nome": "Sem Glúten Espeguete 8 500 g",
    "marcas": [
      "Renata",
      "Selmi"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_2220860211240",
    "ean": "2220860211240",
    "nome": "Estrogonofe De Frango, Arroz Branco E Batata Assada 370 g",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896006711117",
    "ean": "7896006711117",
    "nome": "Arroz Tipo 1 1Kg Camil",
    "marcas": [
      "Camil"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896256065817",
    "ean": "7896256065817",
    "nome": "Biscoito Integral De Arroz",
    "marcas": [
      "Natural Life"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896273904106",
    "ean": "7896273904106",
    "nome": "Arroz 10 Grãos Integral 400g",
    "marcas": [
      "Caldo Bom"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038310197",
    "ean": "7896038310197",
    "nome": "Massa Alimentícia De Arroz Urbano Parafuso 500G",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896273903277",
    "ean": "7896273903277",
    "nome": "Arroz Arbóreo 500g",
    "marcas": [
      "Caldo Bom"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038300013",
    "ean": "7896038300013",
    "nome": "Arroz Sete Grãos+ 1000g",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038351053",
    "ean": "7896038351053",
    "nome": "Urbano Farinha De Arroz Integral 1 kg",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7893500085768",
    "ean": "7893500085768",
    "nome": "Tio João Farinha De Arroz 1 kg",
    "marcas": [
      "Tio João"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7895000318629",
    "ean": "7895000318629",
    "nome": "Arroz Branco Qualita 1Kg",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896256066326",
    "ean": "7896256066326",
    "nome": "Chips De Arroz - Natura Life",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896181709558",
    "ean": "7896181709558",
    "nome": "Flocos De Arroz Caramelizado",
    "marcas": [
      "Da Colônia"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038312191",
    "ean": "7896038312191",
    "nome": "Macarrão Penne Farinha De Arroz - Urbano",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896384100053",
    "ean": "7896384100053",
    "nome": "Arroz Parborizado",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896256065497",
    "ean": "7896256065497",
    "nome": "Chips De Arroz Integral E Milho Sabor Mostarda E Mel",
    "marcas": [
      "Naturalife"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898637354640",
    "ean": "7898637354640",
    "nome": "Coxa De Frango Desossada, Arroz, Feijão E Farofa 370 g",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898637354671",
    "ean": "7898637354671",
    "nome": "Carne Moída, Arroz Integral E Feijão Carioca",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896038306190",
    "ean": "7896038306190",
    "nome": "Macarrão De Arroz",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891331018122",
    "ean": "7891331018122",
    "nome": "Mingau De Aveia E Arroz",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896493140223",
    "ean": "7896493140223",
    "nome": "Arroz Rei Do Sul Longo Fino Tipo 1 5kg",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896735115552",
    "ean": "7896735115552",
    "nome": "Arroz Integral Longo Fino 1kg",
    "marcas": [
      "Saborsul"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7897163401118",
    "ean": "7897163401118",
    "nome": "Arroz Caramelizado 150g",
    "marcas": [
      "Fransili"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896546100051",
    "ean": "7896546100051",
    "nome": "Arroz Branco 1000g",
    "marcas": [
      "Seu Arroz"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896546160024",
    "ean": "7896546160024",
    "nome": "Biscoito De Arroz Com Milho",
    "marcas": [
      "Rampinelli"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_2221672810256",
    "ean": "2221672810256",
    "nome": "Frango Ao Sugo Com Queijo, Arroz Branco E Batata Assada 370 g",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896256042900",
    "ean": "7896256042900",
    "nome": "Snack De Arroz Natural Life Sabor Original 84G",
    "marcas": [
      "Naturallife"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7804635931547",
    "ean": "7804635931547",
    "nome": "Galletitas De Arroz 20g",
    "marcas": [
      "Lider"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_2000000153530",
    "ean": "2000000153530",
    "nome": "Rice Protein - Proteína De Arroz (Suplemento Alimentar Em Pó) 1 kg",
    "marcas": [
      "Growth Supplements"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896070800014",
    "ean": "7896070800014",
    "nome": "Feijão Carioca Tipo 1 Pantera Premium Pacote 1Kg",
    "marcas": [
      "Carioca"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896116900029",
    "ean": "7896116900029",
    "nome": "Feijão Carioca Kicaldo 1kg",
    "marcas": [
      "Kicaldo"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896099100256",
    "ean": "7896099100256",
    "nome": "Feijão Carioca Tipo 1 (Cálcio 62Mg, Ferro 4Mg)",
    "marcas": [
      "5 Estrelas"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896200115346",
    "ean": "7896200115346",
    "nome": "Feijão Carioca Comum Tipo 1 1kg",
    "marcas": [
      "Broto Legal"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896062602008",
    "ean": "7896062602008",
    "nome": "Feijão Carioca 1Kg",
    "marcas": [
      "Solito"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898276600108",
    "ean": "7898276600108",
    "nome": "Feijão Caldo Nobre - Feijão Tradicional 1 kg",
    "marcas": [
      "Comércio De Cereais Good Ltda"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896401100097",
    "ean": "7896401100097",
    "nome": "Feijão Preto S. Máximo Tipo 1 1Kg",
    "marcas": [
      "Maximo"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896006744115",
    "ean": "7896006744115",
    "nome": "Feijão Carioca Camil 1kg",
    "marcas": [
      "Camil",
      "Camil Alimentos S.A."
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7899567209864",
    "ean": "7899567209864",
    "nome": "Feijão Preto Cozido E Temperado 300 g",
    "marcas": [
      "Bordon"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896482100016",
    "ean": "7896482100016",
    "nome": "Feijão Carioca Carunchão 1 Kg",
    "marcas": [
      "Carunchão"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898007290035",
    "ean": "7898007290035",
    "nome": "Feijão Comum Preto 1kg",
    "marcas": [
      "Feijão Da Serra"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898949924197",
    "ean": "7898949924197",
    "nome": "Feijão Premium",
    "marcas": [
      "Vasconcelos"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_00112846",
    "ean": "00112846",
    "nome": "Feijão Preto Combrasil 1 kg",
    "marcas": [
      "Combrasil"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891000584804",
    "ean": "7891000584804",
    "nome": "Sopão Maggi Feijão 213g",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012420",
    "ean": "7891079012420",
    "nome": "Nissin Lámen Sabor Caldo De Feijão 90g",
    "marcas": [
      "Miojo",
      "Nissin"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7895000319008",
    "ean": "7895000319008",
    "nome": "Feijão Preto Tipo 1 Qualitá Pacote 1Kg",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896746911211",
    "ean": "7896746911211",
    "nome": "Feijão Branco 500 g",
    "marcas": [
      "Dásabor"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898257600059",
    "ean": "7898257600059",
    "nome": "Feijão 1 kg",
    "marcas": [
      "Manolinho"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896584300888",
    "ean": "7896584300888",
    "nome": "Feijão Comum Tipo I 1 kg",
    "marcas": [
      "Pegjá"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896584300444",
    "ean": "7896584300444",
    "nome": "Feijão Tipo I 1 kg",
    "marcas": [
      "Saboroso"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898276600122",
    "ean": "7898276600122",
    "nome": "Feijão Caldo Nobre - Classe Preto 1 kg",
    "marcas": [
      "Caldo Nobre"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891095007165",
    "ean": "7891095007165",
    "nome": "Sopão Feijão Kitano Sachê 196G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896273902010",
    "ean": "7896273902010",
    "nome": "Feijão Vermelho 1 kg",
    "marcas": [
      "Caldo Bom"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_0751320209658",
    "ean": "0751320209658",
    "nome": "Discos De Tempê De Feijão Fradinho 220 g",
    "marcas": [
      "Mun"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898253130055",
    "ean": "7898253130055",
    "nome": "Feijão Pérola Extra 1kg",
    "marcas": [
      "Perola"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7908210400616",
    "ean": "7908210400616",
    "nome": "Sopa De Feijão Branco",
    "marcas": [
      "Zerou"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898911410017",
    "ean": "7898911410017",
    "nome": "Caldo De Feijão Com Bacon",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896029003206",
    "ean": "7896029003206",
    "nome": "Feijão Integral",
    "marcas": [
      "Uncle Ben'S"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896064100960",
    "ean": "7896064100960",
    "nome": "Feijão De Corda 500 g",
    "marcas": [
      "Campo Belo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896116900821",
    "ean": "7896116900821",
    "nome": "Feijão Fradinho 1Kg",
    "marcas": [
      "Kicaldo"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898996021535",
    "ean": "7898996021535",
    "nome": "Feijão Fradinho - Premium 1kg",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7897122601931",
    "ean": "7897122601931",
    "nome": "Feijão Carioca Orgânico",
    "marcas": [
      "Vapza"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7897379600022",
    "ean": "7897379600022",
    "nome": "Feijão 2Kg Zamuner",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891150051775",
    "ean": "7891150051775",
    "nome": "Tempero Pó Para Feijão Knorr Pacote 48G 6 Unidades",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891150088696",
    "ean": "7891150088696",
    "nome": "Tempero Pó Para Feijão Knorr Pacote 50G 10 Unidades",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000049235",
    "ean": "7891000049235",
    "nome": "Papinha Caldo De Feijão, Carne E Arroz Naturnes Vidro 170G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000049266",
    "ean": "7891000049266",
    "nome": "Sopinha Beterraba, Feijão E Legumes Naturnes Vidro 115G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000318096",
    "ean": "7891000318096",
    "nome": "Sopa Feijão E Carne Nutren Senior Sachê 40G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7891000332719",
    "ean": "7891000332719",
    "nome": "Papinha Orgânica Carne, Feijão E Legumes Naturnes Vidro 115G",
    "marcas": [
      "Naturnes"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000344965",
    "ean": "7891000344965",
    "nome": "Sopa Feijão Com Mandioquinha Maggi Pacote 71G",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891132007561",
    "ean": "7891132007561",
    "nome": "Sopa Individual Cremosa Caldinho De Feijão Vono Pacote 18G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7894900701517",
    "ean": "7894900701517",
    "nome": "Coca Cola Zero Açúcar 2L",
    "marcas": [
      "Cocacola"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896094910959",
    "ean": "7896094910959",
    "nome": "Adoçante Dietético Líquido 200 mL",
    "marcas": [
      "Zero Cal"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_0011210009530",
    "ean": "0011210009530",
    "nome": "Tabasco Molho De Pimenta Jalapeño 60ml",
    "marcas": [
      "Tabasco"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7894321711171",
    "ean": "7894321711171",
    "nome": "Toddy Original 200g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7897517206086",
    "ean": "7897517206086",
    "nome": "Molho De Tomate Tradicional 300 g",
    "marcas": [
      "Fugini"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7891104393104",
    "ean": "7891104393104",
    "nome": "Adoçante Líquido Sacarina Adocyl Frasco 100Ml",
    "marcas": [
      "Adocyl"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896089012637",
    "ean": "7896089012637",
    "nome": "Pilao Traditional Coffee 250 g",
    "marcas": [
      "Pilão"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896030519611",
    "ean": "7896030519611",
    "nome": "Creme De Ricota Light 200g",
    "marcas": [
      "Tirolez"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891910000197",
    "ean": "7891910000197",
    "nome": "União Refinado 1 kg",
    "marcas": [
      "Tio João",
      "União"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898206500027",
    "ean": "7898206500027",
    "nome": "Açúcar Demerara Native Orgânico (1 Kg)",
    "marcas": [
      "Native"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896894900013",
    "ean": "7896894900013",
    "nome": "Açúcar Refinado Caravelas Pacote 1Kg",
    "marcas": [
      "Caravelas"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7894900680508",
    "ean": "7894900680508",
    "nome": "Refrigerante Lemon Fresh Zero Açúcar Sprite Garrafa 510Ml",
    "marcas": [
      "Sprite"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900701159",
    "ean": "7894900701159",
    "nome": "Refrigerante Sem Açúcar Coca Cola Lata 310Ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891098001504",
    "ean": "7891098001504",
    "nome": "Chá De Erva Doce 20 g",
    "marcas": [
      "Leão"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_00844903",
    "ean": "00844903",
    "nome": "Citrus Zero Açucar Adicionado 350ml",
    "marcas": [
      "Schweppes"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896181709244",
    "ean": "7896181709244",
    "nome": "&Quot;Paçoquinha&Quot; Com Açúcar Mascavo 210 g",
    "marcas": [
      "Dacolônia"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896181710202",
    "ean": "7896181710202",
    "nome": "Pasta De Amendoim Dacolônia Amendo Power Zero Açúcar 500g",
    "marcas": [
      "Dacolônia"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7897594100086",
    "ean": "7897594100086",
    "nome": "Bananinha Sem Adição De Açúcares 200g",
    "marcas": [
      "Tachao De Ubatuba"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898939072600",
    "ean": "7898939072600",
    "nome": "Pasta De Amendoim Integral 1 kg",
    "marcas": [
      "Power1One"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891030300207",
    "ean": "7891030300207",
    "nome": "Mistura Láctea Condensada 395 g",
    "marcas": [
      "Mococa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891991001373",
    "ean": "7891991001373",
    "nome": "Refrigerante De Guaraná De Baixa Caloria 2 L",
    "marcas": [
      "Ambev"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891042000201",
    "ean": "7891042000201",
    "nome": "Lipton Ice Tea 1,5L Limao 1.5l",
    "marcas": [
      "Lipton"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891008121728",
    "ean": "7891008121728",
    "nome": "Talento Avelãs 85 g / 2.99 oz",
    "marcas": [
      "Garoto",
      "Talento"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891991016124",
    "ean": "7891991016124",
    "nome": "Refrigerante Guaraná Zero Açúcar Antarctica Garrafa 200Ml",
    "marcas": [
      "Guaraná Antarctica"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900701609",
    "ean": "7894900701609",
    "nome": "Refrigerante Sem Açúcar Coca Cola Garrafa 600Ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891962065885",
    "ean": "7891962065885",
    "nome": "Biscoito Recheado Sabor Morango 108 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891008124026",
    "ean": "7891008124026",
    "nome": "Chocolate Meio Amargo Garoto Pacote 80G",
    "marcas": [
      "Garoto"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962027395",
    "ean": "7891962027395",
    "nome": "Chocottone 400 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000402931",
    "ean": "7891000402931",
    "nome": "Choco Biscuit Sabor Chocolate Ao Leite 78 g (9 biscoitos)",
    "marcas": [
      "Garoto"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896292010000",
    "ean": "7896292010000",
    "nome": "Magro Com Stevia Adoçante Dietético 65 mL",
    "marcas": [
      "Lightsweet",
      "Magro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_0751320145147",
    "ean": "0751320145147",
    "nome": "Paçocão Caseiro Com Pouco Açúcar Mascavo 90g",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896461300048",
    "ean": "7896461300048",
    "nome": "Pipoca Torrada Doce 150g",
    "marcas": [
      "Cegonha"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167021020",
    "ean": "7891167021020",
    "nome": "Sardinhas C/Molho De Tomate Gdc 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7895800201503",
    "ean": "7895800201503",
    "nome": "Goma De Mascar Morango Zero Açúcar Trident Envelope 8G 5 Unidades",
    "marcas": [
      "Trident"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7895800304235",
    "ean": "7895800304235",
    "nome": "Goma De Mascar Sabor Artificial De Canela 8",
    "marcas": [
      "Mondelez International",
      "Trident"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898934982683",
    "ean": "7898934982683",
    "nome": "Chocolate Com Açúcar De Coco 70g",
    "marcas": [
      "Only4"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891097010781",
    "ean": "7891097010781",
    "nome": "Iogurte Integral Morango Batavo Pedaços Pote 450G 450 g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7622300847791",
    "ean": "7622300847791",
    "nome": "Goma De Mascar Menta 25.2g",
    "marcas": [
      "Trident"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891097000270",
    "ean": "7891097000270",
    "nome": "Iogurte Grego Tradicional Batavo Pote 100G 450g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891151031141",
    "ean": "7891151031141",
    "nome": "Freegells Gum 120 g, 15 unidades",
    "marcas": [
      "Freegells"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891008042023",
    "ean": "7891008042023",
    "nome": "Cacau Em Pó 200 g",
    "marcas": [
      "Garoto"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896283002434",
    "ean": "7896283002434",
    "nome": "Granola Zero Açúcar Superfrutas 250 g",
    "marcas": [
      "Jasmine"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_78922327",
    "ean": "78922327",
    "nome": "Goma De Mascar Menta Fresca Zero Açúcar Mentos Pure Fresh Pote 56G 28 Unidades",
    "marcas": [
      "Mentos"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7895800309780",
    "ean": "7895800309780",
    "nome": "Goma De Mascar Melancia Zero Açúcar Trident Envelope 8G 5 Unidades",
    "marcas": [
      "Trident"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7622210570376",
    "ean": "7622210570376",
    "nome": "Goma De Mascar Melancia Mint Zero Açúcar Trident X Senses Pote 54G 28 Unidades",
    "marcas": [
      "Trident"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7622210573483",
    "ean": "7622210573483",
    "nome": "Goma De Mascar Blueberry Zero Açúcar 25.2g",
    "marcas": [
      "Trident"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7622210696632",
    "ean": "7622210696632",
    "nome": "Refresco Em Pó Laranja Zero Açúcar Clight Pacote 8G",
    "marcas": [
      "Clight"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891132000999",
    "ean": "7891132000999",
    "nome": "Refresco Em Pó Laranja Zero Açúcar Mid Pacote 10G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891167021082",
    "ean": "7891167021082",
    "nome": "Sardinha Com Ervas Gomes Da Costa Lata 84G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898051681001",
    "ean": "7898051681001",
    "nome": "Açúcar Demerara Orgânico Itajá Pacote 1Kg",
    "marcas": [
      "Itaja"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896885500130",
    "ean": "7896885500130",
    "nome": "Bananinha Sem Adição De Açúcar Paraibuna 200G",
    "marcas": [
      "Paraibuna Bananinha"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898651400569",
    "ean": "7898651400569",
    "nome": "Chá Verde Jabuticaba Zero Açúcar Yaí Caixa 1L",
    "marcas": [
      "Yaí"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896001260665",
    "ean": "7896001260665",
    "nome": "Gelatina Pó Abacaxi Zero Açúcar Linea Caixa 10G",
    "marcas": [
      "Linea"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891962035451",
    "ean": "7891962035451",
    "nome": "Biscoito Champanhe 150 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891991000819",
    "ean": "7891991000819",
    "nome": "Soda Limonada Zero Açúcar",
    "marcas": [
      "Soda Antarctica"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898142863910",
    "ean": "7898142863910",
    "nome": "Brigadeiro 80 g",
    "marcas": [
      "Arcor"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896653706047",
    "ean": "7896653706047",
    "nome": "Creme De Avelã Com Cacau 150g",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896051125433",
    "ean": "7896051125433",
    "nome": "Iogurte Líquido Light De Morango Fit Itambé 180G",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7893000394209",
    "ean": "7893000394209",
    "nome": "Cremosa Com Sal 500 g",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7893000383005",
    "ean": "7893000383005",
    "nome": "Margarina Sem Sal 500g",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_8410770022058",
    "ean": "8410770022058",
    "nome": "Sopa Juliana 100 g",
    "marcas": [
      "Productos Trevijano S.L.",
      "Trevijano"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904271528",
    "ean": "7894904271528",
    "nome": "Margarina Com Sal E Creme De Leite 500g",
    "marcas": [
      "Delicia"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891095002207",
    "ean": "7891095002207",
    "nome": "Pipoca Para Micro Ondas Natural Com Sal Yoki Pacote 100G",
    "marcas": [
      "Goku"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891152507799",
    "ean": "7891152507799",
    "nome": "Adorita Tropical 250 g",
    "marcas": [
      "Adorita",
      "M. Dias Branco"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7893000079298",
    "ean": "7893000079298",
    "nome": "Margarina Cremosa Com Sal Qualy Pote 1Kg Embalagem Econômica",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515555337",
    "ean": "7891515555337",
    "nome": "Margarina Original Com Sal 500g",
    "marcas": [
      "Becel"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896331100310",
    "ean": "7896331100310",
    "nome": "Manteiga Aviação 200g",
    "marcas": [
      "Aviação",
      "Laticínios Gonçalves Salles"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904571956",
    "ean": "7894904571956",
    "nome": "Doriana Cremosa Com Sal 500g",
    "marcas": [
      "Margarina"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891515537531",
    "ean": "7891515537531",
    "nome": "Margarina Cremosa Com Sal 250g",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896256601275",
    "ean": "7896256601275",
    "nome": "Manteiga Com Sal 200g",
    "marcas": [
      "Tirol"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7790072001014",
    "ean": "7790072001014",
    "nome": "Sal Fina 500 g",
    "marcas": [
      "Celusal",
      "Timbo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904271511",
    "ean": "7894904271511",
    "nome": "Margarina Com Sal E Creme De Leite Delícia Pote 1Kg Embalagem Econômica",
    "marcas": [
      "Delicia"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515901066",
    "ean": "7891515901066",
    "nome": "Margarina Cremosa Com Sal Claybom Pote 250G",
    "marcas": [
      "Claybom"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904271498",
    "ean": "7894904271498",
    "nome": "Margarina Com Sal Cremosy 500g",
    "marcas": [
      "Seara",
      "Cremosy"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891097001338",
    "ean": "7891097001338",
    "nome": "Manteiga Extra Com Sal Président Gastronomique Pote 200G",
    "marcas": [
      "Président"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891097012686",
    "ean": "7891097012686",
    "nome": "Manteiga Extra Com Sal 200g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904271566",
    "ean": "7894904271566",
    "nome": "Margarina Sem Sal Com Creme De Leite Delícia Pote 500G",
    "marcas": [
      "Delicia"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891999862501",
    "ean": "7891999862501",
    "nome": "Manteiga E Margarina Com Sal 500g",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896213006242",
    "ean": "7896213006242",
    "nome": "Biscoito Água E Sal Tradicional Vitarella Pacote 350G",
    "marcas": [
      "Vitarella"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7894904574780",
    "ean": "7894904574780",
    "nome": "Doriana Extra Cremosa Com Sal",
    "marcas": [
      "Doriana"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898215151470",
    "ean": "7898215151470",
    "nome": "Manteiga Sem Sal",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896058258837",
    "ean": "7896058258837",
    "nome": "Biscoito Água E Sal 345g",
    "marcas": [
      "Triunfo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_78903180",
    "ean": "78903180",
    "nome": "Sal Cisne Refinado Extra 100 g",
    "marcas": [
      "Cisne"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891999011039",
    "ean": "7891999011039",
    "nome": "Margarina Vigor 500G Com Sal 500 g",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896110194363",
    "ean": "7896110194363",
    "nome": "Sal Moído Iodado 1 kg",
    "marcas": [
      "Almirante"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896110100043",
    "ean": "7896110100043",
    "nome": "Sal Marinho Lebre",
    "marcas": [
      "Sal Lebre"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896552906692",
    "ean": "7896552906692",
    "nome": "Manteiga De Coco Com Sal Qualicoco Sabor Manteiga 200 g",
    "marcas": [
      "Qualicôco"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898649351361",
    "ean": "7898649351361",
    "nome": "Tortilha Chips De Milho Com Sal Frontera Tex Mex Pacote 125G",
    "marcas": [
      "Frontera"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515410315",
    "ean": "7891515410315",
    "nome": "Claybom Cremosa Com Sal - Margarina 50% De Gordura 1 kg",
    "marcas": [
      "Perdigão"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891025123149",
    "ean": "7891025123149",
    "nome": "Manteiga Extra Com Sal Danone 200 G",
    "marcas": [
      "Danone"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898403780062",
    "ean": "7898403780062",
    "nome": "Manteiga De Primeira Qualidade Com Sal 500g",
    "marcas": [
      "Betânia"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891515555245",
    "ean": "7891515555245",
    "nome": "Margarina Original Com Sal Becel Pote 250G",
    "marcas": [
      "Becel"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904271535",
    "ean": "7894904271535",
    "nome": "Margarina Com Sal E Creme De Leite Delícia Pote 250G",
    "marcas": [
      "Delícia"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7894904271573",
    "ean": "7894904271573",
    "nome": "Margarina Sabor Manteiga Com Sal 500g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896051135111",
    "ean": "7896051135111",
    "nome": "Manteiga Extra Sem Sal Itambé 200G",
    "marcas": [
      "Top Line"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896331100143",
    "ean": "7896331100143",
    "nome": "Manteiga Extra Com Sal Aviação 200G",
    "marcas": [
      "Aviacao"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891150072824",
    "ean": "7891150072824",
    "nome": "Caldo Tablete Galinha Knorr Zero Sal Caixa 48G 6 Unidades",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515520656",
    "ean": "7891515520656",
    "nome": "Margarina Sem Sal Qualy Vita Pote 500G",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894904271481",
    "ean": "7894904271481",
    "nome": "Margarina Com Sal Cremosy Pote 1Kg Embalagem Econômica",
    "marcas": [
      "Cremosy"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7891095023134",
    "ean": "7891095023134",
    "nome": "Batata Frita Ondulada Com Sal Yoki Yokitos Pacote 45G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891097015519",
    "ean": "7891097015519",
    "nome": "Manteiga Sem Sal Batavo 200G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7897951610623",
    "ean": "7897951610623",
    "nome": "Manteiga Extra Com Sal Serramar Pote 200G",
    "marcas": [
      "Serramar"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896030519659",
    "ean": "7896030519659",
    "nome": "Manteiga De Primeira Qualidade Sem Sal Tirolez Pote 200G",
    "marcas": [
      "Tirolez"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898635640202",
    "ean": "7898635640202",
    "nome": "Sal De Parrilla Para Churrasco Br Spices Frasco 330G",
    "marcas": [
      "Br Spices"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898924049372",
    "ean": "7898924049372",
    "nome": "Manteiga Reliquia 500G C/ Sal",
    "marcas": [
      "Relíquia Da Canastra"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896079502544",
    "ean": "7896079502544",
    "nome": "Manteiga Extra Sem Sal 200 g",
    "marcas": [
      "Elegê"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896058258691",
    "ean": "7896058258691",
    "nome": "Ågua E Sal Aymore",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896279600293",
    "ean": "7896279600293",
    "nome": "Coamo Margarina Dualis 500g",
    "marcas": [
      "Coamo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7892840814724",
    "ean": "7892840814724",
    "nome": "Amendoim Japones 145G Elma Chips M",
    "marcas": [
      "Elma Chips"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7892840820633",
    "ean": "7892840820633",
    "nome": "Lays Sal Marinho 68G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896275981952",
    "ean": "7896275981952",
    "nome": "Manteiga Extra Sem Sal 200G Fort Atacadista",
    "marcas": [
      "Frimesa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_5601216120152",
    "ean": "5601216120152",
    "nome": "Azeite Ext Virgem Andorinha 500ml",
    "marcas": [
      "Andorinha"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601252231164",
    "ean": "5601252231164",
    "nome": "Azeite De Oliva Extravirgem Clássico 500 ml",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891167000001",
    "ean": "7891167000001",
    "nome": "Azeite De Oliva 500 ml",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_8007150906086",
    "ean": "8007150906086",
    "nome": "Azeite It Ev Verd500 500 ml",
    "marcas": [
      "Olitalia"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601216120114",
    "ean": "5601216120114",
    "nome": "Azeite Andorinha Vd. Vermelho 500ml",
    "marcas": [
      "Andorinha"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601855121008",
    "ean": "5601855121008",
    "nome": "Azeite De Oliva Extra Virgem 500 ml",
    "marcas": [
      "Terras De Camões"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601252106103",
    "ean": "5601252106103",
    "nome": "Azeite Galo Vermelho 500Ml",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601216120053",
    "ean": "5601216120053",
    "nome": "Andorinha Portugal 250 ml",
    "marcas": [
      "Andorinha"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_5601252102433",
    "ean": "5601252102433",
    "nome": "Gallo Portugal Azeite De Oliva Extra Virgem 250",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7808760900072",
    "ean": "7808760900072",
    "nome": "Azeite De Oliva Extra Virgem Chileno Olave Premium Blend Vidro 500Ml",
    "marcas": [
      "Andorinha"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891962058733",
    "ean": "7891962058733",
    "nome": "Toast Cereale Azeite Bauducco 128g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601252102815",
    "ean": "5601252102815",
    "nome": "Azeite De Oliva Extra Virgem Reserva Português Gallo Vidro 500Ml",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_8410179000039",
    "ean": "8410179000039",
    "nome": "Condimento De Azeite De Oliva Com Casquinha De Limão Borges Garrafa 200Ml",
    "marcas": [
      "Borges"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898073359100",
    "ean": "7898073359100",
    "nome": "Blend De Azeite De Oliva Extra Virgem",
    "marcas": [
      "Lisboa"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601252110841",
    "ean": "5601252110841",
    "nome": "Clássico 100% Azeite De Oliva Extra Virgem",
    "marcas": [
      "Galo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_6194017200172",
    "ean": "6194017200172",
    "nome": "Azeite De Oliva Extra Virgem Tunisiano Rahma Vidro 500Ml",
    "marcas": [
      "Rahma"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7804633010091",
    "ean": "7804633010091",
    "nome": "Azeite De Oliva Extra Virgem Chileno Deleyda Premium Vidro 500Ml",
    "marcas": [
      "Deleyda"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601252118533",
    "ean": "5601252118533",
    "nome": "Azeite Ancestral 400Ml",
    "marcas": [
      "Gourmet"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891103204371",
    "ean": "7891103204371",
    "nome": "Azeite De Oliva Extravirgem 500 ml",
    "marcas": [
      "Carrefour Classic'"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5604123002696",
    "ean": "5604123002696",
    "nome": "Azeite Quinta Do Crasto Selection 500ml",
    "marcas": [
      "Quinta Do Castro"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601024022013",
    "ean": "5601024022013",
    "nome": "Azeite Ext Virgem Selec Andorinha 500 ml",
    "marcas": [
      "Andorinha"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891000103104",
    "ean": "7891000103104",
    "nome": "Tempero Maggi Base 25G Frango Azeite 25 g",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891000103692",
    "ean": "7891000103692",
    "nome": "Tempero Maggi Base 25G Tomate E Azeite",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896760960462",
    "ean": "7896760960462",
    "nome": "Óleo Misto De Soja E Azeite De Oliva 5% 500 ml",
    "marcas": [
      "Quinta Da Boa Vista"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896975000441",
    "ean": "7896975000441",
    "nome": "Azeite De Dendê",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896975000472",
    "ean": "7896975000472",
    "nome": "Molho De Alho 150ml",
    "marcas": [
      "Tempemar"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_8410010811749",
    "ean": "8410010811749",
    "nome": "Azeite De Oliva Tipo Único Clássico Espanhol Carbonell Lata 500Ml",
    "marcas": [
      "Carbonell"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898350130835",
    "ean": "7898350130835",
    "nome": "Azeite De Oliva Vila Real Tipo Virgem",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601252115464",
    "ean": "5601252115464",
    "nome": "Portuguese Soul 500 ml",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_8429671350061",
    "ean": "8429671350061",
    "nome": "Azeite De Oliva Extra Virgem Espanhol Pons Vidro 500Ml",
    "marcas": [
      "Pons"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_8410179000084",
    "ean": "8410179000084",
    "nome": "Condimento De Azeite De Oliva Com Alecrim Borges Garrafa 200Ml",
    "marcas": [
      "Alecrim"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898392380397",
    "ean": "7898392380397",
    "nome": "Óleo De Linhaça Marrom 250 ml",
    "marcas": [
      "Pazze"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898626190495",
    "ean": "7898626190495",
    "nome": "Óleo De Coco 900 ml",
    "marcas": [
      "Vitorena"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_8410086000085",
    "ean": "8410086000085",
    "nome": "Azeite De Oliva Extra Virgem Espanhol Ybarra Intenso Vidro 500Ml",
    "marcas": [
      "Ybarra"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5601855106074",
    "ean": "5601855106074",
    "nome": "Coimbra Azeite",
    "marcas": [
      "Coimbra"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7804633010152",
    "ean": "7804633010152",
    "nome": "Deleyda 250ml",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898152997131",
    "ean": "7898152997131",
    "nome": "Azeite De Oliva Extravirgem Com Aroma Natural De Pimenta Vermelha 250 ml",
    "marcas": [
      "Paganini"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_8410010813989",
    "ean": "8410010813989",
    "nome": "Azeite De Oliva Tipo Único Clássico Espanhol Carbonell Vidro 500Ml",
    "marcas": [
      "Carbonell"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891167012073",
    "ean": "7891167012073",
    "nome": "Atum Sólido Em Azeite De Oliva Gomes Da Costa Caixa 120G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898953831054",
    "ean": "7898953831054",
    "nome": "Azeite De Oliva Extra Virgem Koroneiki 250ml",
    "marcas": [
      "Prosperato"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_5204766001645",
    "ean": "5204766001645",
    "nome": "Azeite De Oliva Extra Virgem Grego Apollo Vidro 500Ml",
    "marcas": [
      "Apollo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_0769248001100",
    "ean": "0769248001100",
    "nome": "Azeite De Oliva Extra Virgem Grego Mykonos Vidro 500Ml",
    "marcas": [
      "Mykonos"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7804622380013",
    "ean": "7804622380013",
    "nome": "Azeite De Oliva Extra Virgem Chileno Santiago Premium Vidro 500Ml",
    "marcas": [
      "Santiago"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7804622380341",
    "ean": "7804622380341",
    "nome": "Azeite De Oliva Extra Virgem Orgânico Chileno O Live Co Vidro 500Ml",
    "marcas": [
      "O Live"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7804633010015",
    "ean": "7804633010015",
    "nome": "Azeite De Oliva Extra Virgem Clássico Chileno Deleyda Vidro 500Ml",
    "marcas": [
      "Deleyda"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7804633010183",
    "ean": "7804633010183",
    "nome": "Azeite De Oliva Extra Virgem Chileno Deleyda Fine Selection Vidro 500Ml",
    "marcas": [
      "Deleyda"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891042101670",
    "ean": "7891042101670",
    "nome": "Azeite Gallo Português Tipo Único",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891167014039",
    "ean": "7891167014039",
    "nome": "Salada Com Atum, Batata Doce E Azeite Gomes Da Costa Lata 140G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167022058",
    "ean": "7891167022058",
    "nome": "Filé De Atum Em Pedaços Em Azeite De Oliva Gomes Da Costa Caixa 84G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891167022065",
    "ean": "7891167022065",
    "nome": "Filé De Atum Em Pedaços Em Azeite De Oliva Com Alho Gomes Da Costa Caixa 84G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896256066005",
    "ean": "7896256066005",
    "nome": "Vinagre De Mac�",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048200051",
    "ean": "7896048200051",
    "nome": "Vinagre De Álcool 750ml",
    "marcas": [
      "Castelo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898959855412",
    "ean": "7898959855412",
    "nome": "Vinagre De Fruta Maça",
    "marcas": [
      "Orgánico Brasil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048200105",
    "ean": "7896048200105",
    "nome": "Vinagre De Maçã Pet Castelo 750Ml",
    "marcas": [
      "Castelo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898366933130",
    "ean": "7898366933130",
    "nome": "Vinagre De Fruta - Palmeiron",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898908593617",
    "ean": "7898908593617",
    "nome": "Vinagre De Maçã 400ml",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898912678072",
    "ean": "7898912678072",
    "nome": "São Francisco Vinagre Orgânico De Maçã 4,2% 500ml",
    "marcas": [
      "São Francisco"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898908593020",
    "ean": "7898908593020",
    "nome": "Vinagre De Fruta Maçã",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896383300096",
    "ean": "7896383300096",
    "nome": "Vinagre Branco",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_4906309678901",
    "ean": "4906309678901",
    "nome": "Vinagre De Vinho Tinto 750ml",
    "marcas": [
      "Único"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896089325089",
    "ean": "7896089325089",
    "nome": "Vinagre De Vinho Tinto Peixe 750 ml",
    "marcas": [
      "Peixe"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891031112403",
    "ean": "7891031112403",
    "nome": "Pepinos Em Vinagre 300 g",
    "marcas": [
      "Tauá"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048284778",
    "ean": "7896048284778",
    "nome": "Vinagre De Álcool Colorido 750ml",
    "marcas": [
      "Castelo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898286190064",
    "ean": "7898286190064",
    "nome": "Vinagre De Frutas Maçã 750ml",
    "marcas": [
      "Maratá"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7892840818005",
    "ean": "7892840818005",
    "nome": "Lays Sal E Vinagre 80G Elma Chips M",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048284693",
    "ean": "7896048284693",
    "nome": "Vinagre Castelo 750 ml",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896093510013",
    "ean": "7896093510013",
    "nome": "Vinagre 500 ml",
    "marcas": [
      "Molhi"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896573360350",
    "ean": "7896573360350",
    "nome": "Mostarda 350 g",
    "marcas": [
      "Hiper Massas Ltda",
      "Mrs Taste",
      "Smartdiet Argentina S.A.S"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048255013",
    "ean": "7896048255013",
    "nome": "Vinagre De Álcool Aromatizado Limão 750ml",
    "marcas": [
      "Castelo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_0380002656178",
    "ean": "0380002656178",
    "nome": "Salgadinho De Batata Sal E Vinagre Pringles Tubo 158G",
    "marcas": [
      "Pringles"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048284075",
    "ean": "7896048284075",
    "nome": "Vinagre Balsâmico Castelo Tradizionale Vidro 500Ml",
    "marcas": [
      "Castelo"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898097891242",
    "ean": "7898097891242",
    "nome": "Vinagre Balsâmico Tradicional Orgânico Uvasó Vidro 250Ml",
    "marcas": [
      "Uva So"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898152990392",
    "ean": "7898152990392",
    "nome": "Vinagre Balsâmico Modena Paganini Vidro 500Ml",
    "marcas": [
      "Paganini"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898949840480",
    "ean": "7898949840480",
    "nome": "Vinagre Balsâmico Modena Toscano Frasco 250Ml",
    "marcas": [
      "Toscano"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896196080307",
    "ean": "7896196080307",
    "nome": "Vinagre Balsâmico Di Modena La Pastina Gourmet Vidro 500Ml",
    "marcas": [
      "La Pastina"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896091301217",
    "ean": "7896091301217",
    "nome": "Vinagre De Cereal Arroz Miyako Frasco 750Ml",
    "marcas": [
      "Miyako"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898152991474",
    "ean": "7898152991474",
    "nome": "Vinagre Balsâmico Modena Envelhecido Paganini Vidro 250Ml",
    "marcas": [
      "Paganini"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898152996875",
    "ean": "7898152996875",
    "nome": "Vinagre De Vinho Branco Paganini Vidro 500Ml",
    "marcas": [
      "Paganini"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898366933109",
    "ean": "7898366933109",
    "nome": "Vinagre De Vinho Tinto - Palmeiron",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_0618341317291",
    "ean": "0618341317291",
    "nome": "Montes Verdes Vinagre De Fruta 500ml",
    "marcas": [
      "Montes Verdes"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898625131741",
    "ean": "7898625131741",
    "nome": "Vinagre Balsamico",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898586667686",
    "ean": "7898586667686",
    "nome": "Vinagre De Maçã Orgânico Mundo Verde 500ml",
    "marcas": [
      "Mundo Verde"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896579950241",
    "ean": "7896579950241",
    "nome": "Vinagre Balsâmico Orgânico Uniagro 500Ml",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898922618167",
    "ean": "7898922618167",
    "nome": "Vinagre Castelo Maçã",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898286190149",
    "ean": "7898286190149",
    "nome": "Vinagre De Álcool Maratá 750 ml",
    "marcas": [
      "Maratá"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7895000524556",
    "ean": "7895000524556",
    "nome": "Vinagre De Maçã Orgânico Casas Pedro 500ml",
    "marcas": [
      "Casas Pedro"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896048285621",
    "ean": "7896048285621",
    "nome": "Tem Pero De Vinagre",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7804651860876",
    "ean": "7804651860876",
    "nome": "Vinagre De Manzana",
    "marcas": [
      "Manare"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896297910688",
    "ean": "7896297910688",
    "nome": "Vinagre De Alcool 900ml",
    "marcas": [
      "Chemim"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896013105992",
    "ean": "7896013105992",
    "nome": "Vinagre De Fruta (Maçã) 750ml",
    "marcas": [
      "Minhoto"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7802351002626",
    "ean": "7802351002626",
    "nome": "Chucrut En Vinagre",
    "marcas": [
      "Lider"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896048130631",
    "ean": "7896048130631",
    "nome": "Vinagre De Álcool Vitalia",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_4896473009666",
    "ean": "4896473009666",
    "nome": "Vinagre De Álcool Minhoto 500ml",
    "marcas": [
      "Minhoto"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896013100966",
    "ean": "7896013100966",
    "nome": "Vinagre Minhoto De Álcool 500 ml",
    "marcas": [
      "Minhoto"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898286190132",
    "ean": "7898286190132",
    "nome": "Vinagre De Álcool Marata 500Ml",
    "marcas": [
      "Maratá"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894000010014",
    "ean": "7894000010014",
    "nome": "Maizena 200 g",
    "marcas": [
      "Duryea",
      "Maizena",
      "Unilever"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896490288812",
    "ean": "7896490288812",
    "nome": "Amido De Milho",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891095015047",
    "ean": "7891095015047",
    "nome": "Amido De Milho Yoki Caixa 200G",
    "marcas": [
      "Mais Vita"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891095003570",
    "ean": "7891095003570",
    "nome": "Amido De Milho Yoki Caixa 500G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7897042700264",
    "ean": "7897042700264",
    "nome": "Sequilhos Clássicos 350 g",
    "marcas": [
      "Nazinha"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891150077072",
    "ean": "7891150077072",
    "nome": "Amido De Milho Maizena Vita Caixa 200G",
    "marcas": [
      "Maizena"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891150077089",
    "ean": "7891150077089",
    "nome": "Amido De Milho Maizena Vita Caixa 500G",
    "marcas": [
      "Maizena"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7896327512615",
    "ean": "7896327512615",
    "nome": "Amido De Milho Apti",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894000048703",
    "ean": "7894000048703",
    "nome": "Amido De Milho Maizena Tradicional 200g",
    "marcas": [
      "Maizena"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7895000349814",
    "ean": "7895000349814",
    "nome": "Amido De Milho Qualitá 200g",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_11131843",
    "ean": "11131843",
    "nome": "Amido De Milho Maizena 200G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896022204204",
    "ean": "7896022204204",
    "nome": "Bolo De Fubá Renata",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896005279182",
    "ean": "7896005279182",
    "nome": "Dona Benta Bolo Fuba Com Eva Doce 500 g",
    "marcas": [
      "Dona Benta"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896496921133",
    "ean": "7896496921133",
    "nome": "Fubá Orgânico Integral 500g",
    "marcas": [
      "Mãe Terra"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898186560929",
    "ean": "7898186560929",
    "nome": "Fubá De Milho 400g",
    "marcas": [
      "Ecobio"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891095200450",
    "ean": "7891095200450",
    "nome": "Fubá Mimoso Yoki Pacote 500G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891095200184",
    "ean": "7891095200184",
    "nome": "Fubá De Milho Pré Cozido Yoki Pacote 500G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7891095200467",
    "ean": "7891095200467",
    "nome": "Fubá Mimoso Yoki Pacote 1Kg",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7898409951329",
    "ean": "7898409951329",
    "nome": "Mistura Para Bolo Aerado Fubá Fleischmann Sachê 450G",
    "marcas": [
      "Ab Brasil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7898115900161",
    "ean": "7898115900161",
    "nome": "Bolo Suavipan Light Fuba S/Adicao Acucar",
    "marcas": [
      "Suavipan"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898331012815",
    "ean": "7898331012815",
    "nome": "Mistura Para Bolo Aerado Fubá Fleischmann Sachê 390G",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896903813624",
    "ean": "7896903813624",
    "nome": "Biscoito Broinha Fubá Casa Victoriana Pote 120G",
    "marcas": [
      "Casa Victoriana"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898066623119",
    "ean": "7898066623119",
    "nome": "Bolo Fubá Fin Arte Pote 300G",
    "marcas": [
      "Fin Arte"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896996500043",
    "ean": "7896996500043",
    "nome": "Fubá Duraci",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896101062947",
    "ean": "7896101062947",
    "nome": "Com Brasil Fuba",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896016500114",
    "ean": "7896016500114",
    "nome": "Fubá Milho Branco 500 g",
    "marcas": [
      "Granfino"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898066623218",
    "ean": "7898066623218",
    "nome": "Bolo De Fubá Zero",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_6898095200450",
    "ean": "6898095200450",
    "nome": "Fubá Mimoso 500 g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7892300002999",
    "ean": "7892300002999",
    "nome": "Fubá",
    "marcas": [
      "Sinhá"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898366390421",
    "ean": "7898366390421",
    "nome": "Broinha De Fubá",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7892122014071",
    "ean": "7892122014071",
    "nome": "Farinha De Fuba",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891965120345",
    "ean": "7891965120345",
    "nome": "Fuba Mimoso",
    "marcas": [
      "Hikari"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898934907389",
    "ean": "7898934907389",
    "nome": "Fubá Milho Mano Velho 500G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896805100525",
    "ean": "7896805100525",
    "nome": "Fubá De Milho Gameleira",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896225710274",
    "ean": "7896225710274",
    "nome": "Fubá De Milho Paulista 400G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896183900298",
    "ean": "7896183900298",
    "nome": "Fuba",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898960982893",
    "ean": "7898960982893",
    "nome": "Fubá Mimoso Da Terrinha",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7622300119621",
    "ean": "7622300119621",
    "nome": "Fermento Royal 100g",
    "marcas": [
      "Royal"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896005279489",
    "ean": "7896005279489",
    "nome": "Fermento Em Pó 100g",
    "marcas": [
      "Dona Benta"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891048040003",
    "ean": "7891048040003",
    "nome": "Fermento Químico Em Pó Dr. Oetker 100G",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896327512967",
    "ean": "7896327512967",
    "nome": "Fermento Apti",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896005271964",
    "ean": "7896005271964",
    "nome": "Fermento Biológico Dona Benta 10G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891048040065",
    "ean": "7891048040065",
    "nome": "Dr. Oetker Fermento Biológico Seco Instantâneo 125g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898409957970",
    "ean": "7898409957970",
    "nome": "Fleischmann Fermento Biológico Seco Instantâneo 125g",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898409951107",
    "ean": "7898409951107",
    "nome": "Fermento Químico Em Pó 250 g",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898331012914",
    "ean": "7898331012914",
    "nome": "Super Fermento Biológico Pó Fleischmann Pacote 13G",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7896005232705",
    "ean": "7896005232705",
    "nome": "Farinha Dona Benta Com Fermento 12/1",
    "marcas": [
      "J. Macêdo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891515972127",
    "ean": "7891515972127",
    "nome": "Bebida Lact Fermento Elege Morango",
    "marcas": [
      "Elege"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896545500012",
    "ean": "7896545500012",
    "nome": "Fermento Biológico Fresco 200g",
    "marcas": [
      "Itaiquara"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896534404710",
    "ean": "7896534404710",
    "nome": "Globo Fermento Em Pó Químico 100g",
    "marcas": [
      "Globo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898416529771",
    "ean": "7898416529771",
    "nome": "Kisabor Fermento Em Pó 100g",
    "marcas": [
      "Kisabor"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898186561032",
    "ean": "7898186561032",
    "nome": "Ecobio Fermento Não Transgênico Para Bolos 100g",
    "marcas": [
      "Ecobio"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898234852174",
    "ean": "7898234852174",
    "nome": "Nita Alimentos Fermento Em Pó Químico Refil 100g",
    "marcas": [
      "Nita Alimentos"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898409950322",
    "ean": "7898409950322",
    "nome": "Fermento Biológico Seco Instantâneo Massa Doce Fleischmann 125g",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896545504515",
    "ean": "7896545504515",
    "nome": "Itaiquara Fermento Biológico Seco Instantâneo 125g",
    "marcas": [
      "Itaiquara"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898224530037",
    "ean": "7898224530037",
    "nome": "Trisanti Fermento Químico Em Pó 100g",
    "marcas": [
      "Trisanti"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896005213926",
    "ean": "7896005213926",
    "nome": "Dona Benta Fermento Biológico Seco Instantâneo Dona Benta Fermix 125g",
    "marcas": [
      "Dona Benta"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_78946996",
    "ean": "78946996",
    "nome": "Leite Fermento Bh",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896545500029",
    "ean": "7896545500029",
    "nome": "Itaiquara Fermento Biológico Fresco 4X15G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898409952159",
    "ean": "7898409952159",
    "nome": "Fleischmann Fermento 500 g",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7897309400296",
    "ean": "7897309400296",
    "nome": "Fermento Biológico Seco Instantâneo Mauri 10 G",
    "marcas": [
      "Ab Brasil Indústri E Comércio De Alinentos Ltda",
      "Mauri"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898409955327",
    "ean": "7898409955327",
    "nome": "Fermento Fresco",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898409952128",
    "ean": "7898409952128",
    "nome": "Fermento Pão Pizza",
    "marcas": [
      "Fleischmann"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891080150241",
    "ean": "7891080150241",
    "nome": "Fermento Biológico Suprema Refor. 4Kg",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7841504000591",
    "ean": "7841504000591",
    "nome": "Fermento Uniferm 500G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896327510833",
    "ean": "7896327510833",
    "nome": "Fermento Químico Em Pó Apti 1Kg",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "kg"
  },
  {
    "id": "ean_7896090082087",
    "ean": "7896090082087",
    "nome": "Farinha De Trigo Com Fermento 35 oz",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891079000229",
    "ean": "7891079000229",
    "nome": "Nissin Lámen Galinha Caipira 85g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079000205",
    "ean": "7891079000205",
    "nome": "Macarrão Instantâneo Lámen Carne Nissin Miojo Pacote 85G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896022200206",
    "ean": "7896022200206",
    "nome": "Macarrão De Sêmola Com Ovos Parafuso Renata Pacote 500G",
    "marcas": [
      "Selmi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079000212",
    "ean": "7891079000212",
    "nome": "Macarrão Instantâneo Lámen Galinha Nissin Miojo Pacote 85G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896005286593",
    "ean": "7896005286593",
    "nome": "Macarrao Parafuso",
    "marcas": [
      "Dona Benta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898951850118",
    "ean": "7898951850118",
    "nome": "Macarrão Parafuso Com Ovos 500 g",
    "marcas": [
      "Barilla"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7896022200879",
    "ean": "7896022200879",
    "nome": "Macarrão Semolado Espaguete 8 Galo Pacote 500G",
    "marcas": [
      "Selmi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896022203634",
    "ean": "7896022203634",
    "nome": "Macarrão De Sêmola De Trigo Grano Duro Integral Penne Superiore 500g",
    "marcas": [
      "Renata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079006016",
    "ean": "7891079006016",
    "nome": "Espaguete Instantâneo 500 g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896063223011",
    "ean": "7896063223011",
    "nome": "Macarrão Tornilho Integral 500g",
    "marcas": [
      "Vitao"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022205539",
    "ean": "7896022205539",
    "nome": "Macarrão De Sêmola Integral 500g",
    "marcas": [
      "Galo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079000250",
    "ean": "7891079000250",
    "nome": "Nissin Lámen Bacon 85g",
    "marcas": [
      "Ajinomoto Alimentos",
      "Nissin",
      "Nissin Lámen"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079011515",
    "ean": "7891079011515",
    "nome": "Yakissoba 500 g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022200756",
    "ean": "7896022200756",
    "nome": "Macarrão De Sêmola Espaguete 8 Galo Pacote 500G",
    "marcas": [
      "Galo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896022200732",
    "ean": "7896022200732",
    "nome": "Macarrão De Sêmola 500g",
    "marcas": [
      "Galo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022200022",
    "ean": "7896022200022",
    "nome": "Macarrão De Sêmola De Trigo Grano Duro Fusilli Renata Superiore Pacote 500G",
    "marcas": [
      "Renata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515600624",
    "ean": "7891515600624",
    "nome": "Macarrão Com Bacon Carbonara Sadia Hot Bowls Pote 300G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079000311",
    "ean": "7891079000311",
    "nome": "Macarrão Instantâneo Lámen Carne Com Tomate Nissin Miojo Pacote 85G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079001004",
    "ean": "7891079001004",
    "nome": "Macarrão Instantâneo Lámen Carne Suave Turma Da Mônica Nissin Miojo Pacote 85G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079011775",
    "ean": "7891079011775",
    "nome": "Macarrão Instantâneo Lámen Picanha Nissin Miojo Pacote 85G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079012963",
    "ean": "7891079012963",
    "nome": "Macarrão Instantâneo Lámen Costela Nissin Miojo Pacote 85G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_8001250152091",
    "ean": "8001250152091",
    "nome": "Macarrão De Sêmola De Trigo Grano Duro Capelli D’Angelo 209 De Cecco Pacote 500G",
    "marcas": [
      "De Cecco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205788040",
    "ean": "7896205788040",
    "nome": "Macarrão De Sêmola Com Ovos Espaguete 8 Adria Pacote 500G",
    "marcas": [
      "Symbol"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205788033",
    "ean": "7896205788033",
    "nome": "Macarrão De Sêmola Com Ovos Espaguetinho 9 Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079011478",
    "ean": "7891079011478",
    "nome": "Hot Sabor Mexicano Com Pimenta Jalapeño 85 g (80 g macarrão + 5 g tempero)",
    "marcas": [
      "Miojo",
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022200268",
    "ean": "7896022200268",
    "nome": "Macarrão Renata 500 g",
    "marcas": [
      "Renata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012918",
    "ean": "7891079012918",
    "nome": "Cup Noodles Verduras 67 g",
    "marcas": [
      "Cup Noodles",
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022202606",
    "ean": "7896022202606",
    "nome": "Macarrão Linguine Gran Duro Superiore - Renata - Renata - Renata - Renata",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898951850064",
    "ean": "7898951850064",
    "nome": "Macarrão Com Ovos Espaguete 8 Barilla Pacote 500G",
    "marcas": [
      "Barilla"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7898994769026",
    "ean": "7898994769026",
    "nome": "Macarrão Instantâneo Sabor Carne Maruchan 79 g",
    "marcas": [
      "Maruchan"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079011805",
    "ean": "7891079011805",
    "nome": "Miojo",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022200275",
    "ean": "7896022200275",
    "nome": "Macarrão Espaguetinho 9",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898994769019",
    "ean": "7898994769019",
    "nome": "Macarrão Instantâneo Sabor Galinha Caipira 1 pacote",
    "marcas": [
      "Maruchan"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896022205522",
    "ean": "7896022205522",
    "nome": "Macarrao Integral",
    "marcas": [
      "Galo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896080843025",
    "ean": "7896080843025",
    "nome": "Macarrão Parafuso 400g",
    "marcas": [
      "Liane"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000327935",
    "ean": "7895000327935",
    "nome": "Macarrão De Sêmola Com Ovos Espaguete Qualitá Pacote 500g",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079008058",
    "ean": "7891079008058",
    "nome": "Cup Noodles Legumes 64 g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012758",
    "ean": "7891079012758",
    "nome": "Cup Noodles Calabresa 68 g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891152223125",
    "ean": "7891152223125",
    "nome": "Macarrão Argola 500g",
    "marcas": [
      "Fortaleza"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7894000080697",
    "ean": "7894000080697",
    "nome": "Knorr Sopa De Carne Com + Macarrão 75g",
    "marcas": [
      "Knorr",
      "Unilever Brasil"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000319060",
    "ean": "7895000319060",
    "nome": "Qualitá Macarrão Instantâneo Carne 85g",
    "marcas": [
      "Qualitá",
      "Pão De Açúcar"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000319077",
    "ean": "7895000319077",
    "nome": "Qualitá Macarrão Instantâneo Legumes 85g",
    "marcas": [
      "Qualitá",
      "Pão De Açúcar"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000331833",
    "ean": "7895000331833",
    "nome": "Qualitá Macarrão Instantâneo 4 Queijos 85g",
    "marcas": [
      "Qualitá",
      "Pão De Açúcar"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022201289",
    "ean": "7896022201289",
    "nome": "Renata Superiore Tagliarini 500 g",
    "marcas": [
      "Renata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896205774203",
    "ean": "7896205774203",
    "nome": "Macarrão Instantâneo 85 g",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079000427",
    "ean": "7891079000427",
    "nome": "Talharim Sabor Bolonhesa 90g de Macarrão + 9g Tempero",
    "marcas": [
      "Nissin Miojo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896021314683",
    "ean": "7896021314683",
    "nome": "Massa De Arroz (Macarrão) 500g",
    "marcas": [
      "Amália"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000483730",
    "ean": "7895000483730",
    "nome": "Macarrão Com Queijo Tipo Mac & Cheese Sabor Cheddar E Bacon 95 g",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896080830704",
    "ean": "7896080830704",
    "nome": "Macarrão Parafuso Com Vegetais 500 g",
    "marcas": [
      "Liane"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896292309937",
    "ean": "7896292309937",
    "nome": "Lámen Sabor Legumes 85 g",
    "marcas": [
      "Predilecta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896021314256",
    "ean": "7896021314256",
    "nome": "Macarrão Espaguete 8 500 g",
    "marcas": [
      "Don Sapore"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_3083681095258",
    "ean": "3083681095258",
    "nome": "Palmito Pupunha Em Conserva Espaguete Bonduelle Vidro 270G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896005286579",
    "ean": "7896005286579",
    "nome": "Espaguete Dona Benta Sêmola 500g",
    "marcas": [
      "Dona Benta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7897721410002",
    "ean": "7897721410002",
    "nome": "Espaguete Petybon N 8 500g",
    "marcas": [
      "Petybon"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896213006686",
    "ean": "7896213006686",
    "nome": "Espaguete Fino 400 g",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896080837710",
    "ean": "7896080837710",
    "nome": "Espaguete Integral 500 g",
    "marcas": [
      "Liane"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896412800634",
    "ean": "7896412800634",
    "nome": "Espaguete De Sêmola 500 g",
    "marcas": [
      "Orquídea"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896024740144",
    "ean": "7896024740144",
    "nome": "Macarrão Espaguete 500g",
    "marcas": [
      "Aldente"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013915",
    "ean": "7891079013915",
    "nome": "Macarrão Instantâneo Integral Espaguete Nissin 5 Minutos Pacote 500G",
    "marcas": [
      "Integral"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205752331",
    "ean": "7896205752331",
    "nome": "Macarrão De Sêmola Grano Duro Espaguete 8 Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7898462240552",
    "ean": "7898462240552",
    "nome": "Palmito Pupunha Espaguete Palmito Da Fazenda Bandeja 210G",
    "marcas": [
      "Da Fazenda"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896205777044",
    "ean": "7896205777044",
    "nome": "Macarrão De Sêmola Espaguete 8 Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205722013",
    "ean": "7896205722013",
    "nome": "Macarrão Semolado Espaguete Basilar Pacote 500G",
    "marcas": [
      "Basilar"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205785537",
    "ean": "7896205785537",
    "nome": "Macarrão De Sêmola Grano Duro Integral Espaguete Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896412800092",
    "ean": "7896412800092",
    "nome": "Macarrão De Sêmola Com Ovos Espaguete Orquídea Pacote 500G",
    "marcas": [
      "Orquidea"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896022200282",
    "ean": "7896022200282",
    "nome": "Macarrão De Sêmola Com Ovos Espaguete 8 Renata Pacote 500G",
    "marcas": [
      "Selmi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7897272177300",
    "ean": "7897272177300",
    "nome": "Beterraba Master Espaguete",
    "marcas": [
      "Master"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022087081",
    "ean": "7896022087081",
    "nome": "Espaguete",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7908111400197",
    "ean": "7908111400197",
    "nome": "Carpe Etiam Espaguete Zero Gluten Grao De Bico E Arroz 400G",
    "marcas": [
      "Carpe Etiam"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896011990071",
    "ean": "7896011990071",
    "nome": "Espaguete De Arroz",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896213000011",
    "ean": "7896213000011",
    "nome": "Macarrão De Sêmola Espaguete Fino Vitarella Pacote 500G",
    "marcas": [
      "Vitarella"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896022200046",
    "ean": "7896022200046",
    "nome": "Macarrão De Sêmola De Trigo Grano Duro Espaguete 8 Renata Superiore Pacote 500G",
    "marcas": [
      "Selmi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896010604023",
    "ean": "7896010604023",
    "nome": "Macarrão Espaguete Com Sêmola 500g",
    "marcas": [
      "Cadore"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896038313198",
    "ean": "7896038313198",
    "nome": "Massa Alimentícia De Arroz Urbano Espaguete 500G",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896205774029",
    "ean": "7896205774029",
    "nome": "Macarrão De Sêmola Com Ovos Cabelo De Anjo Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079006009",
    "ean": "7891079006009",
    "nome": "Miojo Espaguete N3 500 g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0786471696149",
    "ean": "0786471696149",
    "nome": "Massa Alimenticia De Konja Tipo Espaguete 270G Konjac 500g",
    "marcas": [
      "Konjac"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898973988325",
    "ean": "7898973988325",
    "nome": "Frango Com Espaguete De Legumes A Carbonara",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896024210098",
    "ean": "7896024210098",
    "nome": "Espaguete Com Ovos (Cru)",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7897122606721",
    "ean": "7897122606721",
    "nome": "Espaguete De Pupunha",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896417222431",
    "ean": "7896417222431",
    "nome": "Espaguete Massa De Sêmola",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896213003746",
    "ean": "7896213003746",
    "nome": "Macarrão De Semola Com Ovos 500g",
    "marcas": [
      "Speciale Massa Com Ovos Espaguete 8"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7896063701229",
    "ean": "7896063701229",
    "nome": "Macarrão Espaguete Guacira",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896232111118",
    "ean": "7896232111118",
    "nome": "Macarrao 500g",
    "marcas": [
      "Floriani"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896412802393",
    "ean": "7896412802393",
    "nome": "Espaguete Integral 70%",
    "marcas": [
      "Orquídea"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896021300082",
    "ean": "7896021300082",
    "nome": "Espaguete 8",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896232111538",
    "ean": "7896232111538",
    "nome": "Espaguete Grano Duro",
    "marcas": [
      "Floriani"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898527430225",
    "ean": "7898527430225",
    "nome": "Frango À Cacciatora Com Espaguete De Arroz",
    "marcas": [
      "Subsistema Cultive Seu Mundo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896005210192",
    "ean": "7896005210192",
    "nome": "Macarrão Espaguete Favorita 400G",
    "marcas": [
      "Favorita"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896593403693",
    "ean": "7896593403693",
    "nome": "Macarrão Espaguete Ricosa 400G",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896038300310",
    "ean": "7896038300310",
    "nome": "Macarrão De Arroz Sem Glúten Espaguete Urbano 500g",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898902259342",
    "ean": "7898902259342",
    "nome": "Macarrão Espaguete Sêmola Sotrigo 500G",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896021821181",
    "ean": "7896021821181",
    "nome": "Massa Com Ovos Penne 500g",
    "marcas": [
      "Nordeste"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7898501600897",
    "ean": "7898501600897",
    "nome": "Penne De Milho Com Chia 500 g",
    "marcas": [
      "Tivva"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891317002442",
    "ean": "7891317002442",
    "nome": "Penne Da Sadia",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7790199603511",
    "ean": "7790199603511",
    "nome": "Penne Rigate 500 g",
    "marcas": [
      "Morixe"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896412800658",
    "ean": "7896412800658",
    "nome": "Massa De Sêmola Tipo Penne 500 g",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896010608083",
    "ean": "7896010608083",
    "nome": "Macarrão Penne Cru",
    "marcas": [
      "Cadore"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891515535209",
    "ean": "7891515535209",
    "nome": "Penne Com Minialmôndegas Perdigão Meu Menu Pacote 600G",
    "marcas": [
      "Perdigao"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7895000327959",
    "ean": "7895000327959",
    "nome": "Macarrão Penne",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7894904575800",
    "ean": "7894904575800",
    "nome": "Penne À Parisiense 350 g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896205752379",
    "ean": "7896205752379",
    "nome": "Penne",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898460644994",
    "ean": "7898460644994",
    "nome": "Penne Integral À Bolonhesa",
    "marcas": [
      "Orgu"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898649351781",
    "ean": "7898649351781",
    "nome": "Penne De Grão De Bico",
    "marcas": [
      "Fit Food"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898697630388",
    "ean": "7898697630388",
    "nome": "Penne À Bolonhesa Com Carne De Plantas 300 g",
    "marcas": [
      "Urban Farmcy"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891515605773",
    "ean": "7891515605773",
    "nome": "Penne Ao Molho Parisiense 300g",
    "marcas": [
      "Perdigão"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7891150079847",
    "ean": "7891150079847",
    "nome": "Macarrão Com Abóbora E Chia Penne Knorr Caixa 300G",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7896022200039",
    "ean": "7896022200039",
    "nome": "Macarrão De Sêmola De Trigo Grano Duro Penne Renata Superiore Pacote 500G",
    "marcas": [
      "Renata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205785544",
    "ean": "7896205785544",
    "nome": "Macarrão De Sêmola Grano Duro Integral Penne Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515936327",
    "ean": "7891515936327",
    "nome": "Penne Ao Molho Parisiense Perdigão Meu Menu Pacote 350G",
    "marcas": [
      "Perdigao"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205754472",
    "ean": "7896205754472",
    "nome": "Macarrão De Sêmola Com Ovos Penne Duplo Riscado Adria Pacote 500G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7897721410095",
    "ean": "7897721410095",
    "nome": "Macarrão Com Ovos Penne Petybon Pacote 500g",
    "marcas": [
      "Petybon"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_0786471696262",
    "ean": "0786471696262",
    "nome": "Massa Alimentícia Tipo Penne Konjac Massa Mf",
    "marcas": [
      "Slim Noodes"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896196062686",
    "ean": "7896196062686",
    "nome": "Macarrão De Sêmola Grano Duro Penne Ziti Rigate Fasano Caixa 500G",
    "marcas": [
      "Fasano"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7896412800122",
    "ean": "7896412800122",
    "nome": "Macarrão De Sêmola Com Ovos Penne Orquídea Pacote 500G",
    "marcas": [
      "Orquidea"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896401183397",
    "ean": "7896401183397",
    "nome": "Macarrão De Lentilha",
    "marcas": [
      "Urbano Protein"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898951850095",
    "ean": "7898951850095",
    "nome": "Macarrão Com Ovos Penne Rigate Barilla Pacote 500G",
    "marcas": [
      "Barilla"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515606428",
    "ean": "7891515606428",
    "nome": "Penne Ao Sugo E Manjericão 300g",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898696130230",
    "ean": "7898696130230",
    "nome": "Penne Sem Glúten",
    "marcas": [
      "Urbano"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896417204635",
    "ean": "7896417204635",
    "nome": "Macarrao Penne",
    "marcas": [
      "Vilma"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898915653786",
    "ean": "7898915653786",
    "nome": "Macarrão De Arroz Preto Integral Penne 200G - Casarão",
    "marcas": [
      "Casarão"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896412801495",
    "ean": "7896412801495",
    "nome": "Macarrão Penne Integral",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898941084479",
    "ean": "7898941084479",
    "nome": "Penne Integrale",
    "marcas": [
      "Organic"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896324203721",
    "ean": "7896324203721",
    "nome": "Penne Com Chia",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896212911639",
    "ean": "7896212911639",
    "nome": "Macarrão Penne De Sêmola Com Ovos",
    "marcas": [
      "Cristal"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7898915654080",
    "ean": "7898915654080",
    "nome": "Massa De Arroz Penne",
    "marcas": [
      "Casarão"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891103525513",
    "ean": "7891103525513",
    "nome": "Penne Com Grão-De-Bico E Linhaça",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896417216300",
    "ean": "7896417216300",
    "nome": "Macarrão Penne Com Ovos",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7891737318475",
    "ean": "7891737318475",
    "nome": "Penne Rigate Grano Duro",
    "marcas": [
      "Member’S Mark"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896010602098",
    "ean": "7896010602098",
    "nome": "Cadore Penne 500",
    "marcas": [
      "Cadore"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7101515605773",
    "ean": "7101515605773",
    "nome": "Penne Ao Molho Parisiense Meu Menu",
    "marcas": [
      "Perdigão"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_2221321111253",
    "ean": "2221321111253",
    "nome": "Coxa De Franco Desossada, Tomate Assado E Penne Ao Molho Pesto",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896022207557",
    "ean": "7896022207557",
    "nome": "Macarrão Penne Sem Glúten",
    "marcas": [
      "Renata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898637355531",
    "ean": "7898637355531",
    "nome": "Coxa De Frango Desossada, Tomate Assado E Penne Ao Molho Pesto",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7898152996752",
    "ean": "7898152996752",
    "nome": "Penne Integral",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896225700565",
    "ean": "7896225700565",
    "nome": "Penne 50% Integral",
    "marcas": [
      "Dona Raiz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000340125",
    "ean": "7895000340125",
    "nome": "Macarrão Integral Penne Taeq 500g",
    "marcas": [
      "Taeq"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898637355784",
    "ean": "7898637355784",
    "nome": "Penne Ao Molho De Espinafre",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896005277195",
    "ean": "7896005277195",
    "nome": "Macarrão Integral Penne",
    "marcas": [
      "Petybon"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0798190098333",
    "ean": "0798190098333",
    "nome": "Penne Lentilha Vermelha",
    "marcas": [
      "Ceres Brasil"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896213006785",
    "ean": "7896213006785",
    "nome": "Massa Semola Penne Especial",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7894000050034",
    "ean": "7894000050034",
    "nome": "Hellmann'S Maionese 500 g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7894000050027",
    "ean": "7894000050027",
    "nome": "Maionese Hellmanns Pote 250G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031412091",
    "ean": "7891031412091",
    "nome": "Maionese Tradicional 930g",
    "marcas": [
      "Heinz",
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150072046",
    "ean": "7891150072046",
    "nome": "Maionese",
    "marcas": [
      "Hellmans"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7894000050720",
    "ean": "7894000050720",
    "nome": "Maionese Light Hellmanns Pote 500G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150072053",
    "ean": "7891150072053",
    "nome": "Maionese Hellmanns Pote Leve 600G Pague 500G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102583182",
    "ean": "7896102583182",
    "nome": "Maionese Heinz Squeeze 390G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102584189",
    "ean": "7896102584189",
    "nome": "Maionese Heinz Squeeze 215G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150096462",
    "ean": "7891150096462",
    "nome": "Maionese Alho Sqz Hellmanns 335 g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150027800",
    "ean": "7891150027800",
    "nome": "Maionese Trad Squeeze Hellmanns 335g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031412022",
    "ean": "7891031412022",
    "nome": "Maionese Tradicional Hemmer Squeeze 290G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896036099742",
    "ean": "7896036099742",
    "nome": "Maionese Tradicional Liza Pote 450G",
    "marcas": [
      "Liza"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102582949",
    "ean": "7896102582949",
    "nome": "Maionese Heinz Pote 400G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102584998",
    "ean": "7896102584998",
    "nome": "Maionese Quero Pote 495G",
    "marcas": [
      "Quero"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150079908",
    "ean": "7891150079908",
    "nome": "Maionese Chipotle Squeeze Hellmanns 335g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891999004888",
    "ean": "7891999004888",
    "nome": "Maionese Vigor 500 g  481 mL",
    "marcas": [
      "Dan Vigor Indústria E Comércio De Laticínios Ltda",
      "Vigor Alimentos S.A",
      "Vigor"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150079892",
    "ean": "7891150079892",
    "nome": "Maionese Verde Squeeze Hellmanns 335g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898278402526",
    "ean": "7898278402526",
    "nome": "Maionese Verde",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150080546",
    "ean": "7891150080546",
    "nome": "Maionese Supreme Squeeze Hellmanns 330 g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150099371",
    "ean": "7891150099371",
    "nome": "Hellmanns Maionese",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7897517205607",
    "ean": "7897517205607",
    "nome": "Maionese Vegana 360 g",
    "marcas": [
      "Fugini"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898686950008",
    "ean": "7898686950008",
    "nome": "Not Mayo Original 350 g",
    "marcas": [
      "Notco",
      "Not Mayo"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7892840819392",
    "ean": "7892840819392",
    "nome": "Doritos Dinamita Sabor Maionese Chipotle 84 g",
    "marcas": [
      "Doritos",
      "Pepsico"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102502077",
    "ean": "7896102502077",
    "nome": "Maionese Alho Tostado Com Ervas Heinz Squeeze 215G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031405420",
    "ean": "7891031405420",
    "nome": "Maionese Madeiro",
    "marcas": [
      "Madeiro"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7894000050737",
    "ean": "7894000050737",
    "nome": "Maionese Light",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150072640",
    "ean": "7891150072640",
    "nome": "Pack Maionese Hellmanns Pote 1Kg 2 Unidades Leve Mais Pague Menos",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "kg"
  },
  {
    "id": "ean_7891150078956",
    "ean": "7891150078956",
    "nome": "Pack Maionese Hellmanns Squeeze 2 Unidades 335G Cada Leve Mais Pague Menos",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150072084",
    "ean": "7891150072084",
    "nome": "Maionese Chipotle Hellmanns Pote 500G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150078185",
    "ean": "7891150078185",
    "nome": "Molho Tipo Maionese Vegano Hellmanns Squeeze 335G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7891150089501",
    "ean": "7891150089501",
    "nome": "Maionese Light Hellmanns Squeeze 335G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891167014015",
    "ean": "7891167014015",
    "nome": "Salada Com Atum, Batata, Maionese, Azeitonas E Salsinha Gomes Da Costa Lata 165G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "lata"
  },
  {
    "id": "ean_7896102509434",
    "ean": "7896102509434",
    "nome": "Maionese Quero Sachê 200G",
    "marcas": [
      "Quero"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896025804968",
    "ean": "7896025804968",
    "nome": "Maionese Sriracha Sabores Cepêra Squeeze 190G",
    "marcas": [
      "Sabores Cepêra"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102587043",
    "ean": "7896102587043",
    "nome": "Kit Ketchup Tradicional 397G Maionese 215G Mostarda 255G Heinz",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898902299720",
    "ean": "7898902299720",
    "nome": "Maionese Tradicional Stella Doro Sachê 200G",
    "marcas": [
      "Stella D Oro"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896036099759",
    "ean": "7896036099759",
    "nome": "Maionese Caseira Tradicional Liza Pote 450G",
    "marcas": [
      "Liza"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891515556334",
    "ean": "7891515556334",
    "nome": "Sanduíche Congelado X Burguer Maionese Grill Sadia Hot Pocket Pacote 145G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896982109861",
    "ean": "7896982109861",
    "nome": "Molho Tipo Maionese Trufado N.Ovo Squeeze 195G",
    "marcas": [
      "Squeeze"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7891700206921",
    "ean": "7891700206921",
    "nome": "Maionese Arisco Pote 500G",
    "marcas": [
      "Arisco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896982109823",
    "ean": "7896982109823",
    "nome": "Molho Tipo Maionese Lemon Pepper N.Ovo Squeeze 195G",
    "marcas": [
      "Lemon Pepper"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896036000427",
    "ean": "7896036000427",
    "nome": "Maionese Caseira Tradicional Liza Sachê 400G",
    "marcas": [
      "Liza"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7898686950398",
    "ean": "7898686950398",
    "nome": "Molho Cremoso Tipo Maionese Not Squeeze 400G",
    "marcas": [
      "Notco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896036094211",
    "ean": "7896036094211",
    "nome": "Maionese Caseira Tradicional Liza Pote 489G",
    "marcas": [
      "Cargill Brasil"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896025804685",
    "ean": "7896025804685",
    "nome": "Maionese Cebola Sabores Cepêra Squeeze 190G",
    "marcas": [
      "Sabores Cepêra"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896982109816",
    "ean": "7896982109816",
    "nome": "Molho Tipo Maionese Tradicional N.Ovo Squeeze 195G",
    "marcas": [
      "Squeeze"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7898930142968",
    "ean": "7898930142968",
    "nome": "Kit Ketchup 380G Maionese 350G Mostarda 350G Salsaretti Leve Mais Pague Menos",
    "marcas": [
      "Salsaretti"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896982109847",
    "ean": "7896982109847",
    "nome": "Molho Tipo Maionese Ervas Finas N.Ovo Squeeze 195G",
    "marcas": [
      "Squeeze"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7896102587074",
    "ean": "7896102587074",
    "nome": "Kit Ketchup Tradicional 397G Maionese 390G Heinz",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150090835",
    "ean": "7891150090835",
    "nome": "Maionese Churrasco Nba Los Angeles Lakers Hellmanns Squeeze 335G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896054903151",
    "ean": "7896054903151",
    "nome": "Maionese D'Ajuda",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102503715",
    "ean": "7896102503715",
    "nome": "Yellow Mustard 255 g",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102509144",
    "ean": "7896102509144",
    "nome": "Quero Mostarda 200g",
    "marcas": [
      "Quero"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896025803695",
    "ean": "7896025803695",
    "nome": "Mostarda Amarela Sabores Cepêra Squeeze 350G",
    "marcas": [
      "Cepera"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150027794",
    "ean": "7891150027794",
    "nome": "Mostarda Amarela Tradicional Hellmanns Squeeze 170G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896292300477",
    "ean": "7896292300477",
    "nome": "Mostarda Amarela Predilecta Squeeze 180G",
    "marcas": [
      "Predilecta"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031405017",
    "ean": "7891031405017",
    "nome": "Mostarda Amarela Americana Hemmer Squeeze 200G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031405031",
    "ean": "7891031405031",
    "nome": "Mostarda Amarela 1 kg",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "kg"
  },
  {
    "id": "ean_7896025803718",
    "ean": "7896025803718",
    "nome": "Mostarda Com Mel 400g",
    "marcas": [
      "Cepera"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031406014",
    "ean": "7891031406014",
    "nome": "Mostarda Escura Holandesa Hemmer Squeeze 200G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7908529700254",
    "ean": "7908529700254",
    "nome": "Mostarda Salsaretti",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896292350144",
    "ean": "7896292350144",
    "nome": "Mostarda Budweiser",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891234001436",
    "ean": "7891234001436",
    "nome": "Molho De Mostarda 200g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7898117960903",
    "ean": "7898117960903",
    "nome": "Salgadinhos Reizinho 65 G",
    "marcas": [
      "Rei De Ouro"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150066502",
    "ean": "7891150066502",
    "nome": "Molho De Mostarda Profissional 1.01 kg",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "kg"
  },
  {
    "id": "ean_3077317532057",
    "ean": "3077317532057",
    "nome": "Mostarda Com Mel Beaufor Vidro 200G",
    "marcas": [
      "Beaufor"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031405284",
    "ean": "7891031405284",
    "nome": "Mostarda Amarela Americana Hemmer Premium Squeeze 300G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031405406",
    "ean": "7891031405406",
    "nome": "Mostarda Amarela Americana Hemmer Zero Squeeze 200G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031406403",
    "ean": "7891031406403",
    "nome": "Mostarda Escura Holandesa Hemmer Zero Squeeze 200G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031410264",
    "ean": "7891031410264",
    "nome": "Mostarda Com Mel Hemmer Gourmet Squeeze 200G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031410271",
    "ean": "7891031410271",
    "nome": "Mostarda Dijon Hemmer Squeeze 200G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7899765100222",
    "ean": "7899765100222",
    "nome": "Mix De Grãos E Cereais Mostarda E Mel Miss Croc Gourmet Vidro 120G",
    "marcas": [
      "Miss Croc"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896025804135",
    "ean": "7896025804135",
    "nome": "Mostarda Escura Holandesa Sabores Cepêra Squeeze 360G",
    "marcas": [
      "Sabores Cepêra"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891515568979",
    "ean": "7891515568979",
    "nome": "Wrap Frango, Mostarda E Mel Sadia Livre Lev Pacote 180G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7898557010640",
    "ean": "7898557010640",
    "nome": "Chips De Batata Doce Mostarda Dijon Roots To Go Pacote 45G",
    "marcas": [
      "Roots To Go"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515486372",
    "ean": "7891515486372",
    "nome": "Coxinha Da Asa De Frango Temperada Molho Mostarda Perdigão Na Brasa 800G",
    "marcas": [
      "Perdigao"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7891700013208",
    "ean": "7891700013208",
    "nome": "Mostarda Arisco Squeeze 200G",
    "marcas": [
      "Arisco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896025803831",
    "ean": "7896025803831",
    "nome": "Mostarda Dijon Sabores Cepêra Squeeze 190G",
    "marcas": [
      "Sabores Cepêra"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102502282",
    "ean": "7896102502282",
    "nome": "Mostarda Escura Heinz Squeeze 235G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031405055",
    "ean": "7891031405055",
    "nome": "Mostarda Amarela Americana Hemmer Squeeze 700G",
    "marcas": [
      "Hemmer"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898930142951",
    "ean": "7898930142951",
    "nome": "Kit Ketchup 380G Mostarda 350G Salsaretti Leve Mais Pague Menos",
    "marcas": [
      "Salsaretti"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102502138",
    "ean": "7896102502138",
    "nome": "Mostarda Amarela Com Mel Heinz Squeeze 220G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898965052201",
    "ean": "7898965052201",
    "nome": "Mostarda Dijon Strumpf 4 Squeeze 210G",
    "marcas": [
      "Strumpf"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898965052027",
    "ean": "7898965052027",
    "nome": "Mostarda Com Picles Strumpf 2 Squeeze 210G",
    "marcas": [
      "Strumpf"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898958126759",
    "ean": "7898958126759",
    "nome": "Mostarda Com Grãos Strumpf 1 Squeeze 210G",
    "marcas": [
      "Strumpf"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891300909819",
    "ean": "7891300909819",
    "nome": "Mostarda Amarela Etti Squeeze 190G",
    "marcas": [
      "Etti"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891031406052",
    "ean": "7891031406052",
    "nome": "Mostarda Escura - Hemmer",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898312045139",
    "ean": "7898312045139",
    "nome": "Coxinha Da Asa Mostarda E Mel 1kg",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "kg"
  },
  {
    "id": "ean_7892840818517",
    "ean": "7892840818517",
    "nome": "Salgadinho De Milho Mel E Mostarda Doritos Rainbow Pacote 55G",
    "marcas": [
      "Doritos"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896102830422",
    "ean": "7896102830422",
    "nome": "Mostarda &Mel",
    "marcas": [
      "Júnior"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898637352073",
    "ean": "7898637352073",
    "nome": "Iscas De Filé Mignon Ao Molho Mostarda",
    "marcas": [
      "Liv Up"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7898556091787",
    "ean": "7898556091787",
    "nome": "Milho Torrado Mostarda E Mel",
    "marcas": [
      "Brasil Fruit"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7897005102999",
    "ean": "7897005102999",
    "nome": "Hellmann'S Barbecue Hellmann'S Tradicional 400g",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898147940609",
    "ean": "7898147940609",
    "nome": "Heinz Mostarda Amarela 395g",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102503753",
    "ean": "7896102503753",
    "nome": "Hellmann'S Mostarda Amarela 200g",
    "marcas": [
      "Hellmann"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896102502275",
    "ean": "7896102502275",
    "nome": "Mostarda Amarela Picante Heinz Squeeze 220G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898946758290",
    "ean": "7898946758290",
    "nome": "File Ao Molho Mostarda",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7898693130004",
    "ean": "7898693130004",
    "nome": "Pastel Carne Acebolada Com Mostarda E Mel",
    "marcas": [
      "Veritá"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898709241229",
    "ean": "7898709241229",
    "nome": "Milho Torrado Mel E Mostarda",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079000243",
    "ean": "7891079000243",
    "nome": "Miojo Sabor Legumes",
    "marcas": [
      "Nissin Lámen"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891203057525",
    "ean": "7891203057525",
    "nome": "Miojo Galinha Caipira",
    "marcas": [
      "Panco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079014028",
    "ean": "7891079014028",
    "nome": "Miojo Galinha Caipira Picante Cru",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891203068613",
    "ean": "7891203068613",
    "nome": "Miojo Cremoso",
    "marcas": [
      "Panco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898933733934",
    "ean": "7898933733934",
    "nome": "Miojo Sandella Lámen Sabor Galinha Caipira Com Pimenta",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079011812",
    "ean": "7891079011812",
    "nome": "Miojo Nosso Sabor Sabor Carne",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012130",
    "ean": "7891079012130",
    "nome": "Nissin- Miojo Cremoso Sabor Carne 88.0g",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079001011",
    "ean": "7891079001011",
    "nome": "Macarrão Instantâneo Lámen Galinha Suave Turma Da Mônica Nissin Miojo Pacote 85G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079013229",
    "ean": "7891079013229",
    "nome": "Nissin Miojo",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013816",
    "ean": "7891079013816",
    "nome": "Miojo De Boas Frango Com Batata Doce",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013892",
    "ean": "7891079013892",
    "nome": "Miojo Saladaria Frango Grelhado",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013830",
    "ean": "7891079013830",
    "nome": "Miojo De Boas Carne Com Cenoura",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013823",
    "ean": "7891079013823",
    "nome": "Miojo De Boas Mix De Ervas Com Legumes",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012970",
    "ean": "7891079012970",
    "nome": "Miojo Frango E Alho",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013793",
    "ean": "7891079013793",
    "nome": "Canja De Galinha Miojo",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079001523",
    "ean": "7891079001523",
    "nome": "Macarrão Instantâneo Picanha Nissin Miojo Cremoso Pacote 88G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079001561",
    "ean": "7891079001561",
    "nome": "Macarrão Instantâneo Frango Nissin Miojo Cremoso Pacote 88G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079011799",
    "ean": "7891079011799",
    "nome": "Macarrão Instantâneo Yakissoba Tradicional Nissin Miojo Pacote 87G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079013458",
    "ean": "7891079013458",
    "nome": "Macarrão Instantâneo Lámen Camarão Com Alho Nissin Miojo Pacote 85G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079013960",
    "ean": "7891079013960",
    "nome": "Macarrão Instantâneo Lámen Beijinho Nissin Miojo Pacote 55G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079013953",
    "ean": "7891079013953",
    "nome": "Macarrão Instantâneo Lámen Chocolate Nissin Miojo Pacote 55G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891203059000",
    "ean": "7891203059000",
    "nome": "Miojo Panco Pimenta",
    "marcas": [
      "Panco"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022201869",
    "ean": "7896022201869",
    "nome": "Miojo Divertrix",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891203057532",
    "ean": "7891203057532",
    "nome": "Miojo De Legumes",
    "marcas": [
      "Pânico"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898514353032",
    "ean": "7898514353032",
    "nome": "Miojo Costela Com Pimenta",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898921818704",
    "ean": "7898921818704",
    "nome": "Miojo - Fogão Da Roça",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896085087271",
    "ean": "7896085087271",
    "nome": "Lámen Sabor Carne",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898932426783",
    "ean": "7898932426783",
    "nome": "Miojo Carne",
    "marcas": [
      "Marata"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022203122",
    "ean": "7896022203122",
    "nome": "Miojo Cremoso Picanha",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896022207410",
    "ean": "7896022207410",
    "nome": "Lámen Sabor Carne (Miojo)",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013342",
    "ean": "7891079013342",
    "nome": "Miojo Galinha Caipira (Nissin)",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896423705324",
    "ean": "7896423705324",
    "nome": "Miojo Galinha Dallas",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896011117171",
    "ean": "7896011117171",
    "nome": "Miojo De Galinha",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013243",
    "ean": "7891079013243",
    "nome": "Nissin Miojo Cremeso",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079013373",
    "ean": "7891079013373",
    "nome": "Carne Desfiado Miojo",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079014097",
    "ean": "7891079014097",
    "nome": "Miojo Ticket",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896085087301",
    "ean": "7896085087301",
    "nome": "Miojo Lámen Sabor Galinha",
    "marcas": [
      "Adria"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0618341522992",
    "ean": "0618341522992",
    "nome": "Canja De Frango 115g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891000256312",
    "ean": "7891000256312",
    "nome": "Sopa De Casa = Sopão Carne Com Legumes + Legumes",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891000256336",
    "ean": "7891000256336",
    "nome": "Sopa De Casa = Sopão Galinha Com Legumes + Legumes",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891132000937",
    "ean": "7891132000937",
    "nome": "Vono Champignon 19g",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891132001255",
    "ean": "7891132001255",
    "nome": "Vono Espinafre Com Queijo 19g",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891150002906",
    "ean": "7891150002906",
    "nome": "Quick Milho Na Manteiga 19g",
    "marcas": [
      "Knorr",
      "Unilever Brasil"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7895000342228",
    "ean": "7895000342228",
    "nome": "Taeq Sopa Instantânea De Cebola 13g",
    "marcas": [
      "Grupo Pão De Açúcar",
      "Taeq"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891132007530",
    "ean": "7891132007530",
    "nome": "Sopa Individual Cremosa Mandioquinha Com Cebola E Salsa Vono Pacote 17G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891095003822",
    "ean": "7891095003822",
    "nome": "Creme De Cebola 65g",
    "marcas": [
      "Kitano"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012215",
    "ean": "7891079012215",
    "nome": "Nissin Ramen Sabor A Carne 85 g (80 g pasta precocida + 5 g condimento)",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "cx"
  },
  {
    "id": "ean_7891079012901",
    "ean": "7891079012901",
    "nome": "Cup Noodles Sabor A Carne 68 g",
    "marcas": [
      "Cup Noodles",
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891095010134",
    "ean": "7891095010134",
    "nome": "Sopão De Legumes 196 g",
    "marcas": [
      "Kitano"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896256065671",
    "ean": "7896256065671",
    "nome": "Sopa Termogênica Light Cenoura",
    "marcas": [
      "Natural Life"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896256065664",
    "ean": "7896256065664",
    "nome": "Sopa Termogênica Frango",
    "marcas": [
      "Natural Life"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898953361087",
    "ean": "7898953361087",
    "nome": "Sopa De Mandioca",
    "marcas": [
      "Natural Club"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898953361063",
    "ean": "7898953361063",
    "nome": "Sopa Legumes Com Carne",
    "marcas": [
      "Natural Club"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891132110285",
    "ean": "7891132110285",
    "nome": "Vono",
    "marcas": [
      "Sopa"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896324231533",
    "ean": "7896324231533",
    "nome": "Sopa 200g",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891000344330",
    "ean": "7891000344330",
    "nome": "Tempero Para Sopas Maggi Pacote 50G 10 Unidades",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_0510001629532",
    "ean": "0510001629532",
    "nome": "Sopa Campbells Tomate Lta 305Gr",
    "marcas": [
      "Campbells"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0510000001186",
    "ean": "0510000001186",
    "nome": "Sopa Concentrada Tomate Campbells Lata 300G",
    "marcas": [
      "Campbells"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "lata"
  },
  {
    "id": "ean_0510000161712",
    "ean": "0510000161712",
    "nome": "Sopa Concentrada Cebola Campbells Lata 295G",
    "marcas": [
      "Campbells"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "lata"
  },
  {
    "id": "ean_0510000593766",
    "ean": "0510000593766",
    "nome": "Sopa Concentrada Creme De Aspargo Campbells Lata 295G",
    "marcas": [
      "Campbells"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "lata"
  },
  {
    "id": "ean_0510001537844",
    "ean": "0510001537844",
    "nome": "Sopa Concentrada Creme De Cogumelo Campbells Lata 295G",
    "marcas": [
      "Campbells"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000318201",
    "ean": "7891000318201",
    "nome": "Sopa Frango E Aveia Nutren Senior Sachê 40G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "saco"
  },
  {
    "id": "ean_7891000344897",
    "ean": "7891000344897",
    "nome": "Sopa Grãos Lentilha Com Bacon Maggi Pacote 71G",
    "marcas": [
      "Maggi"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000530603",
    "ean": "7891000530603",
    "nome": "Sopa Cebola Maggi Pacote 68G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000544402",
    "ean": "7891000544402",
    "nome": "Sopa Carne Com Conchinhas Maggi Pacote 63G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000544600",
    "ean": "7891000544600",
    "nome": "Sopa Galinha Com Fidelini Maggi Pacote 60G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891132007523",
    "ean": "7891132007523",
    "nome": "Sopa Individual Cremosa Peito De Frango Com Queijo Vono Pacote 17G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891132009640",
    "ean": "7891132009640",
    "nome": "Sopa Cebola Vono Chef Pacote 58G",
    "marcas": [
      "Ajinomoto"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891132110254",
    "ean": "7891132110254",
    "nome": "Sopa Individual Abóbora Com Carne Menos Sódio Vono Pacote 17G",
    "marcas": [
      "Vono"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891132110551",
    "ean": "7891132110551",
    "nome": "Sopa Individual Mandioquinha Com Cebola E Salsa Menos Sódio Vono Pacote 17G",
    "marcas": [
      "Vono"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7896205754434",
    "ean": "7896205754434",
    "nome": "Macarrão De Sêmola Com Ovos Sopa De Letrinhas Adria Pacote 500G",
    "marcas": [
      "Mayoral"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079013335",
    "ean": "7891079013335",
    "nome": "Nissin Ramen Sabor A Costilla 85 g (80 g + 5 g)",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891079012208",
    "ean": "7891079012208",
    "nome": "Ramen Sabor A Pollo 85 g (80 g + 5 g)",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0602883602236",
    "ean": "0602883602236",
    "nome": "Sopa Da Nona 160g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0602883602052",
    "ean": "0602883602052",
    "nome": "Sopa Rosa 160g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898966759000",
    "ean": "7898966759000",
    "nome": "Sopa De Agnoline",
    "marcas": [
      "Agro Qualitá"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898034785191",
    "ean": "7898034785191",
    "nome": "Sopa Mandioca Com Carne Seca - Mambo",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898235531221",
    "ean": "7898235531221",
    "nome": "Sopa De Legumes",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891132007509",
    "ean": "7891132007509",
    "nome": "Sopa Individual Cremosa Batata Com Carne Vono Pacote 18G",
    "marcas": [
      "Vono"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "pct"
  },
  {
    "id": "ean_7898961151274",
    "ean": "7898961151274",
    "nome": "Canja De Galinha",
    "marcas": [
      "Brits Sopa"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7898961151304",
    "ean": "7898961151304",
    "nome": "Creme De Abóbora, Cenoura E Gengibre",
    "marcas": [
      "Brits Sopa"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0602883602069",
    "ean": "0602883602069",
    "nome": "Sopa Amarela 130g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7892830107034",
    "ean": "7892830107034",
    "nome": "Sopa De Abóbora Com Frango",
    "marcas": [],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7896311770892",
    "ean": "7896311770892",
    "nome": "Sopa Proteica",
    "marcas": [
      "Nutrido"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7899567239229",
    "ean": "7899567239229",
    "nome": "Caldo De Legumes",
    "marcas": [
      "Swift"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0602883602137",
    "ean": "0602883602137",
    "nome": "Caldo Proteico De Feijão 30g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0602883602144",
    "ean": "0602883602144",
    "nome": "Sopa Detox 130g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_0602883602083",
    "ean": "0602883602083",
    "nome": "Sopa Proteica De Tomate 30g",
    "marcas": [
      "Mexidona Foods"
    ],
    "grupoId": "massas-sopas-e-molhos",
    "apresId": "un"
  },
  {
    "id": "ean_7891098000040",
    "ean": "7891098000040",
    "nome": "Matte Leão - Matte Original 40g",
    "marcas": [
      "Leão"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098038456",
    "ean": "7891098038456",
    "nome": "Chá Matte Leão A Granel 250G",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098000170",
    "ean": "7891098000170",
    "nome": "Leão Fuze Hortelã 10 g, 10 u",
    "marcas": [
      "Leão Fuze"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098000156",
    "ean": "7891098000156",
    "nome": "Chá Leão Capim Cidreira 1",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098040893",
    "ean": "7891098040893",
    "nome": "Chá Preto Ice Tea Pêssego Leão Garrafa 450Ml",
    "marcas": [
      "Leao Fuze"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098040688",
    "ean": "7891098040688",
    "nome": "Chá Mate Original Matte Leão Garrafa 450Ml",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098040589",
    "ean": "7891098040589",
    "nome": "Matte Leão Limão 1.5 L",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098040602",
    "ean": "7891098040602",
    "nome": "Chá Mate Pêssego Matte Leão Garrafa 1,5L 1.5l",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098041081",
    "ean": "7891098041081",
    "nome": "Chá Preto Ice Tea Limão Leão Zero Garrafa 1,5L 1.5l",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098010476",
    "ean": "7891098010476",
    "nome": "Chá Erva Doce Chá Leão Caixa 24G 15 Unidades",
    "marcas": [
      "Leao"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7898192033325",
    "ean": "7898192033325",
    "nome": "Chá Branco Lichia Feel Good Caixa 1L",
    "marcas": [
      "Sufresh"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891098000057",
    "ean": "7891098000057",
    "nome": "Chá Mate Limão Matte Leão Caixa 30G 25 Unidades",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891048038468",
    "ean": "7891048038468",
    "nome": "Chá Misto - Capim-Cidreira, Limão E Gengibre 10g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891048038123",
    "ean": "7891048038123",
    "nome": "Chá Misto De Camomila, Capim-Cidreira, Hortelã E Erva-Doce-Nacional 15 g, 10 u",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098041630",
    "ean": "7891098041630",
    "nome": "Chá Preto Com Gás Limão Leão Lata 290Ml",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7896000596383",
    "ean": "7896000596383",
    "nome": "Chá De Hibisco Sabor Romã E Goji Berry 1 l",
    "marcas": [
      "Natural Tea"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891098040848",
    "ean": "7891098040848",
    "nome": "Chá Preto Ice Tea Limão Leão Garrafa 450Ml",
    "marcas": [
      "Leão"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098041883",
    "ean": "7891098041883",
    "nome": "Chá Verde Limão Leão Reequilibra Garrafa 1,5L 1.5l",
    "marcas": [
      "Garra"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891048038383",
    "ean": "7891048038383",
    "nome": "Chá Misto Frutas Do Bosque 10g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098041692",
    "ean": "7891098041692",
    "nome": "Chá Preto, Laranja, Mel",
    "marcas": [
      "Leão"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_07011696",
    "ean": "07011696",
    "nome": "Chá Morango, Manga",
    "marcas": [
      "Twinings"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098041937",
    "ean": "7891098041937",
    "nome": "Chá Morango Maracujá Leãozinho Caixa 23G 10 Unidades",
    "marcas": [
      "Chá Leãozinho"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891048036020",
    "ean": "7891048036020",
    "nome": "Chá De Camomila Com 15 Sachês Dr.Oetker 15G",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "saco"
  },
  {
    "id": "ean_7891048036044",
    "ean": "7891048036044",
    "nome": "Chá De Capim Cidreira Com 15 Sachês Dr.Oetker 15G",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "saco"
  },
  {
    "id": "ean_7891098040909",
    "ean": "7891098040909",
    "nome": "Chá Preto Ice Tea Pêssego Leão Garrafa 1,5L 1.5l",
    "marcas": [
      "Leao"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098001511",
    "ean": "7891098001511",
    "nome": "Chá Morango Chá Leão Caixa 20G 10 Unidades",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891098040572",
    "ean": "7891098040572",
    "nome": "Chá Mate Original Matte Leão Zero Garrafa 1,5L 1.5l",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891098041913",
    "ean": "7891098041913",
    "nome": "Cha Verde Leao Lim Zero 450Ml",
    "marcas": [
      "Garra"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898192039907",
    "ean": "7898192039907",
    "nome": "Chá Branco Pitaya Feel Good Caixa 1L",
    "marcas": [
      "Feelgood"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891098000415",
    "ean": "7891098000415",
    "nome": "Chá Preto Chá Leão Caixa 16G 10 Unidades",
    "marcas": [
      "Matte Leao"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891048038048",
    "ean": "7891048038048",
    "nome": "Chá De Erva-Doce Nacional 20 g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_0070177197315",
    "ean": "0070177197315",
    "nome": "Chá (Infusão) De Camomila, Mel E Baunilha",
    "marcas": [
      "Twinings Of London"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000460511",
    "ean": "7891000460511",
    "nome": "Chai Tea Latte",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898651400644",
    "ean": "7898651400644",
    "nome": "Chá Verde Yai Frutas Vermelhas 290Ml",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896328210091",
    "ean": "7896328210091",
    "nome": "Chá Misto Sabor Maracujá 13",
    "marcas": [
      "Barão De Cotegipe"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898651400613",
    "ean": "7898651400613",
    "nome": "Cha Verde Yai Lim Sicil C/Hort 290Ml",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098042316",
    "ean": "7891098042316",
    "nome": "Chá Branco Leão, Sabor Lichia",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_0070177197247",
    "ean": "0070177197247",
    "nome": "Chá Verde",
    "marcas": [
      "Twinings"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891048036525",
    "ean": "7891048036525",
    "nome": "Chá Misto Abacaxi & Hortelã 15 g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891048036914",
    "ean": "7891048036914",
    "nome": "Mate & Especiarias 22.5 g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098010490",
    "ean": "7891098010490",
    "nome": "Fuze Chá De Maçã Com Canela 30 g",
    "marcas": [
      "Leão"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891103048272",
    "ean": "7891103048272",
    "nome": "Chá De Maçã Carrefour 13g",
    "marcas": [
      "Carrefour"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098000026",
    "ean": "7891098000026",
    "nome": "Matte Leão",
    "marcas": [
      "Leao Fuze"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896045077816",
    "ean": "7896045077816",
    "nome": "Chá Real Multiervas Frutas Vermelhas 15g",
    "marcas": [
      "Real"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_0054881003254",
    "ean": "0054881003254",
    "nome": "Ahmad Tea London Chá Preto English Breakfast Tea Ahmad Tea London 100g",
    "marcas": [
      "Ahmad Tea London"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_10975992",
    "ean": "10975992",
    "nome": "Thé Vert Au Jasmin 500 g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_0054881003162",
    "ean": "0054881003162",
    "nome": "Green Tea - Ahmed Tea 20g",
    "marcas": [
      "Ahmad Tea London"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896000596376",
    "ean": "7896000596376",
    "nome": "Chá Branco Com Pitaya E Sabor Amora 1l",
    "marcas": [
      "Natural Tea"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891042000195",
    "ean": "7891042000195",
    "nome": "Cha Pronto Com P�Ssego Lipton Ice Tea",
    "marcas": [
      "Lipton"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896023013270",
    "ean": "7896023013270",
    "nome": "Grape Tea Salton Chá Verde Com Limão Siciliano, Erva Cidreira E Uva Moscato 750 ml",
    "marcas": [
      "Vinícola Salton"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896023013294",
    "ean": "7896023013294",
    "nome": "Grape Tea Salton Chá Preto Com Tangerina E Uva Moscato 750 ml",
    "marcas": [
      "Vinícola Salton"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896000595577",
    "ean": "7896000595577",
    "nome": "Natural Tea",
    "marcas": [
      "Natural Tea"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098002044",
    "ean": "7891098002044",
    "nome": "Chá De Sachê (Camomila, Cidreira E Maracujá) 24g",
    "marcas": [
      "Chá Leão"
    ],
    "grupoId": "matinais",
    "apresId": "saco"
  },
  {
    "id": "ean_7891098000972",
    "ean": "7891098000972",
    "nome": "Chá Matte Leão Canela 30G 40g",
    "marcas": [
      "Matte Leão"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891098041869",
    "ean": "7891098041869",
    "nome": "Chá Abacaxi + Hortelã Gelado 25g",
    "marcas": [
      "Chá Leão"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896045000180",
    "ean": "7896045000180",
    "nome": "Chá Misto De Limão E Gengibre Com Sabor Mel 14 g, 10 u",
    "marcas": [
      "Chás Real Multierva"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_5607047020869",
    "ean": "5607047020869",
    "nome": "Barra Aveia & Cereais Chocolate Preto & Amendoins 6 x 21 g",
    "marcas": [
      "Pingo Doce"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000102626",
    "ean": "7891000102626",
    "nome": "Aveia Em Flocos Finos Nestlé Caixa 170G 500g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7896002311274",
    "ean": "7896002311274",
    "nome": "Pão Integral Aveia",
    "marcas": [
      "Nutrella"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896066301693",
    "ean": "7896066301693",
    "nome": "Pão De Forma 5 Zeros Aveia, Linhaça E Quinoa",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000102640",
    "ean": "7891000102640",
    "nome": "Aveia Em Flocos Nestlé Caixa 170G",
    "marcas": [
      "Nestlé Aveia"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7892840815752",
    "ean": "7892840815752",
    "nome": "Aveia Em Flocos 165 g",
    "marcas": [
      "Quaker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840815769",
    "ean": "7892840815769",
    "nome": "Aveia Em Flocos Finos 165",
    "marcas": [
      "Quaker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840815264",
    "ean": "7892840815264",
    "nome": "Aveia Em Flocos Finos Quaker Caixa 450G Embalagem Econômica",
    "marcas": [
      "Quaker"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7896283000409",
    "ean": "7896283000409",
    "nome": "Granola Tradicional Com Coco E Uvas-Passas 1 kg",
    "marcas": [
      "Jasmine"
    ],
    "grupoId": "matinais",
    "apresId": "kg"
  },
  {
    "id": "ean_7892840815783",
    "ean": "7892840815783",
    "nome": "Farinha Integral De Aveia 165g",
    "marcas": [
      "Quaker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898994939764",
    "ean": "7898994939764",
    "nome": "Bebida À Base De Aveia Cremosa Orgânica Sem Glúten Nude. Caixa 1L",
    "marcas": [
      "Nude."
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891331010508",
    "ean": "7891331010508",
    "nome": "Barra De Cereal Sabor Aveia, Banana E Mel 22g",
    "marcas": [
      "Nutry"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7897900310604",
    "ean": "7897900310604",
    "nome": "Trio Light Banana Com Aveia E Mel 22g",
    "marcas": [
      "Trio",
      "Trio Alimentos"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896839122043",
    "ean": "7896839122043",
    "nome": "Granola",
    "marcas": [
      "Da Magrinha"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840815271",
    "ean": "7892840815271",
    "nome": "Aveia Integral Em Flocos 450 g",
    "marcas": [
      "Quaker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891025123064",
    "ean": "7891025123064",
    "nome": "Iogurte Grego Tradicional Danone Pote 90G",
    "marcas": [
      "Danone"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898994939771",
    "ean": "7898994939771",
    "nome": "Leite De Aveia Com Cacau",
    "marcas": [
      "Nude"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891095028344",
    "ean": "7891095028344",
    "nome": "Aveia Em Flocos Yoki 170g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898080642790",
    "ean": "7898080642790",
    "nome": "Farinha Láctea Italac 180 G",
    "marcas": [
      "Italac"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898055421511",
    "ean": "7898055421511",
    "nome": "Aveia Em Flocos Finos Naturale Somos Aveia Caixa 170G",
    "marcas": [
      "Naturale"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7898568900688",
    "ean": "7898568900688",
    "nome": "Aveia Em Flocos Grossos Vitalin Pouch 200G 500g",
    "marcas": [
      "Vitalin"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898968764149",
    "ean": "7898968764149",
    "nome": "Leite Condensado Vegano Nude. 395g",
    "marcas": [
      "Nude"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7896090082056",
    "ean": "7896090082056",
    "nome": "Farinha De Trigo S/Fermento 1 kg",
    "marcas": [
      "Finna"
    ],
    "grupoId": "matinais",
    "apresId": "kg"
  },
  {
    "id": "ean_7891091049428",
    "ean": "7891091049428",
    "nome": "Granola São Braz Sabor Banana 250g",
    "marcas": [
      "São Braz"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898055420484",
    "ean": "7898055420484",
    "nome": "Granola Cereais Crocantes Com Frutas Naturale Pacote 1Kg",
    "marcas": [
      "Naturale"
    ],
    "grupoId": "matinais",
    "apresId": "kg"
  },
  {
    "id": "ean_7898994939726",
    "ean": "7898994939726",
    "nome": "Bebida De Aveia Orgânica 1 litre",
    "marcas": [
      "Nude"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891000371251",
    "ean": "7891000371251",
    "nome": "Iorgute Ameixa, Aveia E Amaranto 170 g",
    "marcas": [
      "Nesfit"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898686950565",
    "ean": "7898686950565",
    "nome": "Creme De Leite Vegetal 200g",
    "marcas": [
      "Notco"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000370643",
    "ean": "7891000370643",
    "nome": "Aveia Flocos Finos",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896327501855",
    "ean": "7896327501855",
    "nome": "Aveia Em Flocos Apti 200g",
    "marcas": [
      "Apti"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898968764118",
    "ean": "7898968764118",
    "nome": "Bebida À Base De Aveia Baunilha Café Nude. Caixa 250Ml",
    "marcas": [
      "Nude."
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7895000515943",
    "ean": "7895000515943",
    "nome": "Farelo De Aveia 170 g",
    "marcas": [
      "Taeq"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000298671",
    "ean": "7891000298671",
    "nome": "Morango Aveia E Baunilha Probióticos 170 g",
    "marcas": [
      "Nestlé",
      "Nesfit"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896093201065",
    "ean": "7896093201065",
    "nome": "Pão Integral 58% Com Aveia, Maçã E Canela",
    "marcas": [
      "Milani"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891737321192",
    "ean": "7891737321192",
    "nome": "Farelo De Aveia - Member'S Mark",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898692301290",
    "ean": "7898692301290",
    "nome": "Bebida De Aveia",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891095028337",
    "ean": "7891095028337",
    "nome": "Aveia Em Flocos Finos Yoki 200g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896283000430",
    "ean": "7896283000430",
    "nome": "Granola Cereais Maltados Jasmine Pouch 250G",
    "marcas": [
      "Jasmine"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891048000090",
    "ean": "7891048000090",
    "nome": "Dr. Oetker Chocolate Em Pó 70% Cacau 200g",
    "marcas": [
      "Dr. Oetker"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896534400200",
    "ean": "7896534400200",
    "nome": "Venturelli Farinha De Trigo Venturelli 1 kg",
    "marcas": [
      "Venturelli"
    ],
    "grupoId": "matinais",
    "apresId": "kg"
  },
  {
    "id": "ean_7896419438014",
    "ean": "7896419438014",
    "nome": "Farinha De Trigo Integral 1kg",
    "marcas": [
      "Anaconda"
    ],
    "grupoId": "matinais",
    "apresId": "kg"
  },
  {
    "id": "ean_7898055421504",
    "ean": "7898055421504",
    "nome": "Aveia Em Flocos Grossos Naturale Somos Aveia Caixa 170G 500g",
    "marcas": [
      "Naturale"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7896283007347",
    "ean": "7896283007347",
    "nome": "Aveia Em Flocos Finos Jasmine 500g",
    "marcas": [
      "Jasmine"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898952041348",
    "ean": "7898952041348",
    "nome": "Granola. Austrália 500g",
    "marcas": [
      "Hart’S Natural"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898962076019",
    "ean": "7898962076019",
    "nome": "Aveia Em Flocos - Barano",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000412855",
    "ean": "7891000412855",
    "nome": "Achocolatado Em Pó, Nescau 350g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000426210",
    "ean": "7891000426210",
    "nome": "Nescau Lata 350G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000379585",
    "ean": "7891000379585",
    "nome": "Nescau",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000258613",
    "ean": "7891000258613",
    "nome": "Cereal Matinal Duo Nescau Caixa 210G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000379738",
    "ean": "7891000379738",
    "nome": "Achocolatado Nescau 670 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000008119",
    "ean": "7891000008119",
    "nome": "Cereal Nescau Bola 270 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000100448",
    "ean": "7891000100448",
    "nome": "Cereal 770 g",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000111161",
    "ean": "7891000111161",
    "nome": "Nescau Matinal Cereal Cxa 210 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000390030",
    "ean": "7891000390030",
    "nome": "Achocolatado Em Pó Nescau",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000359822",
    "ean": "7891000359822",
    "nome": "Bebida Láctea Uht Chocolate Nescau Caixa 180Ml 60",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000394847",
    "ean": "7891000394847",
    "nome": "Nescau Leve Mais",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000081501",
    "ean": "7891000081501",
    "nome": "Bebida Láctea Uht Chocolate Nescau Caixa 1L",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891000338087",
    "ean": "7891000338087",
    "nome": "Achocolatado Em Pó Nescau 550G Refil",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000367506",
    "ean": "7891000367506",
    "nome": "Cereal Matinal Nescau Pacote 30G 16",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000377765",
    "ean": "7891000377765",
    "nome": "Achocolatado Pó 30 Cacau Nescau Lata 180G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000370377",
    "ean": "7891000370377",
    "nome": "Cereal Matinal De Milho Sabor Chocolate",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000023167",
    "ean": "7891000023167",
    "nome": "Bebida Láctea Uht Chocolate Light Nescau Caixa 200Ml",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000053508",
    "ean": "7891000053508",
    "nome": "2.0 400 g",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000067178",
    "ean": "7891000067178",
    "nome": "Achocolatado Pó Nescau Pacote 800G Embalagem Econômica",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000101926",
    "ean": "7891000101926",
    "nome": "Nescau 170Ml 270ml",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000251904",
    "ean": "7891000251904",
    "nome": "Achocolatado Pó 3.0 760 g",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000252185",
    "ean": "7891000252185",
    "nome": "Bebida Láctea Uht Chocolate Zero Lactose Nescau Max Protein Frasco 270Ml",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891000257982",
    "ean": "7891000257982",
    "nome": "4 Grãos 210 g",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000061190",
    "ean": "7891000061190",
    "nome": "Nescau 2.0 200 g",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000070673",
    "ean": "7891000070673",
    "nome": "Nescau Cereal 120g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000277843",
    "ean": "7891000277843",
    "nome": "Kit Cereal Matinal Chocolate Nescau 210G Snow Flakes 300G Mais Economia",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000344026",
    "ean": "7891000344026",
    "nome": "Nescau Chocomelo",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000266182",
    "ean": "7891000266182",
    "nome": "Cereal Nescau 400G",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000326442",
    "ean": "7891000326442",
    "nome": "Barra De Chocolate Ao Leite Com Flocos De Cereais Sabor Chocolate 90 g",
    "marcas": [
      "Nestlé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000243688",
    "ean": "7891000243688",
    "nome": "Nestle 170 g",
    "marcas": [
      "Nestlé",
      "Dolce Gusto",
      "Nescafé",
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000338162",
    "ean": "7891000338162",
    "nome": "Achocolatado Pó Nescau Pacote 730G Embalagem Econômica",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000051474",
    "ean": "7891000051474",
    "nome": "Achocolatado Pó Light Nescau Lata 400G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000266748",
    "ean": "7891000266748",
    "nome": "Achocolatado Pó Nescau Max Cereal Lata 165G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000284599",
    "ean": "7891000284599",
    "nome": "Bebida Láctea Uht Chocolate Nescau Max Cereal Frasco 260Ml",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891000339190",
    "ean": "7891000339190",
    "nome": "Biscoito Cookie Nescau Nestlé Pacote 60G",
    "marcas": [
      "Cookie"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000339558",
    "ean": "7891000339558",
    "nome": "Biscoito Cookie Nescau Duo Nestlé Pacote 60G",
    "marcas": [
      "Cookie"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000341100",
    "ean": "7891000341100",
    "nome": "Achocolatado Pó Nescau Intense Lata 180G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000357644",
    "ean": "7891000357644",
    "nome": "Cereal Matinal Duo Nescau Caixa 400G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000360040",
    "ean": "7891000360040",
    "nome": "Pack Bebida Láctea Uht Chocolate Nescau Caixa 1,62L Leve 9 Pague 8 Unidades 1.62l",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000360156",
    "ean": "7891000360156",
    "nome": "Achocolatado Pó Com Canela Nescau Lata 180G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000360088",
    "ean": "7891000360088",
    "nome": "Achocolatado Pó Chocolate Branco Nescau Lata 180G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000372043",
    "ean": "7891000372043",
    "nome": "Cereal Matinal Extra Cacau Nescau Caixa 170G",
    "marcas": [
      "Nescau"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000356555",
    "ean": "7891000356555",
    "nome": "Achocolatado Pó Nescau Pacote 730G Leve Mais Pague Menos",
    "marcas": [
      "Leve Mais"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7891000089279",
    "ean": "7891000089279",
    "nome": "Bisc Rech Nescau 14Og Nestle 140g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000381113",
    "ean": "7891000381113",
    "nome": "Nescau Activ-Go Zero Lac 180Ml Nestle",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840819507",
    "ean": "7892840819507",
    "nome": "Achoc Po Toddy 370g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840819170",
    "ean": "7892840819170",
    "nome": "Toddy Original 750G 750 g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7894321711058",
    "ean": "7894321711058",
    "nome": "Toddy Light 380 g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840818623",
    "ean": "7892840818623",
    "nome": "Biscoito Cookie Original Toddy Pacote 133G Embalagem Econômica",
    "marcas": [
      "Original"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7894321220529",
    "ean": "7894321220529",
    "nome": "Toddy 700g tudo",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896071024822",
    "ean": "7896071024822",
    "nome": "Biscoito Chocolate Recheio Baunilha Toddy Pacote 100G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7894321219523",
    "ean": "7894321219523",
    "nome": "Toddy Cookie 150g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896071024112",
    "ean": "7896071024112",
    "nome": "Toddy Choco Torta 160 g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7896071025393",
    "ean": "7896071025393",
    "nome": "Biscoito Wafer Sabor Chocolate Trufado - Toddy 94g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840819422",
    "ean": "7892840819422",
    "nome": "Toddy Snickers 350 g",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840819798",
    "ean": "7892840819798",
    "nome": "Achocolatado Pó Original Toddy Pacote 480G Econômica",
    "marcas": [
      "Original"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7896071025386",
    "ean": "7896071025386",
    "nome": "Biscoito Wafer Recheio Chocolate Toddy Pacote 94G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840818715",
    "ean": "7892840818715",
    "nome": "1 Cx. Toddy Ck Choc 16X4X57G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7892840818807",
    "ean": "7892840818807",
    "nome": "Biscoito Cookie Chocolate Com Gotas De Chocolate Toddy Chocoxtreme Pacote 71G",
    "marcas": [
      "Cookie"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840819415",
    "ean": "7892840819415",
    "nome": "Achocolatado Pó Twix Toddy Pote 350G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7892840818630",
    "ean": "7892840818630",
    "nome": "Biscoito Cookie Original Toddy Pacote 38G",
    "marcas": [
      "Original"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7896071025416",
    "ean": "7896071025416",
    "nome": "Biscoito Wafer Chocolate Recheio Morango Toddy Pacote 94G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7896071024839",
    "ean": "7896071024839",
    "nome": "Biscoito Chocolate Recheio Chocolate Toddy Pacote 100G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "pct"
  },
  {
    "id": "ean_7896185310750",
    "ean": "7896185310750",
    "nome": "Bebida Láctea Uht Achocolatado Shefa Caixa 1L",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "lata"
  },
  {
    "id": "ean_7892840818661",
    "ean": "7892840818661",
    "nome": "2 Cx. Toddy Ck Bau 16X4X57G",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "cx"
  },
  {
    "id": "ean_7894321222226",
    "ean": "7894321222226",
    "nome": "Biscoito Toddy Cookie Baunilha",
    "marcas": [
      "Cookie"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840811747",
    "ean": "7892840811747",
    "nome": "Toddy Light - Toddy",
    "marcas": [],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7898225523106",
    "ean": "7898225523106",
    "nome": "Best Whey Toddy",
    "marcas": [
      "Atlhelica Nutrition"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7892840818654",
    "ean": "7892840818654",
    "nome": "Cookies Original Toddy",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_2897840818623",
    "ean": "2897840818623",
    "nome": "Cookies",
    "marcas": [
      "Toddy"
    ],
    "grupoId": "matinais",
    "apresId": "un"
  },
  {
    "id": "ean_7891000325858",
    "ean": "7891000325858",
    "nome": "Leite Po Ninho Integral 380 g",
    "marcas": [
      "Nestlé Ninho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215151708",
    "ean": "7898215151708",
    "nome": "Leite Integral Piracanjuba 1 L",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000248768",
    "ean": "7891000248768",
    "nome": "Kit Kat 41.5 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898080640611",
    "ean": "7898080640611",
    "nome": "Leite Uht Integral 1 L",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898215151784",
    "ean": "7898215151784",
    "nome": "Creme De Leite Piracanjuba 200 g",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898215152002",
    "ean": "7898215152002",
    "nome": "Leite Condensado Piracanjuba 395 g",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898080640413",
    "ean": "7898080640413",
    "nome": "Leite Condensado 395 g",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891962051345",
    "ean": "7891962051345",
    "nome": "Pão De Forma Integral (36% Cereais Integrais) 400g",
    "marcas": [
      "Visconti"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000393284",
    "ean": "7891000393284",
    "nome": "Leite Em Pó Integral Instantâneo Ninho 380g",
    "marcas": [
      "Nestlé Ninho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898080640222",
    "ean": "7898080640222",
    "nome": "Creme De Leite Uht Italac 200g",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891962051338",
    "ean": "7891962051338",
    "nome": "Pão De Forma Tradicional 400g",
    "marcas": [
      "Pandurata",
      "Visconti"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215157403",
    "ean": "7898215157403",
    "nome": "Leite Ninho Integral 1litro",
    "marcas": [
      "Nestlé",
      "Ninho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000065440",
    "ean": "7891000065440",
    "nome": "Leite Moça 395",
    "marcas": [
      "Nestlé Moça"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215151760",
    "ean": "7898215151760",
    "nome": "Leite Uht Semidesnatado 1L",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000051436",
    "ean": "7891000051436",
    "nome": "Bisc Passatempo Leite 150G Nestle 150 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7622210999634",
    "ean": "7622210999634",
    "nome": "Milka Chocolate Milka Branco 100g",
    "marcas": [
      "Milka"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000100103",
    "ean": "7891000100103",
    "nome": "Leite Condensado Integral Moça 395 g",
    "marcas": [
      "Nestlé",
      "Moça"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7894321722016",
    "ean": "7894321722016",
    "nome": "Toddynho Sabor Chocolate 200 ml",
    "marcas": [
      "Toddynho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051115014",
    "ean": "7896051115014",
    "nome": "Leite Condensado Itambé 395 g",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_78912359",
    "ean": "78912359",
    "nome": "Baton Ao Leite 16 g - 0.56 oz",
    "marcas": [
      "Baton",
      "Garoto"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051164609",
    "ean": "7896051164609",
    "nome": "Iogurte Natural Integral 450g",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891193010081",
    "ean": "7891193010081",
    "nome": "Pão De Leite Seven Boys Pacote 450G",
    "marcas": [
      "Seven Boys"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7898080640635",
    "ean": "7898080640635",
    "nome": "Leite Uht Desnatado 1l",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896004400372",
    "ean": "7896004400372",
    "nome": "Leite De Coco Tradicional 200ml",
    "marcas": [
      "Sococo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_78911000",
    "ean": "78911000",
    "nome": "Yakult Leite Fermentado Desnatado Adoçado L. Casei Shirota 80 g",
    "marcas": [
      "Yakult"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898080640628",
    "ean": "7898080640628",
    "nome": "Leite Uht Semi Desnatado 1%",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000336373",
    "ean": "7891000336373",
    "nome": "Chocolate Ao Leite Alpino 85g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051128069",
    "ean": "7896051128069",
    "nome": "Leite Nolac Zero Lactose Integral Itambé 1L 1 L",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000376928",
    "ean": "7891000376928",
    "nome": "Biscoito Recheio Doce De Leite Bono Pacote 90G",
    "marcas": [
      "Bono"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7898215157106",
    "ean": "7898215157106",
    "nome": "Bebida À Base De Amêndoa Original Blue Diamond Almond Breeze Caixa 1L",
    "marcas": [
      "Blue Diamond"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "ean_7899970402814",
    "ean": "7899970402814",
    "nome": "Chocolate Ao Leite Hersheys Pacote 82G",
    "marcas": [
      "Hershey'S"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000244449",
    "ean": "7891000244449",
    "nome": "Iogurte Parcialmente Desnatado Morango Nestlé Garrafa 1,25Kg Tamanho Família 1.25kg",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "ean_7896504305078",
    "ean": "7896504305078",
    "nome": "Leite Integral 1 L",
    "marcas": [
      "Santa Clara"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000109908",
    "ean": "7891000109908",
    "nome": "Leite Em Pó Sem Lactose 380 g",
    "marcas": [
      "Nestlé",
      "Ninho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896331100372",
    "ean": "7896331100372",
    "nome": "Doce De Leite 400 g",
    "marcas": [
      "Aviacao"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215152811",
    "ean": "7898215152811",
    "nome": "Leite Longa Vida Semidesnatado Zero Lactose Piracanjuba 1 L",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7893333325109",
    "ean": "7893333325109",
    "nome": "Cream Cheese Light Philadelphia Pote 150G",
    "marcas": [
      "Philadelphia"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898955617397",
    "ean": "7898955617397",
    "nome": "Requeijão Tradicional Poços De Caldas 200g",
    "marcas": [
      "Poço De Caldas"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215157427",
    "ean": "7898215157427",
    "nome": "Leite Ninho Levinho 1 L",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891025115229",
    "ean": "7891025115229",
    "nome": "Amêndoa Sem Açúcares 1 litro",
    "marcas": [
      "Silk"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896051111016",
    "ean": "7896051111016",
    "nome": "Leite Integral Itambé Longa Vida 1l",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898080640239",
    "ean": "7898080640239",
    "nome": "Bebida Láctea Uht Sabor Chocolate 200Ml Italac",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7892300002791",
    "ean": "7892300002791",
    "nome": "Leite De Coco 200ml",
    "marcas": [
      "Sinhá"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215157441",
    "ean": "7898215157441",
    "nome": "Leite Desnatado Molico",
    "marcas": [
      "Molico"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215151722",
    "ean": "7898215151722",
    "nome": "Leite Desnatado Caixa 1 L",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898215157854",
    "ean": "7898215157854",
    "nome": "Beb Lac Piracanjuba 250Ml Whey 15G Z/Lac Chocolate 12",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891203010100",
    "ean": "7891203010100",
    "nome": "Pão De Leite",
    "marcas": [
      "Panco"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897047000031",
    "ean": "7897047000031",
    "nome": "Moreninha De Rio 500g",
    "marcas": [
      "Moreninha Do Rio"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000399590",
    "ean": "7891000399590",
    "nome": "Leite Em Pó Integral Ninho",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896294901993",
    "ean": "7896294901993",
    "nome": "Leite Sem Lactose Integral 1L",
    "marcas": [
      "Tirol"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896181711162",
    "ean": "7896181711162",
    "nome": "Amendo Power Crunchy 500g",
    "marcas": [
      "Dacolônia"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051135425",
    "ean": "7896051135425",
    "nome": "Manteiga Itambé 500G",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896583400060",
    "ean": "7896583400060",
    "nome": "Mantega De Primeira Qualidade 500g",
    "marcas": [
      "Paracatu"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896259410164",
    "ean": "7896259410164",
    "nome": "Manteiga Camponesa C/Sal",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897685920326",
    "ean": "7897685920326",
    "nome": "Pasta De Amendoim Com Whey 450g",
    "marcas": [
      "Santo Antônio"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898080642691",
    "ean": "7898080642691",
    "nome": "Manteiga De Primeira Qualidade",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891095029723",
    "ean": "7891095029723",
    "nome": "Pipoca Sabor Manteiga 50 g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898939072617",
    "ean": "7898939072617",
    "nome": "Pasta De Amendoim Integral Crocante 1,005 kg",
    "marcas": [
      "Power 1 One"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "ean_7896003738612",
    "ean": "7896003738612",
    "nome": "Biscoito Cream Cracker Manteiga Marilan Pacote 350G",
    "marcas": [
      "Marilan"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7897318572816",
    "ean": "7897318572816",
    "nome": "Manteiga 500g",
    "marcas": [
      "Davaca"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896122300516",
    "ean": "7896122300516",
    "nome": "Manteiga Porto Alegre 200g",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896030519635",
    "ean": "7896030519635",
    "nome": "Tirolez Manteiga C/Sal 200g",
    "marcas": [
      "Tirolez"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898130990512",
    "ean": "7898130990512",
    "nome": "Manteiga De Búfala Bom Destino 200 g",
    "marcas": [
      "Bom Destino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897110300105",
    "ean": "7897110300105",
    "nome": "Aviação Manteiga Em Lata Com Sal 200g",
    "marcas": [
      "Aviação"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "lata"
  },
  {
    "id": "ean_7898649351248",
    "ean": "7898649351248",
    "nome": "Pasta De Amendoim Crocante Integral Fit Food Pote 450G 500g",
    "marcas": [
      "Fit Food"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898939009187",
    "ean": "7898939009187",
    "nome": "Manteiga Ghee Com Sal Rosa Natural Dom Afonso 500g",
    "marcas": [
      "Dom Afonso"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898024450337",
    "ean": "7898024450337",
    "nome": "Manteiga Comum Com Sal",
    "marcas": [
      "Três Marias"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897013809071",
    "ean": "7897013809071",
    "nome": "Manteiga Tradicional",
    "marcas": [
      "Rádio"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097106040",
    "ean": "7891097106040",
    "nome": "Manteiga Presidente Tablete Zero Lactose 200G",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898215151425",
    "ean": "7898215151425",
    "nome": "Manteiga Com Sal Sem Lactose",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097103841",
    "ean": "7891097103841",
    "nome": "Mussarela Fatiada 300g",
    "marcas": [
      "Président"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898955617526",
    "ean": "7898955617526",
    "nome": "Queijo Mussarela Fatiado 150g",
    "marcas": [
      "Président"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896122302527",
    "ean": "7896122302527",
    "nome": "Zero Lactose Fatiado",
    "marcas": [
      "Porto Alegre"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7893000671997",
    "ean": "7893000671997",
    "nome": "Pizza Lombo Com Requeijão E Mussarela Sadia Caixa 460G",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896030520181",
    "ean": "7896030520181",
    "nome": "Queijo Mussarela Fatiado Light 150g",
    "marcas": [
      "Tirolez"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896733400575",
    "ean": "7896733400575",
    "nome": "Queijo Mussarela",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891164026424",
    "ean": "7891164026424",
    "nome": "Pizza Pronta Calabresa Aurora 460 G",
    "marcas": [
      "Aurora",
      "Cooperativa Central Aurora Alimentos",
      "Mezzani Alimentos Limitada"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051167167",
    "ean": "7896051167167",
    "nome": "Requeijão Cremoso 200 g",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7893000084315",
    "ean": "7893000084315",
    "nome": "Queijo Mussarela Sadia Soltíssimo 200G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051165446",
    "ean": "7896051165446",
    "nome": "Queijo Mussarela (Fatiado) 150 g",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7898165960313",
    "ean": "7898165960313",
    "nome": "Mussarela Recheada Tomate Seco",
    "marcas": [
      "Bom Da Fazenda"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_0542000276066",
    "ean": "0542000276066",
    "nome": "Recheado Com Levíssimo E Mussarela Seara 110 g",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898205924138",
    "ean": "7898205924138",
    "nome": "Queijo Mussarela Lacfree Pesado na Loja",
    "marcas": [
      "Verde Campo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_00857703",
    "ean": "00857703",
    "nome": "Queijo Mussarela De Búfala (Nozinho)",
    "marcas": [
      "Danata"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7894904255856",
    "ean": "7894904255856",
    "nome": "Pizza De Mussarela 400g",
    "marcas": [
      "Lebon"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891515592097",
    "ean": "7891515592097",
    "nome": "Queijo Mussarela Fatiado Sadia Soltíssimo 300G Embalagem Econômica",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891097103285",
    "ean": "7891097103285",
    "nome": "Queijo Mussarela Ralado Fresco Président Pacote 100G",
    "marcas": [
      "Président"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7891150079441",
    "ean": "7891150079441",
    "nome": "Macarrão Instantâneo Fusilli Tomate E Mussarela Knorr Pasta Pot Copo 72G",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891164026011",
    "ean": "7891164026011",
    "nome": "Pizza Aurora Mussarela",
    "marcas": [
      "Aurora"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898905835093",
    "ean": "7898905835093",
    "nome": "Queijo Mussarela De Búfala Cereja Levitare 250G",
    "marcas": [
      "Levitare"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897277704105",
    "ean": "7897277704105",
    "nome": "Queijo Mussarela Cereja Atilatte 250G",
    "marcas": [
      "Atilatte"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896944100684",
    "ean": "7896944100684",
    "nome": "Torteloni De Alcachofra E Mussarela De Búfala Magazzino 500G",
    "marcas": [
      "Magazzino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896030520761",
    "ean": "7896030520761",
    "nome": "Queijo Mussarela Stick Tirolez 60G",
    "marcas": [
      "Tirolez"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898058580383",
    "ean": "7898058580383",
    "nome": "Rondelli Espinafre, Mussarela E Requeijão Dona Thereza Pacote 400G",
    "marcas": [
      "Dona Thereza"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7898072690204",
    "ean": "7898072690204",
    "nome": "Queijo Mussarela De Búfala Cerejinha Búfalo Dourado 200G",
    "marcas": [
      "Búfalo Dourado"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898968082038",
    "ean": "7898968082038",
    "nome": "Queijo Mussarela Vegano Nomoo 150G",
    "marcas": [
      "Nomoo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896425001325",
    "ean": "7896425001325",
    "nome": "Qj Mussarela Yema Cereja Leite Light 155G",
    "marcas": [
      "Cereja"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897277704112",
    "ean": "7897277704112",
    "nome": "Queijo Mussarela Bola Atilatte 250G",
    "marcas": [
      "Atilatte"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896944100615",
    "ean": "7896944100615",
    "nome": "Ravióli De Mussarela De Búfala Artesanal Magazzino 500G",
    "marcas": [
      "Magazzino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896944103234",
    "ean": "7896944103234",
    "nome": "Ravioloni Tricolori De Mussarela De Búfala E Tomate Seco Magazzino 500G",
    "marcas": [
      "Magazzino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898934645335",
    "ean": "7898934645335",
    "nome": "Queijo Mussarela De Búfala Bola Média Búfalo Dourado 200G",
    "marcas": [
      "Búfalo Dourado"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896944100981",
    "ean": "7896944100981",
    "nome": "Ravióli Verde De Mussarela De Búfala E Tomate Seco Magazzino 500G",
    "marcas": [
      "Magazzino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898072690013",
    "ean": "7898072690013",
    "nome": "Queijo Mussarela De Búfala Bola No Soro Búfalo Dourado 500G",
    "marcas": [
      "Búfalo Dourado"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7894904326068",
    "ean": "7894904326068",
    "nome": "Pizza De Mussarela Seara",
    "marcas": [
      "Seara"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898266070133",
    "ean": "7898266070133",
    "nome": "Queijo Mussarela De Búfala Bolinha Búfala Almeida Prado 200G",
    "marcas": [
      "Almeida Prado"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7894904259953",
    "ean": "7894904259953",
    "nome": "Pizza Artesanal Pepperoni Com Mussarela Seara Gourmet Caixa 450G",
    "marcas": [
      "Artesanal"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896051166320",
    "ean": "7896051166320",
    "nome": "Queijo Mussarela Fatiado Itambé 300G",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7898266070102",
    "ean": "7898266070102",
    "nome": "Queijo Mussarela De Búfala Bola Búfala Almeida Prado 250G",
    "marcas": [
      "Búfala Almeida Prado"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897277705157",
    "ean": "7897277705157",
    "nome": "Queijo Mussarela Palito Atilatte 304G 8 Unidades",
    "marcas": [
      "Atilatte"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097104459",
    "ean": "7891097104459",
    "nome": "Queijo Mussarela Ralado Fresco Président Pacote 400G",
    "marcas": [
      "Fresco"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7898968082250",
    "ean": "7898968082250",
    "nome": "Queijo Mussarela Fatiado Vegano Nomoo 150G",
    "marcas": [
      "Nomoo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7898130990840",
    "ean": "7898130990840",
    "nome": "Queijo Mussarela De Búfala Bola Média Bom Destino 1Kg",
    "marcas": [
      "Bom Destino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "ean_7898968082366",
    "ean": "7898968082366",
    "nome": "Queijo Mussarela Ralado Vegano Nomoo Pouch 150G",
    "marcas": [
      "Nomoo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898072690464",
    "ean": "7898072690464",
    "nome": "Queijo Mussarela De Búfala Fatiado Búfalo Dourado 100G",
    "marcas": [
      "Búfalo Dourado"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891000378175",
    "ean": "7891000378175",
    "nome": "Iogurte Integral Natural Nestlé Bandeja 340G 4 Unidades",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891025120230",
    "ean": "7891025120230",
    "nome": "Iogurte Integral Natural Danone Copo 160G",
    "marcas": [
      "Danone"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000073018",
    "ean": "7891000073018",
    "nome": "Yogurte Natural Desnatado 160g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025120223",
    "ean": "7891025120223",
    "nome": "Danone Natural Desnatado 160g",
    "marcas": [
      "Danone"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000072998",
    "ean": "7891000072998",
    "nome": "Iogurte Integral Com Preparado De Cenoura, Laranja E Mel 170g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896625210763",
    "ean": "7896625210763",
    "nome": "Iogurte Parcialmente Desnatado Natural Vigor Viv 150g",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097103643",
    "ean": "7891097103643",
    "nome": "Iogurte Batavo Pensé Zero Morango 1,15Kg",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "kg"
  },
  {
    "id": "ean_7891000340004",
    "ean": "7891000340004",
    "nome": "Iogurte Parcialmente Desnatado Morango Calda Morango Nestlé Copo 150G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000360620",
    "ean": "7891000360620",
    "nome": "Iogurte Grego Frutas Vermelhas Nestlé Bandeja 360G 4 Unidades",
    "marcas": [
      "Nestl"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891097001253",
    "ean": "7891097001253",
    "nome": "Iogurte Parcialmente Desnatado Grego Sabor Morango Zero Lactose 450g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896625211142",
    "ean": "7896625211142",
    "nome": "Iogurte Grego Tradicional Vigor Pote 90G",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025115311",
    "ean": "7891025115311",
    "nome": "Yopro Morango160G",
    "marcas": [
      "Danone S.A.",
      "Yopro"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025124177",
    "ean": "7891025124177",
    "nome": "Corpus Morango Triplo Zero 800 g",
    "marcas": [
      "Danone"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896625211166",
    "ean": "7896625211166",
    "nome": "Iogurte Desnatado Grego Vigor Pote 90G",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896625211111",
    "ean": "7896625211111",
    "nome": "Iogurte Grego Calda Frutas Vermelhas Vigor Pote 90G",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097000720",
    "ean": "7891097000720",
    "nome": "Iogurte Grego Tradicional Zero Lactose Batavo Pense Zero Pote 100G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097000195",
    "ean": "7891097000195",
    "nome": "Iogurte Integral Laranja, Cenoura E Mel Batavo Copo 170G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097104886",
    "ean": "7891097104886",
    "nome": "Iogurte Probio2 Ameixa 170 g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896229800315",
    "ean": "7896229800315",
    "nome": "Iogurte Morango Fazenda Bela Vista 500g",
    "marcas": [
      "Fazenda Bela Vista"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898205924435",
    "ean": "7898205924435",
    "nome": "Natural Whey Verde Campo Sabor Cookies & Cream 1, 250g",
    "marcas": [
      "Verde Campo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896066336626",
    "ean": "7896066336626",
    "nome": "Pão Iogurte Cenoura Wickbold Estar Leve Pacote 370G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7891097101632",
    "ean": "7891097101632",
    "nome": "Iogurte Integral Com Preparado De Mel 170g",
    "marcas": [
      "Batavo",
      "Lactalis"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_78936171",
    "ean": "78936171",
    "nome": "Iogurte Grego Tradicional Nestlé Pote 90G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898205924725",
    "ean": "7898205924725",
    "nome": "Iogurte Natural Whey Morango 500g",
    "marcas": [
      "Verde Campo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097000140",
    "ean": "7891097000140",
    "nome": "Iogurte Grego Sabor Morango 500g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898994703853",
    "ean": "7898994703853",
    "nome": "Kefir D3Snatado",
    "marcas": [
      "Kefir"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025123040",
    "ean": "7891025123040",
    "nome": "Iogurte Grego Calda Flocos Danone Pote 90G",
    "marcas": [
      "Danone"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000103937",
    "ean": "7891000103937",
    "nome": "Queijo Petit Suisse Morango Chambinho Bandeja 320G 8 Unidades",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891000360668",
    "ean": "7891000360668",
    "nome": "Iogurte Parcialmente Desnatado Morango Chambinho Recreio Squeeze 100G",
    "marcas": [
      "Chambinho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025123378",
    "ean": "7891025123378",
    "nome": "Iogurte Integral Grego Original Frutas Vermelhas Danone Bandeja 510G 6 Unidades",
    "marcas": [
      "Integral"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896051164630",
    "ean": "7896051164630",
    "nome": "Pedaços Coco 500 g",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051166122",
    "ean": "7896051166122",
    "nome": "Iogurte Grego Com Flocos De Chocolate 450g",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097010828",
    "ean": "7891097010828",
    "nome": "Iogurte Integral Coco Batavo Pedaços Pote 500G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896229800261",
    "ean": "7896229800261",
    "nome": "Iogurte Desnatado Natural Fazenda Bela Vista Copo 170G",
    "marcas": [
      "Fazenda Bela Vista"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898958161514",
    "ean": "7898958161514",
    "nome": "Iogurte Vegetal Pasta De Amendoim Vida Veg Protein Frasco 250G",
    "marcas": [
      "Vida Veg"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891097000799",
    "ean": "7891097000799",
    "nome": "Iogurte Integral Cremoso Natural Batavo Pote 500G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891000360583",
    "ean": "7891000360583",
    "nome": "Iogurte Grego Tradicional 360g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025123361",
    "ean": "7891025123361",
    "nome": "Iogurte Integral Grego Original Danone Bandeja 340G 4 Unidades",
    "marcas": [
      "Danone"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891097001260",
    "ean": "7891097001260",
    "nome": "Iogurte Desnatado Morango Zero Lactose Batavo Pense Zero Pedaços Pote 500G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7897277703092",
    "ean": "7897277703092",
    "nome": "Iogurte Desnatado Zero Lactose Ati Latte Copo 170G",
    "marcas": [
      "Ati Latte"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896051164708",
    "ean": "7896051164708",
    "nome": "Iogurte Integral Itambé Natural Milk Copo 170G",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896625211081",
    "ean": "7896625211081",
    "nome": "Iogurte Grego Flocos Vigor Loucos Por Flocos Pote 90G",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896058505962",
    "ean": "7896058505962",
    "nome": "Bala Iogurte De Morango Dori Yogurte100 Original Pacote 100G",
    "marcas": [
      "Dori"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7891097000126",
    "ean": "7891097000126",
    "nome": "Iogurte Integral Com Preparado De Abacaxi 450g",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891025114406",
    "ean": "7891025114406",
    "nome": "Triplo Zero Morango Corpus 170 g",
    "marcas": [
      "Corpus"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898205924466",
    "ean": "7898205924466",
    "nome": "Iorgute Frutas Lacfree 170 g",
    "marcas": [
      "Verde Campo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898403780925",
    "ean": "7898403780925",
    "nome": "Creme De Leite Leve Uht Homogeneizado",
    "marcas": [
      "Betânia"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896275960575",
    "ean": "7896275960575",
    "nome": "Creme De Leite Uht 200g",
    "marcas": [
      "Frimesa"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000126905",
    "ean": "7891000126905",
    "nome": "Creme De Leite Uht Nestle 200 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896051114086",
    "ean": "7896051114086",
    "nome": "Creme De Leite Esterilizado Homogeneizado Itambé Lata 300G",
    "marcas": [
      "Itambé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "lata"
  },
  {
    "id": "ean_7891030300306",
    "ean": "7891030300306",
    "nome": "Mistura De Leite, Soro De Leite, Creme De Leite E Gordura Vegetal",
    "marcas": [
      "Mococa"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891030003467",
    "ean": "7891030003467",
    "nome": "Creme De Leite Leve Uht 200g",
    "marcas": [
      "Mococa"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000253182",
    "ean": "7891000253182",
    "nome": "Creme De Leite Leve 200 g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898080641557",
    "ean": "7898080641557",
    "nome": "Creme De Leite Zero Lactose 200 g",
    "marcas": [
      "Italac"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896259411628",
    "ean": "7896259411628",
    "nome": "Creme De Leite - Embaré",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898215151982",
    "ean": "7898215151982",
    "nome": "Creme De Leite Uht Homogeneizado Zero Lactose Piracanjuba Caixa 200G",
    "marcas": [
      "Piracanjuba"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896256600780",
    "ean": "7896256600780",
    "nome": "Creme De Leite",
    "marcas": [
      "Tirol"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891097105128",
    "ean": "7891097105128",
    "nome": "Creme De Leite Levíssimo",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000120101",
    "ean": "7891000120101",
    "nome": "Creme De Leite Nestlé 300g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7895000318452",
    "ean": "7895000318452",
    "nome": "Qualitá Creme De Leite 200g",
    "marcas": [
      "Qualitá",
      "Grupo Pão De Açúcar"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896275980955",
    "ean": "7896275980955",
    "nome": "Creme Leite",
    "marcas": [
      "Firmeza"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896256604511",
    "ean": "7896256604511",
    "nome": "Creme De Leite Tirol",
    "marcas": [
      "Tirol"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896283800245",
    "ean": "7896283800245",
    "nome": "Creme De Leite Leve Jussara 200g",
    "marcas": [
      "Jussara"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891999010735",
    "ean": "7891999010735",
    "nome": "Iogurte Com Creme E Calda De Frutas 100g",
    "marcas": [
      "Vigor"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898530841254",
    "ean": "7898530841254",
    "nome": "Dadinho Bitz Chocolate Ao Leite Recheio De Creme De Amendoim 9g",
    "marcas": [
      "Dadinho"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7891097104138",
    "ean": "7891097104138",
    "nome": "Creme De Leite Uht Homogeneizado Président Caixa 200G",
    "marcas": [
      "Président"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000354537",
    "ean": "7891000354537",
    "nome": "Mistura De Creme De Leite Uht Nestlé Caixa 200G",
    "marcas": [
      "Nestl"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896030518485",
    "ean": "7896030518485",
    "nome": "Creme De Leite Pasteurizado Tirolez Garrafa 500G",
    "marcas": [
      "Tirolez"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "gfa"
  },
  {
    "id": "ean_0732783810261",
    "ean": "0732783810261",
    "nome": "Creme De Leite Uht Leve Homogeneizado Dália Caixa 200G",
    "marcas": [
      "Dália"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7891000316849",
    "ean": "7891000316849",
    "nome": "Creme De Leite Esterilizado Bate Chantilly Homogeneizado Nestlé Lata 280G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "lata"
  },
  {
    "id": "ean_7891008122022",
    "ean": "7891008122022",
    "nome": "Chocolate Ao Leite Recheio Creme De Avelã Garoto Talento Pacote 85G",
    "marcas": [
      "Talento"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7891079012772",
    "ean": "7891079012772",
    "nome": "Macarrão Instantâneo Talharim Queijo Parmesão E Creme De Leite Nissin Pacote 99G",
    "marcas": [
      "Nissin"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7891097000850",
    "ean": "7891097000850",
    "nome": "Creme Quark Tradicional Batavo Nuv Pote 100G",
    "marcas": [
      "Batavo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898681790401",
    "ean": "7898681790401",
    "nome": "Creme De Leite Uht Dália Sabor Da Fazenda Caixa 200G",
    "marcas": [
      "Dália"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7898958870843",
    "ean": "7898958870843",
    "nome": "Sorvete Leite Com Creme De Avelã Los Los Pote 490Ml",
    "marcas": [
      "Los Los"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898967660008",
    "ean": "7898967660008",
    "nome": "Gelato Creme Leite Bacio Di Latte 490Ml",
    "marcas": [
      "Baci"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7898205920222",
    "ean": "7898205920222",
    "nome": "Creme De Leite Pasteurizado Bate Chantilly Verde Campo Garrafa 500G",
    "marcas": [
      "Verde Campo"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896229800087",
    "ean": "7896229800087",
    "nome": "Creme De Leite Pasteurizado Fazenda Bela Vista Garrafa 500G",
    "marcas": [
      "Fazenda Bela Vista"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896001200210",
    "ean": "7896001200210",
    "nome": "Barra De Proteína Creme De Avelã Cobertura Chocolate Ao Leite Linea Pacote 32G",
    "marcas": [
      "Linea"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "pct"
  },
  {
    "id": "ean_7895000360116",
    "ean": "7895000360116",
    "nome": "Creme De Leite Qualita Lata 300G",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "lata"
  },
  {
    "id": "ean_7896623100554",
    "ean": "7896623100554",
    "nome": "Creme De Leite Pasteurizado Xandô Frasco 300G",
    "marcas": [],
    "grupoId": "frios-e-laticinios",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898130991083",
    "ean": "7898130991083",
    "nome": "Creme De Leite De Búfala Pasteurizado Bate Chantilly Bom Destino Garrafa 500G",
    "marcas": [
      "Bom Destino"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896986246050",
    "ean": "7896986246050",
    "nome": "Bombom De Chocolate Ao Leite Com Recheio De Creme De Avelã",
    "marcas": [
      "Cacaushow"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7896122301445",
    "ean": "7896122301445",
    "nome": "Creme De Leite Pasteurizado 500 g",
    "marcas": [
      "Porto Alegre"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "cx"
  },
  {
    "id": "ean_7896311768325",
    "ean": "7896311768325",
    "nome": "Protein Crisp Leite Em Pó Com Creme De Avelã",
    "marcas": [
      "Integralmedica"
    ],
    "grupoId": "frios-e-laticinios",
    "apresId": "un"
  },
  {
    "id": "ean_7622210596413",
    "ean": "7622210596413",
    "nome": "Wafers, Barras Recheadas E Tabletes Sortidos 250.6g",
    "marcas": [
      "Lacta",
      "Mondelez",
      "Mondelez International"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210575975",
    "ean": "7622210575975",
    "nome": "Wafer Recheado Com Cobertura Sabor Chocolate 100.8g",
    "marcas": [
      "Bis"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_8691066267050",
    "ean": "8691066267050",
    "nome": "Hay Hay Biscoito Com Creme De Caramelo Coberto De Cacau 108 g",
    "marcas": [
      "Cizmeci Time"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896024761651",
    "ean": "7896024761651",
    "nome": "Biscoito Doce Maizena 175 g",
    "marcas": [
      "Piraquê"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300990749",
    "ean": "7622300990749",
    "nome": "Pack Biscoito Original Club Social 144g",
    "marcas": [
      "Club Social"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300990732",
    "ean": "7622300990732",
    "nome": "Biscoito Salgado Club Social Original 24 g",
    "marcas": [
      "Club Social"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000241356",
    "ean": "7891000241356",
    "nome": "Bisc Rech Passatempo Choc 130G Nestle",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300830151",
    "ean": "7622300830151",
    "nome": "Biscoito Original Batman Oreo Pacote 90G",
    "marcas": [
      "Oreo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962047560",
    "ean": "7891962047560",
    "nome": "Cereale Cacau E Castanhas",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898416780028",
    "ean": "7898416780028",
    "nome": "Bisc Polvilho Sal Cassini 100g",
    "marcas": [
      "Cassini"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210592781",
    "ean": "7622210592781",
    "nome": "Biscoito Recheio Morango Trakinas Recheio Pacote 126G",
    "marcas": [
      "Trakinas"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962076317",
    "ean": "7891962076317",
    "nome": "Bauducco Speculoos 84g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300988470",
    "ean": "7622300988470",
    "nome": "Wafer Recheado Coberto Com Chocolate 45g",
    "marcas": [
      "Lacta"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210641144",
    "ean": "7622210641144",
    "nome": "Galletita Club Social De Pizza 23,5 g",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896213006235",
    "ean": "7896213006235",
    "nome": "Biscoito Cream Cracker Amanteigado Tradicional Vitarella Pacote 350G 96",
    "marcas": [
      "Vitarella"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000329498",
    "ean": "7891000329498",
    "nome": "Biscoito De Coco 160g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896058258530",
    "ean": "7896058258530",
    "nome": "Biscoito Maizena - Triunfo",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962050065",
    "ean": "7891962050065",
    "nome": "Recheadinho Goiaba 112G",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_5601069102961",
    "ean": "5601069102961",
    "nome": "Cookies Special Selection 454 g",
    "marcas": [
      "Danesita"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300988517",
    "ean": "7622300988517",
    "nome": "Wafer Oreo Cobertura Chocolate Branco E Biscoito Lacta Bis Xtra 45g",
    "marcas": [
      "Bis",
      "Mondelez",
      "Mondelez International"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891203020260",
    "ean": "7891203020260",
    "nome": "Pão De Mel 200g",
    "marcas": [
      "Panco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962054100",
    "ean": "7891962054100",
    "nome": "Biscoito Cookie Tradicional Bauducco Pacote 100G",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7622210833389",
    "ean": "7622210833389",
    "nome": "Bis Black 100,8 g",
    "marcas": [
      "Lacta",
      "Mondelez"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896061300677",
    "ean": "7896061300677",
    "nome": "Biscoito Din Crackers Original Tucs Pacote 100G",
    "marcas": [
      "Tuc'S"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896024760357",
    "ean": "7896024760357",
    "nome": "Biscoito Recheio Chocolate Piraquê Pacote 160G",
    "marcas": [
      "Piraque"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962037004",
    "ean": "7891962037004",
    "nome": "Wafer Morango 140G Bauducco",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000304556",
    "ean": "7891000304556",
    "nome": "Nesfit Cacao & Cereais",
    "marcas": [
      "Nestlé",
      "Nesfit"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210933454",
    "ean": "7622210933454",
    "nome": "Mini Oreo 35 g",
    "marcas": [
      "Oreo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891203021106",
    "ean": "7891203021106",
    "nome": "Rosquinha Coco Panco R 500 g",
    "marcas": [
      "Panco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962051079",
    "ean": "7891962051079",
    "nome": "Bisc Cereale Maca/Uva 141G Bauducco",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210592668",
    "ean": "7622210592668",
    "nome": "Biscoito Recheio Chocolate Branco E Preto Trakinas Meio A Meio Pacote 126G",
    "marcas": [
      "Trakinas"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962036991",
    "ean": "7891962036991",
    "nome": "Wafer Choc C/Avela 140 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896213005771",
    "ean": "7896213005771",
    "nome": "Biscoito Cristal Vitarella Delicitá Pacote 414G",
    "marcas": [
      "Vitarella"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896058258844",
    "ean": "7896058258844",
    "nome": "Biscoito Cream Cracker 345 g",
    "marcas": [
      "Triunfo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300873554",
    "ean": "7622300873554",
    "nome": "Biscoito Chocolate Recheio Chocolate Oreo Pacote 90G",
    "marcas": [
      "Oreo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896024760364",
    "ean": "7896024760364",
    "nome": "Biscoito Recheio Morango Piraquê Pacote 160G",
    "marcas": [
      "Piraque"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891152801507",
    "ean": "7891152801507",
    "nome": "Biscoito Maizena",
    "marcas": [
      "Fortaleza"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896058257656",
    "ean": "7896058257656",
    "nome": "Biscoito Com Recheio Sabor Chocolate 90g",
    "marcas": [
      "Triunfo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000369203",
    "ean": "7891000369203",
    "nome": "Biscoito Laranja E Banana Mucilon Meu Primeiro Lanchinho Pacote 35G",
    "marcas": [
      "Mucilon"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896024761422",
    "ean": "7896024761422",
    "nome": "Biscoito Recheado Supreme Chocolate Com Avelã 80 g",
    "marcas": [
      "Piraquê"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7897559900171",
    "ean": "7897559900171",
    "nome": "Biscoito De Polvilho Tradicional",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896004010052",
    "ean": "7896004010052",
    "nome": "Biscoito Recheado Sabor Chocolate",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000402979",
    "ean": "7891000402979",
    "nome": "Choco Biscuit",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_78939318",
    "ean": "78939318",
    "nome": "Bombom Wafer Lacta Ouro Branco Pacote 20G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000325131",
    "ean": "7891000325131",
    "nome": "Bombom Nestlé Especialidades 251g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_78909434",
    "ean": "78909434",
    "nome": "Bombom Ferrero Rocher Pacote 37,5G 37.5g",
    "marcas": [
      "Ferrero Rocher"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_78907188",
    "ean": "78907188",
    "nome": "Bombom Amor Carioca 20 g",
    "marcas": [
      "Neugebauer"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000092606",
    "ean": "7891000092606",
    "nome": "Bombom Chocolate Recheio Leite Maltado Lollo Pacote 28G",
    "marcas": [
      "Lolo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7622210568601",
    "ean": "7622210568601",
    "nome": "Bombom Wafer Sonho De Valsa Ouro Branco Lacta Caixa 220G 11 Unidades",
    "marcas": [
      "Sonho De Valsa"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7891008114003",
    "ean": "7891008114003",
    "nome": "Bombom Garoto Garotices Caixa 250G",
    "marcas": [
      "Garoto"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7898024396994",
    "ean": "7898024396994",
    "nome": "Bombom Ferrero Rocher Bandeja 150G 12 Unidades",
    "marcas": [
      "Ferrero"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891000113608",
    "ean": "7891000113608",
    "nome": "Bombom Nestle 300G Especialidades",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891008210064",
    "ean": "7891008210064",
    "nome": "Bombom Garoto Serenata De Amor 266 g",
    "marcas": [
      "Garoto"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896423471656",
    "ean": "7896423471656",
    "nome": "Bombom Triplo Chocolate Twix Pacote 80G 4 Unidades",
    "marcas": [
      "Twix"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896653708294",
    "ean": "7896653708294",
    "nome": "Flormel Mini Bombom Com Coco 60 g",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898530841551",
    "ean": "7898530841551",
    "nome": "Dadinho Bombom Recheado De Amendoim Ao Leite 16,5g",
    "marcas": [
      "Dadinho"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898530842299",
    "ean": "7898530842299",
    "nome": "Dadinho Bombom Black + Cacau Wafer Recheado De Amendoim, Chocolate Meio Amargo 16,5g",
    "marcas": [
      "Dadinho"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896003738872",
    "ean": "7896003738872",
    "nome": "Tortinhas Sabor Bombom 140 g",
    "marcas": [
      "Marilan"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898951693111",
    "ean": "7898951693111",
    "nome": "Bombom De Oreo 50 g, 1 u",
    "marcas": [
      "Bombons D' Lucy",
      "Bombons D'Lucy"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896653708317",
    "ean": "7896653708317",
    "nome": "Mini Bombom Com Amendoim",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896423470994",
    "ean": "7896423470994",
    "nome": "Bombom Twix Pacote 40G",
    "marcas": [
      "Twix"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7622210411501",
    "ean": "7622210411501",
    "nome": "Bombom Lacta 5 Star Pacote 40G",
    "marcas": [
      "5 Star"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7899930900787",
    "ean": "7899930900787",
    "nome": "Bombom Chocolate Com Recheio De Marshmellow",
    "marcas": [
      "Goldko"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_78931244",
    "ean": "78931244",
    "nome": "Bombom Sabor Brigadeiro Com Recheio De Brigadeiro 15 g, 0.53 OZ",
    "marcas": [
      "Arcor"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_78913769",
    "ean": "78913769",
    "nome": "Bombom Wafer Lacta Ouro Branco Pacote 1Kg",
    "marcas": [
      "Lacta"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "kg"
  },
  {
    "id": "ean_7891000256138",
    "ean": "7891000256138",
    "nome": "Pack Bombom Branco Prestígio Pacote 114G 6 Unidades",
    "marcas": [
      "Prestigio"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_0742832841290",
    "ean": "0742832841290",
    "nome": "Bombom 56 Cacau Recheio Creme De Avelã Com Cacau Zero Lactose Haoma Lata 200G",
    "marcas": [
      "Haoma"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "lata"
  },
  {
    "id": "ean_7898530841537",
    "ean": "7898530841537",
    "nome": "Bombom Wafer Dadinho Lovers Pacote 413G",
    "marcas": [
      "Dadinho"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896066762616",
    "ean": "7896066762616",
    "nome": "Bombom Sortido Cobertura Chocolate Bel Caixa 180G 20 Unidades",
    "marcas": [
      "Labra"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7896423451191",
    "ean": "7896423451191",
    "nome": "Bombom Twix Pacote 80G 4 Unidades",
    "marcas": [
      "Twix"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896653708898",
    "ean": "7896653708898",
    "nome": "Bombom Cookies N Cream Flormel Pouch 75G 5 Unidades",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896653709215",
    "ean": "7896653709215",
    "nome": "Bombom Branco Cremoso Flormel Pacote 37,5G 3 Unidades 37.5g",
    "marcas": [
      "Cremoso"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896423405491",
    "ean": "7896423405491",
    "nome": "Bombom Triplo Chocolate Twix Pacote 40G",
    "marcas": [
      "Twix"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896653709178",
    "ean": "7896653709178",
    "nome": "Bombom Chocolate Cremoso Flormel Pacote 37,5G 3 Unidades 37.5g",
    "marcas": [
      "Cremoso"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7898024397151",
    "ean": "7898024397151",
    "nome": "Bombom Ferrero Collection Caixa 77G 7 Unidades",
    "marcas": [
      "Ferrero Rocher"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7896653709192",
    "ean": "7896653709192",
    "nome": "Bombom Caramelo Nozes Flormel Pacote 37,5G 3 Unidades 37.5g",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896653707778",
    "ean": "7896653707778",
    "nome": "Bombom Recheio Creme Avelã Crocante Flormel Pouch 75G 5 Unidades",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_8003340805269",
    "ean": "8003340805269",
    "nome": "Bombom Italiano Sortido Lindt Caixa 75G",
    "marcas": [
      "Lindt"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_8003340005003",
    "ean": "8003340005003",
    "nome": "Bombom Italiano Ao Leite Lindt Caixa 37G",
    "marcas": [
      "Lindt"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_8000300388817",
    "ean": "8000300388817",
    "nome": "Bombom Italiano Ao Leite Perugina Baci Caixa 150G",
    "marcas": [
      "Nestlé",
      "Perugina"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7898036491670",
    "ean": "7898036491670",
    "nome": "Sorvete Bombom Jundiá Pote 2L",
    "marcas": [
      "Jundia"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "frasco"
  },
  {
    "id": "ean_7000000140044",
    "ean": "7000000140044",
    "nome": "Sorvete Sabor Bombom",
    "marcas": [
      "Sweet Sorvetes"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896653709512",
    "ean": "7896653709512",
    "nome": "Bombom De Coco",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_6874004464908",
    "ean": "6874004464908",
    "nome": "Choc Charge 40G Nestle 40 g",
    "marcas": [
      "Nestlé",
      "Charge"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891330006540",
    "ean": "7891330006540",
    "nome": "Amor Carioca Branco 200 g",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898347311803",
    "ean": "7898347311803",
    "nome": "Sorvete Soberano Sonho De Bombom Especial Ygloo 1L",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891000388792",
    "ean": "7891000388792",
    "nome": "Bombom Nestlé Prestígio Sort. 252G",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896986226212",
    "ean": "7896986226212",
    "nome": "Bombom De Chocolate",
    "marcas": [
      "Cacau Show"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7890120202612",
    "ean": "7890120202612",
    "nome": "Bombom Zero Gato Mia Brasil Cacau",
    "marcas": [
      "Brasil Cacau"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896653709505",
    "ean": "7896653709505",
    "nome": "Bombom Com Amendoim",
    "marcas": [
      "Flormel"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898955948057",
    "ean": "7898955948057",
    "nome": "Bombom De Banana",
    "marcas": [
      "Caieiras"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896079824639",
    "ean": "7896079824639",
    "nome": "Bombom De Limão",
    "marcas": [
      "Montebergine"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898755180046",
    "ean": "7898755180046",
    "nome": "Barra De Proteína Sabor Bombom Crocante",
    "marcas": [
      "Bono"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896079820495",
    "ean": "7896079820495",
    "nome": "Bombom Cereja",
    "marcas": [
      "Montevérgine"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898967660589",
    "ean": "7898967660589",
    "nome": "Bombom De Sorvete",
    "marcas": [
      "Bacio Di Latte"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7899930900664",
    "ean": "7899930900664",
    "nome": "Bombom Choco Gold",
    "marcas": [
      "Goldko"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896003738865",
    "ean": "7896003738865",
    "nome": "Bolacha Tortinhas Bombom",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898267242737",
    "ean": "7898267242737",
    "nome": "Amor De Bombom",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898036492080",
    "ean": "7898036492080",
    "nome": "Bombom",
    "marcas": [
      "Jundiá"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896079826619",
    "ean": "7896079826619",
    "nome": "Bombom Ao Leite Com Maracujá",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898006952323",
    "ean": "7898006952323",
    "nome": "Bombom Sensa",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898618130973",
    "ean": "7898618130973",
    "nome": "Sorvete De Bombom Branco - 116 - 116 - 116",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962053196",
    "ean": "7891962053196",
    "nome": "Torrada Integral Bauducco 142g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962053189",
    "ean": "7891962053189",
    "nome": "Torrada Bauducco 142 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962053202",
    "ean": "7891962053202",
    "nome": "Torrada Multigrãos Bauducco 142g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962058726",
    "ean": "7891962058726",
    "nome": "Toast Torrada Tradicional Bauducco 128g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962053240",
    "ean": "7891962053240",
    "nome": "Torrada Multigrãos 264 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962058719",
    "ean": "7891962058719",
    "nome": "Toast Cereale Multicereais Bauducco 128g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896639800684",
    "ean": "7896639800684",
    "nome": "Torrada De Tapioca Com Coco",
    "marcas": [
      "Okoshi"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896003739374",
    "ean": "7896003739374",
    "nome": "Torrada Magic Toast Cereais Marilan 110g",
    "marcas": [
      "Marilan"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962052588",
    "ean": "7891962052588",
    "nome": "Torrada Multigrãos Visconti 120g",
    "marcas": [
      "Visconti"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898917945100",
    "ean": "7898917945100",
    "nome": "Castanha De Caju Torrada E Salgada Amigos Do Bem Pouch 50G",
    "marcas": [
      "Amigos Do Bem"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896117600041",
    "ean": "7896117600041",
    "nome": "Farinha De Mandioca Torrada Fina 500 g",
    "marcas": [
      "Deusa"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_0793573955586",
    "ean": "0793573955586",
    "nome": "Pipoca Doce Torrada 130g",
    "marcas": [
      "Caldani",
      "Gugui"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896015910020",
    "ean": "7896015910020",
    "nome": "Farinha De Mandioca Torrada 500g",
    "marcas": [
      "Pinduca"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891095300389",
    "ean": "7891095300389",
    "nome": "Yoki 500g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962000251",
    "ean": "7891962000251",
    "nome": "Torrada Tradicional 160g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962003085",
    "ean": "7891962003085",
    "nome": "Torrada Integral 140 g",
    "marcas": [
      "Visconti"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896002368056",
    "ean": "7896002368056",
    "nome": "Torradas Clássicas 130g",
    "marcas": [
      "Pullman"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896066334509",
    "ean": "7896066334509",
    "nome": "Torrada Tradicional Wickbold Pacote 140G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896071024075",
    "ean": "7896071024075",
    "nome": "Equilibri Torrada Original 140 g",
    "marcas": [
      "Equilibri"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962037875",
    "ean": "7891962037875",
    "nome": "Torrada Multi Grãos",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898274524109",
    "ean": "7898274524109",
    "nome": "Já Castanha-De-Caju Torrada E Salgada 50g",
    "marcas": [
      "Frutt'Oro"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896085086212",
    "ean": "7896085086212",
    "nome": "Torrada Integral Adria Pacote 142G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962053233",
    "ean": "7891962053233",
    "nome": "Torrada Fermentação Natural Tradicional",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896085086236",
    "ean": "7896085086236",
    "nome": "Torrada Multigrãos Adria Pacote 142G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896261401617",
    "ean": "7896261401617",
    "nome": "Castanha De Caju 50 g",
    "marcas": [
      "Agtal"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896022086138",
    "ean": "7896022086138",
    "nome": "Torrada Tradicional Isabela",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962052571",
    "ean": "7891962052571",
    "nome": "Torrada Integral Visconti 120g",
    "marcas": [
      "Visconti"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896085075964",
    "ean": "7896085075964",
    "nome": "Torrada Adria Tradicional Embalagem Econômica 284g (2x142g)",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896085075971",
    "ean": "7896085075971",
    "nome": "Torrada Integral Adria Pacote 284G 2 Unidades Embalagem Econômica",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896085086229",
    "ean": "7896085086229",
    "nome": "Torrada Light Adria Pacote 142G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962053257",
    "ean": "7891962053257",
    "nome": "Torrada Multipack Integral Bauducco 284g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_4896415086229",
    "ean": "4896415086229",
    "nome": "Adria Torrada Light 142G 5.0 oz",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896085086205",
    "ean": "7896085086205",
    "nome": "Torrada Tradicional Adria Pacote 142G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896003702347",
    "ean": "7896003702347",
    "nome": "Torrada Light Marilan Lev Magic Toast Pacote 144G 6 Unidades",
    "marcas": [
      "Marilan"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7898917945292",
    "ean": "7898917945292",
    "nome": "Castanha De Caju Torrada E Salgada Amigos Do Bem Premium Pote 140G",
    "marcas": [
      "Amigos Do Bem"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896066334769",
    "ean": "7896066334769",
    "nome": "Torrada Wickbold Pacote 140G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896066304397",
    "ean": "7896066304397",
    "nome": "Torrada Especial Canela Com Passas Wickbold Pacote 140G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7898340612549",
    "ean": "7898340612549",
    "nome": "Castanha De Baru Torrada Orgânica Empório Do Cerrado Pouch 90G",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7897701100688",
    "ean": "7897701100688",
    "nome": "Torrada Natural Fhom Caixa 110G",
    "marcas": [
      "Fhom"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7898344320389",
    "ean": "7898344320389",
    "nome": "Torrada Integral Sem Glúten Zero Lactose Aminna Caixa 90G",
    "marcas": [
      "Aminna"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7896066343327",
    "ean": "7896066343327",
    "nome": "Torrada Especial 10 Grãos Wickbold Pacote 140G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7897701100954",
    "ean": "7897701100954",
    "nome": "Torrada Integral Fhom Fiesta Caixa 110G",
    "marcas": [
      "Fhom"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7897701100824",
    "ean": "7897701100824",
    "nome": "Torrada Integral Grãos Fhom Caixa 110G",
    "marcas": [
      "Fhom"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7898944830509",
    "ean": "7898944830509",
    "nome": "Torrada Grãos Sem Glúten Grani Amici Pacote 130G",
    "marcas": [
      "Grani Amici"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896903811163",
    "ean": "7896903811163",
    "nome": "Torrada Casa Victoriana 150Gr Basilico",
    "marcas": [
      "Casa Victoriana"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898917945209",
    "ean": "7898917945209",
    "nome": "Castanha De Caju Torrada E Salgada Amigos Do Bem Pouch 100G",
    "marcas": [
      "Amigos Do Bem"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898344320563",
    "ean": "7898344320563",
    "nome": "Torrada Abóbora Sem Glúten Zero Lactose Zero Açúcar Aminna Caixa 90G",
    "marcas": [
      "Aminna"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7896903811040",
    "ean": "7896903811040",
    "nome": "Torrada Casa Victoriana 150Gr C/Azeite E Oregano",
    "marcas": [
      "Casa Victoriana"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "gfa"
  },
  {
    "id": "ean_7897701101029",
    "ean": "7897701101029",
    "nome": "Torrada Vegetais Fhom Caixa 110G",
    "marcas": [
      "Fhom"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7896903811019",
    "ean": "7896903811019",
    "nome": "Torrada Alho Casa Victoriana Pacote 150G",
    "marcas": [
      "Casa Victoriana"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7898344320556",
    "ean": "7898344320556",
    "nome": "Torrada Sem Glúten Zero Lactose Zero Açúcar Aminna Caixa 90G",
    "marcas": [
      "Aminna"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7896066303420",
    "ean": "7896066303420",
    "nome": "Torrada Especial 100 Integral Wickbold Pacote 140G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7899943704235",
    "ean": "7899943704235",
    "nome": "Farinha De Castanha De Caju Torrada Amigos Do Bem Pouch 250G",
    "marcas": [
      "Amigos Do Bem"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898340612556",
    "ean": "7898340612556",
    "nome": "Castanha De Baru Torrada E Salgada Orgânica Empório Do Cerrado Pouch 90G",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7897701100947",
    "ean": "7897701100947",
    "nome": "Torrada Natural Fhom Fiesta Caixa 110G",
    "marcas": [
      "Fhom"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "cx"
  },
  {
    "id": "ean_7898024397915",
    "ean": "7898024397915",
    "nome": "Nutella B-Ready 22g",
    "marcas": [
      "Nutella"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_8000500232057",
    "ean": "8000500232057",
    "nome": "Raffaello - Wafer Com Recheio Cremoso E Amêndoa Coberto Com Coco 90g",
    "marcas": [
      "Ferrero"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896019607636",
    "ean": "7896019607636",
    "nome": "Recheada De Creme Com Cacau 200 g",
    "marcas": [
      "Lacta",
      "Amandita"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210575999",
    "ean": "7622210575999",
    "nome": "Bis Branco 100.8g",
    "marcas": [
      "Lacta",
      "Mondelez International"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000089231",
    "ean": "7891000089231",
    "nome": "Bisc Rech Prestigio 140G Nestle 110 g",
    "marcas": [
      "Nestlé",
      "Prestigio"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962032290",
    "ean": "7891962032290",
    "nome": "Wafer Chocolate 140 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962037028",
    "ean": "7891962037028",
    "nome": "Wafertriplo Choc 140G Bauducco 140 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7899970400674",
    "ean": "7899970400674",
    "nome": "Hersheys Ao Leite 102g",
    "marcas": [
      "Hersheys"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622210572080",
    "ean": "7622210572080",
    "nome": "Wafer Recheio E Cobertura Chocolate Lacta Bisão Pacote 201,6G 201.6g",
    "marcas": [
      "Lacta"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891962032283",
    "ean": "7891962032283",
    "nome": "Wafer Fresa/Frutilla 140 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962036915",
    "ean": "7891962036915",
    "nome": "Wafer Chocolate Con Avellana 140 g",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000329207",
    "ean": "7891000329207",
    "nome": "Wafer Bono 110 g",
    "marcas": [
      "Nestlé",
      "Bono"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7898599217212",
    "ean": "7898599217212",
    "nome": "Proto Wafer Morango",
    "marcas": [
      "Nutrata"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000277249",
    "ean": "7891000277249",
    "nome": "Ovo De Páscoa Ao Leite 332 g",
    "marcas": [
      "Kit Kat",
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896024760654",
    "ean": "7896024760654",
    "nome": "Biscoito Wafer Recheio Morango Piraquê Pacote 100G",
    "marcas": [
      "Piraque"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896024761439",
    "ean": "7896024761439",
    "nome": "Bisc Leite Maltado Original 132G Piraque 132 g",
    "marcas": [
      "Piraque"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962060361",
    "ean": "7891962060361",
    "nome": "Chocobiscuit Ao Leite 36G Bauducco",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000372586",
    "ean": "7891000372586",
    "nome": "Wafer Nono Choc. 110G 110 g",
    "marcas": [
      "Nestlé",
      "Bono"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896022086213",
    "ean": "7896022086213",
    "nome": "Wafer Sabor Chocolate Branco 100 g",
    "marcas": [
      "Isabela"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891203058607",
    "ean": "7891203058607",
    "nome": "Wafer Golden Black Baunilha",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962071695",
    "ean": "7891962071695",
    "nome": "Biscoito Wafer, Chocolate - Bauducco",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896986290121",
    "ean": "7896986290121",
    "nome": "Wafer Recheado Sabor Limão 80g",
    "marcas": [
      "Cacau Show"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000437612",
    "ean": "7891000437612",
    "nome": "Wafers Recheado Coberto Com Chocolate Ao Leite 4 x 41,5g",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7622300811693",
    "ean": "7622300811693",
    "nome": "Bis Xtra Lacta 55g",
    "marcas": [
      "Lacta",
      "Kraft Foods"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000077948",
    "ean": "7891000077948",
    "nome": "Bisc Wafer Classic 110G Nestle",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891000081211",
    "ean": "7891000081211",
    "nome": "Biscoito Wafer Recheio Morango Passatempo Pacote 20G",
    "marcas": [
      "Passatempo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7891000081242",
    "ean": "7891000081242",
    "nome": "Biscoito Wafer Recheio Chocolate Passatempo Pacote 20G",
    "marcas": [
      "Passatempo"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896024725264",
    "ean": "7896024725264",
    "nome": "Wafer Sabor Chocolate 160 g",
    "marcas": [
      "Piraquê"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896024725189",
    "ean": "7896024725189",
    "nome": "Wafer Sabor Limão 160 g",
    "marcas": [
      "Piraquê"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896011103761",
    "ean": "7896011103761",
    "nome": "Wafer Sabor Chocolate Com Recheio Sabor Baunilha 115 g",
    "marcas": [
      "Minueto"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896085073953",
    "ean": "7896085073953",
    "nome": "Biscoito Wafer Recheio Limão Adria Pacote 100G",
    "marcas": [
      "Adria"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7898530841223",
    "ean": "7898530841223",
    "nome": "Wafer Dadinho",
    "marcas": [],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891962037011",
    "ean": "7891962037011",
    "nome": "Biscoito Wafer Recheio Nozes Bauducco Pacote 140G",
    "marcas": [
      "Bauducco"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7896111426005",
    "ean": "7896111426005",
    "nome": "Wafer Morango 100 g",
    "marcas": [
      "Ninfa"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_8480017098139",
    "ean": "8480017098139",
    "nome": "Wafer Recheado Sabor Chocolate E Avelã 115 g",
    "marcas": [
      "Dia"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896003700657",
    "ean": "7896003700657",
    "nome": "Chocolate 115 g",
    "marcas": [
      "Marilan"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7891340302113",
    "ean": "7891340302113",
    "nome": "Wafer De Chocolate 110 g",
    "marcas": [
      "Itamaraty"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896050411230",
    "ean": "7896050411230",
    "nome": "Wafer Chocolate Village 20g",
    "marcas": [
      "Village"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896003738636",
    "ean": "7896003738636",
    "nome": "Biscoito Água E Sal Marilan Pacote 350G",
    "marcas": [
      "Marilan"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "pct"
  },
  {
    "id": "ean_7899970400681",
    "ean": "7899970400681",
    "nome": "Wafer Cookies N Creme",
    "marcas": [
      "Hershey'S"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7896253401571",
    "ean": "7896253401571",
    "nome": "Biscoito Wafer Sabor Baunilha - Rancheiro 78g",
    "marcas": [
      "Rancheiro"
    ],
    "grupoId": "biscoitos-doces-e-chocolates",
    "apresId": "un"
  },
  {
    "id": "ean_7894900010015",
    "ean": "7894900010015",
    "nome": "Coca Cola Lt 350Ml 350 ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_78908901",
    "ean": "78908901",
    "nome": "Refrigerante Coca Cola Garrafa 200Ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900027013",
    "ean": "7894900027013",
    "nome": "Refrigerante Coca Cola Original Garrafa 2L",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991000727",
    "ean": "7891991000727",
    "nome": "Guaraná Antártica Zero Wandinha 350 ml",
    "marcas": [
      "Antarctica"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7892840800000",
    "ean": "7892840800000",
    "nome": "Refrigerante De Cola Pepsi 2L",
    "marcas": [
      "Pepsi"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891991001342",
    "ean": "7891991001342",
    "nome": "Guarana 2L 2 l",
    "marcas": [
      "Antarctica"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894900011609",
    "ean": "7894900011609",
    "nome": "Refrigerante De Cola 600 ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900010398",
    "ean": "7894900010398",
    "nome": "Coca-Cola Refrigerante 220 Ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891149440801",
    "ean": "7891149440801",
    "nome": "Refrigerante De Laranja 2l",
    "marcas": [
      "Sukita"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894900011753",
    "ean": "7894900011753",
    "nome": "Refrigerante Coca Cola Original Garrafa 1,5L 1.5l",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900027020",
    "ean": "7894900027020",
    "nome": "Refrigerante Coca Cola Original Garrafa 2,5L Embalagem Econômica 2.5l",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900025019",
    "ean": "7894900025019",
    "nome": "Refrigerante Café Espresso Coca Cola Lata 220Ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7894900014211",
    "ean": "7894900014211",
    "nome": "Coca 1litro",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894900011715",
    "ean": "7894900011715",
    "nome": "Refrigerante Coca Cola Garrafa 1L",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7892840800406",
    "ean": "7892840800406",
    "nome": "Pepsi Bresil 1",
    "marcas": [
      "Pepsi"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900030013",
    "ean": "7894900030013",
    "nome": "Refrigerante Laranja Fanta Lata 350Ml",
    "marcas": [
      "Fanta"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7894900031515",
    "ean": "7894900031515",
    "nome": "Refrigerante Laranja Fanta Garrafa 2L",
    "marcas": [
      "Fanta"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900093001",
    "ean": "7894900093001",
    "nome": "Fanta Guarana 350 mL",
    "marcas": [
      "Fanta"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900681017",
    "ean": "7894900681017",
    "nome": "Refrigerante Limão Sprite Lata 350Ml",
    "marcas": [
      "Portinari"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7891991000833",
    "ean": "7891991000833",
    "nome": "Refrigerante Soda Limonada Antartica 350 ml",
    "marcas": [
      "Soda Antarctica"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_78936478",
    "ean": "78936478",
    "nome": "Refrigerante Laranja Fanta Garrafa 200Ml",
    "marcas": [
      "Fanta"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896052604975",
    "ean": "7896052604975",
    "nome": "Refrigerante Tutti Frutti Itubaína Retrô Lata 350Ml",
    "marcas": [
      "Itubaina"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7896436102769",
    "ean": "7896436102769",
    "nome": "Refrigerante De Guaraná Com Bergamota 350 ml",
    "marcas": [
      "Fruki"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_78912908",
    "ean": "78912908",
    "nome": "Refrigerante Coca Cola Garrafa 250Ml",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900027037",
    "ean": "7894900027037",
    "nome": "Refrigerante Coca Cola Original Garrafa 3L Embalagem Econômica",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896052607129",
    "ean": "7896052607129",
    "nome": "Refrigerante Laranja Pera Fys Lata 350Ml",
    "marcas": [
      "Fys"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7896315120457",
    "ean": "7896315120457",
    "nome": "Iate Guaraná 2 l",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898377662425",
    "ean": "7898377662425",
    "nome": "Refrigerante It! Guaraná Pet 2L",
    "marcas": [
      "It"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894900700398",
    "ean": "7894900700398",
    "nome": "Coca Cola Zero Mini 220 ML",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900701753",
    "ean": "7894900701753",
    "nome": "Coca-Cola Zero Açúcar 1,5L 1.5 l",
    "marcas": [
      "Coca",
      "Cola",
      "Coca",
      "Cola",
      "Refrigerante",
      "Refrigerante Zero"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898377662463",
    "ean": "7898377662463",
    "nome": "Refrigerante Lemon Ice - Iti",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900702217",
    "ean": "7894900702217",
    "nome": "Coca-Cola Zero Sem Açúcar 12 Garrafas 200 Ml 2,4 L",
    "marcas": [
      "Coca",
      "Cola",
      "Spal Industria Brasileira De Bebidas S.A."
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896263500141",
    "ean": "7896263500141",
    "nome": "Roller Refrigerante",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896385800617",
    "ean": "7896385800617",
    "nome": "Refrigerante De Guaraná 1,5 l",
    "marcas": [
      "Sarandi"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7897105200038",
    "ean": "7897105200038",
    "nome": "Tuchaua Guaraná 2L",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891991008761",
    "ean": "7891991008761",
    "nome": "Refrigerante Antarctica Guaraná 1,5L",
    "marcas": [
      "Boralá"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7892840800079",
    "ean": "7892840800079",
    "nome": "Refrigerante Pepsi 350Ml",
    "marcas": [
      "Pepsi"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900011517",
    "ean": "7894900011517",
    "nome": "Refrigerante Coca-Cola 2Lt",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894900011708",
    "ean": "7894900011708",
    "nome": "Coca-Cola 3 l",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900921519",
    "ean": "7894900921519",
    "nome": "Refrigerante Kuat Zero - Pet",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896052600236",
    "ean": "7896052600236",
    "nome": "Itubaína 2 l",
    "marcas": [
      "Itubaína"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898950338020",
    "ean": "7898950338020",
    "nome": "Refrigerante De Guaraná Orgânico 350g",
    "marcas": [
      "Wewi"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891991010542",
    "ean": "7891991010542",
    "nome": "Antartica Refrigerante",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900031751",
    "ean": "7894900031751",
    "nome": "Refrigerante Laranja Fanta Garrafa 1,5L 1.5l",
    "marcas": [
      "Fanta"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900011593",
    "ean": "7894900011593",
    "nome": "Refrigerante Coca Cola Garrafa 2,5L Embalagem Econômica 2.5l",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900681000",
    "ean": "7894900681000",
    "nome": "Refrigerante Limão Sprite Garrafa 2L",
    "marcas": [
      "Sprite"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900093056",
    "ean": "7894900093056",
    "nome": "Refrigerante Guaraná Fanta Garrafa 2L",
    "marcas": [
      "Fanta"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900093292",
    "ean": "7894900093292",
    "nome": "Guaraná Fanta 2 litro",
    "marcas": [
      "Coca",
      "Cola"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896188400212",
    "ean": "7896188400212",
    "nome": "Refrigerante De Framboesa",
    "marcas": [
      "Cini"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896188407051",
    "ean": "7896188407051",
    "nome": "Refrigerante De Guaraná Sabor Framboesa 600 mL",
    "marcas": [
      "Cini"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896188400380",
    "ean": "7896188400380",
    "nome": "Refrigerante Cini Abacaxi 200 mL",
    "marcas": [
      "Cini"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891991014984",
    "ean": "7891991014984",
    "nome": "Refrigerante Limonada Soda Antarctica Garrafa 200Ml",
    "marcas": [
      "Soda Antarctica"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7894900095005",
    "ean": "7894900095005",
    "nome": "Refrigerante Fanta Sabor Mistério 350 mL",
    "marcas": [
      "Coca",
      "Cola",
      "Fanta",
      "Coca",
      "Cola Brasil"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896272200629",
    "ean": "7896272200629",
    "nome": "Refrigerante Água Da Serra Abacaxi 2 l",
    "marcas": [
      "Água Da Serra"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900530001",
    "ean": "7894900530001",
    "nome": "Agua Min Crystal S/Gas 500Ml",
    "marcas": [
      "Crystal"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7894900530032",
    "ean": "7894900530032",
    "nome": "Crystal - Sem Gás 1,5 L",
    "marcas": [
      "Coca",
      "Cola Brasil"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896436100666",
    "ean": "7896436100666",
    "nome": "Água Mineral Natural 500ml",
    "marcas": [
      "Fruki",
      "Água Da Pedra"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896065880069",
    "ean": "7896065880069",
    "nome": "Água Mineral Natural Sem Gás 510 ml",
    "marcas": [
      "Minalba"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_3700123302360",
    "ean": "3700123302360",
    "nome": "Nestlé Pureza Vital Sem Gás 510Ml 100",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900530056",
    "ean": "7894900530056",
    "nome": "Água Mineral Natural Crystal Sem Gás 5 l",
    "marcas": [
      "Coca Cola Brasil"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896062801050",
    "ean": "7896062801050",
    "nome": "Água Mineral São Lourenço Com Gás 510 ml",
    "marcas": [
      "Nestlé",
      "Nestlé Waters Brasil",
      "São Lourenço"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896436100642",
    "ean": "7896436100642",
    "nome": "Água Mineral Com Gás",
    "marcas": [
      "Água Da Pedra"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898386200083",
    "ean": "7898386200083",
    "nome": "Agua Mineral",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896065870510",
    "ean": "7896065870510",
    "nome": "Água Mineral Minalba Com Gás 1,5L",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7897123884029",
    "ean": "7897123884029",
    "nome": "Água Mineral Natural Prara",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898005516175",
    "ean": "7898005516175",
    "nome": "Água Mineral Natural Ster Bom 510 ml",
    "marcas": [
      "Ster Bom"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896062800145",
    "ean": "7896062800145",
    "nome": "Água Mineral Nestlé Pureza Vital Com Gás 500 ml",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891025102113",
    "ean": "7891025102113",
    "nome": "Bonafont Água Leve 500 ml",
    "marcas": [
      "Bonafont"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896062802354",
    "ean": "7896062802354",
    "nome": "Água Mineral São Lourenço Sem Gás 510 ml",
    "marcas": [
      "Nestlé",
      "Nestlé Waters Brasil",
      "São Lourenço"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896065870497",
    "ean": "7896065870497",
    "nome": "Água Mineral Minalba Com Gás 510 ml",
    "marcas": [
      "Minalba",
      "Minalba Alimentos E Bebidas"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896089500240",
    "ean": "7896089500240",
    "nome": "Lindoya Verão 24 cl",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896279000567",
    "ean": "7896279000567",
    "nome": "Água Mineral Petrópolis Sem Gás 310 ml",
    "marcas": [
      "Petrópolis Paulista"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896279000574",
    "ean": "7896279000574",
    "nome": "Água Mineral Natural Petrópolis Com Gás 310 ml",
    "marcas": [
      "Petrópolis Paulista"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896326100202",
    "ean": "7896326100202",
    "nome": "Água Mineral Minalice 500 ml",
    "marcas": [
      "Minalice"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896984205004",
    "ean": "7896984205004",
    "nome": "Água Mineral Natural Passa Quatro Sem Gás 510 ml",
    "marcas": [
      "Passa Quatro"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891025110941",
    "ean": "7891025110941",
    "nome": "Agua Bonafont 500 Ml",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_0700083273888",
    "ean": "0700083273888",
    "nome": "Agua Mineral Natural Sin Gas",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896349600192",
    "ean": "7896349600192",
    "nome": "Água Mineral Natural Sem Gás Fonte Timbu 10L",
    "marcas": [
      "Timbu"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898966655005",
    "ean": "7898966655005",
    "nome": "Água Mineral Natural Classic Sem Gás 500 ml",
    "marcas": [
      "Santa Justina"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7897123886078",
    "ean": "7897123886078",
    "nome": "Água Mineral Soda Com Gás Prata Club Soda Garrafa 200Ml",
    "marcas": [
      "Prata"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_8002270136559",
    "ean": "8002270136559",
    "nome": "S.Pellegrino - Agua Mineral Natural Con Gas Carbónico Añadido 1 unidad",
    "marcas": [
      "Nestlé",
      "San Pellegrino"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898972721008",
    "ean": "7898972721008",
    "nome": "Agua Mineral Natural S/G Mg 1,5 l",
    "marcas": [
      "Leven"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7894900531015",
    "ean": "7894900531015",
    "nome": "Água Crystal C/Gás 1,5L",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896468700056",
    "ean": "7896468700056",
    "nome": "Água Mineral",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898646710024",
    "ean": "7898646710024",
    "nome": "Água Mineral Acquissima Passion Com Gás 510Ml",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898641870747",
    "ean": "7898641870747",
    "nome": "Água Mineral Barbosa Com Gás 510 ml",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898904409448",
    "ean": "7898904409448",
    "nome": "Água Mineral Estilo 510ml",
    "marcas": [
      "Estilo"
    ],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7896445491083",
    "ean": "7896445491083",
    "nome": "Água Mineral Natural Com Gás Petrópolis Garrafa 500Ml",
    "marcas": [],
    "grupoId": "bebidas-nao-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045506873",
    "ean": "7896045506873",
    "nome": "Cerveja Heineken Lata 350 Ml",
    "marcas": [
      "Heineken"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_18960457",
    "ean": "18960457",
    "nome": "Cerveja Pilsen",
    "marcas": [
      "Kaiser",
      "Premio"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891149210503",
    "ean": "7891149210503",
    "nome": "Cerveja Caracu 350ml",
    "marcas": [
      "Caracu"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_78936683",
    "ean": "78936683",
    "nome": "Heineken 330Ml 330 ml",
    "marcas": [
      "Heineken"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891991297424",
    "ean": "7891991297424",
    "nome": "Cerveja Spaten Puro Malte 350Ml 350 ml",
    "marcas": [
      "Spaten"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991011723",
    "ean": "7891991011723",
    "nome": "Cerveja Lager Budweiser",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991298407",
    "ean": "7891991298407",
    "nome": "Cerveja Zero Álcool Budweiser Lata 350Ml",
    "marcas": [
      "Budweiser"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7897395099329",
    "ean": "7897395099329",
    "nome": "Cerveja Petra 350Ml",
    "marcas": [
      "Petra Puro Malte"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896371000007",
    "ean": "7896371000007",
    "nome": "Cerveja Therezópolis Gold Lager Lata 350Ml 350 ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7891991303200",
    "ean": "7891991303200",
    "nome": "Cerveja Puro Malte 473 ml",
    "marcas": [
      "Spaten",
      "Franziskaner",
      "Bräu Gmbh"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045506934",
    "ean": "7896045506934",
    "nome": "Cerveja Amstel Puro Malte Lata 350Ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7896045505319",
    "ean": "7896045505319",
    "nome": "Cerveja Amstel Puro Malte Lata 269Ml",
    "marcas": [
      "Amstel"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7898367984377",
    "ean": "7898367984377",
    "nome": "Unfiltered 350ml",
    "marcas": [
      "Eisenbahn",
      "Heineken"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891149101900",
    "ean": "7891149101900",
    "nome": "Cerveja Stella Artois 275ml",
    "marcas": [
      "Stella Artois"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898367980010",
    "ean": "7898367980010",
    "nome": "Eisenbahn Pilsen Ln 355 ml",
    "marcas": [
      "Eisenbahn"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_78911314",
    "ean": "78911314",
    "nome": "Bohemia Cerveja Puro Malte",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045506095",
    "ean": "7896045506095",
    "nome": "Cerveja Bavária Pilsen 350Ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_18974799",
    "ean": "18974799",
    "nome": "Brahma 1 L",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898605251827",
    "ean": "7898605251827",
    "nome": "Cerveja Puro Malte Ribeirão Lager - Lager Com Casca De Laranja 600 ml",
    "marcas": [
      "Colorado"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045506064",
    "ean": "7896045506064",
    "nome": "Cerveja Lager Premium Puro Malte Zero Álcool Heineken Lata 350Ml",
    "marcas": [
      "Heineken"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_17898915949206",
    "ean": "17898915949206",
    "nome": "Cerveja Imperio 4,2 L",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898367983790",
    "ean": "7898367983790",
    "nome": "Cerveja Pilsen Puro Malte 350 ml",
    "marcas": [
      "Eisenbahn"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_0040232728549",
    "ean": "0040232728549",
    "nome": "Cerveja Schornstein",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898958547059",
    "ean": "7898958547059",
    "nome": "Cerveja Leopoldina",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045506439",
    "ean": "7896045506439",
    "nome": "Cerveja Amstel Puro Malte Ultra Long Neck 275Ml",
    "marcas": [
      "Amstel"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891149107490",
    "ean": "7891149107490",
    "nome": "Cerveja Patagonia Amber Lager Long Neck 355Ml 355 ml",
    "marcas": [
      "Patagonia"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991298476",
    "ean": "7891991298476",
    "nome": "Cerveja De Trigo Feita Com Semente De Coentro & Casca De Laranja 269 ml",
    "marcas": [
      "Hoegaarden"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991301916",
    "ean": "7891991301916",
    "nome": "Cerv Patagonia Lt 350Ml, Ipa, .",
    "marcas": [
      "Patagonia"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898605253272",
    "ean": "7898605253272",
    "nome": "Lager 350 ml",
    "marcas": [
      "Colorado"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891149108510",
    "ean": "7891149108510",
    "nome": "Bohemian Pilsener 740 ml",
    "marcas": [
      "Patagonia"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891149104956",
    "ean": "7891149104956",
    "nome": "Brahma Zero Álcool 355ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891149104932",
    "ean": "7891149104932",
    "nome": "Cerveja Zero Álcool 350Ml 350 ml",
    "marcas": [
      "Brahma"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991297479",
    "ean": "7891991297479",
    "nome": "Spaten 330 355 ml",
    "marcas": [
      "Spaten"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7891991304870",
    "ean": "7891991304870",
    "nome": "Pure Gold Cerveja Puro Malte 330",
    "marcas": [
      "Stella Artois"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898925943013",
    "ean": "7898925943013",
    "nome": "Cerveja Colorado Cauim 600Ml 9",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7897395060237",
    "ean": "7897395060237",
    "nome": "Crystal Lt 437Ml 12",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_7898235984157",
    "ean": "7898235984157",
    "nome": "Cerveja Paradiso Laguna Witbier Lt 473Ml 2",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898235984140",
    "ean": "7898235984140",
    "nome": "Cerveja Paradiso Green Coast Lt 473Ml 10",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_78935495",
    "ean": "78935495",
    "nome": "Cerveja Lager Heineken Garrafa 250Ml",
    "marcas": [
      "Heineken"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991302029",
    "ean": "7891991302029",
    "nome": "Cerveja Superior Light Michelob Ultra Lata 350Ml",
    "marcas": [
      "Michelob"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7891515567347",
    "ean": "7891515567347",
    "nome": "Ossobuco De Angus Com Molho De Cerveja Preta E Cebola Sadia Speciale Caixa 700G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898964084159",
    "ean": "7898964084159",
    "nome": "Cerveja Apa Puro Malte Ginjo Sake Beers Garrafa 500Ml",
    "marcas": [
      "Garra"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7897395040390",
    "ean": "7897395040390",
    "nome": "Cerveja Pilsen Zero Álcool Itaipava Lata 350Ml",
    "marcas": [
      "Itaipava"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7898964084142",
    "ean": "7898964084142",
    "nome": "Cerveja Weiss Ginjo Sake Beers Garrafa 500Ml",
    "marcas": [
      "Weiss"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898230715213",
    "ean": "7898230715213",
    "nome": "Cerveja Witbier Coentro E Laranja Baden Baden Garrafa 600Ml",
    "marcas": [
      "Baden Baden"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898964084135",
    "ean": "7898964084135",
    "nome": "Cerveja Kölsch Puro Malte Ginjo Sake Beers Garrafa 500Ml",
    "marcas": [
      "Garra"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898964084166",
    "ean": "7898964084166",
    "nome": "Cerveja Ipa Puro Malte Ginjo Sake Beers Garrafa 500Ml",
    "marcas": [
      "Garra"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045505357",
    "ean": "7896045505357",
    "nome": "Cerveja Lager Heineken Lata 250Ml",
    "marcas": [
      "Mb Cases"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7896045506415",
    "ean": "7896045506415",
    "nome": "Cerveja Amstel Puro Malte Ultra Lata 269 ml",
    "marcas": [
      "Amstel"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "lata"
  },
  {
    "id": "ean_7891960874687",
    "ean": "7891960874687",
    "nome": "Cerveja Antarctica Lt 35Oml C/18 Pilsen",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896371000229",
    "ean": "7896371000229",
    "nome": "Cerveja Therezópolis 500Ml Ln Orblanc 6",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891991009584",
    "ean": "7891991009584",
    "nome": "Cerveja Original 300 ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7897395001063",
    "ean": "7897395001063",
    "nome": "Cerveja Petra Premium Escura Long Neck 330Ml 330 ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7897395020644",
    "ean": "7897395020644",
    "nome": "Cerveja Petra Premium 350 ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898099397575",
    "ean": "7898099397575",
    "nome": "Chop Cerveja Wienbier Ipa 1,5L 12",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7898099397612",
    "ean": "7898099397612",
    "nome": "Chop Cerveja Wienbier Hexamalte 28",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045507054",
    "ean": "7896045507054",
    "nome": "Cerveja Puro Malte Amstel Long Neck 355Ml",
    "marcas": [],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896045507115",
    "ean": "7896045507115",
    "nome": "Vibes Fruit Punch",
    "marcas": [
      "Amstel"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "un"
  },
  {
    "id": "ean_50196364",
    "ean": "50196364",
    "nome": "Whisky Escocês Blended Buchanans Deluxe Garrafa 1L",
    "marcas": [
      "Buchanans"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891150071247",
    "ean": "7891150071247",
    "nome": "Molho Barbecue Whisky Hellmanns Frasco 400G",
    "marcas": [
      "Hellmann'S"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_4904230049739",
    "ean": "4904230049739",
    "nome": "Nikka Whisky From The Barrel",
    "marcas": [
      "Nikka"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7802100005908",
    "ean": "7802100005908",
    "nome": "Cerveza Red Lager + Sabor Whisky Honey 350 cc",
    "marcas": [
      "Patagonia Por Austral"
    ],
    "grupoId": "bebidas-alcoolicas",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896356600161",
    "ean": "7896356600161",
    "nome": "Vinho Branco De Mesa Suave 975ml",
    "marcas": [
      "Jurupinga"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "ean_7794450008060",
    "ean": "7794450008060",
    "nome": "Cabernet Sauvignon 750 ml",
    "marcas": [
      "Alamos"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7804360000471",
    "ean": "7804360000471",
    "nome": "Cromas Cabernet Sauvignon Gran Reserva 2020",
    "marcas": [
      "Los Vascos"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7804320756578",
    "ean": "7804320756578",
    "nome": "Santa Emiliana Reserva Cabernet Sauvignon",
    "marcas": [
      "Santa Emiliana"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7896756804923",
    "ean": "7896756804923",
    "nome": "Almadén Cabernet Franc 750ml",
    "marcas": [
      "Almadén"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7790577001663",
    "ean": "7790577001663",
    "nome": "Red Wine Cabernet",
    "marcas": [
      "Rutini"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7802940002006",
    "ean": "7802940002006",
    "nome": "Toro De Piedra Gran Reserva Syrah Cabernet Sauvignon 2023 750 cc",
    "marcas": [
      "Toro De Piedra",
      "Viña Requingua"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7790240093599",
    "ean": "7790240093599",
    "nome": "Vinho Fino Tinto Seco Altos Del Condor - Merlot 750ml",
    "marcas": [
      "Altos Del Condor"
    ],
    "grupoId": "adega",
    "apresId": "gfa"
  },
  {
    "id": "ean_7754065002013",
    "ean": "7754065002013",
    "nome": "Reducción Al Merlot 200 ML",
    "marcas": [
      "Sibaritto"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7804627200712",
    "ean": "7804627200712",
    "nome": "Reserva Merlot 2024",
    "marcas": [
      "Viña Dalbosco"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7804320365831",
    "ean": "7804320365831",
    "nome": "Exportacion Selecto Merlot",
    "marcas": [
      "Concha Y Toro"
    ],
    "grupoId": "adega",
    "apresId": "un"
  },
  {
    "id": "ean_7897664120037",
    "ean": "7897664120037",
    "nome": "Sabão De Coco Em Pó 500 g",
    "marcas": [
      "Minuano"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7506339332643",
    "ean": "7506339332643",
    "nome": "Downy Amaciante 1 l",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891000502303",
    "ean": "7891000502303",
    "nome": "Amaciante De Carnes 120 g",
    "marcas": [
      "Maggi",
      "Nestlé"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898916257341",
    "ean": "7898916257341",
    "nome": "Amaciante Lisa Ternura (Rosa)",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891103215117",
    "ean": "7891103215117",
    "nome": "Amaciante De Roupas Carrefour Brindo Som",
    "marcas": [
      "Carrefour"
    ],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896056401044",
    "ean": "7896056401044",
    "nome": "Desinfetante Urca 2 l",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891024194102",
    "ean": "7891024194102",
    "nome": "Desinfetante",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896098904367",
    "ean": "7896098904367",
    "nome": "Ypê Antibac Desinfetante 500Ml",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7891035001031",
    "ean": "7891035001031",
    "nome": "Lysol Desinfetante Spray",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898954933474",
    "ean": "7898954933474",
    "nome": "Farinha Multiuso Sem Glúten E Lactose Schar 500G",
    "marcas": [
      "Schär"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7891035990571",
    "ean": "7891035990571",
    "nome": "Multiuso Pf Limão",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7891035285158",
    "ean": "7891035285158",
    "nome": "Veja Multiuso Campestre 500 ml",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7898568901401",
    "ean": "7898568901401",
    "nome": "Mix De Farinhas Multiuso Integral Sem Glúten Vitalin Pouch 500G",
    "marcas": [
      "Vitalin"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_0990431284172",
    "ean": "0990431284172",
    "nome": "Multiuso Lavanda",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7891103189401",
    "ean": "7891103189401",
    "nome": "Limpador Multiuso Carrefour Maçã Verde",
    "marcas": [
      "Carrefour"
    ],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7891150067868",
    "ean": "7891150067868",
    "nome": "Brilhante Tira Manchas S/Cloro Utile Floral 380G",
    "marcas": [],
    "grupoId": "limpeza",
    "apresId": "un"
  },
  {
    "id": "ean_7896020161035",
    "ean": "7896020161035",
    "nome": "Condicionador",
    "marcas": [
      "Baruel Baby"
    ],
    "grupoId": "higiene-e-beleza",
    "apresId": "un"
  },
  {
    "id": "ean_7894904255818",
    "ean": "7894904255818",
    "nome": "Pizza Calabresa Rezende 400g",
    "marcas": [
      "Rezende"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896228100706",
    "ean": "7896228100706",
    "nome": "Pizza De Frigideira 250g",
    "marcas": [
      "Massaleve"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904326044",
    "ean": "7894904326044",
    "nome": "Pizza De Calabresa 460g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7908073100678",
    "ean": "7908073100678",
    "nome": "Pizza Individual De Mossarela 150 g",
    "marcas": [
      "Festval",
      "Festval Pizza"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7908073100807",
    "ean": "7908073100807",
    "nome": "Pizza Individual Corn Bacon 150 g",
    "marcas": [
      "Festval",
      "Festval Pizza"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904827220",
    "ean": "7894904827220",
    "nome": "Pizza Portuguesa 460 g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904258550",
    "ean": "7894904258550",
    "nome": "Pizza De Lombo Com Requeijão 400 g",
    "marcas": [
      "Lebon"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515533014",
    "ean": "7891515533014",
    "nome": "Pizza Congelada De Calabresa Moída Perdigão 460 g",
    "marcas": [
      "Brf",
      "Brasil Foods",
      "Perdigão"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898702153154",
    "ean": "7898702153154",
    "nome": "Pizza De Brigadeiro Congelada",
    "marcas": [
      "Mambo"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898702152652",
    "ean": "7898702152652",
    "nome": "Pizza Congelada De Frango E Requeijão",
    "marcas": [
      "Mambo"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7801930016733",
    "ean": "7801930016733",
    "nome": "Pizza 4 Carnes 465 g",
    "marcas": [
      "Pf Listo!"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891527064445",
    "ean": "7891527064445",
    "nome": "Lasanha Ao Molho De Tilápia Congelada 600g",
    "marcas": [
      "Copacol"
    ],
    "grupoId": "congelados",
    "apresId": "saco"
  },
  {
    "id": "ean_7891515490430",
    "ean": "7891515490430",
    "nome": "Lasanha De Linguiça Tipo Calabresa Congelada 600g",
    "marcas": [
      "Perdigão"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7893000674073",
    "ean": "7893000674073",
    "nome": "Lasanha Quatro Queijos Sadia Pacote 350G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891527068108",
    "ean": "7891527068108",
    "nome": "Lasanha De Frango 600 g",
    "marcas": [
      "Copacol"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891103222948",
    "ean": "7891103222948",
    "nome": "Lasanha Com Molho De Cogumelos E Molho Branco Congelada",
    "marcas": [
      "Mezzani"
    ],
    "grupoId": "congelados",
    "apresId": "saco"
  },
  {
    "id": "ean_7891164026578",
    "ean": "7891164026578",
    "nome": "Lasanha Ao Molho De Frango Congelada",
    "marcas": [
      "Aurora"
    ],
    "grupoId": "congelados",
    "apresId": "saco"
  },
  {
    "id": "ean_7894904572205",
    "ean": "7894904572205",
    "nome": "Chicken Nuggets Halal",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904077373",
    "ean": "7894904077373",
    "nome": "Chicken Nuggets 1pcs",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7893000949270",
    "ean": "7893000949270",
    "nome": "Empanado De Frango Crocante Sadia Nuggets Pacote 300G",
    "marcas": [
      "Sadia International"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7893000949430",
    "ean": "7893000949430",
    "nome": "Empanado De Frango Queijo Sadia Nuggets Pacote 300G",
    "marcas": [
      "Sadia International"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7894904500116",
    "ean": "7894904500116",
    "nome": "Tekitos Seara Tradicional 300G",
    "marcas": [
      "Seara Alimentos"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904684359",
    "ean": "7894904684359",
    "nome": "Chicken Crispy Peito Frango 300g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891164110048",
    "ean": "7891164110048",
    "nome": "Auroggets Crocante Nuggets De Frango 300 g",
    "marcas": [
      "Aurora"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898686950404",
    "ean": "7898686950404",
    "nome": "Not Chickenzitos 250 g",
    "marcas": [
      "Notco"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515786298",
    "ean": "7891515786298",
    "nome": "Empanado De Frango Tradicional Perdigão Big Chicken Pacote 1Kg",
    "marcas": [
      "Perdix"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515544928",
    "ean": "7891515544928",
    "nome": "Nuggets Vegetal Sadia Veg Tal Bandeja 200G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891515580827",
    "ean": "7891515580827",
    "nome": "Nuggets Vegetal Sadia Veg Tal Pacote 275G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891164110017",
    "ean": "7891164110017",
    "nome": "Nuggets Auroggets 300Gr Aurora",
    "marcas": [
      "Aurora"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898969097062",
    "ean": "7898969097062",
    "nome": "Nuggets Vegetal Frango The New Chicken Bandeja 250G 10 Unidades",
    "marcas": [
      "Chic"
    ],
    "grupoId": "congelados",
    "apresId": "bdj"
  },
  {
    "id": "ean_7891515478360",
    "ean": "7891515478360",
    "nome": "Empanado De Frango Legumes Sadia Nuggets Pacote 275G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7893000949355",
    "ean": "7893000949355",
    "nome": "Empanado De Frango Tradicional Sadia Nuggets Pacote 300G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515486846",
    "ean": "7891515486846",
    "nome": "Empanado De Frango Tradicional Sadia Nuggets Pacote 700G Embalagem Econômica",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515608767",
    "ean": "7891515608767",
    "nome": "Nuggets Sadia Veget 275G Couve Flor",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515623524",
    "ean": "7891515623524",
    "nome": "Pop Nuggets",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891164135515",
    "ean": "7891164135515",
    "nome": "Nuggets Tradicional Nobrinhos 800 g",
    "marcas": [
      "Nobre",
      "Nobrinhos"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7893000913912",
    "ean": "7893000913912",
    "nome": "Nugget De Frango 1,5 kg",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7897574199680",
    "ean": "7897574199680",
    "nome": "Nuggets De Frango Lowcarb",
    "marcas": [
      "Hi Protein"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891164110628",
    "ean": "7891164110628",
    "nome": "Auroggets Crocante Aurora 900G 900 g",
    "marcas": [
      "Aurora"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7809611721181",
    "ean": "7809611721181",
    "nome": "Nuggets De Salmón 400g",
    "marcas": [
      "La Crianza"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_2990200004718",
    "ean": "2990200004718",
    "nome": "Merluza Nuggets Apanados",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7801930014081",
    "ean": "7801930014081",
    "nome": "Nuggets De Pollo 400 g",
    "marcas": [
      "Receta Del Abuelo"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7809611700445",
    "ean": "7809611700445",
    "nome": "Nuggets De Pollo Horneados Rocantes 1 kg",
    "marcas": [
      "Super Pollo"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515624705",
    "ean": "7891515624705",
    "nome": "#Nuggets De Pollo Crocante 1 kg",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891164110697",
    "ean": "7891164110697",
    "nome": "Auroggets Tradicional Aurora 275g",
    "marcas": [
      "Aurora"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7908612901421",
    "ean": "7908612901421",
    "nome": "Iscas De Frango Empanadas 300 g",
    "marcas": [
      "Nat"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898249771774",
    "ean": "7898249771774",
    "nome": "Empanado De Frango Congelado 1000g",
    "marcas": [
      "Granja Regina",
      "Regina"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904578146",
    "ean": "7894904578146",
    "nome": "Hambúrguer Rezende 56g",
    "marcas": [
      "Rezende"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904575350",
    "ean": "7894904575350",
    "nome": "Hambúrguer De Carne Bovina Tradicional Seara Caixa 672G 12 Unidades",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7908109125583",
    "ean": "7908109125583",
    "nome": "Hambúrguer Carne Bovina",
    "marcas": [
      "Bestbeef"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904002450",
    "ean": "7894904002450",
    "nome": "Texas Burguer 672 g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896002303422",
    "ean": "7896002303422",
    "nome": "Pão De Hamburguer - Plusvita - Plusvita - Plusvita",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904231317",
    "ean": "7894904231317",
    "nome": "Hambúrguer De Carne Bovina 2 u, 400 g (200 g * 2)",
    "marcas": [
      "Friboi"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7899638362245",
    "ean": "7899638362245",
    "nome": "Hambúrguer Angus 2x180g",
    "marcas": [
      "Sadia Bassi"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904296248",
    "ean": "7894904296248",
    "nome": "Hambúrguer Carne Vegetal 60G Incrivel",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898904874291",
    "ean": "7898904874291",
    "nome": "Pão Hambúrguer",
    "marcas": [
      "Panutri"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898600721714",
    "ean": "7898600721714",
    "nome": "Hamburguer Picanha",
    "marcas": [
      "Brasa"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904077335",
    "ean": "7894904077335",
    "nome": "Nature Hamburguer Bovino Temperado 452g",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_8480017338549",
    "ean": "8480017338549",
    "nome": "Hambúrguer De Carne Congelada 560 g",
    "marcas": [
      "Dia"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898686950176",
    "ean": "7898686950176",
    "nome": "Hambúrguer Vegetal Not Caixa 200G 2 Unidades",
    "marcas": [
      "Notco"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896275900212",
    "ean": "7896275900212",
    "nome": "Hambúrguer De Proteína Vegetal 540 g",
    "marcas": [
      "Frimesa"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898953798739",
    "ean": "7898953798739",
    "nome": "Hambúrguer Sabor Carne 56 g",
    "marcas": [
      "Zanquetta"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7908224700016",
    "ean": "7908224700016",
    "nome": "Steak Burger Costela Hambúrguer De Carne Bovina 360 g",
    "marcas": [
      "Frigorífico Argus"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896088177849",
    "ean": "7896088177849",
    "nome": "Pão De Hambúrguer",
    "marcas": [
      "Q",
      "Pão"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515989408",
    "ean": "7891515989408",
    "nome": "Hambúrguer De Carne De Frango E Bovina Perdigão Pacote 56G",
    "marcas": [
      "Perdix"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896034503838",
    "ean": "7896034503838",
    "nome": "Hamburguer De Picanha",
    "marcas": [
      "Corte D’Oro"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7908267500482",
    "ean": "7908267500482",
    "nome": "Hambúrguer De Carne Bovina Angus Fazenda Santa Monica 360g",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896665800399",
    "ean": "7896665800399",
    "nome": "Pão De Hambúrguer Com Gergelim",
    "marcas": [
      "Italianinho"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904248544",
    "ean": "7894904248544",
    "nome": "Hambúrguer De Carne Bovina Com Bacon 360 g, 2 u (* 180 g)",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898686950411",
    "ean": "7898686950411",
    "nome": "Not Chicken Burger Empanado 200 g",
    "marcas": [
      "Notco"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896024807557",
    "ean": "7896024807557",
    "nome": "Hambúrguer Vegetal",
    "marcas": [
      "Superbem"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898185881209",
    "ean": "7898185881209",
    "nome": "Hambúrguer De Entilha",
    "marcas": [
      "Mr Veggy"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7895000468249",
    "ean": "7895000468249",
    "nome": "Hamburguer De Patinho + Arroz + Purê De Batata",
    "marcas": [
      "Você & Saudável"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904727636",
    "ean": "7894904727636",
    "nome": "Hambúrguer Gourmet Gran Angus Seara 400g",
    "marcas": [
      "Seara",
      "Seara Gourmet"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904238620",
    "ean": "7894904238620",
    "nome": "Hambúrguer De Carne Bovina Picanha Seara Gourmet Caixa 360G 2 Unidades",
    "marcas": [
      "Gourmet"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515605797",
    "ean": "7891515605797",
    "nome": "Hamburguer Perdigão Misto 36X56",
    "marcas": [
      "Perdigão"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515605780",
    "ean": "7891515605780",
    "nome": "Hamburguer Perdigão Frango 36X56",
    "marcas": [
      "Perdigão"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896275921033",
    "ean": "7896275921033",
    "nome": "Hambúrguer De Carne Suína 2,016 kg",
    "marcas": [
      "Frimesa"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898542023310",
    "ean": "7898542023310",
    "nome": "Hambúrguer De Carne Bovina Swift 672g",
    "marcas": [
      "Swift"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898542029473",
    "ean": "7898542029473",
    "nome": "Hambúrguer De Carne Bovina Sabor Picanha 480g",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7894904247301",
    "ean": "7894904247301",
    "nome": "Hambúrguer De Carne Bovina Gran Reserva Swift 400g",
    "marcas": [
      "Swift"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7908109124166",
    "ean": "7908109124166",
    "nome": "Hambúrguer Costela",
    "marcas": [
      "Corte Doro"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515883034",
    "ean": "7891515883034",
    "nome": "Hambúrguer De Carne De Ave E Bovina Defumado Perdigão Caixa 672G 12 Unidades",
    "marcas": [
      "Perdix"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515323691",
    "ean": "7891515323691",
    "nome": "Hambúrguer De Carne De Frango E Bovina Perdigão Caixa 672G 12 Unidades",
    "marcas": [
      "Perdix"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7908267516711",
    "ean": "7908267516711",
    "nome": "Hambúrguer De Carne Bovina Brisket Angus 400 g",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7893000486317",
    "ean": "7893000486317",
    "nome": "Hambúrguer Sabor Churrasco Sadia 672g",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896066310923",
    "ean": "7896066310923",
    "nome": "Pão De Hamburguer",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515323677",
    "ean": "7891515323677",
    "nome": "Hambúrguer De Frango Perdigão Caixa 672G 12 Unidades",
    "marcas": [
      "Perdix"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515544690",
    "ean": "7891515544690",
    "nome": "Hambúrguer De Frango Com Pepperoni Sadia Speciale Caixa 300G 2 Unidades",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515544706",
    "ean": "7891515544706",
    "nome": "Hambúrguer De Carne Bovina Com Queijo Sadia Speciale Caixa 350G 2 Unidades",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515545321",
    "ean": "7891515545321",
    "nome": "Hambúrguer De Frango Lemon Pepper Sadia Speciale Caixa 300G 2 Unidades",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515568320",
    "ean": "7891515568320",
    "nome": "Hambúrguer Vegetal Sadia Veg Tal Caixa 226G 2 Unidades",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515580667",
    "ean": "7891515580667",
    "nome": "Hambúrguer De Carne Bovina Picanha Perdigão Na Brasa Caixa 300G 2 Unidades",
    "marcas": [
      "Brasa"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515580674",
    "ean": "7891515580674",
    "nome": "Hambúrguer De Carne Bovina Costela Perdigão Na Brasa Caixa 300G 2 Unidades",
    "marcas": [
      "Brasa"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515580834",
    "ean": "7891515580834",
    "nome": "Hambúrguer De Carne Bovina Angus Sadia Speciale Caixa 350G 2 Unidades",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7891515580841",
    "ean": "7891515580841",
    "nome": "Hambúrguer De Carne Bovina Picanha Sadia Speciale Caixa 350G 2 Unidades",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7893000486744",
    "ean": "7893000486744",
    "nome": "Hambúrguer De Frango Sadia Caixa 672G 12 Unidades",
    "marcas": [
      "Sadia International"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7894904248537",
    "ean": "7894904248537",
    "nome": "Hambúrguer De Carne Suína Toscana Seara Gourmet Caixa 360G 2 Unidades",
    "marcas": [
      "Gourmet"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896025805088",
    "ean": "7896025805088",
    "nome": "Molho Para Hambúrguer Big Bob Bobs Em Casa Squeeze 200G",
    "marcas": [
      "Squeeze"
    ],
    "grupoId": "congelados",
    "apresId": "saco"
  },
  {
    "id": "ean_7891107005660",
    "ean": "7891107005660",
    "nome": "Hamburguer Seara Bov 672Gr",
    "marcas": [
      "Seara"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896903830041",
    "ean": "7896903830041",
    "nome": "Pão Para Hambúrguer Integral Casa Victoriana Pacote 240G",
    "marcas": [
      "Casa Victoriana"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896066301112",
    "ean": "7896066301112",
    "nome": "Pão Para Hambúrguer Original Wickbold Maxi Burger Pacote 320G",
    "marcas": [
      "Original"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7899638343923",
    "ean": "7899638343923",
    "nome": "Hambúrguer De Carne Bovina Angus Bassi Caixa 400G 2 Unidades",
    "marcas": [
      "Bassi"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896015976606",
    "ean": "7896015976606",
    "nome": "Mistura Para Pão De Queijo 500 g / 17.63 oz",
    "marcas": [
      "Pinduca"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891095300808",
    "ean": "7891095300808",
    "nome": "Pão De Queijo 250 g",
    "marcas": [
      "Yoki",
      "General Mills"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896074600016",
    "ean": "7896074600016",
    "nome": "Pão De Queijo Congelado Super Lanche 1000 g",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_0749355080137",
    "ean": "0749355080137",
    "nome": "Pão De Queijo Coquetel Congelado 800g",
    "marcas": [
      "Ideal De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896074606735",
    "ean": "7896074606735",
    "nome": "Pão De Queijo Congelado Tradicional Forno De Minas Pacote 820G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7700002970662",
    "ean": "7700002970662",
    "nome": "Pão De Queijo Tradicional",
    "marcas": [
      "Verdemar"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898560670718",
    "ean": "7898560670718",
    "nome": "Pão De Queijo Congelado",
    "marcas": [
      "Seu Ninico"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_2464350004220",
    "ean": "2464350004220",
    "nome": "Pão De Queijo Mini",
    "marcas": [
      "Zaffari"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_2525110001719",
    "ean": "2525110001719",
    "nome": "Pão De Tapioca E Queijo",
    "marcas": [
      "Zaffari"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891095279715",
    "ean": "7891095279715",
    "nome": "Pao De Queijo 250 g",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896353300255",
    "ean": "7896353300255",
    "nome": "Pão De Queijo Recheado Com Catupiry Tradicional 1 kg",
    "marcas": [
      "Catupiry"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7897076021014",
    "ean": "7897076021014",
    "nome": "Popcheese Mini Pão De Queijo Provolone 1 kg",
    "marcas": [
      "Maricota",
      "Quatá"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891103220869",
    "ean": "7891103220869",
    "nome": "Pão De Mandioquinha E Batata Sabor Queijo 300 g",
    "marcas": [
      "Carrefour"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898337980064",
    "ean": "7898337980064",
    "nome": "Pão De Alho Recheado Com Queijo",
    "marcas": [
      "Zinho"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891737317829",
    "ean": "7891737317829",
    "nome": "Pão De Alho Tradicional Com Queijo Baguete",
    "marcas": [
      "Confiare"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7897076025227",
    "ean": "7897076025227",
    "nome": "Pão De Queijo Com Requeijão Pré-Assado 250 g",
    "marcas": [
      "Maricota"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898957978304",
    "ean": "7898957978304",
    "nome": "Pão Sem Queijo 250 g",
    "marcas": [
      "Santu"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896074606278",
    "ean": "7896074606278",
    "nome": "Pão De Queijo Congelado Forno De Minas Pacote 1000G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896074606872",
    "ean": "7896074606872",
    "nome": "Pão De Queijo Congelado Forno De Minas Pacote 820G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896074601440",
    "ean": "7896074601440",
    "nome": "Pão De Queijo São Geraldo 1kg",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_0602883219151",
    "ean": "0602883219151",
    "nome": "Pão De Queijo Tradicional Ló Sabores 1kg",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515492939",
    "ean": "7891515492939",
    "nome": "Pão De Queijo Congelado Tradicional Perdigão Tá Na Mão Pacote 375G",
    "marcas": [
      "Perdigao"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896071310208",
    "ean": "7896071310208",
    "nome": "Quindim Pão De Queijo Bandeja 100G 2 Unidades",
    "marcas": [
      "Pão De Queijo"
    ],
    "grupoId": "congelados",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896074603222",
    "ean": "7896074603222",
    "nome": "Pão De Queijo Congelado Tradicional Forno De Minas Pacote 240G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515560782",
    "ean": "7891515560782",
    "nome": "Pão De Queijo Congelado Lanche Amanteigado Qualy Pacote 900G",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896071300186",
    "ean": "7896071300186",
    "nome": "Quindim Pão De Queijo Bandeja 300G 15 Unidades",
    "marcas": [
      "Pão De Queijo"
    ],
    "grupoId": "congelados",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896074601068",
    "ean": "7896074601068",
    "nome": "Pão De Queijo Congelado Coquetel Forno De Minas Pacote 400G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898337980248",
    "ean": "7898337980248",
    "nome": "Pão De Alho Baguete Recheio Queijo Zinho Pacote 300G",
    "marcas": [
      "Zinho"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515571313",
    "ean": "7891515571313",
    "nome": "Pão De Queijo Congelado Multigrãos Amanteigado Qualy Pacote 375G",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515560775",
    "ean": "7891515560775",
    "nome": "Pão De Queijo Congelado Amanteigado Qualy Pacote 375G",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896071310017",
    "ean": "7896071310017",
    "nome": "Quindim Pão De Queijo Bandeja 300G 6 Unidades",
    "marcas": [
      "Pão De Queijo"
    ],
    "grupoId": "congelados",
    "apresId": "bdj"
  },
  {
    "id": "ean_7896074606285",
    "ean": "7896074606285",
    "nome": "Pão De Queijo Congelado Forno De Minas Pacote 400G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898337980262",
    "ean": "7898337980262",
    "nome": "Pão De Alho Baguete Picante Recheio Queijo Zinho Pacote 300G",
    "marcas": [
      "Zinho"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515561314",
    "ean": "7891515561314",
    "nome": "Pão De Queijo Congelado Amanteigado Com Presunto Qualy Pacote 375G",
    "marcas": [
      "Qualy"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896074606803",
    "ean": "7896074606803",
    "nome": "Pão De Queijo Congelado Lanche Forno De Minas Pacote 820G",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896074606384",
    "ean": "7896074606384",
    "nome": "Pão De Queijo Congelado Waffle Forno De Minas Pacote 400G 10 Unidades",
    "marcas": [
      "Forno De Minas"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898994802204",
    "ean": "7898994802204",
    "nome": "Pizza De Pão De Queijo Brotinho Linguicinha Nuu Caixa 210G",
    "marcas": [
      "Pão De Queijo"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896353300200",
    "ean": "7896353300200",
    "nome": "Pão De Queijo Congelado Tradicional Recheio Catupiry Original Caixa 390G",
    "marcas": [
      "Catupiry"
    ],
    "grupoId": "congelados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896353301740",
    "ean": "7896353301740",
    "nome": "Pão De Queijo Congelado Coquetel Catupiry Pacote 380G",
    "marcas": [
      "Catupiry"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7899638903523",
    "ean": "7899638903523",
    "nome": "Pão De Queijo - Freski Masdas",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7899934803565",
    "ean": "7899934803565",
    "nome": "Pão De Queijo Palito",
    "marcas": [
      "Oba Bem Querer"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896074603468",
    "ean": "7896074603468",
    "nome": "Pão De Queijo Coquetel Forno De Minas 1kg",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_0798992990309",
    "ean": "0798992990309",
    "nome": "Pão De Queijo Tradicional Maquí 1kg",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898945451017",
    "ean": "7898945451017",
    "nome": "Pão De Queijo Tradicional Diviníssimo 1kg",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898633431482",
    "ean": "7898633431482",
    "nome": "Pão De Queijo Palito 3 Queijos 1kg",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_9699420606742",
    "ean": "9699420606742",
    "nome": "Pão De Queijo Congelado Coquetel 820g",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891515546519",
    "ean": "7891515546519",
    "nome": "Batata Pré Frita Palito Congelada Sadia Pacote 400G",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896105800897",
    "ean": "7896105800897",
    "nome": "Batata Pré Frita Smiles Congelada 400g",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896105801092",
    "ean": "7896105801092",
    "nome": "Batata Mccain Airfryer Extra Crocante 600g",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898921567336",
    "ean": "7898921567336",
    "nome": "Batata Pré Frita Tradicional Congelada Bem Brasil Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Bem Brasil"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898921567121",
    "ean": "7898921567121",
    "nome": "Batata Pré Frita Palito Congelada Bem Brasil Mais Batata Pacote 2Kg",
    "marcas": [
      "Bem Brasil"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515546335",
    "ean": "7891515546335",
    "nome": "Batata Pré Frita Palito Congelada Sadia Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891515547226",
    "ean": "7891515547226",
    "nome": "Batata Pré Frita Rústica Congelada Sadia Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7797906000380",
    "ean": "7797906000380",
    "nome": "Batata Pré Frita Tradicional Congelada Mccain Pacote 720G",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891515547240",
    "ean": "7891515547240",
    "nome": "Batata Pré Frita Canoa Congelada Sadia Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Sadia"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898921567275",
    "ean": "7898921567275",
    "nome": "Batata Pré Frita Carinhas Congelada Bem Brasil Pacote 400G",
    "marcas": [
      "Bem Brasil"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7797906000892",
    "ean": "7797906000892",
    "nome": "Batata Pré Frita Tradicional Congelada Mccain Pacote 1,5Kg 1.5kg",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7797906001837",
    "ean": "7797906001837",
    "nome": "Batata Pré Frita Canoa Congelada Mccain Pacote 500G",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7797906002032",
    "ean": "7797906002032",
    "nome": "Batata Pré Frita Tradicional Congelada Mccain Pacote 1,7Kg Grátis 200G 1.7kg",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898921567695",
    "ean": "7898921567695",
    "nome": "Batata Doce Pré Frita Congelada Bem Brasil Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Bem Brasil"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896105800705",
    "ean": "7896105800705",
    "nome": "Batata Pré Frita Rústica Congelada Mccain Ao Forno Pacote 600G",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896105800798",
    "ean": "7896105800798",
    "nome": "Batata Pré Frita Tradicional Congelada Mccain Pacote 1,5Kg Tamanho Família 1.5kg",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896105800903",
    "ean": "7896105800903",
    "nome": "Batata Pré Frita Noisette Congelada Mccain Ao Forno Pacote 400G",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898921567541",
    "ean": "7898921567541",
    "nome": "Batata Pré Frita Ondulada Congelada Bem Brasil Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Bembrasil"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7898921567268",
    "ean": "7898921567268",
    "nome": "Batata Pré Frita Palito Fininha Congelada Bem Brasil Pacote 700G",
    "marcas": [
      "Bem Brasil"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896105800736",
    "ean": "7896105800736",
    "nome": "Batata Pré Frita Fina Congelada Mccain Pacote 400G",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896105800354",
    "ean": "7896105800354",
    "nome": "Batata Pré Frita Palito Congelada Mccain Ao Forno Pacote 600G",
    "marcas": [
      "Mccain"
    ],
    "grupoId": "congelados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898921567954",
    "ean": "7898921567954",
    "nome": "Batata Pré Frita Canoa Congelada Bem Brasil Pacote 1,05Kg 1.05kg",
    "marcas": [
      "Bem Brasil"
    ],
    "grupoId": "congelados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896807416891",
    "ean": "7896807416891",
    "nome": "Ok Fries Batata Pré-Frita Congelada",
    "marcas": [
      "Easychef"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7898542002865",
    "ean": "7898542002865",
    "nome": "Batata Frita Palito Congelada",
    "marcas": [],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7895000487301",
    "ean": "7895000487301",
    "nome": "Batata Pré Frita Congelada Com Casca",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7896807416099",
    "ean": "7896807416099",
    "nome": "Batata Pré Frita Congelada",
    "marcas": [
      "Easy Chef"
    ],
    "grupoId": "congelados",
    "apresId": "un"
  },
  {
    "id": "ean_7891167011779",
    "ean": "7891167011779",
    "nome": "Atum Ralado Ao Natural 170 g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896114990190",
    "ean": "7896114990190",
    "nome": "Atum Ralado 140g",
    "marcas": [
      "Pescador"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167011748",
    "ean": "7891167011748",
    "nome": "Atum Ralado Em Óleo 170 g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898943163066",
    "ean": "7898943163066",
    "nome": "Atum Ralado Ao Natural Robinson Crusoe Lata 120G",
    "marcas": [
      "Robinson Crusoe"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7896009301117",
    "ean": "7896009301117",
    "nome": "Atum Ralado Em Molho Com Tomate 160g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7891167040410",
    "ean": "7891167040410",
    "nome": "Atum Ralado Natural 88 105 g",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167012103",
    "ean": "7891167012103",
    "nome": "Atum Ralado Em Óleo Defumado Gomes Da Costa Lata 130G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167040403",
    "ean": "7891167040403",
    "nome": "Atum Ralado Em Óleo 88 Lata 105G",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167040427",
    "ean": "7891167040427",
    "nome": "Atum Ralado Em Molho De Tomate 88 Lata 115G",
    "marcas": [
      "Tomate"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7894321822020",
    "ean": "7894321822020",
    "nome": "Atum Ralado Em Óleo Coqueiro Lata 120G",
    "marcas": [
      "Pepsi"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898943163059",
    "ean": "7898943163059",
    "nome": "Atum Ralado Em Óleo Robinson Crusoe Lata 120G",
    "marcas": [
      "Robinson Crusoe"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898002470609",
    "ean": "7898002470609",
    "nome": "Atum Ralado C/Oleo Comestivel Caldo Vegetal",
    "marcas": [
      "Purifruti"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896009301131",
    "ean": "7896009301131",
    "nome": "Atum Ralado Oleo 170G Coqueiro",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167011953",
    "ean": "7891167011953",
    "nome": "Atum Ralado Ao Molho De Tomate Gomes Da Costa Lata 140G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898342050851",
    "ean": "7898342050851",
    "nome": "Nautique Atum Nautique Ralado Em Óleo, 180g",
    "marcas": [
      "Nautique"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898711980055",
    "ean": "7898711980055",
    "nome": "Atum Ralado Natural",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_0993640964217",
    "ean": "0993640964217",
    "nome": "Atum Ralado Tomate Coqueiro 170 g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167011694",
    "ean": "7891167011694",
    "nome": "Atum Ralado Ao Natural Gomes Da Costa 120g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896009301049",
    "ean": "7896009301049",
    "nome": "Sardinhas Com Óleo Net 125g, Drained 75g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167021013",
    "ean": "7891167021013",
    "nome": "Sardinhas Com Óleo - Peso Drenado 75 G 125 g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167022027",
    "ean": "7891167022027",
    "nome": "Filé De Sardinha Com Óleo Com Pimenta Gomes Da Costa Caixa 85G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7891167099685",
    "ean": "7891167099685",
    "nome": "Sardinha Ralada Em Molho De Tomate 110g",
    "marcas": [
      "88",
      "Gdc Alimentos"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896114901738",
    "ean": "7896114901738",
    "nome": "Sardinhas Com Óleo Comestível 125",
    "marcas": [
      "Pescador"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167023017",
    "ean": "7891167023017",
    "nome": "Sardinha Com Óleo 88 Lata 84G 125g",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898342050240",
    "ean": "7898342050240",
    "nome": "Sardinha",
    "marcas": [
      "Nautique"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896009301056",
    "ean": "7896009301056",
    "nome": "Sardinha Sabor Limão 125g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896117100350",
    "ean": "7896117100350",
    "nome": "Sardinha Em Óleo",
    "marcas": [
      "Palmeira"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898943163011",
    "ean": "7898943163011",
    "nome": "Sardinha Com Óleo 125 g",
    "marcas": [
      "Robinson Crusoe"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167021037",
    "ean": "7891167021037",
    "nome": "Sardinhas Sabor Limão 125 g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167036888",
    "ean": "7891167036888",
    "nome": "Sardinha Com Molho De Tomate Gomes Da Costa Lata 165G Embalagem Econômica",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167022034",
    "ean": "7891167022034",
    "nome": "Filé De Sardinha Com Molho De Tomate Gomes Da Costa Caixa 85G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7891167022041",
    "ean": "7891167022041",
    "nome": "Filé De Sardinha Com Óleo Com Limão Gomes Da Costa Caixa 85G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7898943163028",
    "ean": "7898943163028",
    "nome": "Sardinha Com Molho De Tomate Robinson Crusoe Lata 84G",
    "marcas": [
      "Robinson Crusoe"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7894321811789",
    "ean": "7894321811789",
    "nome": "Sardinha Com Molho Tomate Coqueiro Lata 83G 125g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167021075",
    "ean": "7891167021075",
    "nome": "Sardinha Ao Molho De Tomate Picante Gomes Da Costa Lata 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7896009301063",
    "ean": "7896009301063",
    "nome": "Sardinhas Com Molho De Tomate 125 g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7908090300785",
    "ean": "7908090300785",
    "nome": "Peixe Congelado Eviscerado Sem Cabeça Sardinha Mar E Rio Pescados 400g",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167022010",
    "ean": "7891167022010",
    "nome": "Filé De Sardinha Com Óleo Gomes Da Costa Caixa 85 g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7896117100367",
    "ean": "7896117100367",
    "nome": "Sardinha Com Molho De Tomate - Palmeira",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7898342050257",
    "ean": "7898342050257",
    "nome": "Sardinhas Ao Molho De Tomate - Nautique",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7894321811758",
    "ean": "7894321811758",
    "nome": "Sardinha Com Óleo Coqueiro Lata 83G 125g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167011229",
    "ean": "7891167011229",
    "nome": "Gomes Da Costa Filés De Sardinha Em Molho De Tomate 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7891167023024",
    "ean": "7891167023024",
    "nome": "Sardinha Com Molho De Tomate 88 Lata 125g",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167020887",
    "ean": "7891167020887",
    "nome": "Sardinha 88 Em Óleo Comestível 125g",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167830875",
    "ean": "7891167830875",
    "nome": "Sardinha Ralada",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167021105",
    "ean": "7891167021105",
    "nome": "Sardinha Em Óleo Sabor Defumado 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894321811369",
    "ean": "7894321811369",
    "nome": "Sardinhas Com Molho De Moqueca 125g",
    "marcas": [
      "Gomes"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_78911670210136",
    "ean": "78911670210136",
    "nome": "Sardinhas Em Óleo Gomes Da Costa 250g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167021402",
    "ean": "7891167021402",
    "nome": "Sardinha Ralada Com Molho De Tomate Gomes Da Costa 110g",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7891167031647",
    "ean": "7891167031647",
    "nome": "Filés De Sardinha Em Óleo Gomes Da Costa - Sem Pele E Sem Espinhas 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7894321815374",
    "ean": "7894321815374",
    "nome": "Filés De Sardinha Com Molho De Tomate Gomes Da Costa - Sem Pele E Sem Espinhas. 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7894321811253",
    "ean": "7894321811253",
    "nome": "Sardinha Com Molho De Tomate 125g",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7890017981767",
    "ean": "7890017981767",
    "nome": "Sardinha Em Oléo 88 Lata 125G",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7900001034215",
    "ean": "7900001034215",
    "nome": "Sardinha Ao Molho De Tomate 88 Lata 125G",
    "marcas": [
      "88"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7908090301256",
    "ean": "7908090301256",
    "nome": "Sardinha Mar Rio 400G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_5601159000221",
    "ean": "5601159000221",
    "nome": "Sardinhas Em Azeite Picante",
    "marcas": [
      "Bon App'"
    ],
    "grupoId": "mercearia",
    "apresId": "gfa"
  },
  {
    "id": "ean_7896114900014",
    "ean": "7896114900014",
    "nome": "Sardinha Em Lata 125g",
    "marcas": [
      "Pescador"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891167011120",
    "ean": "7891167011120",
    "nome": "Sardinha Em Óleo Gomes Da Costa 125g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896082508489",
    "ean": "7896082508489",
    "nome": "Sardinha Laje",
    "marcas": [
      "Costa Sul"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7897517209544",
    "ean": "7897517209544",
    "nome": "Milho Verde Fugini 260 g",
    "marcas": [
      "Fugini"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896102500608",
    "ean": "7896102500608",
    "nome": "Milho Verde Em Conserva Quero Lata 170G",
    "marcas": [
      "Quero"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7896041156010",
    "ean": "7896041156010",
    "nome": "Milho Verde Em Conserva 300 g",
    "marcas": [
      "Oderich"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_3083681080803",
    "ean": "3083681080803",
    "nome": "Milho Verde Em Conserva Tradicional Bonduelle Lata 170G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898930142784",
    "ean": "7898930142784",
    "nome": "Milho Verde Em Conserva Salsaretti Lata 170G",
    "marcas": [
      "Salsaretti"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891986036649",
    "ean": "7891986036649",
    "nome": "Aro Milho Verde 300g",
    "marcas": [
      "Aro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896102517125",
    "ean": "7896102517125",
    "nome": "Quero Milho Verde 280g",
    "marcas": [
      "Coniexpress S.A.",
      "Quero"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898085947579",
    "ean": "7898085947579",
    "nome": "Milho Verde",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_0602883127838",
    "ean": "0602883127838",
    "nome": "Milho 300 g",
    "marcas": [
      "Lara"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_3083680041713",
    "ean": "3083680041713",
    "nome": "Milho Verde Em Conserva Cozido No Vapor Bonduelle Lata 285G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_3083681003420",
    "ean": "3083681003420",
    "nome": "Milho Verde Em Conserva Bonduelle Lata 200G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_3083681015652",
    "ean": "3083681015652",
    "nome": "Ervilha E Milho Verde Em Conserva Dueto Bonduelle Lata 200G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_3083681069518",
    "ean": "3083681069518",
    "nome": "Milho Verde Em Conserva Ao Natural Bonduelle Lata 200G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7891150058873",
    "ean": "7891150058873",
    "nome": "Ervilha E Milho Verde Em Conserva Dueto Knorr Lata 170G",
    "marcas": [
      "Knorr"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898573459737",
    "ean": "7898573459737",
    "nome": "Sorvete Milho Verde Rochinha Sorvetes Pote 470Ml",
    "marcas": [
      "Rochinha"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898994848851",
    "ean": "7898994848851",
    "nome": "Suco Milho Verde Fr Campo 500Ml",
    "marcas": [
      "Camp"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896102500448",
    "ean": "7896102500448",
    "nome": "Ervilha E Milho Verde Em Conserva Quero Lata 170G",
    "marcas": [
      "Quero"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898902299058",
    "ean": "7898902299058",
    "nome": "Milho Verde Em Conserva Stella Doro Lata 170G",
    "marcas": [
      "Stella D'Oro"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7898994848844",
    "ean": "7898994848844",
    "nome": "Flv Suco De Milho Verde Natural Do Campo 300Ml",
    "marcas": [
      "Verde Natural"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896513915145",
    "ean": "7896513915145",
    "nome": "Sorvete Milho Verde Kascão Sobremesa Pote 1,5L 1.5l",
    "marcas": [
      "Kascao"
    ],
    "grupoId": "mercearia",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898916464176",
    "ean": "7898916464176",
    "nome": "Picolé Milho Verde - Rochinha",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898006950145",
    "ean": "7898006950145",
    "nome": "Picole Milho Verde",
    "marcas": [
      "Oggi"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896545506212",
    "ean": "7896545506212",
    "nome": "Bolo De Milho Verde",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898958870652",
    "ean": "7898958870652",
    "nome": "Milho Verde Da Fazenda",
    "marcas": [
      "Los Los"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898919501137",
    "ean": "7898919501137",
    "nome": "Bolo Milla Sabor Artificial De Milho Verde",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898006959094",
    "ean": "7898006959094",
    "nome": "Picolé De Milho Verde Leve",
    "marcas": [
      "Oggi"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896505602541",
    "ean": "7896505602541",
    "nome": "Mistura Para Bolo Milho Verde",
    "marcas": [
      "Anchieta"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896009301162",
    "ean": "7896009301162",
    "nome": "Patê Atum Com Azeitonas Verdes Coqueiro Sachê 170G",
    "marcas": [
      "Coqueiro"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896183001896",
    "ean": "7896183001896",
    "nome": "Azeitona Fatiada",
    "marcas": [
      "Rivoli"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272000830",
    "ean": "7896272000830",
    "nome": "Azeitona Verde Em Conserva Sem Caroço Vale Fértil Vidro 160G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167831667",
    "ean": "7891167831667",
    "nome": "Patê De Atum Com Azeitonas 170 g",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891000259313",
    "ean": "7891000259313",
    "nome": "Linhaça E Sabor Azeitona 84 g",
    "marcas": [
      "Nestlé",
      "Nesfit"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891089101206",
    "ean": "7891089101206",
    "nome": "Azeitona Verde Fatida La Viole 320 g",
    "marcas": [
      "La Violetera"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896183001063",
    "ean": "7896183001063",
    "nome": "Divinas Azeitonas Recheadas Com Pimentão 335 g",
    "marcas": [
      "Rivoli"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896183001872",
    "ean": "7896183001872",
    "nome": "Azeitonas Verdes Recheadas Com Pimentão 350 g",
    "marcas": [
      "Rivoli"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7897765601503",
    "ean": "7897765601503",
    "nome": "Azeitonas Verdes Descaroçadas 250 g",
    "marcas": [
      "Diza"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896183001186",
    "ean": "7896183001186",
    "nome": "Azeitonas Verdes Com Caroço 820 g",
    "marcas": [
      "Rivoli"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898959472183",
    "ean": "7898959472183",
    "nome": "Azeitonas Verdes Com Caroço 500G",
    "marcas": [
      "Fitalli"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898902481224",
    "ean": "7898902481224",
    "nome": "Pasta De Soja Sabor Azeitona Preta",
    "marcas": [
      "Puro Sabor"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7896579901939",
    "ean": "7896579901939",
    "nome": "Azeitona Fatiada Em Conserva 100 g",
    "marcas": [
      "Uniagro"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898686950268",
    "ean": "7898686950268",
    "nome": "Molho Cremoso À Base De Vegetais Azeitona Preta Not Squeeze 335G",
    "marcas": [
      "Notco"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272004234",
    "ean": "7896272004234",
    "nome": "Azeitonas Pretas",
    "marcas": [
      "Vale Fértil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891515539153",
    "ean": "7891515539153",
    "nome": "Mortadela Com Azeitona Perdigão Ouro 200G",
    "marcas": [
      "Perdigao"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_3083681039191",
    "ean": "3083681039191",
    "nome": "Azeitona Verde Em Conserva Sem Caroço Bonduelle Vidro 170G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_3083681039214",
    "ean": "3083681039214",
    "nome": "Azeitona Verde Em Conserva Com Caroço Bonduelle Vidro 200G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_3083681039245",
    "ean": "3083681039245",
    "nome": "Azeitona Verde Em Conserva Fatiada Bonduelle Vidro 170G",
    "marcas": [
      "Bonduelle"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_5601252115709",
    "ean": "5601252115709",
    "nome": "Azeitona Verde Em Conserva Com Caroço Gallo Vidro 500G",
    "marcas": [
      "Gallo"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891089100032",
    "ean": "7891089100032",
    "nome": "Azeitona V La Violetera Vd 12X | Azeitonas Verdes 800 g",
    "marcas": [
      "La Violetera"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891167011861",
    "ean": "7891167011861",
    "nome": "Patê De Atum Com Azeitonas Gomes Da Costa Lata 150G",
    "marcas": [
      "Gomes Da Costa"
    ],
    "grupoId": "mercearia",
    "apresId": "lata"
  },
  {
    "id": "ean_7896272005712",
    "ean": "7896272005712",
    "nome": "Azeitona Verde Em Conserva Recheio Presunto Vale Fértil Vidro 130G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896237901042",
    "ean": "7896237901042",
    "nome": "Azeitona Verde Em Conserva Com Recheio De Pasta De Anchova Raiola Vidro 135G",
    "marcas": [
      "Raiola"
    ],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7896272005729",
    "ean": "7896272005729",
    "nome": "Azeitonas Recheadas Com Queijo Azul 130G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272009420",
    "ean": "7896272009420",
    "nome": "Azeitonas Recheadas Com Alho 130g",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896237901011",
    "ean": "7896237901011",
    "nome": "Azeitona Preta Em Conserva Fatiada Raiola Vidro 155G",
    "marcas": [
      "Raiola"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272002247",
    "ean": "7896272002247",
    "nome": "Azeitona Verde Em Conserva Arauco Com Caroço Vale Fértil Premium Vidro 360G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272001301",
    "ean": "7896272001301",
    "nome": "Azeitonas Verdes Com Caroço 300G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896036096062",
    "ean": "7896036096062",
    "nome": "Molho De Tomate Azeitona Pomarola Sabores Sachê 300G",
    "marcas": [
      "Pomarola"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272000038",
    "ean": "7896272000038",
    "nome": "Azeitona Verde Em Conserva Changlot Com Caroço Vale Fértil Vidro 500G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7898907631303",
    "ean": "7898907631303",
    "nome": "Mortadela Bologna Com Azeitona Fatiada Ceratti 150G",
    "marcas": [
      "Ceratti"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272009338",
    "ean": "7896272009338",
    "nome": "Snack De Azeitona Verde Chilli Vale Fértil Oliv Pacote 50G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7896944103357",
    "ean": "7896944103357",
    "nome": "Molho Pesto Azeitona Magazzino Vidro 150G",
    "marcas": [
      "Magazzino"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272005736",
    "ean": "7896272005736",
    "nome": "Azeitona Verde Em Conserva Recheio Salmão Vale Fértil Vidro 130G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7891515592455",
    "ean": "7891515592455",
    "nome": "Torta Congelada Frango Com Alho Poró E Azeitonas Perdigão Chester Caixa 500G",
    "marcas": [],
    "grupoId": "mercearia",
    "apresId": "cx"
  },
  {
    "id": "ean_7896102592610",
    "ean": "7896102592610",
    "nome": "Molho De Tomate Com Azeitona Heinz Sachê 340G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272004227",
    "ean": "7896272004227",
    "nome": "Azeitona Verde Em Conserva Light Vale Fértil Sachê 150G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272004203",
    "ean": "7896272004203",
    "nome": "Azeitona Verde Em Conserva Sem Caroço Vale Fértil Sachê 120G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272004180",
    "ean": "7896272004180",
    "nome": "Azeitona Verde Em Conserva Arauco Com Caroço Vale Fértil Sachê 150G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896036098790",
    "ean": "7896036098790",
    "nome": "Molho De Tomate Com Azeitona Pomarola Chef Vidro 420G",
    "marcas": [
      "Pomarola"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272009444",
    "ean": "7896272009444",
    "nome": "Azeitona Verde Em Conserva Gordal Sem Caroço Vale Fértil Premium Vidro 400G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272009079",
    "ean": "7896272009079",
    "nome": "Azeitona Preta Em Conserva Fatiada Vale Fértil Sachê 120G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272010020",
    "ean": "7896272010020",
    "nome": "Azeitona Verde Em Conserva Graúda Sem Caroço Anchova Vale Fértil Vidro 280G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272004210",
    "ean": "7896272004210",
    "nome": "Azeitona Verde Em Conserva Recheio Pimentão Vale Fértil Sachê 150G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272009321",
    "ean": "7896272009321",
    "nome": "Snack De Azeitona Verde Provençal Vale Fértil Oliv Pacote 50G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "pct"
  },
  {
    "id": "ean_7896237900113",
    "ean": "7896237900113",
    "nome": "Azeitona Preta Em Conserva Raiola Família Raiolita Vidro 200G",
    "marcas": [
      "Raiola"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896237900038",
    "ean": "7896237900038",
    "nome": "Azeitona Verde Em Conserva Raiola Família Raiolita Vidro 200G",
    "marcas": [
      "Raiola"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896102501957",
    "ean": "7896102501957",
    "nome": "Molho De Tomate Com Azeitona Heinz Sachê 300G",
    "marcas": [
      "Heinz"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896237900816",
    "ean": "7896237900816",
    "nome": "Azeitona Verde Em Conserva Fatiada Raiola Vidro 155G",
    "marcas": [
      "Raiola"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896237900199",
    "ean": "7896237900199",
    "nome": "Azeitona Verde Em Conserva Com Recheio De Pimentão Raiola Vidro 195G",
    "marcas": [
      "Raiola"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272003619",
    "ean": "7896272003619",
    "nome": "Azeitona Verde Em Conserva Recheio Pimentão Vale Fértil Sachê 200G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272000021",
    "ean": "7896272000021",
    "nome": "Azeitona Verde Em Conserva Arauco Com Caroço Vale Fértil Vidro 200G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272010013",
    "ean": "7896272010013",
    "nome": "Azeitona Verde Em Conserva Graúda Mexicano Vale Fértil Vidro 300G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896272003367",
    "ean": "7896272003367",
    "nome": "Azeitona Preta Em Conserva Sem Caroço Vale Fértil Sachê 120G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "saco"
  },
  {
    "id": "ean_7896272002230",
    "ean": "7896272002230",
    "nome": "Azeitona Preta Em Conserva Azapa Com Caroço Vale Fértil Premium Vidro 360G",
    "marcas": [
      "Vale Fertil"
    ],
    "grupoId": "mercearia",
    "apresId": "un"
  },
  {
    "id": "ean_7896336005917",
    "ean": "7896336005917",
    "nome": "Paçoquita 15g",
    "marcas": [
      "Santa Helena"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896336001971",
    "ean": "7896336001971",
    "nome": "Doce De Amendoim 1,17 kg",
    "marcas": [
      "Paçoquita"
    ],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896775101881",
    "ean": "7896775101881",
    "nome": "Pasta De Amendoim Integral Com Cacau 450 g",
    "marcas": [
      "Guimarães"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896423497984",
    "ean": "7896423497984",
    "nome": "Snickers Pé De Moleque 42 g",
    "marcas": [
      "Masterfoods",
      "Masterfoods Brasil Alimentos Limitada",
      "Masterfoods Brasil Alimentos Ltda",
      "Snickers"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896775102383",
    "ean": "7896775102383",
    "nome": "Pasta De Amendoim Crocante Integral 450g",
    "marcas": [
      "Guimarães"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7895000528448",
    "ean": "7895000528448",
    "nome": "Pasta De Amendoim Tradicional 500 g",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7898701301938",
    "ean": "7898701301938",
    "nome": "Pasta De Amendoim The Cookies 1,07kg",
    "marcas": [
      "Casademãe"
    ],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896079816139",
    "ean": "7896079816139",
    "nome": "Torrone Com Amendoim 90g",
    "marcas": [
      "Montevérgine"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898126320873",
    "ean": "7898126320873",
    "nome": "Pasta De Amendoim Integral Granulado 450g",
    "marcas": [
      "Mandubim"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896336008062",
    "ean": "7896336008062",
    "nome": "Amendoim Japonês 1.01kg",
    "marcas": [
      "Mendorato"
    ],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "ean_7892840818258",
    "ean": "7892840818258",
    "nome": "Ovinhos De Amendoim Elma Chips Pacote 65G",
    "marcas": [
      "Elma Chips"
    ],
    "grupoId": "salgados",
    "apresId": "gfa"
  },
  {
    "id": "ean_7892840817749",
    "ean": "7892840817749",
    "nome": "Amendoim Japonês Elma Chips Pacote 400G Embalagem Econômica",
    "marcas": [
      "Elma Chips"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896058503791",
    "ean": "7896058503791",
    "nome": "Amendoim Crocante Cebola E Salsa Dori Pettiz Pacote 500G",
    "marcas": [
      "Pettiz"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891095002146",
    "ean": "7891095002146",
    "nome": "Amendoim Torrado Salgado Sem Casca Yoki Pacote 150G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896336012250",
    "ean": "7896336012250",
    "nome": "Amendoim Salgado 24 g",
    "marcas": [
      "Grelhaditos"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898962892343",
    "ean": "7898962892343",
    "nome": "Pasta De Amendoim Sabor Chocolate Com Avelã",
    "marcas": [
      "Power One"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7622210674395",
    "ean": "7622210674395",
    "nome": "Chocolate Ao Leite Com Amendoim Lacta Shot Pacote 80G",
    "marcas": [
      "Mondelez"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7891095015344",
    "ean": "7891095015344",
    "nome": "Amendoim Torrado Salgado Sem Casca Yoki Pacote 500G",
    "marcas": [
      "Yoki"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896775102505",
    "ean": "7896775102505",
    "nome": "Pasta De Amendoim Integral Zero Lactose Guimarães Pote 1,005Kg 1.005kg",
    "marcas": [
      "Amendoim"
    ],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896336002732",
    "ean": "7896336002732",
    "nome": "Pack Doce De Amendoim Paçoquita Pacote 176G 8 Unidades",
    "marcas": [
      "Santa Helena"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896058599497",
    "ean": "7896058599497",
    "nome": "Amendoim Crocante Pimenta Vermelha 350g",
    "marcas": [
      "Dori"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7899970402883",
    "ean": "7899970402883",
    "nome": "Chocolate Ao Leite Com Amendoim 75g",
    "marcas": [
      "Hershey'S",
      "Hersheys"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7897115106696",
    "ean": "7897115106696",
    "nome": "Amendoim Doce Praline 60G Amendupa",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840814748",
    "ean": "7892840814748",
    "nome": "Amendoim Frito Salgado Sem Pele Elma Chips Pacote 100G",
    "marcas": [
      "Elma Chips"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896181711810",
    "ean": "7896181711810",
    "nome": "Pasta Integral De Amendoim Amendo Power 1,005kg",
    "marcas": [
      "Da Colônia"
    ],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "ean_7896058507690",
    "ean": "7896058507690",
    "nome": "Amendoim Crocante Sabor Natural 1,010 Kg",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "kg"
  },
  {
    "id": "ean_7891000358887",
    "ean": "7891000358887",
    "nome": "Chocolate, Ao Leite, Com Amendoim 150g",
    "marcas": [
      "Nestlé"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840821470",
    "ean": "7892840821470",
    "nome": "Ovinhos De Amendoim - Elmachips",
    "marcas": [
      "Elma Chips"
    ],
    "grupoId": "salgados",
    "apresId": "gfa"
  },
  {
    "id": "ean_7891330019373",
    "ean": "7891330019373",
    "nome": "Chocolate Com Amendoim Neugebauer 80 G",
    "marcas": [
      "Neugebauer"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896058598674",
    "ean": "7896058598674",
    "nome": "Amendoim Tipo Japonês - Dori - Dori",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896552906258",
    "ean": "7896552906258",
    "nome": "Qualicoco Cacau Em Pó 100% Cacau 200g",
    "marcas": [
      "Qualicoco"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898963777809",
    "ean": "7898963777809",
    "nome": "Biscoito De Amendoim Com Chocolate - Klein",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7897900317115",
    "ean": "7897900317115",
    "nome": "Barra Com Amendoim, Castanha De Caju, Castanha Do Pará, Amêndoas E Uva Passa",
    "marcas": [
      "Trio Nuts"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7895827564537",
    "ean": "7895827564537",
    "nome": "Pasta De Amendoim - Chocolate Crocante",
    "marcas": [
      "La Ganexa"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7896181710387",
    "ean": "7896181710387",
    "nome": "Pasta De Amendoin Amendo Power Com Cacau",
    "marcas": [
      "Dacolônia"
    ],
    "grupoId": "salgados",
    "apresId": "cx"
  },
  {
    "id": "ean_7898530840479",
    "ean": "7898530840479",
    "nome": "Dadinho Receita Original 600 G",
    "marcas": [
      "Dadinho"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896002300377",
    "ean": "7896002300377",
    "nome": "Pão De Frutas, Grãos E Castanhas 550 g",
    "marcas": [
      "Nutrella"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896002310253",
    "ean": "7896002310253",
    "nome": "Pão De Forma Castanha Do-Pará & Quinoa",
    "marcas": [
      "Nutrella"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898955705490",
    "ean": "7898955705490",
    "nome": "Bebida À Base De Amêndoa A Tal Da Castanha Caixa 1L",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898955705049",
    "ean": "7898955705049",
    "nome": "Bebida De Castanha De Caju - A Tal Da Castanha 1 l",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898955705162",
    "ean": "7898955705162",
    "nome": "Caju +Pará",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896283007262",
    "ean": "7896283007262",
    "nome": "Granola Castanha De Caju Jasmine Pouch 250G",
    "marcas": [
      "Jasmine"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891008124170",
    "ean": "7891008124170",
    "nome": "Chocolate Ao Leite Com Castanha De Caju Garoto Pacote 80G",
    "marcas": [
      "Garoto"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898692300453",
    "ean": "7898692300453",
    "nome": "Cremeria",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896066336381",
    "ean": "7896066336381",
    "nome": "Pão Integral Girassol E Castanha Wickbold Pacote 400G",
    "marcas": [
      "Wickbold"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898955705209",
    "ean": "7898955705209",
    "nome": "A Tal Da Castanha Oroginal",
    "marcas": [
      "A Tal Da Castanh"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898058130403",
    "ean": "7898058130403",
    "nome": "Pão Integral Castanha Do Pará E Quinoa",
    "marcas": [
      "Delícias Do Trigo"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891000368893",
    "ean": "7891000368893",
    "nome": "Chocolate Ao Leite Com Castanha De Caju Diplomata Classic Pacote 80G",
    "marcas": [
      "Diplomata"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_78907478",
    "ean": "78907478",
    "nome": "Talento Castanhas Do Pará 25 g / 0.88 oz",
    "marcas": [
      "Garoto",
      "Talento"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896002303286",
    "ean": "7896002303286",
    "nome": "Pão Integral Grãos E Castanhas Pullman Pacote 450G",
    "marcas": [
      "Pullman"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7896079813138",
    "ean": "7896079813138",
    "nome": "Torrone Com Castanha De Caju Montevérgine 45 g",
    "marcas": [
      "Montevergine"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898955705988",
    "ean": "7898955705988",
    "nome": "Leite Barista",
    "marcas": [
      "A Tal Da Castanha Batista"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896844300498",
    "ean": "7896844300498",
    "nome": "Pão Integral (50%) Com Castanha E Quinoa 450g",
    "marcas": [
      "Caseirinho"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891203069801",
    "ean": "7891203069801",
    "nome": "Pão 46% Integral Castanha Pará E Linhaça - Panco - Panco - Panco",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896256040791",
    "ean": "7896256040791",
    "nome": "Granola Castanhas Nobres - Naturallife - Naturallife - Naturallife",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896063281318",
    "ean": "7896063281318",
    "nome": "Granola Tradicional Com Castanhas De Caju E Uva Passas Vitao 800G 800 g",
    "marcas": [
      "Vitao"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7897179000268",
    "ean": "7897179000268",
    "nome": "Pão 44,2% Integral Com Castanhas E Nozes",
    "marcas": [
      "Vale Do Sol",
      "Naturista"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896256041866",
    "ean": "7896256041866",
    "nome": "Naturallife Granola Castanhas Nobres",
    "marcas": [
      "Kodilar"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896261402829",
    "ean": "7896261402829",
    "nome": "Bara De Castanha Nuts Cranberry",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898957354733",
    "ean": "7898957354733",
    "nome": "Barra De Amendoim, Castanha, Semente E Côco",
    "marcas": [
      "Pintai"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7895000509805",
    "ean": "7895000509805",
    "nome": "Mix De Castanhas E Passas",
    "marcas": [
      "Qualitá"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891772144091",
    "ean": "7891772144091",
    "nome": "Granola Com Cacau E Castanhas Light Kobber",
    "marcas": [
      "Kobber"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896496971831",
    "ean": "7896496971831",
    "nome": "Trato Mix Completo 200g",
    "marcas": [
      "Trato Mix"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896496982004",
    "ean": "7896496982004",
    "nome": "Mini Cookies Integrais 4 Castanhas Brasileiras 16 g",
    "marcas": [
      "Mãe Terra",
      "Gol"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7576313008598",
    "ean": "7576313008598",
    "nome": "Barra De Nuts Com Sementes E Coco 30g",
    "marcas": [
      "Cuida Bem"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7896283006241",
    "ean": "7896283006241",
    "nome": "Pão De Sanduíche Frutas E Castanhas Sem Glúten Jasmine Pacote 350G",
    "marcas": [
      "Jasmine"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7898955705704",
    "ean": "7898955705704",
    "nome": "Plant Power Protein Tipo Cappuccino 330ml",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891193012030",
    "ean": "7891193012030",
    "nome": "Pão De Fôrma Integral Com Castanha E Nozes - Seven Boys - 500G 500 g",
    "marcas": [
      "Seven Boys"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891025115199",
    "ean": "7891025115199",
    "nome": "Silk Amêndoa 1 l",
    "marcas": [
      "Silk"
    ],
    "grupoId": "salgados",
    "apresId": "frasco"
  },
  {
    "id": "ean_7896798601870",
    "ean": "7896798601870",
    "nome": "Barra De Nuts Castanhas E Sementes Zero Sódio Nutsbar Pacote 25G",
    "marcas": [
      "Banana Brasil"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7894900083002",
    "ean": "7894900083002",
    "nome": "Alimento À Base De Amêndoa 1 L",
    "marcas": [
      "Ades"
    ],
    "grupoId": "salgados",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898958161118",
    "ean": "7898958161118",
    "nome": "Queijoveg Muçarela De Castanha De Caju Vida Veg. 300g",
    "marcas": [
      "Vida Veg"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7897266800535",
    "ean": "7897266800535",
    "nome": "Castanha Do Pará Com Cobertura Sabor Chocolate Ao Leite 80 g",
    "marcas": [
      "Sulmel"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891025116905",
    "ean": "7891025116905",
    "nome": "Silk Castanha De Caju 1 l",
    "marcas": [
      "Silk"
    ],
    "grupoId": "salgados",
    "apresId": "frasco"
  },
  {
    "id": "ean_7898955705001",
    "ean": "7898955705001",
    "nome": "Mini Chocolate",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898955705711",
    "ean": "7898955705711",
    "nome": "Cashew And Peanut Milk",
    "marcas": [
      "A Tal Da Castanha"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898942982057",
    "ean": "7898942982057",
    "nome": "Castanha De Baru",
    "marcas": [
      "Barukas"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898641071205",
    "ean": "7898641071205",
    "nome": "Protein Snack Castanha E Chocolate",
    "marcas": [
      "Dux Nutrition Lab"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898958161569",
    "ean": "7898958161569",
    "nome": "Creme De Castanha De Caju 180g",
    "marcas": [
      "Vida Veg"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7891331014490",
    "ean": "7891331014490",
    "nome": "Barra Castanha Caju C/ Choc 66G Nutry",
    "marcas": [
      "Nutry"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7897958162118",
    "ean": "7897958162118",
    "nome": "Muçarela De Castanha De Caju",
    "marcas": [
      "Vida Veg"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7898958161590",
    "ean": "7898958161590",
    "nome": "Manteiga De Castanha De Caju Vida Veg Pote 170G 200g",
    "marcas": [
      "Vida Veg"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840823405",
    "ean": "7892840823405",
    "nome": "Batata Frita Lay'S Clássica 115G 115 g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840823412",
    "ean": "7892840823412",
    "nome": "Lays Batata",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840820640",
    "ean": "7892840820640",
    "nome": "Batata Frita Rústica Cream Cheese Lays Pacote 68G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840823375",
    "ean": "7892840823375",
    "nome": "Batata Lays Clássica 70 G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840823382",
    "ean": "7892840823382",
    "nome": "Lays Salt & Vinegar",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000019104",
    "ean": "7802000019104",
    "nome": "Lay'S Tamaño L Corte Americano",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021237",
    "ean": "7802000021237",
    "nome": "Lay'S Corte Americano Tamaño S 50g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840816773",
    "ean": "7892840816773",
    "nome": "Batata Frita Lisa Clássica Lays Pacote 80G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840816780",
    "ean": "7892840816780",
    "nome": "Batata Frita Lisa Sour Cream Lays Pacote 80G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_8892818816780",
    "ean": "8892818816780",
    "nome": "Lay'S 80 g",
    "marcas": [
      "Pepsico"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840818050",
    "ean": "7892840818050",
    "nome": "Chips",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840817947",
    "ean": "7892840817947",
    "nome": "Batata Frita Lisa Clássica Lays Pacote 45G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840818272",
    "ean": "7892840818272",
    "nome": "Batata Frita Lisa Sour Cream Lays Pacote 135G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840818012",
    "ean": "7892840818012",
    "nome": "Batata Frita Lisa Barbecue Lays Pacote 80G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840820244",
    "ean": "7892840820244",
    "nome": "Batatapeito De Peru Lays Sensações Premium Pacote 40G",
    "marcas": [
      "Premium"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840818081",
    "ean": "7892840818081",
    "nome": "Batata Frita Lisa Frango Grelhado Lays Sensações Premium Pacote 145G",
    "marcas": [
      "Premium"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840819897",
    "ean": "7892840819897",
    "nome": "Batata Frita Lisa Clássica Lays Pacote 275G Mega Pacote",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840823443",
    "ean": "7892840823443",
    "nome": "Sensações - Peito De Peru",
    "marcas": [
      "Lays Sensações"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7790310985434",
    "ean": "7790310985434",
    "nome": "Lay'S Jamón Serrano 77g",
    "marcas": [
      "Pepsico"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840823399",
    "ean": "7892840823399",
    "nome": "Batata Sour Cream - Lays",
    "marcas": [],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840820183",
    "ean": "7892840820183",
    "nome": "Batata Frita Lisa Frango Grelhado Lays Sensações Premium Pacote 40G",
    "marcas": [
      "Premium"
    ],
    "grupoId": "salgados",
    "apresId": "pct"
  },
  {
    "id": "ean_7892840820626",
    "ean": "7892840820626",
    "nome": "Batata Rustica Sal Marinho 38g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840823436",
    "ean": "7892840823436",
    "nome": "Sensações Frango Grelhado",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000017421",
    "ean": "7802000017421",
    "nome": "Artesanas Con Sal De Mar 15 g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840822750",
    "ean": "7892840822750",
    "nome": "Lays Clássica 35G 35 g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000017735",
    "ean": "7802000017735",
    "nome": "Lay'S Sabor Orégano",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000006449",
    "ean": "7802000006449",
    "nome": "Artesanas Sabor Merkén 150g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_0849404678671",
    "ean": "0849404678671",
    "nome": "Stax Original 36g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000017797",
    "ean": "7802000017797",
    "nome": "Lay'S Corte Americano 60g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000017698",
    "ean": "7802000017698",
    "nome": "Lay'S Artesanas Con Sal De Mar 95g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000020261",
    "ean": "7802000020261",
    "nome": "Todito Original Ramitas Evercrisp 275 g",
    "marcas": [
      "Lay'S",
      "Evercrisp",
      "Todito"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000019098",
    "ean": "7802000019098",
    "nome": "Lay'S Corte Liso 200g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840824501",
    "ean": "7892840824501",
    "nome": "Papas Lays",
    "marcas": [
      "Artesanal"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021022",
    "ean": "7802000021022",
    "nome": "Lay'S Tamaño S Sabor Jamón Serrano 45g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021732",
    "ean": "7802000021732",
    "nome": "Lay'S Receta Campesina 180 g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000015168",
    "ean": "7802000015168",
    "nome": "De Todito Sabor Queso 120 g",
    "marcas": [
      "Doritos",
      "Lay'S",
      "Cheez"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802420009198",
    "ean": "7802420009198",
    "nome": "Corte Americano",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840824907",
    "ean": "7892840824907",
    "nome": "Lay'S Sabor Queijo Camembert",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000013881",
    "ean": "7802000013881",
    "nome": "Lay'S Stax Sabor A Crema Y Cebolla 134g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000019913",
    "ean": "7802000019913",
    "nome": "De Todito Original tamaño XL",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840824891",
    "ean": "7892840824891",
    "nome": "Lay'S Sabor Tacos Mexicanos 62 g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840824884",
    "ean": "7892840824884",
    "nome": "Batata Lays",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021633",
    "ean": "7802000021633",
    "nome": "Lay'S Tamaño Xs Corte Americano 22g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021794",
    "ean": "7802000021794",
    "nome": "Lay'S Tamaño L Sabor Orégano 170g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840824914",
    "ean": "7892840824914",
    "nome": "Tostitos",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_6924743915091",
    "ean": "6924743915091",
    "nome": "Mexican Chicken Tomato Flavor 40 g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021831",
    "ean": "7802000021831",
    "nome": "Artesanas Sabor Salsa Verde 150g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021848",
    "ean": "7802000021848",
    "nome": "Lay'S Artesanas Sabor Caprese 150g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_0555544825171",
    "ean": "0555544825171",
    "nome": "Laugs 35G",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021787",
    "ean": "7802000021787",
    "nome": "Lay'S Tamaño L Sabor Jamón Serrano 170g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7892840825195",
    "ean": "7892840825195",
    "nome": "Lays Clássica Batata 30g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  },
  {
    "id": "ean_7802000021862",
    "ean": "7802000021862",
    "nome": "Lay'S Tamaño M Corte Americano 100g",
    "marcas": [
      "Lay'S"
    ],
    "grupoId": "salgados",
    "apresId": "un"
  }
];

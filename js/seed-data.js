// GimmyMarket - Base de Dados Inicial (Carga de Produtos, Grupos e Apresentações)

const SEED_GRUPOS = [
  { id: 'hortifruti', nome: 'Hortifrúti', icone: '🍎', ordem: 1 },
  { id: 'padaria', nome: 'Padaria & Matinais', icone: '🥖', ordem: 2 },
  { id: 'acougue', nome: 'Carnes & Aves', icone: '🥩', ordem: 3 },
  { id: 'frios', nome: 'Laticínios & Frios', icone: '🧀', ordem: 4 },
  { id: 'mercearia', nome: 'Mercearia & Grãos', icone: '🍚', ordem: 5 },
  { id: 'massas_molhos', nome: 'Massas & Molhos', icone: '🍝', ordem: 6 },
  { id: 'congelados', nome: 'Congelados', icone: '❄️', ordem: 7 },
  { id: 'bebidas', nome: 'Bebidas', icone: '🥤', ordem: 8 },
  { id: 'limpeza', nome: 'Limpeza Doméstica', icone: '🧹', ordem: 9 },
  { id: 'higiene', nome: 'Higiene Pessoal', icone: '🪥', ordem: 10 },
  { id: 'bazar', nome: 'Bazar & Utilidades', icone: '🧺', ordem: 11 },
  { id: 'pet', nome: 'Pet Shop', icone: '🐾', ordem: 12 }
];

const SEED_APRESENTACOES = [
  { id: 'un', sigla: 'Un', nome: 'Unidade' },
  { id: 'kg', sigla: 'Kg', nome: 'Quilograma' },
  { id: 'g', sigla: 'g', nome: 'Gramas' },
  { id: 'l', sigla: 'L', nome: 'Litro' },
  { id: 'ml', sigla: 'mL', nome: 'Mililitro' },
  { id: 'frasco', sigla: 'Frasco', nome: 'Frasco' },
  { id: 'lata', sigla: 'Lata', nome: 'Lata' },
  { id: 'pct', sigla: 'Pct', nome: 'Pacote' },
  { id: 'cx', sigla: 'Cx', nome: 'Caixa' },
  { id: 'gfa', sigla: 'Gfa', nome: 'Garrafa' },
  { id: 'bdj', sigla: 'Bdj', nome: 'Bandeja' },
  { id: 'rolo', sigla: 'Rolo', nome: 'Rolo' }
];

const SEED_SUPERMERCADOS = [
  {
    id: 'sm_padrao',
    nome: 'Supermercado Central',
    descricao: 'Roteiro tradicional: Hortifrúti na entrada, Mercearia no meio, Limpeza no fim',
    ordemGrupos: [
      'hortifruti', 'padaria', 'frios', 'acougue', 'mercearia',
      'massas_molhos', 'bebidas', 'congelados', 'higiene', 'limpeza', 'bazar', 'pet'
    ]
  },
  {
    id: 'sm_atacado',
    nome: 'Atacadão / Assaí Express',
    descricao: 'Roteiro de Atacado: Bebidas e Limpeza no início, perecíveis no fundo',
    ordemGrupos: [
      'limpeza', 'higiene', 'bazar', 'bebidas', 'mercearia',
      'massas_molhos', 'padaria', 'acougue', 'frios', 'hortifruti', 'congelados', 'pet'
    ]
  }
];

const SEED_PRODUTOS = [
  // --- Limpeza Doméstica ---
  { id: 'p_det_ype', nome: 'Detergente Ypê Líquido', marcas: ['Ypê'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_det_odd', nome: 'Detergente ODD Líquido', marcas: ['ODD'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_det_limpol', nome: 'Detergente Limpol Neutro', marcas: ['Limpol', 'Bombril'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_det_minerva', nome: 'Detergente Minerva', marcas: ['Minerva'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_sab_omo', nome: 'Sabão em Pó Omo Lavagem Perfeita', marcas: ['Omo'], grupoId: 'limpeza', apresId: 'cx' },
  { id: 'p_sab_tixan', nome: 'Sabão em Pó Tixan Ypê', marcas: ['Tixan', 'Ypê'], grupoId: 'limpeza', apresId: 'cx' },
  { id: 'p_sab_brilhante', nome: 'Sabão Líquido Brilhante', marcas: ['Brilhante'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_amac_downy', nome: 'Amaciante Concentrado Downy', marcas: ['Downy'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_amac_comfort', nome: 'Amaciante Comfort', marcas: ['Comfort'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_amac_ype', nome: 'Amaciante Ypê Aconchego', marcas: ['Ypê'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_desinf_pinho', nome: 'Desinfetante Pinho Sol', marcas: ['Pinho Sol'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_desinf_lysoform', nome: 'Desinfetante Lysoform', marcas: ['Lysoform'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_agua_sanitaria', nome: 'Água Sanitária Q-Boa / Dragão', marcas: ['Q-Boa', 'Dragão'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_esponja_aco', nome: 'Esponja de Aço Bombril / Assolan', marcas: ['Bombril', 'Assolan'], grupoId: 'limpeza', apresId: 'pct' },
  { id: 'p_esponja_dupla', nome: 'Esponja Multiuso Dupla Face Scotch-Brite', marcas: ['Scotch-Brite', '3M'], grupoId: 'limpeza', apresId: 'pct' },
  { id: 'p_saco_lixo_30', nome: 'Saco de Lixo 30 Litros', marcas: ['Embalixo', 'Dover'], grupoId: 'limpeza', apresId: 'pct' },
  { id: 'p_saco_lixo_50', nome: 'Saco de Lixo 50 Litros Reforçado', marcas: ['Embalixo'], grupoId: 'limpeza', apresId: 'pct' },
  { id: 'p_lustra_moveis', nome: 'Lustra Móveis Poliflor', marcas: ['Poliflor'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_limpa_vidros', nome: 'Limpa Vidros Veja', marcas: ['Veja'], grupoId: 'limpeza', apresId: 'frasco' },
  { id: 'p_multiuso_veja', nome: 'Limpador Multiuso Veja Gold', marcas: ['Veja'], grupoId: 'limpeza', apresId: 'frasco' },

  // --- Higiene Pessoal ---
  { id: 'p_creme_colgate', nome: 'Creme Dental Colgate Total 12', marcas: ['Colgate'], grupoId: 'higiene', apresId: 'cx' },
  { id: 'p_creme_oralb', nome: 'Creme Dental Oral-B Pro-Saúde', marcas: ['Oral-B'], grupoId: 'higiene', apresId: 'cx' },
  { id: 'p_creme_sensodyne', nome: 'Creme Dental Sensodyne Alívio Rápido', marcas: ['Sensodyne'], grupoId: 'higiene', apresId: 'cx' },
  { id: 'p_escova_dental', nome: 'Escova de Dentes Macia', marcas: ['Colgate', 'Oral-B', 'Curaprox'], grupoId: 'higiene', apresId: 'un' },
  { id: 'p_fio_dental', nome: 'Fio Dental 50m', marcas: ['Johnson & Johnson', 'Colgate'], grupoId: 'higiene', apresId: 'un' },
  { id: 'p_sabonete_dove', nome: 'Sabonete em Barra Dove Original', marcas: ['Dove'], grupoId: 'higiene', apresId: 'un' },
  { id: 'p_sabonete_protex', nome: 'Sabonete Antibacteriano Protex', marcas: ['Protex'], grupoId: 'higiene', apresId: 'un' },
  { id: 'p_sabonete_liq', nome: 'Sabonete Líquido Para as Mãos', marcas: ['Palmolive', 'Nivea'], grupoId: 'higiene', apresId: 'frasco' },
  { id: 'p_shampoo_head', nome: 'Shampoo Anticaspa Head & Shoulders', marcas: ['Head & Shoulders'], grupoId: 'higiene', apresId: 'frasco' },
  { id: 'p_shampoo_pantene', nome: 'Shampoo Pantene Restauração', marcas: ['Pantene'], grupoId: 'higiene', apresId: 'frasco' },
  { id: 'p_cond_pantene', nome: 'Condicionador Pantene 3 Minutos', marcas: ['Pantene'], grupoId: 'higiene', apresId: 'frasco' },
  { id: 'p_desod_rexona', nome: 'Desodorante Aerosol Rexona Antibacterial', marcas: ['Rexona'], grupoId: 'higiene', apresId: 'frasco' },
  { id: 'p_desod_dove', nome: 'Desodorante Dove Original Roll-on', marcas: ['Dove'], grupoId: 'higiene', apresId: 'frasco' },
  { id: 'p_papel_neve', nome: 'Papel Higiênico Folha Dupla Neve', marcas: ['Neve'], grupoId: 'higiene', apresId: 'pct' },
  { id: 'p_papel_personal', nome: 'Papel Higiênico Personal Vip', marcas: ['Personal'], grupoId: 'higiene', apresId: 'pct' },
  { id: 'p_lenco_umedecido', nome: 'Lenços Umedecidos Baby', marcas: ['Pampers', 'Huggies'], grupoId: 'higiene', apresId: 'pct' },
  { id: 'p_algodao', nome: 'Algodão em Disco ou Bolas', marcas: ['Apolo', 'Cremer'], grupoId: 'higiene', apresId: 'pct' },
  { id: 'p_haste_flexivel', nome: 'Hastes Flexíveis Cotonetes', marcas: ['Cotonetes', 'Johnson'], grupoId: 'higiene', apresId: 'cx' },

  // --- Mercearia & Grãos ---
  { id: 'p_arroz_tio_joao', nome: 'Arroz Branco Tio João Tipo 1 5kg', marcas: ['Tio João'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_arroz_camil', nome: 'Arroz Camil Agulhinha Tipo 1 5kg', marcas: ['Camil'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_arroz_parboil', nome: 'Arroz Parboilizado Tio João 1kg', marcas: ['Tio João'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_feijao_camil', nome: 'Feijão Carioca Camil 1kg', marcas: ['Camil'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_feijao_kicaldo', nome: 'Feijão Carioca Kicaldo 1kg', marcas: ['Kicaldo'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_feijao_preto', nome: 'Feijão Preto Camil para Feijoada', marcas: ['Camil', 'Kicaldo'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_acucar_uniao', nome: 'Açúcar Refinado União 1kg', marcas: ['União'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_acucar_caravelas', nome: 'Açúcar Cristal Caravelas 1kg', marcas: ['Caravelas'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_cafe_pilao', nome: 'Café Torrado e Moído Pilão Tradicional 500g', marcas: ['Pilão'], grupoId: 'padaria', apresId: 'pct' },
  { id: 'p_cafe_melitta', nome: 'Café Melitta Tradicional Vácuo 500g', marcas: ['Melitta'], grupoId: 'padaria', apresId: 'pct' },
  { id: 'p_cafe_3coracoes', nome: 'Café 3 Corações Extra Forte 500g', marcas: ['3 Corações'], grupoId: 'padaria', apresId: 'pct' },
  { id: 'p_oleo_soya', nome: 'Óleo de Soja Soya 900ml', marcas: ['Soya'], grupoId: 'mercearia', apresId: 'frasco' },
  { id: 'p_oleo_liza', nome: 'Óleo de Soja Liza 900ml', marcas: ['Liza'], grupoId: 'mercearia', apresId: 'frasco' },
  { id: 'p_azeite_gallo', nome: 'Azeite de Oliva Extra Virgem Gallo 500ml', marcas: ['Gallo'], grupoId: 'mercearia', apresId: 'gfa' },
  { id: 'p_azeite_andorinha', nome: 'Azeite Extra Virgem Andorinha 500ml', marcas: ['Andorinha'], grupoId: 'mercearia', apresId: 'gfa' },
  { id: 'p_sal_refinado', nome: 'Sal Refinado Cisne 1kg', marcas: ['Cisne', 'Lebre'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_farinha_trigo', nome: 'Farinha de Trigo Dona Benta 1kg', marcas: ['Dona Benta', 'Renata'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_farinha_mandioca', nome: 'Farinha de Mandioca Torrada Yoki', marcas: ['Yoki'], grupoId: 'mercearia', apresId: 'pct' },
  { id: 'p_milho_lata', nome: 'Milho Verde em Conserva Quero', marcas: ['Quero', 'Fugini'], grupoId: 'mercearia', apresId: 'lata' },
  { id: 'p_ervilha_lata', nome: 'Ervilha em Conserva Quero', marcas: ['Quero', 'Bonduelle'], grupoId: 'mercearia', apresId: 'lata' },
  { id: 'p_atum_solido', nome: 'Atum Sólido ao Natural Gomes da Costa', marcas: ['Gomes da Costa', 'Coqueiro'], grupoId: 'mercearia', apresId: 'lata' },
  { id: 'p_sardinha_lata', nome: 'Sardinha em Molho de Tomate Coqueiro', marcas: ['Coqueiro', 'Gomes da Costa'], grupoId: 'mercearia', apresId: 'lata' },

  // --- Massas & Molhos ---
  { id: 'p_massa_espaguete', nome: 'Macarrão Espaguete nº 8 Barilla 500g', marcas: ['Barilla', 'Adria'], grupoId: 'massas_molhos', apresId: 'pct' },
  { id: 'p_massa_penne', nome: 'Macarrão Penne Rigate Barilla', marcas: ['Barilla', 'Renata'], grupoId: 'massas_molhos', apresId: 'pct' },
  { id: 'p_massa_parafuso', nome: 'Macarrão Parafuso Dona Benta', marcas: ['Dona Benta', 'Adria'], grupoId: 'massas_molhos', apresId: 'pct' },
  { id: 'p_molho_elefante', nome: 'Extrato de Tomate Elefante', marcas: ['Elefante', 'Cica'], grupoId: 'massas_molhos', apresId: 'lata' },
  { id: 'p_molho_pomarola', nome: 'Molho de Tomate Pomarola Tradicional', marcas: ['Pomarola', 'Quero'], grupoId: 'massas_molhos', apresId: 'pct' },
  { id: 'p_molho_heinz', nome: 'Ketchup Tradicional Heinz 397g', marcas: ['Heinz'], grupoId: 'massas_molhos', apresId: 'frasco' },
  { id: 'p_maionese_hellmanns', nome: 'Maionese Hellmann\'s Verdadeira', marcas: ['Hellmann\'s'], grupoId: 'massas_molhos', apresId: 'frasco' },
  { id: 'p_mostarda_heinz', nome: 'Mostarda Amarela Heinz', marcas: ['Heinz'], grupoId: 'massas_molhos', apresId: 'frasco' },

  // --- Bebidas ---
  { id: 'p_coca_2l', nome: 'Refrigerante Coca-Cola 2 Litros', marcas: ['Coca-Cola'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_coca_zero_2l', nome: 'Refrigerante Coca-Cola Sem Açúcar 2L', marcas: ['Coca-Cola'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_coca_lata', nome: 'Refrigerante Coca-Cola Lata 350ml', marcas: ['Coca-Cola'], grupoId: 'bebidas', apresId: 'lata' },
  { id: 'p_guarana_2l', nome: 'Refrigerante Guaraná Antarctica 2L', marcas: ['Antarctica', 'Ambev'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_agua_tonica', nome: 'Água Tônica Antarctica Lata 350ml', marcas: ['Antarctica', 'Schweppes'], grupoId: 'bebidas', apresId: 'lata' },
  { id: 'p_suco_uva_integral', nome: 'Suco de Uva Integral Campo Largo 1,5L', marcas: ['Campo Largo', 'Aurora'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_suco_laranja_delvalle', nome: 'Suco de Laranja Del Valle 1L', marcas: ['Del Valle'], grupoId: 'bebidas', apresId: 'cx' },
  { id: 'p_agua_mineral_500', nome: 'Água Mineral sem Gás 500ml Crystal/Minalba', marcas: ['Crystal', 'Minalba', 'Bonafont'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_agua_mineral_gas', nome: 'Água Mineral com Gás 500ml', marcas: ['Crystal', 'Minalba', 'Prata'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_cerveja_heineken', nome: 'Cerveja Heineken Puro Malte Long Neck 330ml', marcas: ['Heineken'], grupoId: 'bebidas', apresId: 'gfa' },
  { id: 'p_cerveja_heineken_lata', nome: 'Cerveja Heineken Lata 350ml', marcas: ['Heineken'], grupoId: 'bebidas', apresId: 'lata' },
  { id: 'p_cerveja_amstel', nome: 'Cerveja Amstel Puro Malte Lata', marcas: ['Amstel'], grupoId: 'bebidas', apresId: 'lata' },
  { id: 'p_cerveja_brahma', nome: 'Cerveja Brahma Duplo Malte 350ml', marcas: ['Brahma', 'Ambev'], grupoId: 'bebidas', apresId: 'lata' },
  { id: 'p_vinho_tinto', nome: 'Vinho Tinto Seco Cabernet Sauvignon', marcas: ['Concha y Toro', 'Casillero del Diablo', 'Salton'], grupoId: 'bebidas', apresId: 'gfa' },

  // --- Laticínios & Frios ---
  { id: 'p_leite_integral', nome: 'Leite UHT Integral Piracanjuba 1L', marcas: ['Piracanjuba', 'Itambé'], grupoId: 'frios', apresId: 'cx' },
  { id: 'p_leite_desnatado', nome: 'Leite UHT Desnatado Ninho / Parmalat', marcas: ['Ninho', 'Parmalat', 'Molico'], grupoId: 'frios', apresId: 'cx' },
  { id: 'p_manteiga_aviacao', nome: 'Manteiga com Sal Aviação 200g', marcas: ['Aviação'], grupoId: 'frios', apresId: 'pct' },
  { id: 'p_requeijao_vigor', nome: 'Requeijão Cremoso Tradicional Vigor 200g', marcas: ['Vigor', 'Danone', 'Itambé'], grupoId: 'frios', apresId: 'frasco' },
  { id: 'p_queijo_mussarela', nome: 'Queijo Mussarela Fatiado', marcas: ['Tirolez', 'President', 'Scala'], grupoId: 'frios', apresId: 'bdj' },
  { id: 'p_queijo_prato', nome: 'Queijo Prato Fatiado', marcas: ['Tirolez', 'President'], grupoId: 'frios', apresId: 'bdj' },
  { id: 'p_presunto_cozido', nome: 'Presunto Cozido Sadia Fatiado', marcas: ['Sadia', 'Seara'], grupoId: 'frios', apresId: 'bdj' },
  { id: 'p_peito_peru', nome: 'Peito de Peru Defumado Sadia', marcas: ['Sadia', 'Seara'], grupoId: 'frios', apresId: 'bdj' },
  { id: 'p_iogurte_grego', nome: 'Iogurte Grego Tradicional Vigor', marcas: ['Vigor', 'Nestlé', 'Danone'], grupoId: 'frios', apresId: 'un' },
  { id: 'p_creme_leite', nome: 'Creme de Leite Nestlé 200g', marcas: ['Nestlé', 'Piracanjuba'], grupoId: 'frios', apresId: 'cx' },
  { id: 'p_leite_condensado', nome: 'Leite Condensado Moça Nestlé 395g', marcas: ['Moça', 'Nestlé'], grupoId: 'frios', apresId: 'lata' },

  // --- Hortifrúti ---
  { id: 'p_banana_prata', nome: 'Banana Prata Fresca', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_maca_gala', nome: 'Maçã Gala Nacional', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_laranja_pera', nome: 'Laranja Pêra para Suco', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_limao_taiti', nome: 'Limão Taiti Fresco', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_tomate_longavida', nome: 'Tomate Longa Vida / Saladete', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_batata_inglesa', nome: 'Batata Inglesa Lavada', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_cebola_nacional', nome: 'Cebola Amarela Nacional', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_alho_cartela', nome: 'Alho Roxo Cartela / Granel', marcas: [], grupoId: 'hortifruti', apresId: 'un' },
  { id: 'p_cenoura', nome: 'Cenoura Fresca', marcas: [], grupoId: 'hortifruti', apresId: 'kg' },
  { id: 'p_alface_americana', nome: 'Alface Americana Hidropônica', marcas: [], grupoId: 'hortifruti', apresId: 'un' },
  { id: 'p_ovos_brancos_30', nome: 'Cartela de Ovos Brancos Grandes c/ 30', marcas: ['Mantiqueira'], grupoId: 'hortifruti', apresId: 'cx' },

  // --- Carnes & Aves ---
  { id: 'p_coxao_mole', nome: 'Carne Bovina Coxão Mole Bife', marcas: ['Friboi'], grupoId: 'acougue', apresId: 'kg' },
  { id: 'p_patinho_moido', nome: 'Carne Bovina Patinho Moído', marcas: ['Friboi'], grupoId: 'acougue', apresId: 'kg' },
  { id: 'p_picanha', nome: 'Picanha Bovina Peça Resfriada', marcas: ['Friboi', 'Maturatta', 'Swift'], grupoId: 'acougue', apresId: 'kg' },
  { id: 'p_fillet_frango', nome: 'Filé de Peito de Frango Sadia 1kg', marcas: ['Sadia', 'Seara'], grupoId: 'acougue', apresId: 'pct' },
  { id: 'p_coxa_sobrecoxa', nome: 'Coxa e Sobrecoxa de Frango Resfriada', marcas: ['Sadia', 'Seara'], grupoId: 'acougue', apresId: 'kg' },
  { id: 'p_linguica_toscana', nome: 'Linguiça Toscana Perdigão para Churrasco', marcas: ['Perdigão', 'Sadia'], grupoId: 'acougue', apresId: 'kg' },
  { id: 'p_bacon_manta', nome: 'Bacon em Pedaço / Fatiado Sadia', marcas: ['Sadia', 'Seara'], grupoId: 'acougue', apresId: 'kg' },

  // --- Padaria & Matinais ---
  { id: 'p_pao_frances', nome: 'Pão Francês Quentinho', marcas: [], grupoId: 'padaria', apresId: 'kg' },
  { id: 'p_pao_forma', nome: 'Pão de Forma Tradicional Wickbold', marcas: ['Wickbold', 'Pullman', 'Bauducco'], grupoId: 'padaria', apresId: 'pct' },
  { id: 'p_torrada_bauducco', nome: 'Torrada Tradicional Bauducco 140g', marcas: ['Bauducco'], grupoId: 'padaria', apresId: 'pct' },
  { id: 'p_biscoito_cream_cracker', nome: 'Biscoito Cream Cracker Vitarella / Marilan', marcas: ['Vitarella', 'Marilan'], grupoId: 'padaria', apresId: 'pct' },
  { id: 'p_achocolatado_toddy', nome: 'Achocolatado em Pó Toddy 400g', marcas: ['Toddy'], grupoId: 'padaria', apresId: 'frasco' },
  { id: 'p_achocolatado_nescau', nome: 'Achocolatado Nescau 2.0 400g', marcas: ['Nescau', 'Nestlé'], grupoId: 'padaria', apresId: 'frasco' },

  // --- Congelados ---
  { id: 'p_pizza_sadia', nome: 'Pizza Congelada Calabresa Sadia', marcas: ['Sadia', 'Seara'], grupoId: 'congelados', apresId: 'cx' },
  { id: 'p_lasanha_sadia', nome: 'Lasanha à Bolonhesa Sadia 600g', marcas: ['Sadia'], grupoId: 'congelados', apresId: 'cx' },
  { id: 'p_nuggets_seara', nome: 'Nuggets de Frango Crocante Seara 300g', marcas: ['Seara', 'Sadia'], grupoId: 'congelados', apresId: 'cx' },
  { id: 'p_pao_queijo_congelado', nome: 'Pão de Queijo Tradicional Forno de Minas 400g', marcas: ['Forno de Minas'], grupoId: 'congelados', apresId: 'pct' },
  { id: 'p_sorvete_kibon', nome: 'Sorvete Kibon Cremosíssimo Napolitano 1,5L', marcas: ['Kibon'], grupoId: 'congelados', apresId: 'frasco' },

  // --- Bazar & Pet ---
  { id: 'p_papel_toalha', nome: 'Papel Toalha Folha Dupla Snob', marcas: ['Snob', 'Scala'], grupoId: 'bazar', apresId: 'pct' },
  { id: 'p_papel_aluminio', nome: 'Papel Alumínio Rolo 7,5m Wyda', marcas: ['Wyda'], grupoId: 'bazar', apresId: 'rolo' },
  { id: 'p_filme_pvc', nome: 'Filme Plástico de PVC 15m Wyda', marcas: ['Wyda'], grupoId: 'bazar', apresId: 'rolo' },
  { id: 'p_pilha_aa', nome: 'Pilhas Alcalinas AA Pequena Duracell c/ 4', marcas: ['Duracell', 'Panasonic'], grupoId: 'bazar', apresId: 'pct' },
  { id: 'p_racao_cao', nome: 'Ração para Cães Adultos Pedigree / Premier', marcas: ['Pedigree', 'Premier'], grupoId: 'pet', apresId: 'pct' },
  { id: 'p_racao_gato', nome: 'Ração para Gatos Castrados Whiskas / Golden', marcas: ['Whiskas', 'Golden'], grupoId: 'pet', apresId: 'pct' },
  { id: 'p_areia_gato', nome: 'Areia Sanitária Higiênica Pipicat 4kg', marcas: ['Pipicat'], grupoId: 'pet', apresId: 'pct' }
];


// GimmyMarket - Motor de Busca Fuzzy e Normalização em Português

const GimmySearch = {
  // Normaliza string para busca: minúsculas, sem acentos, sem pontuações supérfluas
  normalize(str) {
    if (!str) return '';
    return str
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove diacríticos
      .trim();
  },

  // Distância de Levenshtein simples para palavras curtas
  levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substituição
            matrix[i][j - 1] + 1,     // inserção
            matrix[i - 1][j] + 1      // deleção
          );
        }
      }
    }
    return matrix[b.length][a.length];
  },

  // Calcula pontuação da correspondência
  scoreMatch(queryNorm, targetNorm) {
    if (!queryNorm || !targetNorm) return 0;
    if (queryNorm === targetNorm) return 100;
    
    // 1. Se o target contém a palavra inteira exata
    const words = targetNorm.split(/[\s,/-]+/).filter(Boolean);
    for (const w of words) {
      if (w === queryNorm) return 98;
    }

    // 2. Se o termo procurado é prefixo de uma das palavras do target
    for (const w of words) {
      if (w.startsWith(queryNorm)) {
        return 90 - Math.min((w.length - queryNorm.length) * 2, 15);
      }
    }

    // 3. Se o termo procurado está contido como substring contínua
    const indexOf = targetNorm.indexOf(queryNorm);
    if (indexOf !== -1) {
      return 75 - Math.min(indexOf * 2, 20);
    }

    // 4. Distância de edição / Tolerância a erros para palavras com 4+ letras
    if (queryNorm.length >= 4) {
      for (const w of words) {
        if (w.length >= 4) {
          const dist = this.levenshtein(queryNorm, w.slice(0, queryNorm.length + 1));
          if (dist === 1) return 80;
          if (dist === 2 && queryNorm.length >= 6) return 65;
        }
      }
    }

    // 5. Match de múltiplos tokens (ex: "det ype")
    const queryTokens = queryNorm.split(/\s+/).filter(Boolean);
    if (queryTokens.length > 1) {
      let matched = 0;
      for (const token of queryTokens) {
        if (targetNorm.includes(token)) {
          matched++;
        }
      }
      if (matched === queryTokens.length) {
        return 88;
      }
      if (matched > 0) {
        return (matched / queryTokens.length) * 60;
      }
    }

    return 0;
  },

  // Busca bidirecional de produtos (por nome, marcas ou grupo)
  searchProducts(query, produtos, gruposMap = {}) {
    const qNorm = this.normalize(query);
    if (!qNorm) return [];

    const results = [];

    for (const prod of produtos) {
      const nomeNorm = this.normalize(prod.nome);
      const marcasNorm = (prod.marcas || []).map(m => this.normalize(m)).join(' ');
      const grupoObj = gruposMap[prod.grupoId];
      const grupoNorm = grupoObj ? this.normalize(grupoObj.nome) : '';

      // Pontuações
      const scoreNome = this.scoreMatch(qNorm, nomeNorm);
      const scoreMarcas = this.scoreMatch(qNorm, marcasNorm);
      const scoreGrupo = this.scoreMatch(qNorm, grupoNorm);

      // Marca tem multiplicador favorável para busca rápida por fabricante
      const maxScore = Math.max(scoreNome * 1.1, scoreMarcas * 1.35, scoreGrupo * 0.9);

      if (maxScore >= 55) {
        results.push({
          produto: prod,
          score: maxScore
        });
      }
    }

    // Ordena do maior score para o menor
    results.sort((a, b) => b.score - a.score);
    return results.map(r => r.produto);
  }
};

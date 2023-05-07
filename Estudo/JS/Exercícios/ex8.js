const pontuacoes = "10 20 20 8 25 3 0 30 1";

function analisaPontuacoes(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(" ").map(Number);
  
    let recorde = pontuacoesArray[0];
    let piorPontuacao = pontuacoesArray[0];
    let recordeQuebrado = 0;
    let piorJogo = 0;
  
    for (let i = 1; i < pontuacoesArray.length; i++) {
      if (pontuacoesArray[i] > recorde) {
        recorde = pontuacoesArray[i];
        recordeQuebrado++;
      } else if (pontuacoesArray[i] < piorPontuacao) {
        piorPontuacao = pontuacoesArray[i];
        piorJogo = i + 1;
      }
    }
  
    return [recordeQuebrado, piorJogo];
  }

  console.log(analisaPontuacoes(pontuacoes))
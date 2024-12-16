function qtdeCartasJogo() {
  let qtde = Number(prompt("Com quantas cartas você quer jogar?"));
  let numeroInvalido = (qtde < 4 || qtde > 14) || (qtde % 2 === 1);
  while (numeroInvalido) {
    qtde = Number(prompt("Com quantas cartas você quer jogar?"));
    numeroInvalido = (qtde < 4 || qtde > 14) || (qtde % 2 === 1);
  }
  return qtde;
}

function embaralhaCartas () {
  const opcoes = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
  opcoes.sort(comparador);
  return opcoes;
}
function comparador() { 
	return Math.random() - 0.5; 
}

function iniciarJogo(){
  const numeroCartas = qtdeCartasJogo();
  const secaoJogo = document.querySelector(".jogo");
  const cartasEmbaralhadas = embaralhaCartas();
  let cartasSelecionadas = [];
  for (let i = 0; i < numeroCartas/2; i++) {
    cartasSelecionadas.push(cartasEmbaralhadas[i], cartasEmbaralhadas[i]);
  }
  cartasSelecionadas.sort(comparador);
  for (let i = 0; i < numeroCartas; i++){
    secaoJogo.innerHTML += `    <div class="carta" onclick = "virarCarta(this)">
      <div class="frente card">
        <img src="assets/${cartasSelecionadas[i]}">
      </div>
      <div class="verso card">
        <img src="assets/back.png">
      </div>
    </div>`
  }
}
iniciarJogo();
function virarCarta(elemento){
  const frente = elemento.querySelector(".frente");
  const verso = elemento.querySelector(".verso")
  frente.classList.add("viraFrente");
  verso.classList.add("viraVerso");
}
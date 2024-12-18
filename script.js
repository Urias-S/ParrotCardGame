let jogadas = 0;
let cartasViradas = 0;
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
  if (cartasViradas >2 ) {
    return;
  }
  const frente = elemento.querySelector(".frente");
  const verso = elemento.querySelector(".verso") 
  if (!elemento.classList.contains("ativa") && !elemento.classList.contains("temp") && cartasViradas < 2) {
    elemento.classList.add("temp");
    frente.classList.add("viraFrente");
    verso.classList.add("viraVerso");
    cartasViradas++;
    jogadas++;
  }
  console.log(jogadas);
  setTimeout(conferePar, 500); 
}
function conferePar(){
  let temporarias = document.querySelectorAll(".temp");
  if (temporarias.length > 1) {
    if (temporarias[0].innerHTML == temporarias[1].innerHTML && (!temporarias[0].classList.contains("ativa") && !temporarias[1].classList.contains("ativa"))){
      temporarias[0].classList.add("ativa");
      temporarias[1].classList.add("ativa");
      temporarias[0].classList.remove("temp");
      temporarias[1].classList.remove("temp");
      temporarias = [];
      cartasViradas = 0;
      
    } else if (!temporarias[0].classList.contains("ativa") && !temporarias[1].classList.contains("ativa")) setTimeout(function desviraCarta() {
      {  
        temporarias[0].classList.remove("temp");
        temporarias[1].classList.remove("temp");
        temporarias[0].querySelector(".frente").classList.remove("viraFrente");
        temporarias[0].querySelector(".verso").classList.remove("viraVerso");
        temporarias[1].querySelector(".frente").classList.remove("viraFrente");
        temporarias[1].querySelector(".verso").classList.remove("viraVerso");
        temporarias = []; 
        cartasViradas = 0;
      }
    },1000)
  }
  fimJogo();
}
function fimJogo(){
  const cartasAtivas = document.querySelectorAll(".carta.ativa");
  const totalDeCartas = document.querySelectorAll(".carta").length;
  if (cartasAtivas.length === totalDeCartas) {
    alert(`Você ganhou em ${jogadas} jogadas!`);
  }

}

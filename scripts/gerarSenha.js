function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function armazenarSorteados() {
  const listaNumeros = [];
  const qtdSorteados = document.getElementById('qtdSorteados').value;
  for (i = 1; i <= qtdSorteados; i++) {
    listaNumeros.push(i);
  }
  document.getElementById('balao').innerHTML = `Temos ${qtdSorteados} participantes!!!`;
  localStorage.setItem('participantes', shuffle(listaNumeros));
}

function sortear(quantidade) {
  const listaParticipantes = localStorage.getItem('participantes').split(',');
  const listaSorteados = [];

  for (i = quantidade; i--;) {
    listaSorteados.push(listaParticipantes.pop());
  }
  localStorage.setItem('sorteados', listaSorteados);
  localStorage.setItem('participantes', shuffle(listaParticipantes));
  document.getElementById('balao').innerHTML = `Parabens aos ${quantidade} sorteados!!!`;

  setTimeout(() => {
    document.getElementById('balao').innerHTML = `Aperta ai vai!`;
  }, 5000)

  for (i = 10; i--;) {
    var valor = 'valor' + (i + 1)
    document.getElementById(valor).innerHTML = listaSorteados.shift() || '00';
    console.log(localStorage.getItem('sorteados'));
  }
  console.log(listaSorteados, listaParticipantes);
}
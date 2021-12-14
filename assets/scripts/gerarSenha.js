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
  localStorage.setItem('participantes', shuffle(listaNumeros));
  document.getElementById('btnSortear').disabled = false
  console.log('participantes criados 🚀')
}

const validacao = (quantidadeSorteados, quantidadeParticipantes) => {

  if (quantidadeParticipantes < quantidadeSorteados) {
    alert('Quantidade de sorteados acima da quantidade de participantes');
  }
  if (quantidadeParticipantes == 0) {
    alert('Sem participantes');
    document.getElementById('btnSortear').disabled = true;
  }
  return quantidadeParticipantes > quantidadeSorteados && quantidadeParticipantes > 0;
}

function sortear() {
  const quantidade = Number(document.getElementById('qtdSortear').value);
  const listaParticipantes = localStorage.getItem('participantes')?.length ? localStorage.getItem('participantes').split(',') : [];
  const listaSorteados = [];

  if (validacao(quantidade, listaParticipantes.length)) {
    for (i = quantidade; i--;) {
      listaSorteados.push(listaParticipantes.pop());
    }
    const listaParticipantesAtualizado = shuffle(listaParticipantes);

    localStorage.setItem('sorteados', listaSorteados);
    localStorage.setItem('participantes', listaParticipantesAtualizado);
    const listaHistoricos = localStorage.getItem('historico') ? JSON.parse(localStorage.getItem('historico')) : [];

    const historico = {
      listaParticipantes: listaParticipantesAtualizado,
      listaSorteados,
      quantidadeSorteada: quantidade,
      createdAt: Date.now(),
    }

    listaHistoricos.push(historico)

    localStorage.setItem('historico', JSON.stringify(listaHistoricos))
  }

  this.updateInfoTransiction();
}

function updateInfoTransiction() {
  const historico = localStorage.getItem('historico') ? JSON.parse(localStorage.getItem('historico')) : [];
  let apresentação = ''
  historico.forEach(item => {
    apresentação += `<p>Sorteados:\n${item.listaSorteados}</p><p styles="margin-bottom: 5px">Quantidade sorteada: ${item.quantidadeSorteada}</p>`
  });



  document.getElementById('transacoes').innerHTML = apresentação
}
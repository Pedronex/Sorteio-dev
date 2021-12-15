window.addEventListener('storage', function () {
  const historico = localStorage.getItem('historico') ? JSON.parse(localStorage.getItem('historico')) : [];
  const apresentar = localStorage.getItem('apresentar');
  let estrutura = ''
  console.log(apresentar)
  console.log(historico)
  if (historico.length != 0) {
    const sorteados = historico[historico.length - 1].listaSorteados;
    this.document.getElementById('sorteio').innerHTML = estrutura
    estrutura += "<div class='container'>"
    estrutura += '<article class="componente">'
    sorteados.forEach((item, index) => {
      estrutura += '<article class="conteudo">'
      estrutura += `<span class="numero">${item.brinde}</span>`
      estrutura += `<span class="label" id="mostrarL">N°</span>`
      estrutura += `<span class="numero1" id="mostrarN">${item.numero < 10 ? '0' + item.numero : item.numero}</span>`
      estrutura += '</article>'
    });
    estrutura += '</article>'
    estrutura += '</div>'
    this.document.getElementById('sorteio').innerHTML = estrutura
  }
})

window.addEventListener('storage', function () {
  const apresentar = localStorage.getItem('apresentar');
  const historico = localStorage.getItem('historico') ? JSON.parse(localStorage.getItem('historico')) : [];

  const participantes = historico[historico.length - 1].listaParticipantes;
  console.log(participantes)
  if (apresentar == 'true') {
    for (i = this.document.getElementsByClassName('numero1').length; i--;) {
      this.document.getElementsByClassName('numero1').item(i).className = 'numero-dado';
    }
  } else {
    for (i = this.document.getElementsByClassName('numero1').length; i--;) {
      this.document.getElementsByClassName('numero1').item(i).innerHTML = "<img src='../../assets/img/numeros.gif' alt='numeros aleatórios' width='200'/>"
    }
  }
})
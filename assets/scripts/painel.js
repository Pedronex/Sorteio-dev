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
      estrutura += `<span class="label" style="${apresentar == 'true' ? 'opacity: 1;' : 'opacity: 0;'}" >N°</span>`
      estrutura += `<span class="numero" style="${apresentar == 'true' ? 'opacity: 1;' : 'opacity: 0;'}">${item.numero < 10 ? '0' + item.numero : item.numero}</span>`
      estrutura += '</article>'
    });
    estrutura += '</article>'
    estrutura += '</div>'
    this.document.getElementById('sorteio').innerHTML = estrutura
  }
})
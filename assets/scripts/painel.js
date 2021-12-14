window.addEventListener('storage', function () {
  this.document.getElementById('sorteio').innerHTML = ''
  const historico = localStorage.getItem('historico') ? JSON.parse(localStorage.getItem('historico')) : [];
  const apresentar = localStorage.getItem('apresentar');
  let estrutura = ''
  console.log(apresentar)
  const sorteados = historico[historico.length - 1].listaSorteados;
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
})
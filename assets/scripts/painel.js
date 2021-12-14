window.addEventListener('storage', function () {
  this.document.getElementById('sorteio').innerHTML = ''
  const historico = localStorage.getItem('historico') ? JSON.parse(localStorage.getItem('historico')) : [];
  let estrutura = ''
  const sorteados = historico[historico.length - 1].listaSorteados;
  estrutura += "<div class='container'>"
  estrutura += '<article class="componente">'
  sorteados.forEach((item, index) => {
    estrutura += '<article class="conteudo">'
    estrutura += `<span class="label">Brinde</span>`
    estrutura += `<span class="numero">${(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>`
    estrutura += `<span class="label">N°</span>`
    estrutura += `<span class="numero">${item < 10 ? '0' + item : item}</span>`
    estrutura += '</article>'
  });
  estrutura += '</article>'
  estrutura += '</div>'
  this.document.getElementById('sorteio').innerHTML = estrutura
})
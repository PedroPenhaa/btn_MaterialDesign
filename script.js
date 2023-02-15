document.querySelector('button')
  .addEventListener('', (event) => {
    // Config HTML
    const $botao = event.target;
    const $onda = document.createElement('span');
    $onda.classList.add('onda');
    $botao.insertAdjacentElement('beforeend', $onda);

    // Position
    const posicoesDoBotao = $botao.getBoundingClientRect();

    const topo = Math.abs(posicoesDoBotao.top - event.clientY);
    const esquerda = Math.abs(posicoesDoBotao.left - event.clientX);
    const scale  = Math.min(posicoesDoBotao.height, posicoesDoBotao.width); // posicoesDoBotao.height;

    $onda.style.setProperty('--topo', `${topo}px`); 
    $onda.style.setProperty('--esquerda', `${esquerda}px`); 
    $onda.style.setProperty('--scale', scale); 

    $onda.style.setProperty('--opacity', 1); 

    // Clear effect
    function limpaEfeito() {
      $onda.removeEventListener('transitionend', limpaEfeito)
      $onda.style.setProperty('--opacity', 0); 

      $onda.addEventListener('transitionend', () => {
        $onda.remove();
      })
    }
    $onda.addEventListener('transitionend', limpaEfeito)
});
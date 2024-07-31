function alterarStatus(numero) {
    let item = document.getElementById(`game-${numero}`);
    let botao = item.querySelector('a');
    let img = item.querySelector('div');
    
    if (botao.classList.contains('dashboard__item__button--return')) {
        confirm('Você tem certeza de que deseja devolver este jogo?');
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
    }
} 
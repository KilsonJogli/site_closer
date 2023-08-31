document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const headerSection = document.querySelector('.header');
    const alturaHeader = headerSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if(posicaoAtual <= alturaHeader) {
            exibeElementosDoHeader()
        } else {
            ocultaElementosDoHeader()
        }
    })
    

    //Seção logo
    window.addEventListener('load', function () {
        const logoCloser = document.querySelector('.logo__content');
            logoCloser.style.opacity = 1;
            logoCloser.style.transform = 'scale(1.05)';
    });

    //Seção de abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            console.log(botao)
            const alvoAba = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${alvoAba}]`)
            escondeTodasAbas();
            aba.classList.add('about__list__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('about__tabs__button--is-active')
        })
    }

    //Seção FAQ, accordion
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }


});

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('about__list__item--is-active')
    }
};

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('about__tabs__button--is-active')
    }
};

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
};

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
};
import 'reflect-metadata';
import $ from 'jquery'
import container from '../inversify/inversify.config';
import TYPES from '../inversify/types';
import { ROUTES, sleep } from '../util/util';

const _toasterService = container.get(TYPES.ToasterService);

/* credenciais para simular autenticacao no banco de dados */
const EMAIL = "admin@admin.com.br"
const SENHA = "123456"

const _foodImages = [
    'banana.png', 
    'broccoli.png', 
    'burguer.png',
    'cake.png',
    'chicken.png',
    'french-fries.png',
    'hotdog.png',
    'melon.png',
    'pizza.png',
    'ramen.png',
    'sandwich.png',
    'softdrink.png',
    'sushi.png'
];

const _foodContainer = $('#falling-food-container');

/* 
    Disabilita botao de login e habilita spinner
*/
function _enableLoginButtonLoading() {
    $("button#login").prop("disabled", true);
    $("button#login .spinner-border").removeClass("d-none");
}

function _disableLoginButtonLoading() {
    $("button#login .spinner-border").addClass("d-none");
}

/*
    Funcao para criar comidinhas caindo
    Obs: funcao simples, nao e performatica,
    nao aplica algoritimos para distribuicao balanceada,
    podendo ter espacos com muitos elementos, e outros sem nenhum.
*/
function _createFallingFood() {
    const food = $('<img class="falling-food">');
    const image = _foodImages[Math.floor(Math.random() * _foodImages.length)];
    food.attr('src', `/assets/images/parallax/${image}`);

    const size = Math.random() * 60 + 60;

    food.css({
        width: `${size}px`,
        height: 'auto',
        left: `${Math.random() * 100}vw`,
        top: '-100px',
        animationDuration: `${Math.random() * 5 + 5}s`,
        transform: `rotate(${Math.random() * 360}deg)`
    });

    _foodContainer.append(food);

    food.css({
        animation: `fall linear ${Math.random() * 20 + 10}s infinite`
    });

    food.animate({
        top: '110%'
    }, Math.random() * 5e3 + 10e3, 'linear', function() {
        $(this).remove();
    });
}


$(() => {
    $("button#login").on("click", async () => {
        let email = $("input#email").val();
        let senha = $("input#password").val();
        
        if(!email || email !== EMAIL) {
            _toasterService.alert("Email invalido.", 5);
            return;
        }
        
        if(!senha || senha !== SENHA){
            _toasterService.alert("Senha invalida.", 5);
            return;
        }
        
        _enableLoginButtonLoading();

        await sleep(3e3)

        _toasterService.success("Autenticado com Sucesso!", 5);
        
        _disableLoginButtonLoading();

        await sleep(1e3);

        window.location.href = ROUTES.DASHBOARD;
    });

    setInterval(_createFallingFood, 250);

    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% {
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                }
            }
        `)
        .appendTo('head');
});
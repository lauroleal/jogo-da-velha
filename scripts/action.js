// otimizando o document.getElementById
function getId(valor) {
    return document.getElementById(valor);
}

// capturando os nomes dos jogadores
function nomesJogadores() {

    let jogador_1 = getId('jogador_1').value.toUpperCase();
    let jogador_2 = getId('jogador_2').value.toUpperCase();

    // jogando na sission pra facilitar a manipulação depois
if(jogador_1 === ''){
    jogador_1 = 'Jogador 1';
    sessionStorage.setItem('jogador_1','jogador 1');
}else{
    sessionStorage.setItem('jogador_1',jogador_1);
}
if(jogador_2 === ''){
    jogador_2 = 'Jogador 2';
    sessionStorage.setItem('jogador_2','jogador 2');
}else{
    sessionStorage.setItem('jogador_2',jogador_2);
} 

    // removendo o quadro dos inputs que preenche os nomes dos jogadores
    let removerInput = getId('jogadores');
    removerInput.removeChild(removerInput.firstElementChild);
    
    // criando um novas tags pro jogo
    let criarTags = getId('jogadores');
    let label = document.createElement("label");
    label.innerHTML= 'A vez de: ';
    let span = document.createElement("span");
    span.setAttribute('id','jogador-selecionado');
    let span2 = document.createElement("span");
    span2.setAttribute('id','valorDaJogada');
    
    // colocando as tags na pagina
    label.appendChild(span);
    label.appendChild(span2);
    criarTags.appendChild(label);

    // botão pra recarregar a pagína e mudar os nomes👼
    let criarTag = getId('botoes');
    let btn = document.createElement("button");
    btn.innerHTML= 'Novo jogo?';
    btn.setAttribute('onclick','novosJogadores()');
    criarTag.appendChild(btn);
    let jogada = null;
    function comecarJogo() {
        // escolhendo um dos jogadores aleatoriamente para iniciar o jogo
        let sort = Math.floor(Math.random() * 2) + 1;
        if (sort === 1) {
            getId('jogador-selecionado').innerHTML = ` <b class="color-b">${jogador_1}</b> `;
            jogada = 'X';
            mudarJogada(jogada);
        } else {
            getId('jogador-selecionado').innerHTML = ` <b class="color-b">${jogador_2}</b> `;
           jogada = 'O';
            mudarJogada(jogada);
        }
    }

    // chamando a função comecarJogo
    comecarJogo();
   
}

function novosJogadores(){
    location.reload();
}

// função para mudar a jogada
function mudarJogada(jogada) {
    jogada = jogada;
    getId('valorDaJogada').innerHTML = jogada;
}


function clicouNoQuadrado(id) {
    // resgatando o nome dos jogadores da sessionStorage
    let j_2 = sessionStorage.getItem('jogador_2');
    let j_1 = sessionStorage.getItem('jogador_1');
    // selecionando o campo clicado pelo jogador
    let quadrado = getId(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }
    // pegando a vez de jogar (X ou O) da tela
    let jogada = getId('valorDaJogada').innerHTML;
    quadrado.innerHTML = jogada;
    quadrado.style.color = "#F22558";

    if (jogada === 'X') {
        getId('jogador-selecionado').innerHTML = ` <b class="color-b">${j_2}</b> `;
        jogada = 'O';
    } else {
        getId('jogador-selecionado').innerHTML = ` <b class="color-b">${j_1}</b> `;
        jogada = 'X';
    }
    checarVencedor();
    mudarJogada(jogada);
}

function vencedor(venceu){
    let removerInput = getId('jogadores');
     removerInput.removeChild(removerInput.lastChild);

    let criarTags = getId('jogadores');
    let label2 = document.createElement("label");
    label2.setAttribute('id','vencedor');
    if(venceu.innerHTML === 'X'){
        let j1 = sessionStorage.getItem('jogador_1');
        label2.innerHTML = `<b class="color-b">${j1}</b> é o Vencedor(a)`;
        criarTags.appendChild(label2);
    } else{
        let j2 = sessionStorage.getItem('jogador_2');
        label2.innerHTML = `<b class="color-b">${j2}</b> é o Vencedor(a)`;
        criarTags.appendChild(label2);
    }
    
    // depois arrumo uma solução mais legal 
    let but = document.querySelectorAll('button')[0];
    but.removeAttribute('onclick');
   but.setAttribute('onclick','novosJogadores()');
    
}



let cont = 0;
function checarVencedor(){
    cont++;
    console.log(cont);
    let quadrado1 = getId(1);
    let quadrado2 = getId(2);
    let quadrado3 = getId(3);
    let quadrado4 = getId(4);
    let quadrado5 = getId(5);
    let quadrado6 = getId(6);
    let quadrado7 = getId(7);
    let quadrado8 = getId(8);
    let quadrado9 = getId(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        vencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        vencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        vencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        vencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        vencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        vencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        vencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        vencedor(quadrado3);
    }

    // deu velha
    if (cont === 9){
        let removerInput = getId('jogadores');
        removerInput.removeChild(removerInput.lastChild);

        let criarTags = getId('jogadores');
        let label2 = document.createElement("label");
        label2.setAttribute('id','vencedor');
        label2.innerHTML = 'Deu Velha!';
        criarTags.appendChild(label2);
    }
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#f22558';
    quadrado1.style.color = '#fff';
    quadrado2.style.background = '#f22558';
    quadrado2.style.color = '#fff';
    quadrado3.style.background = '#f22558';
    quadrado3.style.color = '#fff';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar(){
    // let removerInput = getId('jogadores');
    // removerInput.removeChild(removerInput.firstElementChild);

    // // criando novamente as tags
    // let criarTags = getId('jogadores');
    // let div = document.createElement("div");
    // div.setAttribute('id','quemJoga');
    // let p = document.createElement("p");
    // p.innerHTML = 'Quem vai jogar?';

    // let input = document.createElement("input");
    // input.setAttribute('id','jogador_1');
    // input.setAttribute('placeholder','Jogador 1');

    // let input2 = document.createElement("input");
    // input2.setAttribute('id','jogador_2');
    // input2.setAttribute('placeholder','Jogador 2');

    // let divB = document.createElement("div");

    // let button = document.createElement("button");
    // button.classList.add("button__jogadores");
    // button.setAttribute('onclick','nomesJogadores()');
    // button.innerHTML = 'Iniciar o jogo';
   
    // // colocando as tags na pagina
    // div.appendChild(p);
    // div.appendChild(input);
    // div.appendChild(input2);
    // divB.appendChild(button);
    // criarTags.appendChild(div);
    // criarTags.appendChild(divB);

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgba(196, 194, 194, 0.89)';
        quadrado.style.color = 'rgba(196, 194, 194, 0.89)';
        quadrado.innerHTML = '-';
    }
    
}
// otimizando o document.getElementById
function getId(valor) {
    return document.getElementById(valor);
}

// capturando os nomes dos jogadores
function nomesJogadores() {

    let jogador_1 = getId('jogador_1').value;
    let jogador_2 = getId('jogador_2').value;
    // jogando na sission pra facilitar a manipulação depois
    sessionStorage.setItem('jogador_1',jogador_1);
    sessionStorage.setItem('jogador_2',jogador_2);

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
    btn.innerHTML= 'Novo jogador?';
    btn.setAttribute('onclick','novosJogadores()');
    criarTag.appendChild(btn);
        
    function comecarJogo() {
        // escolhendo um dos jogadores aleatoriamente para iniciar o jogo
        let sort = Math.floor(Math.random() * 2) + 1;
        if (sort === 1) {
            getId('jogador-selecionado').innerHTML = ` <b class="color-b">${jogador_1}</b> `;
            let jogada = 'X';
            mudarJogada(jogada);
        } else {
            getId('jogador-selecionado').innerHTML = ` <b class="color-b">${jogador_2}</b> `;
            let jogada = 'O';
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

    if (jogada === 'x') {
        getId('jogador-selecionado').innerHTML = ` <b class="color-b">${j_2}</b> `;
        jogada = 'O';
    } else {
        getId('jogador-selecionado').innerHTML = ` <b class="color-b">${j_1}</b> `;
        jogada = 'x';
    }
    checarVencedor();
    mudarJogada(jogada);
}

function vencedor(){
    let criarTags = getId('jogadores');
    let label2 = document.createElement("label");
    label2.setAttribute('id','vencedor');
    criarTags.appendChild(label2);
}


function checarVencedor() {
    let quadrado_1 = getId(1);
    let quadrado_2 = getId(2);
    let quadrado_3 = getId(3);
    let quadrado_4 = getId(4);
    let quadrado_5 = getId(5);
    let quadrado_6 = getId(6);
    let quadrado_7 = getId(7);
    let quadrado_8 = getId(8);
    let quadrado_9 = getId(8);
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
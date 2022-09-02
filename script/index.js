let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botao = document.querySelectorAll("botao-container button");
let mensagem = document.querySelector("mensagem");
let mensagemP = document.querySelector("mensagem p");
let secondPlay;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicinando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clicar na caixa 
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        // verificar se ja tem x ou o
        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar jogada
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }

        }
            
    });
}

// ver quem vai jogar
function checkEl(player1, player2) {

    if(player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }

    return el;
}
 let numerosSorteados = [];
 let numeroLimite = 10
 let numeroSecreto = GerarNumeroAleatorio();
 let tentativas  = 1


 // funcao de trocar o texto pegando a teag de parametro
function exibirTxtTela(tag, texto)
{
   let campo = document.querySelector(tag)
   campo.innerHTML = texto

   //usando API 
   responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2})
}

function exibirMensagemInicial()
{
    // chamando a função 
exibirTxtTela(`h1`, `JOGO DO NUMERO SECRETO`)
exibirTxtTela(`p`, `Escolha um numero de 1 a 10`)
}
exibirMensagemInicial();




// verifica o chute
function verificarChute()
{
    let chute  = document.querySelector(`input`).value
    console.log(chute == numeroSecreto);

    //validção de acerto
    if(chute == numeroSecreto)
        {
            exibirTxtTela(`h1`, `acertouu! o numero é ${chute}`)
            let tentativaoutentativas = tentativas > 1 ? `Tentativas` : `Tentativa`

            let mensagemTentativas = `o numero é ${chute} voce conseguiu com ${tentativas} ${tentativaoutentativas}`
            exibirTxtTela(`p`, mensagemTentativas )
            document.getElementById(`reiniciar`).removeAttribute(`disabled`);

        }
        else
        {
           if (chute > numeroSecreto)
           {
            exibirTxtTela(`p`,` O Numero Secreto é menor!` )
           }

           else
           {
            exibirTxtTela(`p`,` O Numero Secreto é maior!` )
           }
           tentativas++
           LimparCampo();
        }
}


//gera o numero
function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdeElementosLista = numerosSorteados.length;

    if(qtdeElementosLista == numeroLimite)
    {
        numerosSorteados = []
    };


    if(numerosSorteados.includes(numeroEscolhido))
    {   
        //RECLUSAO
        //Quando uma função chama ela mesma novamente
        return GerarNumeroAleatorio()
    }
    else
    {
        //push adiciona item ao final da lista
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function LimparCampo()
{
 chute = document.querySelector(`input`);
 chute.value = ``
}

function reiniciarJogo()
{
    numeroSecreto = GerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;

    exibirMensagemInicial();

    document.getElementById(`reiniciar`).setAttribute(`disabled`, true)

}
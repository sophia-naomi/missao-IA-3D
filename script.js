const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "o que voce escolhe para o futuro?",
        alternativas: [
            {
                texto: "passou no enem?",
                afirmacao: [
                    "sim",
                    "não",
                ],
            },
            {
                texto: "vidas animal ou vidahumana?",
                afirmacao: [
                    "faculdade de estetica",
                    "curso de adestramento",
                ],
            }
            
            
        ]
    },
    {
        enunciado: "o que voce escolhe para o futuro?:" [
            {
                texto:"quala estesialidade voce escolhe?",
                afirmacao: [
                    "capilaridade",
                    "pele",
                ],
            },
            {
                texto: "já trabalhar ou continuar o curso",
                afirmacao: [
                    "trabalho",
                    "curso",
                ],
            }

        ]
    },
    {
        enunciado: "o que voce escolhe para o futuro?:"[
            {
                texto:"espesializacao 2",
                afirmacao: [
                    "espesializacao em cabelos para tratamento pos cancer",
                    "espesializacao em peles atopicas",
                ],
            },
            {
                texto:"espesializacao 2",
                afirmacao: [
                    "espesializacao em conportamento animal",
                    "espesializacao em negocios",
                ],
            }
            
        ]
    },
    {
        enunciado: "o que voce escolhe para o futuro?:" [
            {
                texto:"negocio",
                afirmacao: [
                    "produzir produto para pratamento pos cancer para cabelo",
                    "ajutar pessoas no tratamento de peles atopicas",
                ],
            },
            {
                texto:"negocio",
                afirmacao:[
                    "escola de comportamento canino",
                    "adestrar cachorros para varias areas",
                ],
            }   
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
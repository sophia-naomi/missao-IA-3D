const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Passou no enem?:" [
            {
                texto: "Predios totalmente integrados com plantas, hortas nas coberturas e ruas tomadas por ar",
                afirmacao:[
                    "afirmacao 1",Sim
                    "afirmacao 2",Não
                ],
            },
            {
                texto: "Arquitetura futurista minimalista com grandes areas de parques tecnologicos isolados",
                afirmacao: [
                    "afirmacao 1",Biomedicina
                    "afirmacao 2",Curso de adestradora
                ],
            }           
            
        ]
    },
    {
        enunciado: "Quando se trata da nossa alimentacao nas proximas decadas, qual caminho voce escolheria?:" [
            {
                texto:"Consumir majoritariamente alimentos organicos cultivados em hortas comunitarias locais",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            },
            {
                texto: "Adotar alimentos inovadores produzidos em laboratorio com alta eficiencia e zero desmatamento",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            }

        ]
    },
    {
        enunciado: "Como voce prefere que a humanidade proteja as grandes florestas?:"[
            {
                texto:"Criando reservas totalmente intocadas onde a presenca humana e proibida para garantir o descanso da natureza.",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            },
            {
                texto:"Abrindo espacos controlados para ecoturismo e imersao para que as pessoas valorizem a fauna e a flora de perto",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            }
            
        ]
    },
    {
        enunciado: "Qual sera a sua maior despesa no futuro?:" [
            {
                texto:"A manutencao do seu robo mordomo que vive julgando as suas escolhas de vida",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            },
            {
                texto:"O cafe gelado gourmet que custara o equivalente a meio salario minimo",
                afirmacao:[
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            }
            
        ]
    },
    {
        enunciado: " Qual ambiente sonoro voce escolheria para a sua rotina no futuro?",
        alternativas: [
            {
                texto: "O som constante do vento nas arvores e o canto dos passaros em um bairro arborizado",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
                ],
            },
            {
                texto: "O silencio absoluto de uma casa inteligente integrada a um ecossistema interno sustentavel e climatizado",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2",
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
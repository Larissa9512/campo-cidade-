const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais as principais diferenças entre campo e cidade?",
        alternativas: [
            {
                texto: "voltado á produçao de alimentos criaçao de animais e preservaçao da natureza.",
                afirmacao: "campo e cidade tem funcoes diferentes na sociedade cada um se desenvolveu de forma propria ao longo da historia."
            },
            {
                texto: "concentra comercio serviços industriais e centros administrativis.",
                afirmacao: " as cidsddes concentram comercios industrias e centros adminidtrativis sendo polos de desenvolvimento economico e social."
            }
        ]
    },
    {
        enunciado: " Quais as principais atividades econômicas do campo e da cidade?:",
        alternativas: [
            {
                texto: "agricultura, pecuaria, extrativismo",
                afirmacao: " enquanto no campo predominam atividades ligadas a agricultura e a pecuaria nas cidades destacam o comercio os serviços e a industria como principais fontes de economia"
        
            {
                texto: "Como a tecnologia influencia o campo e a cidade?",
                afirmacao: "a tecnologia tanto o campo quanto a cidade trazendo avanços na producao agricula e melhorando os seviços a comunidade e a qualidade de vida nas areas urbanas."
            }
        ]
    },
    {
        enunciado: "Quais os principais desafios enfrentados pelo campo e pela cidade?",
        alternativas: [
            {
                texto: "transito e mobilidade urbana desigualdade social",
                afirmacao: "o campo enfrenta desafios como exodo rural e a falta de infraestrutura enquanto a cidade lida como problemas como o transito a poluicao e a desigualdade social."
            },
            {
                texto: "poluicao desemprego ",
                afirmacao: "dificil insençao no mercado de trabalho especialmente jovens, do ar sonoro visual e dos rios urbanos."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada? ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
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
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 
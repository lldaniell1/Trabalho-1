const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial influência positivamente em sua rotina ?",
        alternativas: [
            {
                texto: "Sim, concerteza !",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Defenitivamente não !",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    { 
        enunciado: " Você acredita na automatização da IA ?",
        alternativas: [
            {
                texto: "Sim, pois existem varios sites que a gestão é realizada por IA, pois a automatização das inteligências artificias é essencial para a evolução da tecnológica  .",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Não, porque ela é extremamente prejudicial a evolução humana, pois a independência dela pode gerar uma conciência coletiva negativa para a humanidade.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Você acredita em uma nova onda digital revolucionada pela inteligência artificial, a favor da sociedade como um todo ?",
        alternativas: [
            {
                texto: "Sim, pois a nova onda chegará em breve trazendo diversas oportunidades e ramos de networking,  e trazendo diversas atualizações para todas as áreas do trabalho, assim revolucionando tecnologias futuras.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Não, é apenas uma ferramenta temporararia usada para o auxílio de trabalhos sem um espaço garantido no futuro, e com risco de ser substituida por uma nova tecnologia revolucionária.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Você acredita que a progressão artística pode ser influenciada negativamente sendo prejudicada com o avanço da IA ?",
        alternativas: [
            {
                texto: "Sim, pois a valorização de um artista e até de um desevolvedor pode ser muito prejudicada devido a facilidade da IA de criar projetos do zero em um curto período de tempo.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Não, pois pode gerar um  espaço enorme na criação de projetos de diversas grandes empresas como produtoras de jogos, artístas independentes e influenciadores digitais.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Em um futuro destante você imagina poder ter relações sociais com uma forma de robô humanoide integrado com sentimetos simulados e interações com a mesma capacidade de um ser humano ? ",
        alternativas: [
            {
                texto: "Sim, pois com o avanço da tecnologia/IA, poderão desenvolver sentimentos com passar do tempo covivendo com seres humanos, estudando seu forma de viver e assim aprendendo com o passar do tempo.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Não, pois na minha concepção os robôs nunca chegarão nem perto de sentir algo semelhente aos sentimetos de um ser humano, pois a complexidade dos sentimos não podem se replicar em qualquer outra forma de existência além do ser humano.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2044...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

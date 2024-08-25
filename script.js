const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já presenciou alguém sendo alvo de bullying na escola ou no trabalho?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Sua missão é relatar o ocorrido a um professor, coordenador ou responsável. Não fique em silêncio, pois sua ação pode ajudar a proteger quem está sofrendo."
            },
            {
                texto: "Não!",
                afirmacao: "Sua missão é manter-se vigilante e informado sobre o que caracteriza o bullying. Esteja preparado para agir caso presencie algo, lembrando que até pequenas atitudes podem fazer a diferença na prevenção e no combate ao bullying."
            }
        ]
    },
    {
        enunciado: "Quando você vê alguém sendo intimidado, você tende a:",
        alternativas: [
            {
                texto: "Ignorar a situação!",
                afirmacao: "Sua missão é educar-se sobre a gravidade do bullying e a importância de intervir. Comprometa-se a não ser um espectador passivo e, em vez disso, busque maneiras de apoiar as vítimas ou informar autoridades responsáveis."
            },
            {
                texto: "Tentar ajudar ou procurar ajuda!",
                afirmacao: "Continue sendo uma pessoa proativa e use seu exemplo para incentivar outras pessoas a tomarem atitudes semelhantes. Compartilhe estratégias eficazes de intervenção e demonstre que pequenas ações podem ter um grande impacto."
            }
        ]
    },
    {
        enunciado: "Você acredita que o bullying é um problema sério?",
        alternativas: [
            {
                texto: "Sim, é muito sério!",
                afirmacao: "Sua missão é tornar-se um defensor ativo contra o bullying, compartilhando informações sobre seus efeitos com colegas, amigos, ou nas redes sociais. Ao conscientizar mais pessoas, você ajuda a criar um ambiente mais seguro e acolhedor."
            },
            {
                texto: "Não, não é tão grave assim",
                afirmacao: "Sua missão é pesquisar e aprender mais sobre o impacto devastador que o bullying pode ter na vida das vítimas. Use esse conhecimento para reavaliar sua posição e considere como você pode ajudar a educar outros sobre a gravidade do problema."
            } 
        ]
    },
    {
        enunciado: "Você se sente confortável em falar sobre bullying com amigos ou familiares?",
        alternativas: [
            {
                texto: "Sim, falo abertamente",
                afirmacao: "Sua missão é promover conversas abertas sobre bullying dentro do seu círculo social. Ao normalizar o diálogo, você ajuda a criar um ambiente onde as pessoas se sintam seguras para compartilhar suas experiências e buscar ajuda."
            },
            {
                texto: "Não, evito o assunto",
                afirmacao: "Sua missão é escolher uma pessoa de confiança para iniciar uma conversa sobre bullying. Entender melhor o tema e aprender a falar sobre ele pode ser o primeiro passo para ajudar alguém que esteja sofrendo em silêncio."
            }
        ]
    },
    {
        enunciado: "Você acredita que pequenas ações podem fazer a diferença na luta contra o bullying?",
        alternativas: [
            {
                texto: "Sim, toda ação conta!",
                afirmacao: "Sua missão é implementar pequenas ações diárias, como oferecer apoio a quem precisa, promover gentileza e estar atento ao comportamento de colegas. Lembre-se de que até os menores gestos podem ter um impacto significativo na vida de alguém."
            },
            {
                texto: "Não, apenas grandes ações fazem a direrença!",
                afirmacao: "Sua missão é aprender sobre o poder das pequenas atitudes no combate ao bullying. Veja exemplos de como simples gestos de empatia e apoio têm ajudado a transformar ambientes e considere aplicar essas práticas no seu dia a dia."
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
    caixaPerguntas.textContent = "Agorinha...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
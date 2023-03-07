let faturamentomes = parseInt (prompt("Quanto você quer faturar por mês com seus serviço de freelancer:"))
let horas = parseInt (prompt("Qual o número de horas por dia que você planeja trabalhar:"))
let dias = parseInt (prompt("Você pretende trabalhar em quantos dias da semana:"))
let ferias = parseInt (prompt("Quantas semanas de férias você planeja tirar no ano:"))
let geralfaturamentodia 
let geralhorasproj
let geraldiasproj

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

let horasproj = parseInt (prompt("O custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00. Pensando em um projeto a ser executado, quantas horas você vai trabalhar no projeto, por dia:"))
let diasproj = parseInt (prompt("Quantos dias você estima que o projeto vai durar:"))
let nomeproj = (prompt("Qual nome você dará a esse projeto:"))

class projeto{
    constructor(geralnomeproj, geralfaturamentodia, geralhorasproj, geraldiasproj) {
        this.geralnomeproj = geralnomeproj;
        this.geralfaturamentodia = geralfaturamentodia;
        this.geralhorasproj = geralhorasproj;
        this.geraldiasproj = geraldiasproj;
        }
    calcularprecoproj(){
        this.precoproj = this.geralfaturamentodia*this.geralhorasproj*this.geraldiasproj;
    }
}

const projetopadrao = new projeto("Projeto Padrão", 100, 8, 10);
const projetobarato = new projeto("Projeto Baixo Custo", 50, 8, 10);
const projetocaro = new projeto("Projeto Alto Custo", 250, 8, 10);
const projeto1 = new projeto(nomeproj, faturamentodia, horasproj, diasproj);

projeto1.calcularprecoproj();
projetopadrao.calcularprecoproj();

alert ("Seu projeto custará R$" + projeto1.precoproj + ",00. Em comparação, o projeto padrão levantado por aqui, considerando um faturamento diário de R$100,00 e 10 dias de trabalho com 8 horas trabalhadas custará R$" + projetopadrao.precoproj + ",00")

const arrayprojetos = ["Projeto Padrão", "Projeto Baixo Custo", "Projeto Alto Custo", nomeproj]

alert ("Atualmente, na lista de projetos, temos  projetos. Os nomes dos projetos aparecerão a seguir.")

for (let i = 0; i < arrayprojetos.length; i++) {
    alert (arrayprojetos[i])
}
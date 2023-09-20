var recepcaoLabel = ["Agende uma Visita - Conheça o Colégio", "Achados e Perdidos", "Agendar Atendimento com Coordenação", "Atendimento sobre Dúvidas Gerais e Rotinas", "Atestados Médicos", "Entrega de Históricos Escolares", "Horários de Aulas", "Informações sobre as Crianças", "Inscrições e Dúvidas sobre Atividades Extras", "Liberação de Alunos com Terceiros", "Problemas com Usuário e Senha Portal/ Aplicativo"];
var recepcaoIds = ["visita", "achados", "atendimentoCoord", "atendimentoRotinas", "atestados", "historico", "horarios", "infoCriancas", "atvExtras", "libTerceiros", "problemasPortal"];

var financeiroLabel = ["Acordos Financeiros", "Atualização de Boletos Vencidos", "Boletos Unificados", "Declarações de Quitação De Débitos", "Dúvidas sobre Valores Cobrados", "Encaminhar Boletos", "Informação sobre Parcelas em Atraso", "Matrículas e Mensalidades Proporcionais"];
var financeiroIds = ["acordos", "boletosVencidos", "boletosUnificados", "quitacaoDebito", "duvidasValores", "encaminharBoletos", "parcelasAtraso", "matriculasProporcionais"];

var rhLabel = ["Acolhimento do Candidato a Estágio", "Dúvidas Sobre Estágios", "Encaminhamento de Currículo"];
var rhIds = ["acolhimentoEstagio", "duvidaEstagio", "curriculo"];

export function createDefaultButtons (div) {
    var $newButtonOutro = $("<button>").text("Outro").attr("id", "outro");
    var $newButtonVoltar = $("<button>").text("Voltar").attr("id", "voltar");

    div.append($newButtonOutro,$("<br>"));
    div.append($newButtonVoltar,$("<br>"));
};

module.exports = {recepcaoLabel, 
    recepcaoIds, 
    financeiroLabel, 
    financeiroIds,
    createDefaultButtons};
//var recepcaoLabel = ["Agende uma Visita - Conheça o Colégio", "Achados e Perdidos", "Agendar Atendimento com Coordenação", "Atendimento sobre Dúvidas Gerais e Rotinas", "Atestados Médicos", "Entrega de Históricos Escolares", "Horários de Aulas", "Informações sobre as Crianças", "Inscrições e Dúvidas sobre Atividades Extras", "Liberação de Alunos com Terceiros", "Problemas com Usuário e Senha Portal/ Aplicativo"]
//var recepcaoIds = ["visita", "achados", "atendimentoCoord", "atendimentoRotinas", "atestados", "historico", "horarios", "infoCriancas", "atvExtras", "libTerceiros", "problemasPortal"]

//var financeiroLabel = ["Acordos Financeiros", "Atualização de Boletos Vencidos", "Boletos Unificados", "Declarações de Quitação De Débitos", "Dúvidas sobre Valores Cobrados", "Encaminhar Boletos", "Informação sobre Parcelas em Atraso", "Matrículas e Mensalidades Proporcionais"]
//var financeiroIds = ["acordos", "boletosVencidos", "boletosUnificados", "quitacaoDebito", "duvidasValores", "encaminharBoletos", "parcelasAtraso", "matriculasProporcionais"]

//var rhLabel = ["Acolhimento do Candidato a Estágio", "Dúvidas Sobre Estágios", "Encaminhamento de Currículo"]
//var rhIds = ["acolhimentoEstagio", "duvidaEstagio", "curriculo"]

//function createDefaultButtons (div) {
//    var $newButtonOutro = $("<button>").text("Outro").attr("id", "outro");
//    var $newButtonVoltar = $("<button>").text("Voltar").attr("id", "voltar");
//
//    div.append($newButtonOutro,$("<br>"));
//    div.append($newButtonVoltar,$("<br>"));
//}

const { recepcaoLabel, recepcaoIds, financeiroLabel, financeiroIds, createDefaultButtons} = require("./buttonsList")

$(document).ready(function() {
    $("#recepcao").click(function() {
        //creates new div
        var $newDiv = $("<div>").addClass("message sender");

        //creates the buttons
        for(let i = 0; i<recepcaoLabel.length ; i++){
            var $newButton = $("<button>").text(recepcaoLabel[i]).attr("id", recepcaoIds[i]);

            $newDiv.append($newButton,$("<br>"));
        };

        createDefaultButtons($newDiv);

        //appends to container
        $(".message-container").append($newDiv);

    });

    $("#financeiro").click(function() {
        //creates new div
        var $newDiv = $("<div>").addClass("message sender");

        //creates the buttons
        for(let i = 0; i<financeiroLabel.length ; i++){
            var $newButton = $("<button>").text(financeiroLabel[i]).attr("id", financeiroIds[i]);

            $newDiv.append($newButton,$("<br>"));
        };

        createDefaultButtons($newDiv);

        //appends to container
        $(".message-container").append($newDiv);
    });

    $("#rh").click(function() {
        //creates new div
        var $newDiv = $("<div>").addClass("message sender");

        //creates the buttons
        for(let i = 0; i<rhLabel.length ; i++){
            var $newButton = $("<button>").text(rhLabel[i]).attr("id", rhIds[i]);

            $newDiv.append($newButton,$("<br>"));
        };

        createDefaultButtons($newDiv);

        //appends to container
        $(".message-container").append($newDiv);
    });

});
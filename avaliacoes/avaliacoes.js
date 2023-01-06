$(function () {

    // load bottom-nav
    $("#bottom-nav").load("../bottom-nav/bottom-nav.html");

    
});

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$(document).ready(function () {

    var planoTreinos = JSON.parse(window.localStorage.getItem("planoTreinos"));
    var clientID = JSON.parse(window.localStorage.getItem("clienteID"));
    var planoTreino = planoTreinos.find(p => p.refCliente == clientID);

    if (planoTreino != undefined) {

        var planoTreinos = JSON.parse(window.localStorage.getItem("planoTreinos"));
        var clientID = JSON.parse(window.localStorage.getItem("clienteID"));
        var planoTreino = planoTreinos.find(p => p.refCliente == clientID);

        var avaliacoes = JSON.parse(window.localStorage.getItem("avaliacoes"));
        avaliacoes = avaliacoes.filter(p => p.refPlanoTreino == planoTreino.id);

        var grid = [];

        grid.push(
            '<div class="d-grid" id="exerciciosGrid">' +
                '<div type = "button" class= "btn rounded-0 border-bottom text-left">Avaliações</div >' +
            '</div >'
        );

        $("#exercicios").append(grid);

        var items = [];

        console.log(avaliacoes);

        $.each(avaliacoes, function (key, val) {
            items.push(
                '<div class="">' +
                    '<input type="text" id="disabledTextInput" class="form-control rounded-0 border-top-0" placeholder="' + val.nome + '">' +
                '</div>' 
            );
        });

        $("#exerciciosGrid").append(items);
    }
})

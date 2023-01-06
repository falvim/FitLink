$(function () {

    // load bottom-nav
    $("#bottom-nav").load("../bottom-nav/bottom-nav.html");



  var data = [{ name: "Ana Silva 1", comp: "100", img: "avatar-1.webp" }];

  var items = [];
  $.each(data, function (key, val) {
    items.push();
  });

    
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

    console.log(planoTreinos);

    if (planoTreino != undefined) {

        var exercicios = JSON.parse(window.localStorage.getItem("exercicios"));
        exercicios = exercicios.filter(p => p.refPlanoTreino == planoTreino.id);

        console.log(exercicios);

        exercicios.sort((a, b) => a.id - b.id);

        var grid = [];

        grid.push(
            '<div class="d-grid" id="exerciciosGrid">' +
                '<div type = "button" class= "btn rounded-0 border-bottom text-left"> Treino ' + exercicios[0].local + '</div >' +
            '</div >'
        );

        $("#exercicios").append(grid);

        var items = [];

        items.push(
            '<div type = "button" class= "btn rounded-0 border-bottom text-left" >1 ' + exercicios[0].nome + '</div >'
        );

        $.each(exercicios, function (key, val) {
            items.push(
                '<a href="../exercicio/exercicio.html?exercicioID=' + val.id + '">' +
                '<div id="exercicios" type = "button" class= "d-flex btn rounded-0 border-bottom text-left" >1.' + (parseInt(key) + 1) + '. ' + val.descricao + ' <i class= "fa-solid fa-circle-check ' + (val.completo ? 'text-success' : 'text-secondary') + '" ></i ></div >' +
                '</a>'
            );
        });

        $("#exerciciosGrid").append(items);
    }
})

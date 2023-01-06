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

var exercicioID;

$(document).ready(function () {

    exercicioID = getUrlParameter('exercicioID');

    var exercicios = JSON.parse(window.localStorage.getItem("exercicios"));
    var exercicio = exercicios.find(p => p.id == exercicioID);

    if (exercicio != undefined) {

        var grid = [];

        grid.push(
            '<iframe height="200" src="' + exercicio.videoURL + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
            '<div>' +
                '<div class="p-2">' +
                    '<h4 class="text-primary">' + exercicio.descricao + '</h4>' +
                '</div>' +
                '<div class="p-2 text-secondary">' + exercicio.notas +
                '</div>' +
                '<div class="mt-2">' +
                    '<fieldset disabled>' +
                        '<input type="text" id="disabledTextInput" class="form-control rounded-0" placeholder="Inserir comentário...">' +
                        '<input type="text" id="disabledTextInput" class="form-control rounded-0 border-top-0" placeholder="Inserir marca de referência...">' +
                    '</fieldset>' +
                '</div>' +
                '<div class="d-grid gap-2 mt-5">' +
                    '<a href="../exercicio/exercicio.html?exercicioID=' + exercicio.id + '">' +
                        '<div id="finalizado" class="d-flex btn text-center ' + (exercicio.completo ? 'btn-success' : 'btn-light') + '" type="button">' +
                            '<i class= "fa-regular fa-circle-check ' + (exercicio.completo ? 'text-light' : 'text-secondary') + '" ></i >' +
                        '</div >' +
                    '</a>' +
                '</div>' +
            '</div>'

        );

        $("#exercicio").append(grid);
    }

    $("#finalizado").click(function () {

        var exercicios = JSON.parse(window.localStorage.getItem("exercicios"));
        var exercicio = exercicios.find(p => p.id == exercicioID);

        exercicios = exercicios.filter(p => p.id != exercicioID);

        exercicio.completo = true;

        exercicios.push(exercicio);

        window.localStorage.setItem("exercicios", JSON.stringify(exercicios));
    })
})

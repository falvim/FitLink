$(function () {

    // load bottom-nav
    $("#bottom-nav").load("../bottom-nav/bottom-nav.html");

});


$(document).ready(function () {

    $("#exercicios").click(function () {
        event.preventDefault();

        window.location = "../exercicios/exercicios.html";
    });

    $("#avaliacoes").click(function () {
        event.preventDefault();

        window.location = "../avaliacoes/avaliacoes.html";
    });
})

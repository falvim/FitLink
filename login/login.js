function setLocalStorage() {

    var date = new Date();
    var dateStr = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getDay().toString();

    var clientes = JSON.parse(window.localStorage.getItem("clientes"));

    if (clientes == undefined) {

        var clientes = [];

        clientes.push({
            id: 1,
            username: "patricia1",
            password: 1234
        });

        window.localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    var planoTreinos = JSON.parse(window.localStorage.getItem("planoTreinos"));

    if (planoTreinos == undefined) {

        var planoTreinos = [];

        planoTreinos.push({
            id: 1,
            nome: "Massa Muscular",
            descricao: "Massa Muscular",
            completo: false,
            disponivel: true,
            refCliente: 1
        });

        window.localStorage.setItem("planoTreinos", JSON.stringify(planoTreinos));
    }

    var exercicios = JSON.parse(window.localStorage.getItem("exercicios"));

    if (exercicios == undefined) {

        var exercicios = [];

        exercicios.push({
            id: 1,
            nome: "Peito",
            descricao: "Bench Press",
            data: dateStr,
            notas: "Sets: 3, Repetições 12, Carga 40 Kg",
            completo: false,
            local: "Ginásio",
            videoURL: "https://www.youtube.com/embed/QsYre__-aro",
            refPlanoTreino: 1
        });

        exercicios.push({
            id: 2,
            nome: "Peito",
            descricao: "Chest Flys",
            data: dateStr,
            notas: "Sets: 3, Repetições 12, Carga 20 Kg",
            completo: false,
            local: "Ginásio",
            videoURL: "https://www.youtube.com/embed/mLgYNdxj-Vw",
            refPlanoTreino: 1
        });

        window.localStorage.setItem("exercicios", JSON.stringify(exercicios));
    }

    var avaliacoes = JSON.parse(window.localStorage.getItem("avaliacoes"));

    if (avaliacoes == undefined) {

        var avaliacoes = [];

        avaliacoes.push({
            id: 1,
            nome: "Percentagem de massa muscular",
            descricao: "Percentagem de massa muscular",
            data: dateStr,
            notas: "",
            completo: false,
            medida: "%",
            valor: "",
            refPlanoTreino: 1
        });

        window.localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
    }
};


$(document).ready(function () {

    setLocalStorage();

    var clientes = JSON.parse(window.localStorage.getItem("clientes"));
    var planoTreinos = JSON.parse(window.localStorage.getItem("planoTreinos"));

    console.log(clientes);
    console.log(planoTreinos);


    $("#login").click(function () {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();
        var cliente = clientes.find(p => p.username == username);

        if (cliente != undefined && cliente.password == password) {

            var planoTreino = planoTreinos.find(p => p.refCliente == cliente.id);

            window.localStorage.setItem("clienteID", JSON.stringify(cliente.id));

            alert(cliente.id);

            if (planoTreino != undefined)
                window.location = "../activities/activities.html?planoTreinoID=" + planoTreino.id;
        } else {
            $("#error").text("Login inválido.");
        }
            
        
    });

    $("#limpar").click(function () {
        localStorage.clear();
    });

});

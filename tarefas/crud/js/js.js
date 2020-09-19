var receita1 = {
    nomePaciente: "Leonardo",
    medicamento: 30,
    dose: "987654",
    intervalo: "Senacc",
    duracao: "Senac"
};

var receita2 = {
    nomePaciente: "Leonardo",
    medicamento: 30,
    dose: "987654",
    intervalo: "Senac",
    duracao: "Senac"
};

function adicionar(){
    //html injection pra criar nova linha create element da aula passada
    //divBox.innerHTML = "<p>"+valorNome+"</p>";
    //pega a info do nome
    var nome = document.getElementById('nomePaciente').value;
    //seleciona o elemento alvo
    var novo = document.getElementById('celulaNomePaciente');
    //atribui valor seleionado no alvo
    celulaNomePaciente.textContent=nomePaciente;
}

function excluir(id){
    
}

function limparConteudo(){
    var limparInputNome = document.getElementById("nomePaciente");
    limparInputNome.value = "";
}
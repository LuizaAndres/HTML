var receitas = [];

//adiciona receita no array

function adicionar(){
    alert("");
    
    const idReceita = receitas.length + 1;
    const nomePaciente = document.getElementById('nomePaciente').value;
    const composto = document.getElementById('composto').value;
    const dose = document.getElementById('dose').value;
    const intervalo = document.getElementById('intervalo').value;
    const dias = document.getElementById('dias').value;
    
    receitas.push({
        idReceita,
        nomePaciente,
        composto,
        dose,
        intervalo,
        dias,
    })
        
    novaLinhaTabela();
    limpaFormulario();
        
    console.log("Receita inserida");
    console.log(receitas);
}


function novaLinhaTabela(){
    const tabelaReceitas = document.getElementById("tabelaReceitas").getElementsByTagName('tbody')[0];

    const novaLinha = tabelaReceitas.insertRow(tabelaReceitas.length);
    receitas.forEach(receita => {
        
        const celulaID = novaLinha.insertCell(0);
        celulaID.innerHTML = receita.idReceita;

        const celulaNome = novaLinha.insertCell(1);
        celulaNome.innerHTML = receita.nomePaciente;

        const celulaComposto = novaLinha.insertCell(2);
        celulaComposto.innerHTML = receita.composto;
        
        const celulaMg = novaLinha.insertCell(3);
        celulaMg.innerHTML = receita.dose;
        
        const celulaIntervalo = novaLinha.insertCell(4);
        celulaIntervalo.innerHTML = receita.intervalo;

        const celulaDias = novaLinha.insertCell(5);
        celulaDias.innerHTML = receita.dias;


        const celulaAcao = novaLinha.insertCell(6);
        
        celulaAcao.innerHTML = '<button>Remover</button> <button onclick="editar">Editar</button>'
    })
    update_table();
    
    clear_form();
    console.log(receitas);
}
function excluir(id){
    
}

function limparConteudo(){
    var limparInputNome = document.getElementById("nomePaciente");
    limparInputNome.value = "";
}

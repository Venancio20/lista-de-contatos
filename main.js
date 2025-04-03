const form = document.getElementById('form-contato');
const contato = [];
const numero = [];
const inputContato = document.getElementById('contato');
const inputNumero = document.getElementById('telefone');
const botao1 = document.getElementById('btn1');
const botao2 = document.getElementById('btn2');

let linhas = '';



botao1.addEventListener('click', function(e){
    e.preventDefault();

    testarNumero();
});

function testarNumero(){
    if(!/^\d{9,11}$/.test(inputNumero.value)){
        alert('O número de telefone deve conter entre 9 e 11 dígitos, e apenas números');
    }else{
        adicionaLinha();
        atualizaTabela();
    }
}

function adicionaLinha(){
    //verifica se o contato já esxite
    if(contato.includes(inputContato.value)){
        alert(`O contato: ${inputContato.value} já consta em sua lista`);
    } else{
    contato.push(inputContato.value);
    numero.push(inputNumero.value);

    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    inputContato.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

botao2.addEventListener('click', function(e){
    e.preventDefault();

    const contatoPesquisado = document.getElementById('pesquisar-contato');
    const posicaoPesquisado = contato.indexOf(contatoPesquisado.value);
    const numeroPesquisado = numero[posicaoPesquisado];

    if (posicaoPesquisado !== -1) {
        alert(`${contatoPesquisado.value} número ${numeroPesquisado}`);
    } else {
        alert("Contato não encontrado!");
    }
});
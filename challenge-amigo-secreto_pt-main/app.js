//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaDeAmigosSorteados = [];
//let amigoSecreto = gerarAmigoAleatorio();








function adicionarAmigo(){


    let texto = document.querySelector('#amigo').value
  
    

   lista = document.getElementsByTagName('input')

   var listagem = document.getElementById('listaAmigos')
   var listaOrdenada = document.createElement('ul');


    for(i = 0; i< lista.length; i++){
        if(texto == ""){
            alert("o campo nome esta vazio, insira um nome valido")
            i=0;
           }else{
            ListaDeAmigosSorteados.push(texto);
        var novoItem = document.createElement('li');
        novoItem.innerHTML = lista[i].value;
        
        listagem.appendChild(novoItem);
        lista[i].value = null
    }
   
    var listagem = document.getElementById('listaAmigos')
    listagem.appendChild(listaOrdenada);
    console.log(texto);
}
}
function sortearAmigo(){

    amigoSecreto = ListaDeAmigosSorteados[Math.floor(Math.random()*ListaDeAmigosSorteados.length)]
    if(ListaDeAmigosSorteados == ""){
        alert("antes digite um nome válido")
    }else{
    alert(` seu amigo secreto é ${amigoSecreto}`) 
}
}


 

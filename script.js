function enviar(){

    let texto = document.getElementById("itens").value;
    let list = document.getElementById("listaFeita").innerHTML;
    let contagem = document.getElementById("contagem").value;

    list += "<li>" + texto + " " +  contagem  + " " + "UN" +  "</li>";

    document.getElementById("listaFeita").innerHTML = list;
    

  
   

}

function adicionar(){
    let quantidade = document.getElementById("contagem");
    quantidade.value++;    
}

function retirar(){

    let quantidade = document.getElementById("contagem");
    quantidade.value--;
}






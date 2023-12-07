botaolimpeza = document.getElementById('botaolimpeza');
spanSetor = document.getElementById('setorSelecionado');
listaPreDefinida = document.getElementById('secaoListaPreDefinida');


//Funções que mostram tabelas diferentes ao apertar o botão 
function mostrarTabelaLimpeza() {
    
    
    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = '';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'LIMPEZA'
    
}

function mostrarTabelaSabonete(){ 
    
    
    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = '';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'SABONETE'

}

function mostrarTabelaSacoPlastico(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = '';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'SACO PLASTICO'


}

function mostrarTabelaPrafesta(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = '';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'PRAFESTA'
}

function mostrarTabelaPleion(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = '';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'PLEION'

}

function mostrarTabelaVassouras(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = '';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'VASSOURAS'

}

function mostrarTabelaCaixa(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = '';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = '';

    spanSetor.innerHTML = 'CAIXA'

}

function mostrarTabelaPotesPlasticos(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = '';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = 'none';

    spanSetor.innerHTML = 'POTES PLASTICOS'

}

function mostrarTabelaGalvanotek(){

    tabelaLimpeza = document.getElementById('tabelaLimpeza').style.display = 'none';
    tabelaSabonete = document.getElementById('tabelaSabonete').style.display = 'none';
    tabelaSacoPlastico = document.getElementById('tabelaSacoPlastico').style.display = 'none';
    tabelaPrafesta = document.getElementById('tabelaPrafesta').style.display = 'none';
    tabelaPleion = document.getElementById('tabelaPleion').style.display = 'none';
    tabelaVassouras = document.getElementById('tabelaVassouras').style.display = 'none';
    tabelaCaixa = document.getElementById('tabelaCaixa').style.display = 'none';
    tabelaPotesPlasticos = document.getElementById('tabelaPotesPlasticos').style.display = 'none';
    tabelaGalvanotek = document.getElementById('tabelaGalvanotek').style.display = '';

    spanSetor.innerHTML = 'GALVANOTEK'

}

//função que limpa a lista completa
 function limparLista(){
    resultado = confirm("Tem certeza que deseja excluir todos os itens da lista?")
    if(resultado == true){
        listaPreDefinida.innerHTML = '';
    } 
    
 }


//Executa todo o processo dividido por tabelas, cada tabela tem seu código.
//O código é igual mas os "ids" são diferentes, uma forma que eu encontrei de pegar o valor de cada select separado!!


 // Inicio do código da tabela dos itens do setor de limpeza!!
    selectLimpeza = document.getElementById('listaItensLimpeza')   
    botaoAddLimpeza = document.getElementById('botaoAddLimpeza')
    quantidadeLimpeza = document.getElementById('quantidadeLimpeza')
    
    botaoAddLimpeza.addEventListener('click', () =>{

        if(quantidadeLimpeza.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadeLimpeza.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensLimpeza = selectLimpeza.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensLimpeza} --<strong> ${quantidadeLimpeza.value} UN</strong></p>`
        }
        
    })

    function adcLimpeza1(){
        quantidadeLimpeza.value++
    }

    function retirarLimpeza1(){
        quantidadeLimpeza.value--
        if(quantidadeLimpeza.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadeLimpeza.value = ''
        } 
        

    }
    
    function addLimpeza3(){
        
        quantidadeAtual = Number(quantidadeLimpeza.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadeLimpeza.value = quantidadeAtualizada
        
    }
    function addLimpeza5(){
        
        quantidadeAtual = Number(quantidadeLimpeza.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadeLimpeza.value = quantidadeAtualizada
        
    }
    function addLimpeza10(){
        
        quantidadeAtual = Number(quantidadeLimpeza.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadeLimpeza.value = quantidadeAtualizada
        
    }
    //fim do código da tabela dos itens de limpeza!!


    // Inicio do código da tabela dos itens do setor de sabonete!!
    selectSabonete = document.getElementById('listaItensSabonete')
    botaoAddSabonete = document.getElementById('botaoAddSabonete')
    quantidadeSabonete = document.getElementById('quantidadeSabonete')
    
    botaoAddSabonete.addEventListener('click', () =>{
        if(quantidadeSabonete.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadeSabonete.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensSabonete = selectSabonete.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensSabonete} -- ${quantidadeSabonete.value} UN </p>`
        }
    })
    
     
    function adcSabonete1(){
        quantidadeSabonete.value++
    }

    function retirarSabonete1(){
        quantidadeSabonete.value--
        if(quantidadeSabonete.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadeSabonete.value = ''
        }
    }
    
    function addSabonete3(){
        
        quantidadeAtual = Number(quantidadeSabonete.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadeSabonete.value = quantidadeAtualizada
        
    }
    function addSabonete5(){
        
        quantidadeAtual = Number(quantidadeSabonete.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadeSabonete.value = quantidadeAtualizada
        
    }
    function addSabonete10(){
        
        quantidadeAtual = Number(quantidadeSabonete.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadeSabonete.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de sabonete!!


// Inicio do código da tabela dos itens do setor de saco plastico!!
    selectSacoPlastico = document.getElementById('listaItensSacoPlastico')
    botaoAddSacoPlastico = document.getElementById('botaoAddSacoPlastico')
    quantidadeSacoPlastico = document.getElementById('quantidadeSacoPlastico')
    
    botaoAddSacoPlastico.addEventListener('click', () =>{
        if(quantidadeSacoPlastico.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadeSacoPlastico.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensSacoPlastico = selectSacoPlastico.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensSacoPlastico} -- ${quantidadeSacoPlastico.value} UN </p>`
        }
    })
    
   
    function adcSacoPlastico1(){
        quantidadeSacoPlastico.value++
    }

    function retirarSacoPlastico1(){
        quantidadeSacoPlastico.value--
        if(quantidadeSacoPlastico.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadeSacoPlastico.value = ''
        }
    }
    
    function addSacoPlastico3(){
        
        quantidadeAtual = Number(quantidadeSacoPlastico.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadeSacoPlastico.value = quantidadeAtualizada
        
    }
    function addSacoPlastico5(){
        
        quantidadeAtual = Number(quantidadeSacoPlastico.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadeSacoPlastico.value = quantidadeAtualizada
        
    }
    function addSacoPlastico10(){
        
        quantidadeAtual = Number(quantidadeSacoPlastico.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadeSacoPlastico.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de saco plastico!!


// Inicio do código da tabela dos itens do setor de prafesta!!
    selectPrafesta = document.getElementById('listaItensPrafesta')
    botaoAddPrafesta= document.getElementById('botaoAddPrafesta')
    quantidadePrafesta = document.getElementById('quantidadePrafesta')
    
    botaoAddPrafesta.addEventListener('click', () =>{
        if(quantidadePrafesta.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadePrafesta.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensPrafesta = selectPrafesta.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensPrafesta} -- ${quantidadePrafesta.value} UN </p>`
        }
    })
    
   
    function adcPrafesta1(){
        quantidadePrafesta.value++
    }

    function retirarPrafesta1(){
        quantidadePrafesta.value--
        if(quantidadePrafesta.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadePrafesta.value = ''
        }
    }
    
    function addPrafesta3(){
        
        quantidadeAtual = Number(quantidadePrafesta.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadePrafesta.value = quantidadeAtualizada
        
    }
    function addPrafesta5(){
        
        quantidadeAtual = Number(quantidadePrafesta.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadePrafesta.value = quantidadeAtualizada
        
    }
    function addPrafesta10(){
        
        quantidadeAtual = Number(quantidadePrafesta.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadePrafesta.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de prafesta!!


// Inicio do código da tabela dos itens do setor de pleion!!
    selectPleion = document.getElementById('listaItensPleion')
    botaoAddPleion= document.getElementById('botaoAddPleion')
    quantidadePleion = document.getElementById('quantidadePleion')
    
    botaoAddPleion.addEventListener('click', () =>{
        if(quantidadePleion.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadePleion.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensPleion = selectPleion.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensPleion} -- ${quantidadePleion.value} UN </p>`
        }
    })
    
     
    function adcPleion1(){
        quantidadePleion.value++
    }

    function retirarPleion1(){
        quantidadePleion.value--
        if(quantidadePleion.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadePleion.value = ''
        }
    }
    
    function addPleion3(){
        
        quantidadeAtual = Number(quantidadePleion.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadePleion.value = quantidadeAtualizada
        
    }
    function addPleion5(){
        
        quantidadeAtual = Number(quantidadePleion.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadePleion.value = quantidadeAtualizada
        
    }
    function addPleion10(){
        
        quantidadeAtual = Number(quantidadePleion.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadePleion.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de pleion!!


// Inicio do código da tabela dos itens do setor de vassouras!!
    selectVassouras = document.getElementById('listaItensVassouras')
    botaoAddVassouras= document.getElementById('botaoAddVassouras')
    quantidadeVassouras = document.getElementById('quantidadeVassouras')
    
    botaoAddVassouras.addEventListener('click', () =>{
        if(quantidadeVassouras.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadeVassouras.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensVassouras = selectVassouras.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensVassouras} -- ${quantidadeVassouras.value} UN </p>`
        }
    })
    
   
    function adcVassouras1(){
        quantidadeVassouras.value++
    }

    function retirarVassouras1(){
        quantidadeVassouras.value--
        if(quantidadeVassouras.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadeVassouras.value = ''
        }
    }
    
    function addVassouras3(){
        
        quantidadeAtual = Number(quantidadeVassouras.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadeVassouras.value = quantidadeAtualizada
        
    }
    function addVassouras5(){
        
        quantidadeAtual = Number(quantidadeVassouras.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadeVassouras.value = quantidadeAtualizada
        
    }
    function addVassouras10(){
        
        quantidadeAtual = Number(quantidadeVassouras.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadeVassouras.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de vassouras!!


// Inicio do código da tabela dos itens do setor do caixa!!
    selectCaixa = document.getElementById('listaItensCaixa')
    botaoAddCaixa= document.getElementById('botaoAddCaixa')
    quantidadeCaixa = document.getElementById('quantidadeCaixa')
    
    botaoAddCaixa.addEventListener('click', () =>{
        if(quantidadeCaixa.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadeCaixa.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensCaixa = selectCaixa.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensCaixa} -- ${quantidadeCaixa.value} UN </p>`
        }
    })
    
   
     
    function adcCaixa1(){
        quantidadeCaixa.value++
    }

    function retirarCaixa1(){
        quantidadeCaixa.value--
        if(quantidadeCaixa.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadeCaixa.value = ''
        }
    }
    
    function addCaixa3(){
        
        quantidadeAtual = Number(quantidadeCaixa.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadeCaixa.value = quantidadeAtualizada
        
    }
    function addCaixa5(){
        
        quantidadeAtual = Number(quantidadeCaixa.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadeCaixa.value = quantidadeAtualizada
        
    }
    function addCaixa10(){
        
        quantidadeAtual = Number(quantidadeCaixa.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadeCaixa.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor do caixa!!


// Inicio do código da tabela dos itens do setor de potes plasticos!!
    selectPotesPlasticos = document.getElementById('listaItensPotesPlasticos')
    botaoAddPotesPlasticos= document.getElementById('botaoAddPotesPlasticos')
    quantidadePotesPlasticos = document.getElementById('quantidadePotesPlasticos')
    
    botaoAddPotesPlasticos.addEventListener('click', () =>{
        if(quantidadePotesPlasticos.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadePotesPlasticos.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensPotesPlasticos = selectPotesPlasticos.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensPotesPlasticos} -- ${quantidadePotesPlasticos.value} UN </p>`
        }
    })
    
   
     
    function adcPotesPlasticos1(){
        quantidadePotesPlasticos.value++
    }

    function retirarPotesPlasticos1(){
        quantidadePotesPlasticos.value--
        if(quantidadePotesPlasticos.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadePotesPlasticos.value = ''
        }
    }
    
    function addPotesPlasticos3(){
        
        quantidadeAtual = Number(quantidadePotesPlasticos.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadePotesPlasticos.value = quantidadeAtualizada
        
    }
    function addPotesPlasticos5(){
        
        quantidadeAtual = Number(quantidadePotesPlasticos.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadePotesPlasticos.value = quantidadeAtualizada
        
    }
    function addPotesPlasticos10(){
        
        quantidadeAtual = Number(quantidadePotesPlasticos.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadePotesPlasticos.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de potes plasticos!!


// Inicio do código da tabela dos itens do setor de galvanotek!!
    selectGalvanotek = document.getElementById('listaItensGalvanotek')
    botaoAddGalvanotek= document.getElementById('botaoAddGalvanotek')
    quantidadeGalvanotek = document.getElementById('quantidadeGalvanotek')
    
    botaoAddGalvanotek.addEventListener('click', () =>{
        if(quantidadeGalvanotek.value == 0){
            alert('Por Favor digite a quantidade! (Quantidade não pode ser 0)')
        } else if(quantidadeGalvanotek.value < 0 ){
            alert('Numeros negativos não são aceitos!')
        } else {
            itensGalvanotek = selectGalvanotek.value
            listaPreDefinida.innerHTML += `<p class="itens-da-lista">${itensGalvanotek} -- ${quantidadeGalvanotek.value} UN </p>`
        }
    })
    
   
     
    function adcGalvanotek1(){
        quantidadeGalvanotek.value++
    }

    function retirarGalvanotek1(){
        quantidadeGalvanotek.value--
        if(quantidadeGalvanotek.value < 0 ){
            alert('Numeros negativos não são aceitos!')
            quantidadeGalvanotek.value = ''
        }
    }
    
    function addGalvanotek3(){
        
        quantidadeAtual = Number(quantidadeGalvanotek.value)
        quantidadeAtualizada = quantidadeAtual + 3
        quantidadeGalvanotek.value = quantidadeAtualizada
        
    }
    function addGalvanotek5(){
        
        quantidadeAtual = Number(quantidadeGalvanotek.value)
        quantidadeAtualizada = quantidadeAtual + 5
        quantidadeGalvanotek.value = quantidadeAtualizada
        
    }
    function addGalvanotek10(){
        
        quantidadeAtual = Number(quantidadeGalvanotek.value)
        quantidadeAtualizada = quantidadeAtual + 10
        quantidadeGalvanotek.value = quantidadeAtualizada
        
    }
// Fim do código da tabela dos itens do setor de galvanotek!!

//Conteudo dinamico do modal
function alterarConteudo(){
    var conteudoLista = $('#secaoListaPreDefinida').html();
    var listaVazia = 'Sua Lista está vazia, adicione alguns itens'

        if(conteudoLista.trim() === ''){
            $('#listaPronta').text(listaVazia)
        } else {
            $('#listaPronta').html(conteudoLista);
        }
        
        $('#secaoListaPreDefinida').html('');
   
}


    
    
    
    
    
    
    
    
    
    



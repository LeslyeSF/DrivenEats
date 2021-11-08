let numeroitens = 0;
let prato = false, bebida = false, sobremesa = false;
let nome_prato, nome_bebida, nome_sobremesa;
let preco_prato, preco_bebida, preco_sobremesa, soma;
let nome, endereco, telefone = "558496693359";

function selecionar_item(botao, categoria){

    if(categoria === "prato"){
        if (prato == false){
            botao.classList.add("Prato-selecionado");
            prato = true;
        } else{
            let verificar = document.querySelector(".Prato-selecionado");
            if(botao === verificar){
                verificar.classList.remove("Prato-selecionado");
                prato = false;
            } else{
                verificar.classList.remove("Prato-selecionado");
                botao.classList.add("Prato-selecionado");
                prato = true;
            }
        }
    }
    if(categoria === "bebida"){
        if (bebida == false){
            botao.classList.add("Bebida-selecionada");
            bebida = true;
        } else{
            let verificar = document.querySelector(".Bebida-selecionada");
            if(botao === verificar){
                verificar.classList.remove("Bebida-selecionada");
                bebida = false;
            } else{
                verificar.classList.remove("Bebida-selecionada");
                botao.classList.add("Bebida-selecionada");
                bebida = true;
            }
        }
    }
    if(categoria === "sobremesa"){
        if (sobremesa == false){
            botao.classList.add("Sobremesa-selecionada");
            sobremesa = true;
        } else{
            let verificar = document.querySelector(".Sobremesa-selecionada");
            if(botao === verificar){
                verificar.classList.remove("Sobremesa-selecionada");
                sobremesa = false;
            } else{
                verificar.classList.remove("Sobremesa-selecionada");
                botao.classList.add("Sobremesa-selecionada");
                sobremesa = true;
            }
        }
    }

    contar_itens();

}
let x = "boa noite \n galera";

function contar_itens(){
    let verificar = document.querySelector(".Permitir-pedido");
    if(verificar !== null){
        if(bebida == false || prato == false || sobremesa == false){
            verificar.classList.remove("Permitir-pedido");
            verificar.innerHTML="Selecione os 3 itens <br> para fechar o pedido";
        }
    } else{
        if(bebida == true && prato == true && sobremesa == true){
            let habilitar = document.querySelector(".Botao");
            habilitar.classList.add("Permitir-pedido");
            habilitar.innerHTML="Fechar pedido";
        }
    }
     
}
function efetuarpedido(){
    let verificar = document.querySelector(".Permitir-pedido");
    if(verificar !== null){
        
        let pega = document.querySelector(".Prato-selecionado");
        let peganomes = pega.querySelector("h1");
        let pegapreco = pega.querySelector("h2");
        pegapreco = pegapreco.querySelector("span");
        nome_prato = peganomes.innerHTML;
        preco_prato = pegapreco.innerHTML;

        pega = document.querySelector(".Bebida-selecionada");
        peganomes = pega.querySelector("h1");
        pegapreco = pega.querySelector("h2");
        pegapreco = pegapreco.querySelector("span");
        nome_bebida = peganomes.innerHTML;
        preco_bebida = pegapreco.innerHTML;
        preco_bebida = preco_bebida;

        pega = document.querySelector(".Sobremesa-selecionada");
        peganomes = pega.querySelector("h1");
        pegapreco = pega.querySelector("h2");
        pegapreco = pegapreco.querySelector("span");
        nome_sobremesa = peganomes.innerHTML;
        preco_sobremesa = pegapreco.innerHTML;

        let revisar = document.querySelector(".Tela-revisao");
        revisar.classList.add("Habilitar-tela");
        
        pega = document.querySelector(".prato");
        pega = pega.querySelector(".produto");
        pega.innerHTML = nome_prato;
        pega = document.querySelector(".prato");
        pega = pega.querySelector(".preco");
        pega.innerHTML = preco_prato;

        pega = document.querySelector(".bebida");
        pega = pega.querySelector(".produto");
        pega.innerHTML = nome_bebida;
        pega = document.querySelector(".bebida");
        pega = pega.querySelector(".preco");
        pega.innerHTML = preco_bebida;

        pega = document.querySelector(".sobremesa");
        pega = pega.querySelector(".produto");
        pega.innerHTML = nome_sobremesa;
        pega = document.querySelector(".sobremesa");
        pega = pega.querySelector(".preco");
        pega.innerHTML = preco_sobremesa;

        pega = document.querySelector(".valor-total");
        soma = parseFloat(preco_prato.replace(",",".")) + parseFloat(preco_bebida.replace(",",".")) + parseFloat(preco_sobremesa.replace(",","."));
        soma = soma.toFixed(2);
        soma = "R$ "+soma;
        soma = soma.replace(".",",");
        pega.innerHTML = soma;
        
    }
}
function finalizarpedido(){
    nome = prompt("Qual o seu nome?");
    endereco = prompt("Digite o seu endereço:");
    
    let mensagem_pronta = "Olá, gostaria de fazer o pedido: \n - Prato: "+nome_prato+" \n - Bebida: "+nome_bebida+" \n - Sobremesa: "+nome_sobremesa+" \n Total: "+soma+" \n \n Nome: "+nome+" \n Endereço: "+endereco; 
    mensagem_pronta = encodeURIComponent(mensagem_pronta);
    window.open("https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagem_pronta, "_blank");

}
function cancelar(){
    let revisar = document.querySelector(".Habilitar-tela");
    revisar.classList.remove("Habilitar-tela");
}
function enviarMensagem(){
	var celular = "558496693359";
  
  var texto = "Texto que eu vou enviar \n com quebras de \n texto.";
  texto = encodeURIComponent(texto);
  console.log("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
  
}
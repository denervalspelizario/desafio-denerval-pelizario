const bancodedados = {
    cardapio: [
      {
        codigo: "cafe",
        descricao: "Café",
        valor: "R$ 3,00"
      },
      {
        codigo: "chantily",
        descricao: "Chantily (extra do Café)",
        valor: "R$ 1,50"
      },
      {
        codigo: "suco",
        descricao: "Suco Natural",
        valor: "R$ 6,20"
      },
      {
        codigo: "sanduiche",
        descricao: "Sanduíche",
        valor: "R$ 6,50"
      },
      {
        codigo: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        valor: "R$ 2,00"
      },
      {
        codigo: "salgado",
        descricao: "Salgado",
        valor: "R$ 7,25"
      },
      {
        codigo: "combo1",
        descricao: "1 Suco e 1 Sanduíche",
        valor: "R$ 9,50"
      },
      {
        codigo: "combo2",
        descricao: "1 Café e 1 Sanduíche",
        valor: "R$ 7,50"
      }
    ]
  };

    

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        

        // validando pagamento
        function validandoPagamento(metodoDePagamento){
            
            if(metodoDePagamento !== 'dinheiro' && metodoDePagamento !== 'credito' && metodoDePagamento !== 'debito'){
                return "Forma de pagamento inválida!"
            }
    
        }

        // validando item
            
        function validandoItens(itens){

            if(itens.length < 1) {
                return "Não há itens no carrinho de compra!";
            } 
            
            

        }
        
        // validando extra
        function validandoExtra(itens){

            // validando item zero
            let dados = itens.map(string => {
              const [codigo, quantidade] = string.split(',');
              return { codigo, quantidade };
            });
            
      
            const itemQueijo = dados.find(item => item.codigo === 'queijo');
            const itemChantily = dados.find(item => item.codigo === 'chantily');
    
            if(itemQueijo){
              const itemSanduiche = dados.find(item => item.codigo === 'sanduiche');
              if(!itemSanduiche){
                return "Item extra não pode ser pedido sem o principal"
              }
            }
            if(itemChantily){
              const itemCafe = dados.find(item => item.codigo === 'cafe');
              if(!itemCafe){
                return "Item extra não pode ser pedido sem o principal"
              }
            }
        }

        // validando combo
        function validandoCombo(itens){
            // validando item zero
            let dados = itens.map(string => {
             const [codigo, quantidade] = string.split(',');
             return { codigo, quantidade };
           });
     
           const itemCombo01 = dados.find(item => item.codigo === 'combo1');
           const itemCombo02 = dados.find(item => item.codigo === 'combo2');
   
   
           if(itemCombo01){
             const itemDiferente = dados.find(item => item.codigo !== 'combo1');
             if(!itemDiferente){
               console.log("Item extra não pode ser pedido sem o principal")
             }
           }
           if(itemCombo02){
             const itemDiferente = dados.find(item => item.codigo !== 'combo2');
             if(!itemDiferente){
               console.log("Item extra não pode ser pedido sem o principal")
             }
           }
        }

        // validando codigo
        function validandoCodigo(itens){
    
            let dados = itens.map(string => {
              const [codigo, quantidade] = string.split(',');
              return { codigo, quantidade };
            });
    
            const itemCodigo = dados.find((item) => {
                return item.codigo === 'cafe' || item.codigo === 'chantily' ||  item.codigo === 'suco' ||  item.codigo === 'sanduiche' ||  item.codigo === 'queijo' ||  item.codigo === 'salgado' ||  item.codigo === 'combo1' ||  item.codigo === 'combo2'   
            });
      
            if(!itemCodigo){
              return "Item inválido!"
            }
        }

        function validandoQuantidade(itens){
            let dados = itens.map(string => {
                const [codigo, quantidade] = string.split(',');
                return { codigo, quantidade };
            });
        
            const itemQuantidade = dados.find(item => item.quantidade === '0');
            if(itemQuantidade){
                return "Quantidade inválida!"
            }
        }

        // somando valores
        function somandoValores(metodoDePagamento, itens) {
            let valorTotal = 0;
            let tipoPagamento = metodoDePagamento;
        
            let dados = itens.map(string => {
                const [codigo, quantidade] = string.split(',');
                return { codigo, quantidade: parseInt(quantidade) };
            });
        
            for (let i = 0; i < dados.length; i++) {
                const itemCodigo = dados[i].codigo;
                const produtosNoCardapio = bancodedados.cardapio.filter(produto => produto.codigo === itemCodigo);
        
                if (produtosNoCardapio.length > 0) {
                    const valorProduto = parseInt(produtosNoCardapio[0].valor.replace('R$ ', '').replace(',', ''));
                    valorTotal += valorProduto * dados[i].quantidade;
                }
            }
        
            function descontoTaxas(metodoDePagamento, valorTotal) {
                if (metodoDePagamento === "dinheiro") {
                    return String("R$ " + ((valorTotal -= valorTotal * 0.05) / 100).toFixed(2).replace('.', ','));
                } else if (metodoDePagamento === "debito") {
                    return String("R$ " + (valorTotal / 100).toFixed(2).replace('.', ','));
                } else if (metodoDePagamento === "credito") {
                    return String("R$ " + ((valorTotal += valorTotal * 0.03) / 100).toFixed(2).replace('.', ','));
                }
            }
        
            const valorFinal = descontoTaxas(tipoPagamento, valorTotal);
            return valorFinal
        }
        
       
        


        const validaCodigo = validandoCodigo(itens);
        const validaPagamento = validandoPagamento(metodoDePagamento);
        const validaItem = validandoItens(itens);
        const validaCombo = validandoCombo(itens);
        const validaExtra =  validandoExtra(itens); 
        const validaQtd =  validandoQuantidade(itens);
        const somaValores = somandoValores(metodoDePagamento, itens) 

        if (validaPagamento) { 
          return validaPagamento
        } 
    
        if(validaQtd){
            return validaQtd
        }

        
        if(validaExtra){
            return validaExtra 
        }  
        
        if(validaCombo){
            return validaCombo
        }

        if(validaItem){
            return validaItem
        }        

        if(validaCodigo){
            return validaCodigo
        } 

        if(somaValores){
            return somaValores
        }
        
        
        
    }
}

export { CaixaDaLanchonete };




        
        
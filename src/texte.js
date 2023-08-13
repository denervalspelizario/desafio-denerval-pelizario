/*
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


function validandoItens(itens){

  const cardapio = bancodedados.cardapio;
  const valorItens = itens;
  const valorExtra = 'chantily';
  const valorExtra02 = 'queijo';

  if(valorItens.length === 0){
      return "Não há itens no carrinho de compra!"
  }

  
  const dados = valorItens.map(string => {
      const [item, quantidade] = string.split(',');
      return { item, quantidade };
  });

  const validandoItem = dados.find(dado => {
      return !cardapio.some(item => item.codigo === dado.item);
  });

  if (validandoItem) {
      return "Item inválido!";
  }

  const validandoQuantidade = dados.find(array => {
      return 0 === Number(array.quantidade);
  });

  if (validandoQuantidade) {
      return "Quantidade inválida!";
  }

  const validandoExtra = dados.find(array => {
      return valorExtra === array.item;
  });

  const validandoExtra02 = dados.find(array => {
      return valorExtra02 === array.item;
  });

  if (validandoExtra) {
      const validandoExtraChantily = dados.find(array => {
          return 'cafe' === array.item;
      });

      if (!validandoExtraChantily) {
          return "Item extra não pode ser pedido sem o principal";
      }
  }

  if (validandoExtra02) {
      const validandoSanduiche = dados.find(array => {
          return 'sanduiche' === array.item;
      });

      if (!validandoSanduiche) {
          return "Item extra não pode ser pedido sem o principal";
      }
  }
}


const itensComprados = ['cafe,1', 'chantily,1'];
const valorTotal = validandoItens(itensComprados);

console.log(valorTotal);





// valor excluido

const valorItens = itens;
const valorExtra = 'chantily';
const valorExtra02 = 'queijo';

if(!valorItens){
    return "Item inválido!"
}

const dados = valorItens.map(string => {
    const [item, quantidade] = string.split(',');
    return { item, quantidade };
});

if(dados.length === 0){
    return "Não há itens no carrinho de compra!"
}

const validandoItem = dados.find(dado => {
    return !cardapio.some(item => item.codigo === dado.item);
});

if (validandoItem) {
    return "Item inválido!";
}

const validandoQuantidade = dados.find(array => {
    return 0 === Number(array.quantidade);
});

if (validandoQuantidade) {
    return "Quantidade inválida!";
}

const validandoExtra = dados.find(array => {
    return valorExtra === array.item;
});

const validandoExtra02 = dados.find(array => {
    return valorExtra02 === array.item;
});

if (validandoExtra) {
    const validandoExtraChantily = dados.find(array => {
        return 'cafe' === array.item;
    });

    if (!validandoExtraChantily) {
        return "Item extra não pode ser pedido sem o principal";
    }
}

if (validandoExtra02) {
    const validandoSanduiche = dados.find(array => {
        return 'sanduiche' === array.item;
    });

    if (!validandoSanduiche) {
        return "Item extra não pode ser pedido sem o principal";
    }
}





const dados = valorItens.map(string => {
  const [item, quantidade] = string.split(',');
  return { item, quantidade };
});

const validandoQuantidade = dados.find((array) => {
  return valorErro === Number(array.quantidade);
});

const validandoExtra = dados.find((array) => {
  return valorExtra === array.item;
});

const validandoExtra02 = dados.find((array) => {
  return valorExtra02 === array.item;
});

if (validandoExtra) {
  const validandoExtraChantily = dados.find((array) => {
    return 'cafe' === array.item;
  });

  if (!validandoExtraChantily) {
    console.log("Item extra não pode ser pedido sem o principal");
  }
}

if (validandoExtra02) {
  const validandoSanduiche = dados.find((array) => {
    return 'sanduiche' === array.item;
  });

  if (!validandoSanduiche) {
    console.log("Item extra não pode ser pedido sem o principal");
  }
}

if (validandoQuantidade) {
  console.log("Quantidade inválida")
}


*/



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

  



function calcularValorDaCompra(metodoDePagamento, itens) {
      let cardapio = bancodedados.cardapio;

      // validando pagamento
      function validandoPagamento(metodoDePagamento){

        if(metodoDePagamento !== 'dinheiro' && metodoDePagamento !== 'credito' && metodoDePagamento !== 'debito'){
          return "Forma de pagamento inválida!"
        }
  
      }

      function validandoItens(itens){
    
        if (itens.length === 1 && itens[0] === '') {
          return "Não há itens no carrinho de compra!";
        }
      
        // validando item zero
        let dados = itens.map(string => {
          const [codigo, quantidade] = string.split(',');
          return { codigo, quantidade };
        });
        
  
        const itemZero = dados.find(item => item.quantidade === '0');
        
        if(itemZero) {
          return "Quantidade inválida!";
        }
        
      }

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
            console.log("Item extra não pode ser pedido sem o principal")
          }
        }
        if(itemChantily){
          const itemCafe = dados.find(item => item.codigo === 'cafe');
          if(!itemCafe){
            console.log("Item extra não pode ser pedido sem o principal")
          }
        }
      }

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

      function validandoCodigo(itens){

        let dados = itens.map(string => {
          const [codigo, quantidade] = string.split(',');
          return { codigo, quantidade };
        });

        const itemCodigo = dados.find((item) => {
          return item.codigo === 'cafe' || item.codigo === 'chantily' || item.codigo === 'suco' || item.codigo === 'sanduiche' || item.codigo === 'queijo' || item.codigo === 'salgado' || item.codigo === 'combo1' || item.codigo === 'combo2' 
        });

        if(!itemCodigo){
          console.log("Item inválido!")
        }



      }

      
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
                  console.log("R$ " + ((valorTotal -= valorTotal * 0.05) / 100).toFixed(2).replace('.', ','));
              } else if (metodoDePagamento === "debito") {
                  console.log("R$ " + (valorTotal / 100).toFixed(2).replace('.', ','));
              } else if (metodoDePagamento === "credito") {
                  console.log("R$ " + ((valorTotal += valorTotal * 0.03) / 100).toFixed(2).replace('.', ','));
              }
          }
      
          descontoTaxas(tipoPagamento, valorTotal);
      }
      
      somandoValores(metodoDePagamento, itens);

      console.log(typeof somandoValores(metodoDePagamento, itens))
      
  }

  calcularValorDaCompra('debito',['cafe,1', 'chantily,1'])







      
      
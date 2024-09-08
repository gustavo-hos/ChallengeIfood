export const INGREDIENTES = [
  'Tomate', 'Alface', 'Carne de Hambúrguer', 'Carne de Frango', 'Bacon',
  'Queijo', 'Calabresa', 'Pão', 'Massa de Pizza', 'Ovo', 'Azeitona', 'Cebola'
];

const PRODUTOS = [
  {
    nome: 'Hambúrguer Clássico',
    categoria: 'Prato Principal',
    preco: 18.90,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Hambúrguer Frango',
    categoria: 'Prato Principal',
    preco: 19.50,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Hambúrguer Bacon',
    categoria: 'Prato Principal',
    preco: 21.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Pizza Calabresa',
    categoria: 'Prato Principal',
    preco: 35.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Pizza Frango com Catupiry',
    categoria: 'Prato Principal',
    preco: 37.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Pizza Marguerita',
    categoria: 'Prato Principal',
    preco: 33.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Brownie de Chocolate',
    categoria: 'Sobremesa',
    preco: 12.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Sorvete de Baunilha',
    categoria: 'Sobremesa',
    preco: 10.50,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Petit Gateau',
    categoria: 'Sobremesa',
    preco: 14.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Refrigerante Cola',
    categoria: 'Acompanhamento',
    preco: 5.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Refrigerante Laranja',
    categoria: 'Acompanhamento',
    preco: 5.00,
    imagem: '/assets/images/comidas/comida.png'
  },
  {
    nome: 'Refrigerante Limão',
    categoria: 'Acompanhamento',
    preco: 5.00,
    imagem: '/assets/images/comidas/comida.png'
  }
];

export const ESTOQUE = [
  { nome: 'Tomate', quantidade: 30 },
  { nome: 'Alface', quantidade: 25 },
  { nome: 'Carne de Hambúrguer', quantidade: 40 },
  { nome: 'Carne de Frango', quantidade: 35 },
  { nome: 'Bacon', quantidade: 20 },
  { nome: 'Queijo', quantidade: 50 },
  { nome: 'Calabresa', quantidade: 30 },
  { nome: 'Pão', quantidade: 60 },
  { nome: 'Massa de Pizza', quantidade: 40 },
  { nome: 'Ovo', quantidade: 35 },
  { nome: 'Azeitona', quantidade: 20 },
  { nome: 'Cebola', quantidade: 25 },

  { nome: 'Brownie de Chocolate', quantidade: 15 },
  { nome: 'Sorvete de Baunilha', quantidade: 20 },
  { nome: 'Petit Gateau', quantidade: 10 },

  { nome: 'Refrigerante Cola', quantidade: 50 },
  { nome: 'Refrigerante Laranja', quantidade: 50 },
  { nome: 'Refrigerante Limão', quantidade: 50 }
];

export const ULTIMOS_PEDIDOS = [
  {
    cod: 'F001P001',
    origem: 'Desktop',
    tipo: 'Delivery',
    qtdItens: 4,
    valorFinal: 'R$ 74.00',
    status: 'Pagamento Realizado',
    abertura: '15/08/2023 14:35',
    tempo: '1h 45m'
  },
  {
    cod: 'F001P002',
    origem: 'Desktop',
    tipo: 'Comanda',
    qtdItens: 2,
    valorFinal: 'R$ 30.00',
    status: 'Cancelado',
    abertura: '16/08/2023 12:10',
    tempo: '45m'
  },
  {
    cod: 'F001P003',
    origem: 'Desktop',
    tipo: 'Delivery',
    qtdItens: 6,
    valorFinal: 'R$ 98.50',
    status: 'Pagamento Realizado',
    abertura: '17/08/2023 19:00',
    tempo: '2h 30m'
  },
  {
    cod: 'F001P004',
    origem: 'Desktop',
    tipo: 'Comanda',
    qtdItens: 1,
    valorFinal: 'R$ 18.00',
    status: 'Pagamento Realizado',
    abertura: '18/08/2023 09:30',
    tempo: '10m'
  },
  {
    cod: 'F001P005',
    origem: 'Desktop',
    tipo: 'Delivery',
    qtdItens: 8,
    valorFinal: 'R$ 135.75',
    status: 'Pagamento Realizado',
    abertura: '19/08/2023 20:15',
    tempo: '1h 30m'
  }
];

export const PRODUTOS_VENDIDOS = PRODUTOS.map((produto, index) => {
  const qtd = Math.floor(Math.random() * 100) + 1;
  const precoVenda = produto.preco;
  const precoCusto = (precoVenda * (Math.random() * (0.8 - 0.5) + 0.5)).toFixed(
    2);
  const valorVendido = (precoVenda * qtd).toFixed(2);
  const lucro = ((precoVenda - precoCusto) * qtd).toFixed(2);
  const margemLucro = (((precoVenda - precoCusto) / precoCusto) * 100).toFixed(
    2);

  let badgeClass = '';
  if (margemLucro > 50) {
    badgeClass = 'badge bg-light-success';
  } else if (margemLucro > 30) {
    badgeClass = 'badge bg-light-warning';
  } else {
    badgeClass = 'badge bg-light-danger';
  }

  let cod = index + 1;
  return {
    cod: `P0${cod < 10 ? '0' + cod : cod}`,
    nome: produto.nome,
    categoria: produto.categoria,
    precoCusto: `R$ ${precoCusto}`,
    precoVenda: `R$ ${precoVenda.toFixed(2)}`,
    qtd,
    valorVendido: `R$ ${valorVendido}`,
    lucro: `<span class="${badgeClass}">R$ ${lucro}</span>`,
    margemLucro: `${margemLucro}%`
  };
});

export function gerarPedidosPorDia(dataInicio = new Date(),
  dataFim = new Date(), diasIgnorados = []) {
  let pedidos = [];
  let millisDia = 24 * 60 * 60 * 1000;
  let inicio = new Date(dataInicio);
  let fim = new Date(dataFim);
  let precoMinimo = 3.50;
  let precoMaximo = 80;
  let custoVariavel = 0.7;

  const deveIgnorarDia = (data) => diasIgnorados.includes(data.getDay());

  const gerarPrecoProporcional = () => {
    const fatorAleatorio = Math.random();
    const preco = precoMinimo + (precoMaximo - precoMinimo) * (1 - Math.pow(
      fatorAleatorio, 3));
    return preco.toFixed(2);
  };

  const gerarPedidosProporcionais = () => {
    const fatorAleatorio = Math.random();
    const limiteInferior = 1;
    const limiteSuperior = 50;
    const valorProporcional = limiteInferior + Math.floor(
      (Math.pow(fatorAleatorio, 2) * (limiteSuperior - limiteInferior)));
    return valorProporcional;
  };

  const gerarItensPorPedidoProporcionais = () => {
    const fatorAleatorio = Math.random();
    const limiteInferior = 1;
    const limiteSuperior = 10;
    const valorProporcional = limiteInferior + Math.floor(
      (Math.pow(fatorAleatorio, 2) * (limiteSuperior - limiteInferior)));
    return valorProporcional;
  };

  const gerarValoresProporcionais = () => {
    const totalPedidos = gerarPedidosProporcionais();
    const totalItensPedido = gerarItensPorPedidoProporcionais();
    const precoPorItem = gerarPrecoProporcional();
    const valorBruto = totalItensPedido * precoPorItem * totalPedidos;
    const valorLiquido = valorBruto * custoVariavel;

    return {
      totalPedidos,
      totalItensPedido,
      valorBruto: valorBruto.toFixed(2),
      valorLiquido: valorLiquido.toFixed(2)
    };
  };

  for (let data = inicio; data <= fim;
    data = new Date(data.getTime() + millisDia)) {
    if (!deveIgnorarDia(data)) {
      const valores = gerarValoresProporcionais();
      pedidos.push({
        data: data.getTime(),
        ...valores
      });
    }
  }

  return pedidos;
}

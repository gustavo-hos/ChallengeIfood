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
  {
    cod: '001',
    nome: 'Tomate',
    categoria: 'Condimentos',
    precoCusto: 2.00,
    precoVenda: 3.50,
    quantidade: 30,
    validade: '2024-10-01',
    imagem: '/assets/images/produtos/tomate.png',
    status: 'OK'
  },
  {
    cod: '002',
    nome: 'Alface',
    categoria: 'Condimentos',
    precoCusto: 1.00,
    precoVenda: 2.00,
    quantidade: 5,
    validade: '2024-09-10',
    imagem: '/assets/images/produtos/alface.png',
    status: 'ALERTA'
  },
  {
    cod: '003',
    nome: 'Carne de Hambúrguer',
    categoria: 'Carnes',
    precoCusto: 7.00,
    precoVenda: 12.00,
    quantidade: 40,
    validade: '2024-09-30',
    imagem: '/assets/images/produtos/carne.png',
    status: 'OK'
  },
  {
    cod: '004',
    nome: 'Carne de Frango',
    categoria: 'Carnes',
    precoCusto: 6.50,
    precoVenda: 10.00,
    quantidade: 2,
    validade: '2024-09-05',
    imagem: '/assets/images/produtos/frango.png',
    status: 'CRÍTICO'
  },
  {
    cod: '005',
    nome: 'Bacon',
    categoria: 'Carnes',
    precoCusto: 4.00,
    precoVenda: 8.00,
    quantidade: 20,
    validade: '2024-09-15',
    imagem: '/assets/images/produtos/bacon.png',
    status: 'OK'
  },
  {
    cod: '006',
    nome: 'Queijo',
    categoria: 'Laticínios',
    precoCusto: 5.00,
    precoVenda: 9.00,
    quantidade: 50,
    validade: '2024-12-01',
    imagem: '/assets/images/produtos/kaas.png',
    status: 'OK'
  },
  {
    cod: '007',
    nome: 'Refrigerante Cola',
    categoria: 'Bebidas',
    precoCusto: 2.50,
    precoVenda: 5.00,
    quantidade: 10,
    validade: '2024-08-20',
    imagem: '/assets/images/produtos/cola.png',
    status: 'CRÍTICO'
  },
  {
    cod: '008',
    nome: 'Calabresa',
    categoria: 'Carnes',
    precoCusto: 6.00,
    precoVenda: 10.00,
    quantidade: 10,
    validade: '2024-10-20',
    imagem: '/assets/images/produtos/calabresa.png',
    status: 'ALERTA'
  },
  {
    cod: '009',
    nome: 'Massa de Pizza',
    categoria: 'Massas',
    precoCusto: 3.00,
    precoVenda: 6.50,
    quantidade: 12,
    validade: '2024-09-28',
    imagem: '/assets/images/produtos/massa_pizza.png',
    status: 'OK'
  },
  {
    cod: '010',
    nome: 'Brownie de Chocolate',
    categoria: 'Sobremesas',
    precoCusto: 4.00,
    precoVenda: 7.00,
    quantidade: 8,
    validade: '2024-11-30',
    imagem: '/assets/images/produtos/brownie.png',
    status: 'OK'
  },
  {
    cod: '011',
    nome: 'Caixa Ovos 64un.',
    categoria: 'Condimentos',
    precoCusto: 92.00,
    precoVenda: 115.50,
    quantidade: 22,
    validade: '2024-11-30',
    imagem: '/assets/images/produtos/eggs.png',
    status: 'OK'
  },
  {
    cod: '012',
    nome: 'Azeitonas',
    categoria: 'Condimentos',
    precoCusto: 63.89,
    precoVenda: 94,
    quantidade: 9,
    validade: '2024-11-30',
    imagem: '/assets/images/produtos/olives.png',
    status: 'OK'
  },
  {
    cod: '013',
    nome: 'Pao 130un.',
    categoria: 'Condimentos',
    precoCusto: 122.89,
    precoVenda: 150,
    quantidade: 2,
    validade: '2024-11-30',
    imagem: '/assets/images/produtos/pao.png',
    status: 'ALERTA'
  },
  {
    cod: '014',
    nome: 'Refrigerante Limão',
    categoria: 'Bebidas',
    precoCusto: 1.29,
    precoVenda: 3.50,
    quantidade: 130,
    validade: '2024-11-30',
    imagem: '/assets/images/produtos/lemon_frisdrank.png',
    status: 'OK'
  },
  {
    cod: '014',
    nome: 'Refrigerante Laranja',
    categoria: 'Bebidas',
    precoCusto: 1.29,
    precoVenda: 3.50,
    quantidade: 130,
    validade: '2024-11-30',
    imagem: '/assets/images/produtos/fanta_frisdrank_sinaasappel.webp',
    status: 'OK'
  }
];

export const SUGESTOES_PRODUTOS = [
  { nome: 'Cerveja Artesanal', estimativaConsumo: 45 },
  { nome: 'Hambúrguer Vegetariano', estimativaConsumo: 30 },
  { nome: 'Pizza de Quatro Queijos', estimativaConsumo: 50 },
  { nome: 'Brownie com Sorvete', estimativaConsumo: 35 },
  { nome: 'Batata Frita com Cheddar e Bacon', estimativaConsumo: 40 },
  { nome: 'Pizza de Frango com Catupiry', estimativaConsumo: 55 },
  { nome: 'Cerveja Pilsen', estimativaConsumo: 60 },
  { nome: 'Refrigerante Zero Açúcar', estimativaConsumo: 70 },
  { nome: 'Caipirinha', estimativaConsumo: 20 },
  { nome: 'Batata Rústica com Alho e Alecrim', estimativaConsumo: 40 },
  { nome: 'Pizza de Calabresa', estimativaConsumo: 65 },
  { nome: 'Milkshake de Nutella', estimativaConsumo: 30 },
  { nome: 'Cerveja Lager', estimativaConsumo: 50 },
  { nome: 'Tiramisu', estimativaConsumo: 20 },
  { nome: 'Suco de Laranja', estimativaConsumo: 35 },
  { nome: 'Margarita', estimativaConsumo: 15 },
  { nome: 'Cerveja Weiss', estimativaConsumo: 40 },
  { nome: 'Pizza de Marguerita', estimativaConsumo: 45 },
  { nome: 'Chopp Claro', estimativaConsumo: 60 },
  { nome: 'Batata Francesa', estimativaConsumo: 50 }
];

export const ESTOQUE_ = [
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

export const LOCALIZACAO_CLIENTES = [
  { lat: 51.070993124349776, lon: 3.708264094198202, freq: 54 },
  { lat: 51.07747793243177, lon: 3.7060266780899522, freq: 66 },
  { lat: 51.06124152771547, lon: 3.693756976851163, freq: 76 },
  { lat: 51.065947055512666, lon: 3.7490937664461708, freq: 42 },
  { lat: 51.081963108940485, lon: 3.708066341124749, freq: 32 },
  { lat: 51.06014940338114, lon: 3.7277303733793943, freq: 23 },
  { lat: 51.05165143754618, lon: 3.732527131044817, freq: 5 },
  { lat: 51.049790659034514, lon: 3.7299753695892046, freq: 12 },
  { lat: 51.04995107391987, lon: 3.717267597540257, freq: 56 },
  { lat: 51.05566148187558, lon: 3.7147158360846446, freq: 33 },
  { lat: 51.05206849833543, lon: 3.713031673523941, freq: 46 },
  { lat: 51.05979948353667, lon: 3.733547835627061, freq: 28 },
  { lat: 51.06457857558777, lon: 3.7206869578907766, freq: 23 },
  { lat: 51.05800318715431, lon: 3.702671522014157, freq: 79 },
  { lat: 51.052742203984074, lon: 3.7118578632543597, freq: 12 },
  { lat: 51.054731182526595, lon: 3.737375477810479, freq: 6 },
  { lat: 51.06361638195569, lon: 3.7294139820689693, freq: 68 },
  { lat: 51.06525209923034, lon: 3.7231876841172773, freq: 96 },
  { lat: 51.068042307066136, lon: 3.7155834349795533, freq: 23 },
  { lat: 51.070287179769785, lon: 3.7088978199658493, freq: 56 },
  { lat: 51.06483515717858, lon: 3.699405267350974, freq: 78 },
  { lat: 51.063295646300574, lon: 3.6914948068385764, freq: 76 },
  { lat: 51.05190809078404, lon: 3.7038453322837377, freq: 29 },
  { lat: 51.05514443851408, lon: 3.7514236310999824, freq: 5 },
  { lat: 51.076884240469475, lon: 3.767567558815216, freq: 8 },
  { lat: 51.08267979663993, lon: 3.775093299554649, freq: 28 },
  { lat: 51.07947707902683, lon: 3.7567644793666766, freq: 85 },
  { lat: 51.08161224873761, lon: 3.710274822863408, freq: 17 }
];

export const DADOS_RECEBIVEIS = [
  {
    cod: '001',
    tipoTransacao: 'Entrada',
    descricao: 'Pagamento imediato de pedido #1234',
    categoria: 'Venda',
    valor: 450.00,
    data: '2024-09-01',
    status: 'Pago',
    tipoPagamento: 'Cartão de Crédito',
    observacoes: 'Pedido de cliente regular'
  },
  {
    cod: '002',
    tipoTransacao: 'Entrada',
    descricao: 'Adiantamento para evento de casamento',
    categoria: 'Evento',
    valor: 1000.00,
    data: '2024-09-05',
    status: 'Pendente',
    tipoPagamento: 'Transferência Bancária',
    observacoes: '50% do valor total'
  },
  {
    cod: '003',
    tipoTransacao: 'Saída',
    descricao: 'Compra de insumos',
    categoria: 'Insumos',
    valor: 300.00,
    data: '2024-09-02',
    status: 'Pago',
    tipoPagamento: 'Dinheiro',
    observacoes: 'Comprado de fornecedor local'
  },
  {
    cod: '004',
    tipoTransacao: 'Entrada',
    descricao: 'Pagamento de encomenda #5678',
    categoria: 'Encomenda',
    valor: 650.00,
    data: '2024-09-07',
    status: 'Pago',
    tipoPagamento: 'Pix',
    observacoes: 'Encomenda para festa de aniversário'
  },
  {
    cod: '005',
    tipoTransacao: 'Saída',
    descricao: 'Pagamento a fornecedor',
    categoria: 'Fornecedores',
    valor: 500.00,
    data: '2024-09-04',
    status: 'Pendente',
    tipoPagamento: 'Boleto',
    observacoes: 'Parcelado em 3 vezes'
  },
  {
    cod: '006',
    tipoTransacao: 'Entrada',
    descricao: 'Pagamento por serviços de consultoria',
    categoria: 'Consultoria',
    valor: 750.00,
    data: '2024-09-10',
    status: 'Pago',
    tipoPagamento: 'Transferência Bancária',
    observacoes: 'Consultoria financeira'
  },
  {
    cod: '007',
    tipoTransacao: 'Saída',
    descricao: 'Compra de equipamentos de cozinha',
    categoria: 'Equipamentos',
    valor: 1200.00,
    data: '2024-09-08',
    status: 'Pago',
    tipoPagamento: 'Cartão de Crédito',
    observacoes: 'Equipamentos novos para a cozinha'
  },
  {
    cod: '008',
    tipoTransacao: 'Entrada',
    descricao: 'Recebimento de conta atrasada',
    categoria: 'Recebíveis',
    valor: 500.00,
    data: '2024-09-09',
    status: 'Pago',
    tipoPagamento: 'Pix',
    observacoes: 'Cliente pagou com atraso'
  }
];

export const PEDIDOS_PAGAMENTO = [
  { metodo: 'Pix', quantidade: 150 },
  { metodo: 'Cartão de Débito/Crédito', quantidade: 200 },
  { metodo: 'Dinheiro', quantidade: 80 },
  { metodo: 'Vale Alimentação', quantidade: 50 },
  { metodo: 'Cartão iFood', quantidade: 20 }
];

export const RECEITAS_ORIGEM = [
  { origem: 'Vendas Diretas', quantidade: 600 },
  { origem: 'Encomendas', quantidade: 150 },
  { origem: 'Eventos', quantidade: 100 },
  { origem: 'Delivery iFood', quantidade: 80 }
];

export const CANAIS_VENDA = [
  { canal: 'Loja Física', quantidade: 400 },
  { canal: 'Delivery iFood', quantidade: 300 },
  { canal: 'Site', quantidade: 150 },
  { canal: 'Telefone', quantidade: 50 }
];

export const OPERACOES_CAIXA = [
  {
    data: '2024-09-08 09:00',
    operador: 'João Silva',
    tipo: 'Abertura de Caixa',
    valor: 'R$ 500,00',
    status: 'Concluído',
    metodoPagamento: '-',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 12:54',
    operador: 'João Silva',
    tipo: 'Entrada (Pagamento de Pedido #123)',
    valor: 'R$ 200,00',
    status: 'Concluído',
    metodoPagamento: 'Pix',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 13:16',
    operador: 'João Silva',
    tipo: 'Entrada (Pagamento de Pedido #321)',
    valor: 'R$ 76,93',
    status: 'Concluído',
    metodoPagamento: 'Cartao de Debito (PinPad)',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 12:15',
    operador: 'João Silva',
    tipo: 'Entrada (Pagamento de Pedido #555)',
    valor: 'R$ 200,00',
    status: 'Concluído',
    metodoPagamento: 'Pix',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 13:32',
    operador: 'João Silva',
    tipo: 'Entrada (Pagamento de Pededo #333)',
    valor: 'R$ 23,45',
    status: 'Concluído',
    metodoPagamento: 'Pix',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 13:20',
    operador: 'João Silva',
    tipo: 'Saída (Compra de insumos)',
    valor: 'R$ 150,00',
    status: 'Concluído',
    metodoPagamento: 'Cartão de Débio (PinPad)',
    cor: 'text-danger'
  },
  {
    data: '2024-09-08 16:30',
    operador: 'Maria Souza',
    tipo: 'Entrada (Pagamento de Evento)',
    valor: 'R$ 1000,00',
    status: 'Concluído',
    metodoPagamento: 'Cartão de Crédito (POS)',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 17:30',
    operador: 'Maria Souza',
    tipo: 'Entrada (Pagamento de Pededo #445)',
    valor: 'R$ 123,54',
    status: 'Cancelado',
    metodoPagamento: 'Cartão de Crédito (POS)',
    cor: 'text-danger'
  },
  {
    data: '2024-09-08 17:22',
    operador: 'Maria Souza',
    tipo: 'Entrada (Pagamento de Pededo #654)',
    valor: 'R$ 9,00',
    status: 'Concluído',
    metodoPagamento: 'Pix',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 17:00',
    operador: 'Maria Souza',
    tipo: 'Saída (Pagamento de Fornecedor)',
    valor: 'R$ 300,00',
    status: 'Concluído',
    metodoPagamento: 'Transferência Bancária',
    cor: 'text-danger'
  },
  {
    data: '2024-09-08 19:00',
    operador: 'Maria Souza',
    tipo: 'Entrada (Adiantamento de Encomenda)',
    valor: 'R$ 400,00',
    status: 'Concluído',
    metodoPagamento: 'Dinheiro',
    cor: 'text-success'
  },
  {
    data: '2024-09-08 21:30',
    operador: 'Maria Souza',
    tipo: 'Fechamento de Caixa',
    valor: 'R$ 2000,00',
    status: 'Concluído',
    metodoPagamento: '-',
    cor: 'text-success'
  }
];

export const CARGOS = [
  {
    id: 1,
    nome: 'Gerente',
    dataCriacao: '2024-01-01',
    permissoes: ['Gerenciar Funcionários', 'Gerenciar Caixa', 'Visualizar Relatórios']
  },
  {
    id: 2,
    nome: 'Caixa',
    dataCriacao: '2024-02-01',
    permissoes: ['Operar Caixa', 'Visualizar Vendas']
  },
  {
    id: 3,
    nome: 'Atendente',
    dataCriacao: '2024-03-01',
    permissoes: ['Atender Clientes', 'Cadastrar Pedidos']
  },
  {
    id: 4,
    nome: 'Supervisor',
    dataCriacao: '2024-04-01',
    permissoes: ['Supervisionar Atendimento', 'Visualizar Caixa']
  },
  {
    id: 5,
    nome: 'Cozinheiro',
    dataCriacao: '2024-05-01',
    permissoes: ['Preparar Pratos', 'Gerenciar Estoque']
  }
];

export const USUARIOS = [
  {
    nome: 'João',
    sobrenome: 'Silva',
    email: 'joao.silva@empresa.com',
    dataCriacao: '2024-01-15',
    cargoId: 1,
    status: 'Ativo'
  },
  {
    nome: 'Maria',
    sobrenome: 'Souza',
    email: 'maria.souza@empresa.com',
    dataCriacao: '2024-02-10',
    cargoId: 2,
    status: 'Ativo'
  },
  {
    nome: 'Carlos',
    sobrenome: 'Pereira',
    email: 'carlos.pereira@empresa.com',
    dataCriacao: '2024-03-05',
    cargoId: 3,
    status: 'Inativo'
  },
  {
    nome: 'Ana',
    sobrenome: 'Costa',
    email: 'ana.costa@empresa.com',
    dataCriacao: '2024-04-20',
    cargoId: 4,
    status: 'Ativo'
  },
  {
    nome: 'Pedro',
    sobrenome: 'Alves',
    email: 'pedro.alves@empresa.com',
    dataCriacao: '2024-05-30',
    cargoId: 5,
    status: 'Inativo'
  }
];

export const RELATORIOS = [
  {
    nome: 'Relatório Financeiro',
    formato: 'PDF',
    dataCriacao: '2024-01-10',
    ultimaGeracao: '2024-02-01'
  },
  {
    nome: 'Relatório de Vendas',
    formato: 'Excel',
    dataCriacao: '2024-01-15',
    ultimaGeracao: '2024-02-05'
  },
  {
    nome: 'Relatório de Estoque',
    formato: 'PDF',
    dataCriacao: '2024-01-20',
    ultimaGeracao: '2024-02-10'
  }
];


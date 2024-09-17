import 'reflect-metadata';
import $ from 'jquery';
import moment from 'moment';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import {
  gerarPedidosPorDia,
  LOCALIZACAO_CLIENTES, PRODUTOS_VENDIDOS
} from '../mock-data';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap-daterangepicker/daterangepicker.js';
import {
  DTTABLE_TEXTOS,
  formatNumeroBR,
  RANGEPICKER_TEXTOS
} from '../util/util';

const dataInicio = moment().subtract(1, 'days').startOf('day').toDate();
const dataFim = moment().subtract(1, 'days').endOf('day').toDate();
const pedidos = gerarPedidosPorDia(dataInicio, dataFim, [], true);
const coresBase = ['#ea1d2c', '#FF7D78', '#FFB2B0'];
const apexData = pedidos.map(pedido => [pedido.data, pedido.valorLiquido]);

let chartPedidosOrigem;
let chartPedidosTipo;
let chartPedidosHoraDia;
let chartPedidosDiaSemana;
let chartUltimosPedidos;

const options = {
  chart: {
    type: 'area',
    height: 350,
    animations: { enabled: true, easing: 'easeinout', speed: 800 },
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 3,
      opacity: 0.2,
      color: '#ea1d2c'
    }
  },
  dataLabels: { enabled: false },
  series: [{ name: 'Valor Líquido', data: apexData }],
  stroke: { curve: 'smooth', width: 3 },
  markers: {
    size: 4,
    colors: ['#ea1d2c'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: { size: 6 }
  },
  colors: ['#ea1d2c'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      type: 'vertical',
      shade: 'dark',
      gradientToColors: ['#FF7D78'],
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 100]
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'dd MMM HH:mm',
      style: { colors: '#333', fontSize: '12px', fontWeight: 600 }
    }
  },
  yaxis: {
    labels: { style: { colors: '#333', fontSize: '12px', fontWeight: 600 } }
  },
  tooltip: { theme: 'dark', x: { format: 'dd MMM HH:mm' } },
  grid: { borderColor: '#e7e7e7', strokeDashArray: 5 },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};

const optionsPedidosDiaSemana = {
  chart: {
    type: 'bar',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [
    { name: 'Qtd de Itens', data: gerarDadosAleatorios(50, 200, 7) },
    { name: 'Valor', data: gerarDadosAleatorios(1000, 5000, 7) }
  ],
  xaxis: {
    categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    labels: {
      style: {
        colors: '#333',
        fontSize: '12px',
        fontWeight: 600
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#333',
        fontSize: '12px',
        fontWeight: 600
      }
    }
  },
  fill: {
    opacity: 1,
    colors: coresBase
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: '#f1f1f1'
  },
  colors: coresBase
};

const optionsPedidosHoraDia = {
  chart: {
    type: 'bar',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [
    { name: 'Qtd de Itens', data: gerarDadosAleatorios(10, 100, 24) },
    { name: 'Valor', data: gerarDadosAleatorios(100, 1000, 24) }
  ],
  xaxis: {
    categories: [...Array(24).keys()].map(i => `${i}:00`),
    labels: {
      style: {
        colors: '#333',
        fontSize: '12px',
        fontWeight: 600
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#333',
        fontSize: '12px',
        fontWeight: 600
      }
    }
  },
  fill: {
    opacity: 1,
    colors: coresBase
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: '#f1f1f1'
  },
  colors: coresBase
};

const optionsPedidosTipo = {
  chart: {
    type: 'pie',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    }
  },
  series: gerarDadosAleatorios(100, 300, 2),
  labels: ['Balcão', 'Delivery'],
  colors: coresBase,
  tooltip: {
    theme: 'dark'
  },
  fill: {
    type: 'solid',
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }
};

const optionsPedidosOrigem = {
  chart: {
    type: 'pie',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    }
  },
  series: gerarDadosAleatorios(50, 250, 3),
  labels: ['iFood', 'Balcão', 'Site Online'],
  colors: coresBase,
  tooltip: {
    theme: 'dark'
  },
  fill: {
    type: 'solid',
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }
};

function gerarDadosAleatorios(min, max, quantidade) {
  let dados = [];
  for (let i = 0; i < quantidade; i++) {
    dados.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return dados;
}

const initGraficos = () => {
  chartPedidosOrigem = new ApexCharts(
    document.querySelector('#pedidos-origem'), optionsPedidosOrigem);
  chartPedidosOrigem.render().then(() => {
    atualizarGrafico('1M');
  });

  chartPedidosTipo = new ApexCharts(document.querySelector('#pedidos-tipo'),
    optionsPedidosTipo);
  chartPedidosTipo.render();

  chartPedidosHoraDia = new ApexCharts(
    document.querySelector('#pedidos-hora-dia'), optionsPedidosHoraDia);
  chartPedidosHoraDia.render();

  chartPedidosDiaSemana = new ApexCharts(
    document.querySelector('#pedidos-dia-semana'), optionsPedidosDiaSemana);
  chartPedidosDiaSemana.render();

  chartUltimosPedidos = new ApexCharts(
    document.querySelector('#vendas-chart'), options);
  chartUltimosPedidos.render();
};

const setupAWSMapa = () => {
  const yek_IPA = 'v1.public.eyJqdGkiOiJlYzg2YzA3Yy1hM2VjLTQ1NDYtOGU0MC1mM2YzNDA4OGZiMDQifQN8hb0mtg9R13e2DecvdM4rd35-IurOIO3BWoL7l65UC0-815DMw01Q3Iqj5A875A0EpT4h_Y4_CU0Twlw25ivgxP2ktKgdjpR7ub4w8UhOX_9d404kVNBjvPHvdg6PYUv5ECrEvirzEBy3TKqYxCO9Yv__4-3ZlTbWpKAZERQQjIuyZnUQ2top5JUIn2V8efqIq4aEPET8ezUnTv2JjpWSiPbFFabGRL_6SP-B8BslKw-qlb5CMyvWMYKYBU1mgzlEqbPJCYq9XnqXXlGVBneHwnqgvyqnWkWeqf2MlsB2RGtHcsJC25vHyzoBcFX-ieCOkCfcLbyE47FyNyBPnqc.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx';
  const mapName = 'challenge-ifood';
  const region = 'us-east-1';

  const map = new maplibregl.Map({
    container: 'map-localizacao-clientes',
    style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${yek_IPA}`,
    center: [3.697648867388423, 51.06331409793885],
    zoom: 11
  });

  map.addControl(new maplibregl.NavigationControl(), 'top-left');

  const getCorMarcador = (freq) => {
    if (freq <= 30) {
      return { color: 'red', label: 'Cliente eventual' };
    } else if (freq <= 60) {
      return { color: 'yellow', label: 'Cliente pouco frequente' };
    } else {
      return { color: 'green', label: 'Cliente frequente' };
    }
  }

  const marcadores = {
    type: 'FeatureCollection',
    features: LOCALIZACAO_CLIENTES.map(cliente => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [cliente.lon, cliente.lat]
      },
      properties: {
        freq: cliente.freq
      }
    }))
  };

  map.on('load', () => {
    map.addSource('clientes', {
      type: 'geojson',
      data: marcadores,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
    });

    map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'clientes',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6',
          100,
          '#f1f075',
          750,
          '#f28cb1'
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          15,
          100,
          20,
          750,
          25
        ]
      }
    });

    map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'clientes',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['Amazon Ember Regular Italic','Noto Sans Italic'],
        'text-size': 12
      }
    });

    map.addLayer({
      id: 'unclustered-points',
      type: 'circle',
      source: 'clientes',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': [
          'case',
          ['<=', ['get', 'freq'], 30], 'red',
          ['<=', ['get', 'freq'], 60], 'yellow',
          'green'
        ],
        'circle-radius': 10
      }
    });

    map.on('click', 'unclustered-points', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const freq = e.features[0].properties.freq;
      const { label } = getCorMarcador(freq);

      new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(`<strong>${label}</strong>`)
      .addTo(map);
    });

    map.on('click', 'clusters', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });
      const clusterId = features[0].properties.cluster_id;
      map.getSource('clientes').getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom
        });
      });
    });

    map.on('mouseenter', 'clusters', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', () => {
      map.getCanvas().style.cursor = '';
    });
  });
};

const atualizarGrafico = (range) => {
  const hoje = moment();
  let dataInicio, dataFim;

  switch (range) {
    case '1M':
      dataInicio = moment().subtract(1, 'months').startOf('day').toDate();
      break;
    case '6M':
      dataInicio = moment().subtract(6, 'months').startOf('day').toDate();
      break;
    case '1A':
      dataInicio = moment().subtract(1, 'years').startOf('day').toDate();
      break;
    case 'all':
      dataInicio = hoje.clone().subtract(3, 'years').toDate();
      break;
  }

  dataFim = moment().endOf('day').toDate();
  const pedidosResumo = gerarPedidosPorDia(dataInicio, dataFim);
  const apexDataResumo = pedidosResumo.map(
    pedido => [pedido.data, pedido.valorLiquido]);

  chartUltimosPedidos.updateSeries(
    [{ name: 'Valor Líquido', data: apexDataResumo }]);

  let totalPedidosTotal = 0;
  let totalRecebidoTotal = 0;
  let totalItensTotal = 0;

  pedidosResumo.forEach(pedido => {
    totalPedidosTotal += pedido.totalPedidos;
    totalRecebidoTotal += parseFloat(pedido.valorLiquido);
    totalItensTotal += pedido.totalPedidos * pedido.totalItensPedido;
  });

  const valorMedio = totalRecebidoTotal / totalPedidosTotal || 0;
  const mediaItens = totalItensTotal / totalPedidosTotal || 0;

  $('#total-pedidos').text(totalPedidosTotal);
  $('#total-recebido').text('R$ ' + formatNumeroBR(totalRecebidoTotal));
  $('#valor-medio').text('R$ ' + formatNumeroBR(valorMedio));
  $('#total-itens').text(totalItensTotal);
  $('#media-itens').text(mediaItens.toFixed(2));
};

const setBotaoAtivo = (buttonId) => {
  $('button').removeClass('active');
  $(buttonId).addClass('active');
};

$(() => {

  initGraficos();
  setupAWSMapa();

  $('#periodo-datepicker').daterangepicker({
    timePicker: true,
    timePicker24Hour: true,
    timePickerSeconds: true,
    startDate: moment().startOf('day'),
    endDate: moment().endOf('day'),
    locale: RANGEPICKER_TEXTOS
  }, function(start, end) {
    $('#vendas-dia-datepicker').val(
      start.format('YYYY-MM-DD HH:mm:ss') + ' - ' + end.format(
        'YYYY-MM-DD HH:mm:ss')
    );
  });

  $('#tabela-produtos-vendidos').dataTable({
    data: PRODUTOS_VENDIDOS,
    columns: [
      { title: 'Cod.', data: 'cod' },
      { title: 'Nome', data: 'nome' },
      { title: 'Categoria', data: 'categoria' },
      { title: 'Preco de Custo', data: 'precoCusto', className: 'text-center' },
      { title: 'Preco de Venda', data: 'precoVenda', className: 'text-center' },
      { title: 'Qtd.', data: 'qtd', className: 'text-center' },
      {
        title: 'Valor Vendido',
        data: 'valorVendido',
        className: 'text-center'
      },
      {
        title: 'Lucro',
        data: 'lucro',
        className: 'text-center',
        orderable: false,
        searchable: false
      },
      {
        title: 'Margem de Lucro',
        data: 'margemLucro',
        className: 'text-center'
      }
    ],
    responsive: true,
    language: DTTABLE_TEXTOS
  });

  $('#vendas-dia-datepicker').val(
    moment().startOf('day').format('YYYY-MM-DD HH:mm:ss') + ' - '
    + moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  );

  $('#1d').click(() => {
    atualizarGrafico('1D');
    setBotaoAtivo('#1d');
  });

  $('#1m').click(() => {
    atualizarGrafico('1M');
    setBotaoAtivo('#1m');
  });

  $('#6m').click(() => {
    atualizarGrafico('6M');
    setBotaoAtivo('#6m');
  });

  $('#1a').click(() => {
    atualizarGrafico('1A');
    setBotaoAtivo('#1a');
  });

  $('#tudo').click(() => {
    atualizarGrafico('all');
    setBotaoAtivo('#tudo');
  });
});
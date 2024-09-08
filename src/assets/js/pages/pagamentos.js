import 'reflect-metadata';
import $ from 'jquery';
import moment from 'moment';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import { gerarPedidosPorDia, ULTIMOS_PEDIDOS } from '../mock-data';
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
const apexData = pedidos.map(pedido => [pedido.data, pedido.valorLiquido]);

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
  const apexDataResumo = pedidosResumo.map(pedido => [pedido.data, pedido.valorLiquido]);

  chartUltimosPedidos.updateSeries([{ name: 'Valor Líquido', data: apexDataResumo }]);

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
      color: '#ea1d2c',
    },
  },
  dataLabels: { enabled: false },
  series: [{ name: 'Valor Líquido', data: apexData }],
  stroke: { curve: 'smooth', width: 3 },
  markers: {
    size: 4,
    colors: ['#ea1d2c'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: { size: 6 },
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
      stops: [0, 100],
    },
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'dd MMM HH:mm',
      style: { colors: '#333', fontSize: '12px', fontWeight: 600 },
    },
  },
  yaxis: {
    labels: { style: { colors: '#333', fontSize: '12px', fontWeight: 600 } },
  },
  tooltip: { theme: 'dark', x: { format: 'dd MMM HH:mm' } },
  grid: { borderColor: '#e7e7e7', strokeDashArray: 5 },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
};

const chartUltimosPedidos = new ApexCharts(document.querySelector('#vendas-chart'), options);
chartUltimosPedidos.render();

function gerarDadosAleatorios(min, max, quantidade) {
  let dados = [];
  for (let i = 0; i < quantidade; i++) {
    dados.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return dados;
}

const coresBase = ['#ea1d2c', '#FF7D78', '#FFB2B0'];

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
      borderRadius: 4,
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
    { name: 'Valor', data: gerarDadosAleatorios(1000, 5000, 7) },
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
    borderColor: '#f1f1f1',
  },
  colors: coresBase
};

const chartPedidosDiaSemana = new ApexCharts(document.querySelector("#pedidos-dia-semana"), optionsPedidosDiaSemana);
chartPedidosDiaSemana.render();

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
      borderRadius: 4,
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
    { name: 'Valor', data: gerarDadosAleatorios(100, 1000, 24) },
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
    borderColor: '#f1f1f1',
  },
  colors: coresBase
};

const chartPedidosHoraDia = new ApexCharts(document.querySelector("#pedidos-hora-dia"), optionsPedidosHoraDia);
chartPedidosHoraDia.render();

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

const chartPedidosTipo = new ApexCharts(document.querySelector("#pedidos-tipo"), optionsPedidosTipo);
chartPedidosTipo.render();

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

const chartPedidosOrigem = new ApexCharts(document.querySelector("#pedidos-origem"), optionsPedidosOrigem);
chartPedidosOrigem.render();

$(() => {
  $('#vendas-dia-datepicker').daterangepicker({
    timePicker: true,
    timePicker24Hour: true,
    timePickerSeconds: true,
    startDate: moment().startOf('day'),
    endDate: moment().endOf('day'),
    locale: RANGEPICKER_TEXTOS,
  }, function(start, end) {
    $('#vendas-dia-datepicker').val(
      start.format('YYYY-MM-DD HH:mm:ss') + ' - ' + end.format('YYYY-MM-DD HH:mm:ss')
    );
  });

  $('#tabela-ultimos-pedidos').dataTable({
    data: ULTIMOS_PEDIDOS,
    columns: [
      {
        title: 'Cod.', data: 'cod',
        className: 'text-center'
      },
      {
        title: 'Origem',
        data: 'origem',
        render: (data) => {
          return `<span class="badge bg-light-secondary">${data}</span>`;
        },
        className: 'text-center'
      },
      {
        title: 'Tipo',
        data: 'tipo',
        render: (data) => {
          return `<span class="badge bg-light-secondary">${data}</span>`;
        },
        className: 'text-center'
      },
      {
        title: 'Qtd. Itens', data: 'qtdItens',
        className: 'text-center'
      },
      {
        title: 'Valor Final', data: 'valorFinal',
        className: 'text-center'
      },
      {
        title: 'Status',
        data: 'status',
        render: (data) => {
          if (data === 'Cancelado') {
            return `<span class="badge bg-light-danger">${data}</span>`;
          } else {
            return `<span class="badge bg-light-success">${data}</span>`;
          }
        },
        className: 'text-center'
      },
      {
        title: 'Abertura', data: 'abertura',
        className: 'text-center'
      },
      {
        title: 'Tempo', data: 'tempo',
        className: 'text-center'
      }
    ],
    responsive: true,
    language: DTTABLE_TEXTOS
  });

  $('#vendas-dia-datepicker').val(
    moment().startOf('day').format('YYYY-MM-DD HH:mm:ss') + ' - ' + moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  );

  atualizarGrafico('1M');

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
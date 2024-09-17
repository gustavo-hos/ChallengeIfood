import 'reflect-metadata';
import container from '../inversify/inversify.config';
import TYPES from '../inversify/types';

import $ from 'jquery';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import { DTTABLE_TEXTOS, valueToPercent } from '../util/util';

import { PRODUTOS_VENDIDOS, ULTIMOS_PEDIDOS } from '../mock-data';

const _toasterService = container.get(TYPES.ToasterService);
const _objetivoLucro = localStorage.getItem('objetivoLucro') ?? 10;

let optMargemLucro = {
  series: [valueToPercent(7, _objetivoLucro)],
  chart: {
    height: 375,
    type: 'radialBar'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
        background: 'transparent',
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front'
      },
      track: {
        background: '#bec8d0',
        strokeWidth: '50%'
      },

      dataLabels: {
        show: true,
        name: {
          show: false
        },
        value: {
          formatter: function(val) {
            return parseInt((val * _objetivoLucro) / 100) + '%';
          },
          offsetY: 7,
          color: '#ea1d2c',
          fontSize: '28px',
          fontWeight: '700',
          show: true
        }
      }
    }
  },
  colors: ['#ea1d2c'],
  fill: {
    type: 'solid'
  },
  stroke: {
    lineCap: 'round'
  },
  annotations: {
    position: 'front',
    texts: [{
      text: '% Margem de Lucro',
      x: '50%',
      y: '40%',
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'iFoodRCTitulos',
      color: '#ea1d2c',
      textAnchor: 'middle'
    },
      {
        text: 'Objetivo: 10%',
        x: '50%',
        y: '68%',
        fontSize: '13px',
        fontWeight: 'bold',
        fontFamily: 'iFoodRCTitulos',
        color: '#333',
        textAnchor: 'middle'
      }]
  }
};

let options_monthly_report = {
  series: [
    {
      name: 'Receita Bruta',
      data: [2340.32, 3523.95, 1965.10, 2975.05, 859.50, 4958.47, 3349.68]
    },
    {
      name: 'Receita Liquida',
      data: [1239.44, 1689.03, 854.09, 1345.60, 269.60, 2700.33, 2200.54]
    }
  ],
  chart: {
    type: 'bar',
    height: 250,
    stacked: true,
    toolbar: {
      show: false
    }
  },
  colors: ['#ea1d2c', '#bec8d0'],
  fill: {
    opacity: [1, 1]
  },
  grid: {
    strokeDashArray: 4
  },
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    categories: ['Prod. 1', 'Prod. 2', 'Prod. 3', 'Prod. 4', 'Prod. 5',
      'Prod. 6', 'Prod. 7']
  },
  legend: {
    show: true
  }
};

const chartReceitaPorProduto = new ApexCharts(
  document.querySelector('#receita-por-produto-graph'), options_monthly_report);
const chartMargemLucro = new ApexCharts(
  document.querySelector('#margem-lucro-chart'), optMargemLucro);

$(() => {
  chartMargemLucro.render();
  chartReceitaPorProduto.render();

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

});
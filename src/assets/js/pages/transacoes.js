import 'reflect-metadata';
import $ from 'jquery';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap-daterangepicker/daterangepicker.js';

import container from '../inversify/inversify.config';
import TYPES from '../inversify/types';
import {
  DTTABLE_TEXTOS,
  formatNumeroBR,
  RANGEPICKER_TEXTOS
} from '../util/util';
import {
  CANAIS_VENDA,
  DADOS_RECEBIVEIS,
  OPERACOES_CAIXA,
  PEDIDOS_PAGAMENTO,
  RECEITAS_ORIGEM
} from '../mock-data';
import moment from 'moment/moment';

const _toasterService = container.get(TYPES.ToasterService);

const optionsPagamentos = {
  chart: {
    type: 'pie',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 1000
    }
  },
  series: PEDIDOS_PAGAMENTO.map(pagamento => pagamento.quantidade),
  labels: PEDIDOS_PAGAMENTO.map(pagamento => pagamento.metodo),
  colors: ['#ea1d2c', '#FF7D78', '#FFB2B0', '#FFC1A6', '#FFE4C7'],
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  tooltip: {
    y: {
      formatter: function(value) {
        return value + ' pedidos';
      }
    }
  }
};

const optionsReceitasOrigem = {
  chart: {
    type: 'pie',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 1000
    }
  },
  series: RECEITAS_ORIGEM.map(receita => receita.quantidade),
  labels: RECEITAS_ORIGEM.map(receita => receita.origem),
  colors: ['#ea1d2c', '#FF7D78', '#FFB2B0', '#FFC1A6'],
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom'
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value + ' pedidos';
      }
    }
  }
};

const optionsCanaisVenda = {
  chart: {
    type: 'pie',
    height: 350,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 1000
    }
  },
  series: CANAIS_VENDA.map(venda => venda.quantidade),
  labels: CANAIS_VENDA.map(venda => venda.canal),
  colors: ['#ea1d2c', '#FF7D78', '#FFB2B0', '#FFC1A6'],
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom'
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value + ' vendas';
      }
    }
  }
};

let chartCanaisVenda = new ApexCharts(
  document.querySelector('#grafico-canais-venda'), optionsCanaisVenda);
let chartReceitasOrigem = new ApexCharts(
  document.querySelector('#grafico-receitas-origem'), optionsReceitasOrigem);
let chartPagamentos = new ApexCharts(
  document.querySelector('#grafico-pagamentos'), optionsPagamentos);

chartCanaisVenda.render();
chartReceitasOrigem.render();
chartPagamentos.render();

const setupFluxoCaixa = () => {
  const operacoesCaixa = OPERACOES_CAIXA;
  const listGroup = $('#operacoes-caixa');

  operacoesCaixa.forEach(operacao => {
    listGroup.append(`
      <div class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <p class="mb-0 ${operacao.cor}">${operacao.tipo}</p>
          <small>${operacao.data} | Operador: ${operacao.operador}</small>
          <br />
          <small>Método de Pagamento: ${operacao.metodoPagamento}</small>
        </div>
        <span class="badge ${operacao.cor}">${operacao.valor}</span>
      </div>
    `);
  });

  OverlayScrollbars(document.querySelector('.list-group'), {
    className: 'os-theme-dark',
    sizeAutoCapable: true,
    paddingAbsolute: true,
    scrollbars: {
      visibility: 'auto',
      autoHide: 'leave',
      autoHideDelay: 800,
      dragScrolling: true,
      clickScrolling: true,
      touchSupport: true
    }
  });
};

$(() => {

  $('#total-entrada').text(formatNumeroBR((Math.random() * 5555.55)));
  $('#total-saida').text(formatNumeroBR((Math.random() * 5555.55)));
  $('#saldo-atual').text(formatNumeroBR((Math.random() * 5555.55)));
  $('#despesas-previstas').text(formatNumeroBR((Math.random() * 5555.55)));

  setupFluxoCaixa();

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

  $('#tabela-transacoes').dataTable({
    data: DADOS_RECEBIVEIS,
    columns: [
      { title: 'Cod.', data: 'cod', className: 'text-center' },
      {
        title: 'Tipo de Transação',
        data: 'tipoTransacao',
        className: 'text-center'
      },
      { title: 'Descrição', data: 'descricao' },
      { title: 'Categoria', data: 'categoria', className: 'text-center' },
      {
        title: 'Valor',
        data: 'valor',
        className: 'text-center',
        render: (data) => `R$ ${data.toFixed(2)}`
      },
      {
        title: 'Data', data: 'data', className: 'text-center',
        render: (data) => {
          if (data) {
            let date = new Date(data);
            return ('0' + date.getDate()).slice(-2) + '/' + ('0'
              + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
          }
          return data;
        }
      },
      {
        title: 'Status',
        data: 'status',
        className: 'text-center',
        render: (data) => {
          if (data === 'Pago') {
            return `<span class="badge bg-success">${data}</span>`;
          } else if (data === 'Pendente') {
            return `<span class="badge bg-warning">${data}</span>`;
          } else {
            return `<span class="badge bg-danger">${data}</span>`;
          }
        }
      },
      {
        title: 'Tipo de Pagamento',
        data: 'tipoPagamento',
        className: 'text-center'
      },
      { title: 'Observações', data: 'observacoes' }
    ],
    responsive: true,
    language: DTTABLE_TEXTOS
  });
});
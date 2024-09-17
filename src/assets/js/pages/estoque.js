import 'reflect-metadata';
import container from '../inversify/inversify.config';
import TYPES from '../inversify/types';

import $ from 'jquery';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';

import { DTTABLE_TEXTOS } from '../util/util';
import { ESTOQUE, SUGESTOES_PRODUTOS } from '../mock-data';

const _toasterService = container.get(TYPES.ToasterService);

function mostrarDetalhesProduto(produto) {
  console.log(produto);
  $('#produtoNome').text(produto.nome);
  $('#produtoCategoria').text(produto.categoria);
  $('#produtoQuantidade').text(produto.quantidade);
  $('#produtoPrecoCusto').text(produto.precoCusto.toFixed(2));
  $('#produtoPrecoVenda').text(produto.precoVenda.toFixed(2));
  $('#produtoValidade').text(produto.validade);
  $('#produtoImagem').attr('src', produto.imagem);
}

let optionsConsumoPrevisto = {
  chart: {
    type: 'bar',
    height: 350
  },
  series: [{
    name: 'Consumo Previsto',
    data: [30, 50, 40, 20, 15, 35, 25, 10, 40, 60]
  }],
  xaxis: {
    categories: ['Tomate', 'Alface', 'Carne de Hambúrguer', 'Carne de Frango',
      'Bacon', 'Queijo', 'Refrigerante Cola', 'Calabresa', 'Massa de Pizza',
      'Brownie']
  },
  colors: ['#ea1d2c'],
  fill: {
    opacity: 1
  }
};

let optionsReposicaoCategoria = {
  chart: {
    type: 'pie',
    height: 350
  },
  series: [20, 30, 10, 40],
  labels: ['Carnes', 'Hortifruti', 'Laticínios', 'Bebidas'],
  colors: ['#ea1d2c', '#FF7D78', '#FFB2B0', '#FFC1A6'],
  fill: {
    opacity: 1
  }
};

let optionsNovosItens = {
  chart: {
    type: 'bar',
    height: 350
  },
  series: [{
    name: 'Estimativa de Consumo',
    data: SUGESTOES_PRODUTOS.map(produto => produto.estimativaConsumo)
  }],
  xaxis: {
    categories: SUGESTOES_PRODUTOS.map(produto => produto.nome)
  },
  colors: ['#ea1d2c'],
  fill: {
    opacity: 1
  }
};

let optionsFaltaEstoque = {
  chart: {
    type: 'bar',
    height: 350
  },
  series: [{
    name: 'Probabilidade de Ficar em Falta',
    data: [90, 75, 50, 30, 20]
  }],
  xaxis: {
    categories: ['Alface', 'Carne de Frango', 'Refrigerante Cola', 'Calabresa',
      'Massa de Pizza']
  },
  colors: ['#ea1d2c'],
  fill: {
    opacity: 1
  }
};

let optionsConsumoReposicao = {
  chart: {
    type: 'line',
    height: 350
  },
  series: [{
    name: 'Consumo',
    data: [40, 30, 25, 50, 60]
  }, {
    name: 'Reposição',
    data: [35, 25, 20, 45, 55]
  }],
  xaxis: {
    categories: ['Tomate', 'Alface', 'Carne de Hambúrguer', 'Queijo', 'Bacon']
  },
  colors: ['#ea1d2c', '#FF7D78'],
  fill: {
    opacity: 1
  }
};

let chartConsumoReposicao = new ApexCharts(
  document.querySelector('#consumo-reposicao'), optionsConsumoReposicao);
chartConsumoReposicao.render();

let chartFaltaEstoque = new ApexCharts(document.querySelector('#falta-estoque'),
  optionsFaltaEstoque);
chartFaltaEstoque.render();

let chartNovosItens = new ApexCharts(document.querySelector('#novos-itens'),
  optionsNovosItens);
chartNovosItens.render();

let chartReposicaoCategoria = new ApexCharts(
  document.querySelector('#reposicao-categoria'), optionsReposicaoCategoria);
chartReposicaoCategoria.render();

let chartConsumoPrevisto = new ApexCharts(
  document.querySelector('#consumo-previsto'), optionsConsumoPrevisto);
chartConsumoPrevisto.render();

$(() => {

  $('#tabela-estoque').dataTable({
    data: ESTOQUE,
    columns: [
      { title: 'Cod.', data: 'cod', className: 'text-center' },
      {
        title: 'Nome',
        data: 'nome',
        render: (data, type, row) => {
          return `
            <a href="#" data-bs-toggle="modal" class="text-danger detalhes-produto-link" 
            data-bs-target="#detalhesProdutoModal" data-produto='${JSON.stringify(
            row)}'>${data}</a>`;
        },
        className: 'text-center'
      },
      { title: 'Categoria', data: 'categoria', className: 'text-center' },
      {
        title: 'Preço de Custo',
        data: 'precoCusto',
        className: 'text-center',
        render: (data) => `R$ ${data.toFixed(2)}`
      },
      {
        title: 'Preço de Venda',
        data: 'precoVenda',
        className: 'text-center',
        render: (data) => `R$ ${data.toFixed(2)}`
      },
      { title: 'Qtd.', data: 'quantidade', className: 'text-center' },
      {
        title: 'Status',
        data: 'status',
        render: (data, type, row) => {
          let badgeClass = 'bg-success';
          if (row.quantidade < 10) {
            badgeClass = 'bg-danger';
          } else if (row.quantidade < 20) {
            badgeClass = 'bg-warning';
          }
          return `<span class="badge ${badgeClass}">${data}</span>`;
        },
        className: 'text-center'
      },
      {
        title: 'Ações',
        data: null,
        render: (data, type, row) => {
          return `<button class="btn btn-sm btn-outline-danger"><i class="ph ph-shopping-cart"></i> Solicitar Reabastecimento</button>`;
        },
        className: 'text-center'
      }
    ],
    order: [[6, 'asc']],
    responsive: true,
    language: DTTABLE_TEXTOS
  });

  $(document).on('click', '.detalhes-produto-link', function(e) {
    e.preventDefault();
    const produto = JSON.parse($(this).attr('data-produto'));
    mostrarDetalhesProduto(produto);
  });
});
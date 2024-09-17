import 'reflect-metadata';
import $ from 'jquery';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import { DTTABLE_TEXTOS } from '../util/util';
import { CARGOS, USUARIOS } from '../mock-data';

$(() => {

  $('#tabela-cargos').dataTable({
    data: CARGOS,
    columns: [
      { title: 'ID', data: 'id', className: 'text-center' },
      { title: 'Nome do Cargo', data: 'nome' },
      {
        title: 'Data de Criação',
        data: 'dataCriacao',
        render: function(data) {
          return new Date(data).toLocaleDateString('pt-BR');
        },
        className: 'text-center'
      },
      {
        title: 'Permissões',
        data: 'permissoes',
        render: function(data) {
          return data.join(', ');
        }
      },
      {
        title: 'Ações',
        data: null,
        render: function() {
          return `
            <button class="btn btn-sm btn-primary me-2">
              <i class="ph ph-pencil-simple"></i>
            </button>
            <button class="btn btn-sm btn-danger me-2">
              <i class="ph ph-trash"></i>
            </button>
            <button class="btn btn-sm btn-secondary">
              <i class="ph ph-eye"></i>
            </button>
          `;
        },
        className: 'text-center'
      }
    ],
    responsive: true,
    language: DTTABLE_TEXTOS
  });

  $('#tabela-usuarios').dataTable({
    data: USUARIOS,
    columns: [
      { title: 'Nome', data: 'nome' },
      { title: 'Sobrenome', data: 'sobrenome' },
      { title: 'Email', data: 'email' },
      {
        title: 'Data de Criação',
        data: 'dataCriacao',
        render: function(data) {
          return new Date(data).toLocaleDateString('pt-BR');
        },
        className: 'text-center'
      },
      {
        title: 'Cargo',
        data: 'cargoId',
        render: function(data) {
          const cargo = CARGOS.find(c => c.id === data);
          return cargo ? cargo.nome : 'Cargo não encontrado';
        }
      },
      {
        title: 'Status',
        data: 'status',
        render: function(data) {
          const badgeClass = data === 'Ativo' ? 'badge bg-success'
            : 'badge bg-danger';
          return `<span class="${badgeClass}">${data}</span>`;
        },
        className: 'text-center'
      },
      {
        title: 'Ações',
        data: null,
        render: function() {
          return `
            <button class="btn btn-sm btn-primary me-2">
              <i class="ph ph-pencil-simple"></i>
            </button>
            <button class="btn btn-sm btn-danger me-2">
              <i class="ph ph-trash"></i>
            </button>
            <button class="btn btn-sm btn-secondary">
              <i class="ph ph-eye"></i>
            </button>
          `;
        },
        className: 'text-center'
      }
    ],
    responsive: true,
    language: DTTABLE_TEXTOS
  });

});
import 'reflect-metadata';
import $ from 'jquery';
import container from '../inversify/inversify.config';
import TYPES from '../inversify/types';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import { DTTABLE_TEXTOS } from '../util/util';
import { RELATORIOS } from '../mock-data';

const _toasterService = container.get(TYPES.ToasterService);

$(() => {
  $('#tabela-relatorios').DataTable({
    data: RELATORIOS,
    columns: [
      { title: 'Nome do Relatório', data: 'nome' },
      { title: 'Formato', data: 'formato' },
      {
        title: 'Data de Criação',
        data: 'dataCriacao',
        render: function(data) {
          return new Date(data).toLocaleDateString('pt-BR');
        }
      },
      {
        title: 'Última Geração',
        data: 'ultimaGeracao',
        render: function(data) {
          return new Date(data).toLocaleDateString('pt-BR');
        }
      },
      {
        title: 'Ações',
        data: null,
        render: function() {
          return `
                        <button class="btn btn-sm btn-info me-2 btn-gerar">
                          <i class="ph ph-gear"></i>
                        </button>
                        <button class="btn btn-sm btn-secondary me-2 btn-download">
                          <i class="ph ph-download-simple"></i>
                        </button>
                        <button class="btn btn-sm btn-danger">
                          <i class="ph ph-trash"></i>
                        </button>
                      `;
        },
        className: 'text-center'
      }
    ],
    responsive: true,
    language: DTTABLE_TEXTOS
  });

  $(document).on('click', 'button.btn-download', () => {
    _toasterService.alert('O relatorio ainda nao foi gerado!', 5);
  }).on('click', 'button.btn-gerar', () => {
    new bootstrap.Modal(document.getElementById('modalGerarRelatorio')).show();
  });
});
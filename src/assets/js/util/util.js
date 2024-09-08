export const ROUTES = {
  LOGIN: '/pages/login.html',
  DASHBOARD: '/pages/dashboard.html'
};

export const DTTABLE_TEXTOS = {
  search: 'Pesquisar:',
  lengthMenu: 'Mostrar _MENU_ registros por página',
  info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
  paginate: {
    first: 'Primeira',
    last: 'Última',
    next: 'Próxima',
    previous: 'Anterior'
  }
};

export const RANGEPICKER_TEXTOS = {
  format: 'YYYY-MM-DD HH:mm:ss',
  applyLabel: 'Aplicar',
  cancelLabel: 'Cancelar',
  fromLabel: 'De',
  toLabel: 'Até',
  customRangeLabel: 'Personalizado',
  weekLabel: 'Sem',
  daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  firstDay: 0
}

export function sleep(ms) {
  return new Promise((res, rej) => setTimeout(res, ms));
}

export function valueToPercent(value, max) {
  return (value * 100) / max;
}

export function formatNumeroBR(numero) {
  let partes = numero.toFixed(2).split('.');

  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return partes.join(',');
}

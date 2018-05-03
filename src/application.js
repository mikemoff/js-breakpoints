import BreakPoints from './js/break_points.js';
import './styles/demo.sass';
require('./icons.font');

let size_el = document.getElementById('media-query-size');

document.body.addEventListener('breakpoint-update', (e) => {
  size_el.innerHTML = `Size: <span class="alert">${e.detail.size}</span>`;
} );

const myBreakpoints = new BreakPoints();


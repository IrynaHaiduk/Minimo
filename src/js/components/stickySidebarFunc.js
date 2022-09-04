
import StickySidebar from 'sticky-sidebar';

export default function initStikySidebar() {
  const sidebarEl = document.querySelector('#sidebar');

  if (!sidebarEl) return;

  const sidebar = new StickySidebar(sidebarEl, {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    minWidth: 1024,
    topSpacing: 30,
    bottomSpacing: 30,
  });
}


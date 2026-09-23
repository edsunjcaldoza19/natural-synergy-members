document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const navItems = [
    { key: 'home', href: 'index.html', label: 'Home', icon: 'fa-house', width: 'w-34' },
    { key: 'program', href: 'program.html', label: 'Natural Synergy Program', icon: 'fa-book', width: 'w-67' },
    { key: 'app', href: 'app.html', label: 'Natural Synergy App', icon: 'fa-mobile-screen-button', width: 'w-58' },
    { key: 'bonus1', href: 'bonus1.html', label: 'Bonus 1 – East/West Blood Pressure Balancer', icon: 'fa-award', width: 'w-100' },
    { key: 'bonus2', href: 'bonus2.html', label: 'Bonus 2 – Eastern Metabolism Miracle', icon: 'fa-award', width: 'w-88' },
    { key: 'bonus3', href: 'bonus3.html', label: 'Bonus 3 – Acu-Facelift Revitalizer', icon: 'fa-award', width: 'w-79' },
    { key: 'mastery', href: 'mastery.html', label: 'Total Life Mastery', icon: 'fa-ribbon', width: 'w-53' },
    { key: 'vip', href: 'vip.html', label: 'VIP Club', icon: 'fa-ribbon', width: 'w-40' },
    { key: 'wealth', href: 'wealth.html', label: 'Inner Game of Wealth', icon: 'fa-magnifying-glass-dollar', width: 'w-61' },
    { key: 'settings', href: '#settings', label: 'Account Settings', icon: 'fa-gears', width: 'w-55' },
    { key: 'tutorials', href: 'tutorials.html', label: 'Video Tutorials', icon: 'fa-video', width: 'w-49' },
    { key: 'discovery', href: '#discovery', label: 'Discovery Form', icon: 'fa-clipboard-list', width: 'w-50' },
    { key: 'support', href: 'support.html', label: 'Support', icon: 'fa-envelope', width: 'w-39' }
  ];

  const body = document.body;
  const imageDimensions = {
    'natural-synergy-logo.png': [736, 152],
    'ns-circle.png': [54, 55],
    'web-book.png': [548, 207],
    'pdf-book.png': [141, 207],
    'BP-Balance-PDF.png': [636, 853],
    'Metabolism-miracle.png': [636, 853],
    'Acu-facelift.png': [636, 853],
    'vip.png': [548, 420],
    'Inner-Game-of-Wealth-Book.png': [320, 464],
    'Inner-Game-of-Wealth-CDs.png': [520, 291],
    'Life-Principle-Mastery-224x300.png': [224, 300],
    'Acoustics-pack-300x175.png': [300, 175],
    'Videos-pack-300x184.png': [300, 184],
    'Exercises-pack-300x187.png': [300, 187]
  };
  document.querySelectorAll('img').forEach((image) => {
    const file = image.getAttribute('src')?.split('/').pop();
    const dimensions = imageDimensions[file];
    if (dimensions) {
      if (!image.hasAttribute('width')) image.setAttribute('width', dimensions[0]);
      if (!image.hasAttribute('height')) image.setAttribute('height', dimensions[1]);
    }
    if (file === 'pdf-book.png' || file === 'Inner-Game-of-Wealth-CDs.png' || file === 'Acoustics-pack-300x175.png' || file === 'Videos-pack-300x184.png' || file === 'Exercises-pack-300x187.png') image.loading = 'lazy';
  });

  const fileName = window.location.pathname.split('/').pop() || 'index.html';
  const pageFromFile = fileName.replace('.html', '') === 'index' ? 'home' : fileName.replace('.html', '');
  const currentPage = body.dataset.page || pageFromFile;
  const sidebar = document.querySelector('.sidebar');
  const nav = document.querySelector('.side-nav');

  if (sidebar && nav) {
    nav.setAttribute('aria-label', 'Member navigation');
    nav.innerHTML = navItems.map((item) => {
      const active = item.key === currentPage;
      return `<a class="nav-link${active ? ' active' : ''}" href="${item.href}" data-nav-key="${item.key}"${active ? ' aria-current="page"' : ''}><span class="nav-fill ${item.width}"><i class="fa-solid ${item.icon} nav-icon" aria-hidden="true"></i><span>${item.label}</span></span></a>`;
    }).join('');

    const toggle = document.createElement('button');
    toggle.className = 'sidebar-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'member-navigation');
    toggle.innerHTML = '<span>Member menu</span><i class="fa-solid fa-bars" aria-hidden="true"></i>';
    nav.id = 'member-navigation';
    sidebar.insertBefore(toggle, nav);

    const setMenuState = (open) => {
      sidebar.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      const icon = toggle.querySelector('i');
      icon.classList.toggle('fa-bars', !open);
      icon.classList.toggle('fa-xmark', open);
    };

    toggle.addEventListener('click', () => setMenuState(!sidebar.classList.contains('is-open')));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.matchMedia('(max-width: 1050px)').matches) setMenuState(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
        setMenuState(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (window.matchMedia('(max-width: 1050px)').matches && sidebar.classList.contains('is-open') && !sidebar.contains(event.target)) setMenuState(false);
    });
  }

  document.querySelectorAll('iframe').forEach((iframe, index) => {
    if (index > 0 && !iframe.hasAttribute('loading')) iframe.loading = 'lazy';
  });
});

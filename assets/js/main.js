document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const navItems = [
    { key: 'home', href: 'index.html', label: 'Home', icon: 'fa-house', width: 'w-34' },
    { key: 'program', href: 'natural-synergy-program.html', label: 'Natural Synergy Program', icon: 'fa-book', width: 'w-67' },
    { key: 'app', href: 'natural-synergy-app.html', label: 'Natural Synergy App', icon: 'fa-mobile-screen-button', width: 'w-58' },
    { key: 'bonus1', href: 'bonus-1-blood-pressure-balancer.html', label: 'Bonus 1 – East/West Blood Pressure Balancer', icon: 'fa-award', width: 'w-100' },
    { key: 'bonus2', href: 'bonus-2-eastern-metabolism-miracle.html', label: 'Bonus 2 – Eastern Metabolism Miracle', icon: 'fa-award', width: 'w-88' },
    { key: 'bonus3', href: 'bonus-3-acu-facelift-revitalizer.html', label: 'Bonus 3 – Acu-Facelift Revitalizer', icon: 'fa-award', width: 'w-79' },
    { key: 'mastery', href: 'total-life-mastery.html', label: 'Total Life Mastery', icon: 'fa-ribbon', width: 'w-53' },
    { key: 'vip', href: 'vip-club.html', label: 'VIP Club', icon: 'fa-ribbon', width: 'w-40' },
    { key: 'wealth', href: 'inner-game-of-wealth.html', label: 'Inner Game of Wealth', icon: 'fa-magnifying-glass-dollar', width: 'w-61' },
    { key: 'settings', href: '#settings', label: 'Account Settings', icon: 'fa-gears', width: 'w-55' },
    { key: 'tutorials', href: 'video-tutorials.html', label: 'Video Tutorials', icon: 'fa-video', width: 'w-49' },
    { key: 'discovery', href: '#discovery', label: 'Discovery Form', icon: 'fa-clipboard-list', width: 'w-50' },
    { key: 'support', href: 'support-request.html', label: 'Support', icon: 'fa-envelope', width: 'w-39' }
  ];
  navItems[3].label = 'Bonus 1 \u2013 East/West Blood Pressure Balancer';
  navItems[4].label = 'Bonus 2 \u2013 Eastern Metabolism Miracle';
  navItems[5].label = 'Bonus 3 \u2013 Acu-Facelift Revitalizer';

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
    'Exercises-pack-300x187.png': [300, 187],
    'Inner-Game-of-Wealth.png': [620, 350],
    'Total-Life-Mastery-Course-1024.png': [360, 360],
    '3D-200-Better-Issue-1-221x300.png': [221, 300],
    'CDs-200-Better-Issue-1sm-300x206.png': [300, 206],
    '3D-200-Better-Issue-2sm-214x300.png': [214, 300],
    'CDs-200-Better-Issue-2sm-300x206.png': [300, 206],
    '3D-200-Better-Issue-3.png': [233, 300],
    'CDs-200-Better-Issue-3.png': [300, 206],
    '3D-200-Better-Issue-4.png': [543, 700],
    'CDs-200-Better-Issue-4.png': [700, 448],
    '3D-200-Better-Issue-5.png': [543, 700],
    'CDs-200-Better-Issue-5.png': [700, 448],
    '3D-200-Better-Issue-6.png': [543, 700],
    'CDs-200-Better-Issue-6.png': [700, 448],
    '3D-200-Better-Issue-7.png': [543, 700],
    'CDs-200-Better-Issue-7.png': [700, 448],
    '3D-200-Better-Issue-8.png': [233, 300],
    'CDs-200-Better-Issue-8.png': [300, 192],
    '3D-200-Better-Issue-9.png': [543, 700],
    'CDs-200-Better-Issue-9.png': [700, 448],
    '3D-200-Better-Issue-10.png': [543, 700],
    'CDs-200-Better-Issue-10.png': [700, 448],
    '3D-200-Better-Issue-11.png': [543, 700],
    'CDs-200-Better-Issue-11.png': [700, 448],
    '3D-200-Better-Issue-12.png': [543, 700],
    'CDs-200-Better-Issue-12.png': [700, 448]
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
  const rootPrefix = body.dataset.rootPrefix || '';
  const sidebar = document.querySelector('.sidebar');
  const nav = document.querySelector('.side-nav');

  if (sidebar && nav) {
    nav.setAttribute('aria-label', 'Member navigation');
    nav.innerHTML = navItems.map((item) => {
      const active = item.key === currentPage;
      const href = item.href.startsWith('#') ? item.href : `${rootPrefix}${item.href}`;
      return `<a class="nav-link${active ? ' active' : ''}" href="${href}" data-nav-key="${item.key}"${active ? ' aria-current="page"' : ''}><span class="nav-fill ${item.width}"><i class="fa-solid ${item.icon} nav-icon" aria-hidden="true"></i><span>${item.label}</span></span></a>`;
    }).join('');

    let toggle = sidebar.querySelector('.sidebar-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'sidebar-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', 'member-navigation');
      toggle.innerHTML = '<span>Member menu</span><i class="fa-solid fa-bars" aria-hidden="true"></i>';
      sidebar.insertBefore(toggle, nav);
    }
    nav.id = 'member-navigation';
    document.documentElement.classList.add('nav-ready');

    const setMenuState = (open) => {
      sidebar.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      const icon = toggle.querySelector('i');
      icon.classList.toggle('fa-bars', !open);
      icon.classList.toggle('fa-xmark', open);
    };

    if (!toggle.dataset.bound) {
      toggle.addEventListener('click', () => setMenuState(!sidebar.classList.contains('is-open')));
      nav.addEventListener('click', (event) => {
        if (event.target.closest('a') && window.matchMedia('(max-width: 1199px)').matches) setMenuState(false);
      });
      toggle.dataset.bound = 'true';
    }
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
        setMenuState(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (window.matchMedia('(max-width: 1199px)').matches && sidebar.classList.contains('is-open') && !sidebar.contains(event.target)) setMenuState(false);
    });
  }

  document.querySelectorAll('iframe').forEach((iframe, index) => {
    if (index > 0 && !iframe.hasAttribute('loading')) iframe.loading = 'lazy';
  });
});

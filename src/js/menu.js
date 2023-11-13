(() => {
  const body = document.querySelector('body');
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const linkHeaderMenuList = document.querySelectorAll('.navigation__link');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    body.classList.toggle('overflow-hidden');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  linkHeaderMenuList.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1440) {
        mobileMenuRef.classList.toggle('is-open');
        body.classList.toggle('overflow-hidden');
        menuBtnRef.classList.toggle('is-open');
      }
    });
  });
})();

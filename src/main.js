document.querySelectorAll('.works__filter input').forEach((input) => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.works__filter').forEach((label) => {
      label.classList.remove('works__filter--active');
    });
    input.closest('.works__filter')?.classList.add('works__filter--active');

    const category = input.value;
    document.querySelectorAll('.works__item').forEach((item) => {
      item.hidden = category !== 'all' && item.dataset.category !== category;
    });
  });

  const menuButton = document.querySelector('.header__menu');
  const navigation = document.querySelector('.header__nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation' : 'Close navigation',
    );
    navigation?.classList.toggle('header__nav--open', !isOpen);
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('header__nav--open');
    });
  });
});

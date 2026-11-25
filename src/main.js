document.querySelectorAll('.works__filter-control').forEach((input) => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.works__filter-chip').forEach((label) => {
      label.classList.toggle(
        'works__filter-chip--active',
        label.contains(input),
      );
    });

    const category = input.value;
    document.querySelectorAll('.work-card').forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

const menuButton = document.querySelector('.header__menu');
const mobilePanel = document.querySelector('.header__mobile-panel');

function setMenuOpen(isOpen) {
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuButton?.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation' : 'Open navigation',
  );
  mobilePanel?.classList.toggle('header__mobile-panel--open', isOpen);
}

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

mobilePanel?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false);
});

const newsletter = document.querySelector('.newsletter-form');
newsletter?.addEventListener('submit', (event) => {
  if (!newsletter.reportValidity()) {
    event.preventDefault();
    return;
  }

  const success = newsletter.querySelector('.newsletter-form__success');
  if (success) {
    event.preventDefault();
    window.location.hash = success.id;
  }
});

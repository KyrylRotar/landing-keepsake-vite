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
});

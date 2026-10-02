(() => {
  const input = document.querySelector('#definition-search');
  const cards = [...document.querySelectorAll('.definition-card')];
  const links = [...document.querySelectorAll('.definition-link')];
  const groups = [...document.querySelectorAll('.section-group')];
  const visibleCount = document.querySelector('#visible-count');
  const directoryCounts = [...document.querySelectorAll('.directory-count')];
  const heading = document.querySelector('#result-heading');
  const empty = document.querySelector('#empty-state');

  function update() {
    const raw = input.value.trim();
    const query = raw.toLocaleLowerCase();
    const visible = new Set();
    for (const card of cards) {
      const show = !query || card.dataset.search.includes(query);
      card.hidden = !show;
      if (show) visible.add(card.id);
    }
    for (const link of links) link.hidden = !visible.has(link.dataset.entryId);
    for (const group of groups) group.hidden = !group.querySelector('.definition-link:not([hidden])');
    const count = visible.size;
    visibleCount.textContent = count;
    for (const item of directoryCounts) item.textContent = count;
    heading.textContent = query ? count + ' matches for “' + raw + '”' : cards.length + ' definitions and rules in document order';
    empty.hidden = count !== 0;
  }

  input.addEventListener('input', update);
  window.addEventListener('keydown', (event) => {
    const target = event.target;
    const typing = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;
    if (event.key === '/' && !typing) { event.preventDefault(); input.focus(); }
    if (event.key === 'Escape' && document.activeElement === input) { input.value = ''; update(); input.blur(); }
  });
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target?.hidden) { input.value = ''; update(); }
  });
  update();
})();
function updateOffset() {
  const announcement = document.querySelector('.announcement-bar-section');
  const header       = document.querySelector('.header-wrapper');
  const totalOffset  = (announcement?.offsetHeight || 0) +
                       (header?.offsetHeight || 0);

  document.documentElement.style.setProperty('--header-offset', `${totalOffset}px`);
  console.log('Header offset updated:', totalOffset);
}

window.addEventListener('load', updateOffset, { passive: true });
window.addEventListener('resize', () => requestAnimationFrame(updateOffset), { passive: true });
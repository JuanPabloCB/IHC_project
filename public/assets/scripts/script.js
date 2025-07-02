document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('casosContainer');
  const nextBtn = document.getElementById('nextCase');
  const prevBtn = document.getElementById('prevCase');

  nextBtn.addEventListener('click', () => {
    container.scrollBy({
      left: container.clientWidth - 100, // 100 = compensación visual
      behavior: 'smooth',
    });
  });

  prevBtn.addEventListener('click', () => {
    container.scrollBy({
      left: -(container.clientWidth - 100),
      behavior: 'smooth',
    });
  });

  // Swipe en móvil
  let startX = 0;
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) prevBtn.click();
    else if (deltaX < -50) nextBtn.click();
  });
});




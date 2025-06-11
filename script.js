function navigate(pageId) {
  // Oculta todas as páginas
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Mostra a página escolhida
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}

// Mostra a página "home" ao carregar o site
window.onload = function () {
  navigate('home');
};

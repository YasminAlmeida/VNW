function next() {
  const fechar = document.querySelector('.option1');
  const abrir = document.querySelector('.option2');

  if (abrir.style.display === 'none') {
      abrir.style.display = 'flex';
      fechar.style.display = 'none';
  } else {
      abrir.style.display = 'none';
      fechar.style.display = 'flex';
  }

}
function show() {
  const abrir = document.querySelector('.container-img figure');

  if (abrir.style.display === 'none') {
      abrir.style.display = 'flex';
  } else {
      abrir.style.display = 'none';
  }

}
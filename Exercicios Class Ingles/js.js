  const arrow = document.querySelector('.arrow');
  arrow.addEventListener('click', next);
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
const button = document.querySelector('.button-fan');
button.addEventListener('click', show);
function show() {
  const abrir = document.querySelector('.container-img figure');
  if (abrir.style.display === 'none') {
      abrir.style.display = 'flex';
  } else {
      abrir.style.display = 'none';
  }

}

const botao = document.querySelector('.button-menu');
botao.addEventListener('click', menu);
function menu(){
  const abrir = document.querySelector('header nav');
  if(abrir.style.display == 'none'){
    abrir.style.display = 'flex';
  } else{
    abrir.style.display = 'none';
  }
}
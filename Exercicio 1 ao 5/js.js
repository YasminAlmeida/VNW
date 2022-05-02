const tabMenu = document.querySelectorAll('.js-tabmenu');
const tabContent = document.querySelectorAll('.js-tabcontent div');
function activeTab(){
  tabContent.forEach((itemMenu, index) =>{
    tabContent[index].classList.add('ativo');
  });
}


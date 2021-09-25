const searcEl = document.querySelector('.search');
const searchInputEl = searcEl.querySelector('input')

searcEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searcEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searcEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})



const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// nav

const navLists = document.querySelector('nav');
const bar = document.querySelector('.bar');
const cross = document.querySelector('.cross');
const navList = document.querySelectorAll('.nav-list li');


bar.addEventListener('click', (e) => {
  e.preventDefault();
  navLists.classList.toggle('nav-display');
  cross.classList.add('display');
  bar.classList.add('fade');
})

cross.addEventListener('click', (e) => {
  e.preventDefault();
  navLists.classList.toggle('nav-display');
  cross.classList.remove('display');
  bar.classList.remove('fade');
})

navList.forEach(x => {
  x.addEventListener('click', (e) => {
    navLists.classList.toggle('nav-display');
    cross.classList.remove('display');
    bar.classList.remove('fade');
  })
}
)
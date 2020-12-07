const heroSocialNetworks = document.querySelector('.hero-social-networks');

heroSocialNetworks.addEventListener('mouseover', () => {
  heroSocialNetworks.style.right = '0';
  heroSocialNetworks.style.transition = '0.75s ease-in-out';
});

heroSocialNetworks.addEventListener('mouseout', () => {
  heroSocialNetworks.style.right = '-205px';
});

//Each wrapper
const curoselDivs = Array.from(
  document.getElementsByClassName('benefit-wrapper')
);
const counter = curoselDivs.length;
// curoselDivs.some(({ classList }) => classList.contains('main-slider-div'));

//Buttons
const prevBtn = document.querySelector('.benefits-slider-icon-left');
const nextBtn = document.querySelector('.benefits-slider-icon-right');
const mainDiv = document.querySelector('.main-slider-div');
const leftDiv = document.querySelector('.left-slider-div');
const rightDiv = document.querySelector('.right-slider-div');

console.log(mainDiv, leftDiv, rightDiv);

nextBtn.addEventListener('click', () => {
  mainDiv.style.transform = 'translateX(75%)';
  mainDiv.style.transition = '0.75s ease-in-out';
  leftDiv.style.transform = 'translateX(-50%)';
  leftDiv.style.transition = '0.75s ease-in-out';
  rightDiv.style.transform = 'translateX(-175%)';
  rightDiv.style.transition = '0.75s ease-in-out';
});

console.log(curoselDivs);

// on each click:
// move main div to right and give him a side div class and move the div that was on left on middlle and give him main class
// move the div that was on left on middlle and give him main class
// move right div to left and give him a side class

// go through all .benefit-wrapper classes and search for

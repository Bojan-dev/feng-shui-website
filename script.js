'use strict';

const heroSocialNetworks = document.querySelector('.hero-social-networks');

heroSocialNetworks.addEventListener('mouseover', () => {
  heroSocialNetworks.style.right = '0';
  heroSocialNetworks.style.transition = '.75s ease-in-out';
});

heroSocialNetworks.addEventListener('mouseout', () => {
  heroSocialNetworks.style.right = '-210px';
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
const benefitArray = document.getElementsByClassName('benefit-wrapper');

nextBtn.addEventListener('click', () => {
  for (let i = 0; i < benefitArray.length; i++) {
    if (benefitArray[i].classList.contains('main-slider-div')) {
      benefitArray[i].classList.toggle('main-slider-div');
      benefitArray[i].classList.toggle('right-slider-div');
      benefitArray[i].style.transition = '.75s ease-in-out';
      benefitArray[i].classList.toggle('side-benefit-wrapper');
    } else if (benefitArray[i].classList.contains('left-slider-div')) {
      benefitArray[i].classList.remove('left-slider-div');
      benefitArray[i].classList.add('main-slider-div');
      benefitArray[i].style.transition = '.75s ease-in-out';
      benefitArray[i].classList.remove('side-benefit-wrapper');
    } else if (benefitArray[i].classList.contains('right-slider-div')) {
      benefitArray[i].classList.remove('right-slider-div');
      benefitArray[i].classList.add('left-slider-div');
      benefitArray[i].style.transition = '.75s ease-in-out';
      benefitArray[i].classList.add('side-benefit-wrapper');
    }
  }
});

prevBtn.addEventListener('click', () => {
  for (let i = 0; i < benefitArray.length; i++) {
    if (benefitArray[i].classList.contains('main-slider-div')) {
      benefitArray[i].classList.toggle('main-slider-div');
      benefitArray[i].classList.toggle('left-slider-div');
      benefitArray[i].style.transition = '.75s ease-in-out';
      benefitArray[i].classList.toggle('side-benefit-wrapper');
    } else if (benefitArray[i].classList.contains('left-slider-div')) {
      benefitArray[i].classList.remove('left-slider-div');
      benefitArray[i].classList.add('right-slider-div');
      benefitArray[i].style.transition = '.75s ease-in-out';
      benefitArray[i].classList.add('side-benefit-wrapper');
    } else if (benefitArray[i].classList.contains('right-slider-div')) {
      benefitArray[i].classList.remove('right-slider-div');
      benefitArray[i].classList.add('main-slider-div');
      benefitArray[i].style.transition = '.75s ease-in-out';
      benefitArray[i].classList.remove('side-benefit-wrapper');
    }
  }
});

//on click move each array object position in array
//element [0] will always have main class, all other will have side class

/*
const mainDiv = document.querySelector('.main-slider-div');
const leftDiv = document.querySelector('.left-slider-div');
const rightDiv = document.querySelector('.right-slider-div');

nextBtn.addEventListener('click', () => {
  mainDiv.style.transform = 'translateX(75%)';
  mainDiv.style.transition = '0.75s ease-in-out';
  leftDiv.style.transform = 'translateX(-50%)';
  leftDiv.style.transition = '0.75s ease-in-out';
  rightDiv.style.transform = 'translateX(-175%)';
  rightDiv.style.transition = '0.75s ease-in-out';
});
*/

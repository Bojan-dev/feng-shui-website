'use strict';

//HERO AREA - SOCIAL ICONS DIV
const heroSocialNetworks = document.querySelector('.hero-social-networks');

heroSocialNetworks.addEventListener('mouseover', () => {
  heroSocialNetworks.style.right = '0';
  heroSocialNetworks.style.transition = '.75s ease-in-out';
});

heroSocialNetworks.addEventListener('mouseout', () => {
  heroSocialNetworks.style.right = '-210px';
});

//BENEFITS SLIDER

//Buttons
const prevBtn = document.querySelector('.prev-slider-icon');
const nextBtn = document.querySelector('.next-slider-icon');
const benefitHtml = document.getElementsByClassName('benefit-wrapper');
let benefitArray = Array.from(benefitHtml);

const arrayRotate = function (arr) {
  arr.unshift(arr.pop());
  return arr;
};

const arrayReverseRotate = function (arr) {
  arr.push(arr.shift());
  return arr;
};

benefitArray[2].style.zIndex = '2';
benefitArray[1].style.zIndex = '3';

nextBtn.addEventListener('click', () => {
  benefitArray[0].classList.toggle('main-slider-div');
  benefitArray[0].classList.toggle('right-slider-div');
  benefitArray[0].classList.toggle('side-benefit-wrapper');
  benefitArray[0].style.transition = '.75s ease-in-out';
  benefitArray[4].classList.toggle('main-slider-div');
  benefitArray[4].classList.toggle('left-slider-div');
  benefitArray[4].classList.toggle('side-benefit-wrapper');
  benefitArray[4].style.transition = '.75s ease-in-out';
  benefitArray[2].classList.toggle('right-slider-div');
  benefitArray[2].classList.toggle('left-slider-div');
  benefitArray[2].style.transition = '.75s ease-in-out';
  benefitArray[0].style.zIndex = '4';
  benefitArray[1].style.zIndex = '3';
  benefitArray[2].style.zIndex = '2';
  benefitArray[3].style.zIndex = '4';
  benefitArray[4].style.zIndex = '5';
  benefitArray = arrayRotate(benefitArray);
});

prevBtn.addEventListener('click', () => {
  benefitArray[0].classList.toggle('main-slider-div');
  benefitArray[0].classList.toggle('left-slider-div');
  benefitArray[0].classList.toggle('side-benefit-wrapper');
  benefitArray[0].style.transition = '.75s ease-in-out';
  benefitArray[1].classList.toggle('main-slider-div');
  benefitArray[1].classList.toggle('right-slider-div');
  benefitArray[1].classList.toggle('side-benefit-wrapper');
  benefitArray[1].style.transition = '.75s ease-in-out';
  benefitArray[3].classList.toggle('right-slider-div');
  benefitArray[3].classList.toggle('left-slider-div');
  benefitArray[3].style.transition = '.75s ease-in-out';
  benefitArray[0].style.zIndex = '4';
  benefitArray[1].style.zIndex = '4';
  benefitArray[2].style.zIndex = '3';
  benefitArray[3].style.zIndex = '2';
  benefitArray[4].style.zIndex = '1';
  benefitArray = arrayReverseRotate(benefitArray);
});

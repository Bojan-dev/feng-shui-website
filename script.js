const heroSocialNetworks = document.querySelector('.hero-social-networks');

heroSocialNetworks.addEventListener('mouseover', () => {
  heroSocialNetworks.style.right = '0';
  heroSocialNetworks.style.transition = '0.75s ease-in-out';
});

heroSocialNetworks.addEventListener('mouseout', () => {
  heroSocialNetworks.style.right = '-205px';
});

//Each wrapper
const curoselDivs = document.querySelectorAll('.benefit-wrapper');

//Buttons
const prevBtn = document.querySelector('.benefits-slider-icon-left');
const nextBtn = document.querySelector('benefits-slider-icon-right');

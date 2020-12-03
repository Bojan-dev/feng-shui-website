const heroSocialNetworks = document.querySelector('.hero-social-networks');

heroSocialNetworks.addEventListener('mouseover', () => {
  heroSocialNetworks.style.right = '0';
});

heroSocialNetworks.addEventListener('mouseout', () => {
  heroSocialNetworks.style.right = '-205px';
});

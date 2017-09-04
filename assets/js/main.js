
const classContains = (element, className) => {
  return (element.classList.contains(className));
}

const updateNavbar = () => {
  const homeHeader = document.getElementById('home-header');
  const navbar = document.getElementById('navbar');
  const scrollHeight = document.body.scrollTop;
  const homeHeaderHeight = homeHeader.offsetHeight;

  console.log('hi');

  if ((scrollHeight >= (homeHeaderHeight - navbar.offsetHeight)) && (scrollHeight < homeHeaderHeight) && !classContains(homeHeader, 'scrolled-half')) {
    homeHeader.classList.add('scrolled-half');
  } else if ((scrollHeight < (homeHeaderHeight - navbar.offsetHeight)) && classContains(homeHeader, 'scrolled-half')) {
    homeHeader.classList.remove('scrolled-half');
  }

  if (scrollHeight >= (homeHeaderHeight) && !classContains(homeHeader, 'scrolled')) {
    homeHeader.classList.remove('scrolled-half');
    homeHeader.classList.add('scrolled');
  } else if (scrollHeight < (homeHeaderHeight) && classContains(homeHeader, 'scrolled')) {
    homeHeader.classList.remove('scrolled');
  }
}

window.addEventListener("scroll", () => {
  updateNavbar();
});

window.addEventListener("resize", () => {
  updateNavbar();
});

document.addEventListener("DOMContentLoaded", function (event) {
  updateNavbar();
});

// header hamburger
let forEach=function(t,o,r) {if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

const hamburgers = document.querySelectorAll(".hamburger");
let navigation = document.querySelector("#navigation");
navigation.style.opacity = '0';
navigation.style.transition = '.3s';

if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
      if (navigation.style.opacity === '0'){
        navigation.style.opacity = '1';
      } else {
        navigation.style.opacity = '0';
      }
    }, false);
  });
}

var scrollToTopButton = document.getElementById('to-top');

function showScrollToTopButton() {
  if (document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
}

window.onscroll = function() {
  showScrollToTopButton();
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollToMoreInfo() {
  document.body.scrollTop = 800;
  document.documentElement.scrollTop = 800;
}

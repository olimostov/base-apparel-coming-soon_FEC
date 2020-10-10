const mobScreen = document.getElementById('mobile-img');
const deskScreen = document.getElementById('desktop-img');
const startViewportWidth = window.innerWidth;

window.onload = function () {
  startViewportWidth >= 800
    ? deskScreen.classList.add('hero')
    : mobScreen.classList.add('hero');
};

function moveImg() {
  var viewPortChanged = window.innerWidth;
  if (mobScreen.className === 'hero' && viewPortChanged >= 800) {
    mobScreen.classList.remove('hero');
    deskScreen.classList.add('hero');
  } else if (deskScreen.className === 'hero' && viewPortChanged <= 799) {
    deskScreen.classList.remove('hero');
    mobScreen.classList.add('hero');
  }
}

window.onresize = moveImg;

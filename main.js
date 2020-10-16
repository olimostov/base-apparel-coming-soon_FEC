const mobScreen = document.getElementById('mobile-img');
const deskScreen = document.getElementById('desktop-img');
const startViewportWidth = window.innerWidth;
const subscribeBtn = document.getElementById('sbscr-btn');
const errorIcon = document.getElementById('error-icon');
const errorMsg = document.getElementById('valid-msg');
const inputField = document.getElementById('email');
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
function emailValid() {
  if (email.validity.typeMismatch) {
    errorIcon.classList.remove('hidden');
    errorMsg.classList.remove('hidden');
    inputField.style.border = '2px solid var(--soft-red-primary)';
  }
}
window.onresize = moveImg;
subscribeBtn.addEventListener('click', emailValid);

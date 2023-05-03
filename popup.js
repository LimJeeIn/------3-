const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

// 첫번째 포커스 요소
const firstEl = article.querySelector('a');

function openPopup() {
  article.classList.add('active');
  firstEl.focus();
}

function closePopup() {
  article.classList.remove('active');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener('keydown', function (e) {
  console.log(e.key);
});

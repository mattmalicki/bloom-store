(() => {
  const callBtn = document.querySelector('.header__btn-call');
  const heroBtn = document.querySelector('.hero__btn');
  const btn = document.querySelector('.btn');
  const btn1 = document.querySelector('.btn1');
  const modal1 = document.querySelector('[data-modal]');
  const modal2 = document.querySelector('[data-modal1]');
  const modal1CloseBtn = modal1.querySelector('[data-modal-close]');
  const modal2CloseBtn = modal2.querySelector('[data-modal-close]');

  callBtn.addEventListener('click', toggleModal1);
  heroBtn.addEventListener('click', toggleModal1);
  btn.addEventListener('click', toggleModal1);
  btn1.addEventListener('click', toggleModal2);

  modal1CloseBtn.addEventListener('click', toggleModal1);
  modal2CloseBtn.addEventListener('click', toggleModal2);

  function toggleModal1() {
    modal1.classList.toggle('is-hidden');
  }

  function toggleModal2() {
    modal2.classList.toggle('is-hidden');
  }
})();

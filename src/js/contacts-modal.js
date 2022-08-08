(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-contacts-open]"),
    closeModalBtn: document.querySelector("[data-contacts-close]"),
    modal: document.querySelector("[data-contacts]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
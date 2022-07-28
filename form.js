const modalFormActive = "modal-active";

const modalForm = document.querySelector("#form-modal");
const form = document.querySelector("#form");
const openModalFormBtn = document.querySelector("#open-modal-form-btn");
const closeBtn = document.querySelectorAll(".close-button");

openModalFormBtn.addEventListener("click", () => {
  modalForm.classList.add(modalFormActive);
});

const closeModalForm = () => {
  modalForm.classList.remove(modalFormActive);
};

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (close) => {
    close.stopPropagation();
    closeModalForm();
  });
});

const clearFormFields = () => {
  const modalFields = modalFrom.querySelectorAll("input");

  modalFields.forEach((field) => {
    field.value = "";
  });
};
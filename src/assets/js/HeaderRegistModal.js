const body = document.querySelector("body");
const reg_modal = document.querySelector(".reg_modal");
const regBtnOpenPopup = document.querySelector(".btn_open_popup");
const close = document.querySelector(".reg_modal_close");

regBtnOpenPopup.addEventListener("click", () => {
  reg_modal.classList.toggle("show");
  if (reg_modal.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
reg_modal.addEventListener("click", (event) => {
  if (event.target === reg_modal) {
    reg_modal.classList.toggle("show");
    if (!reg_modal.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});

close.addEventListener("click", () => {
  reg_modal.classList.toggle("show");
});

export { regBtnOpenPopup, reg_modal, close, body };

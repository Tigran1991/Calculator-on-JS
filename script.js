const buttonOne = document.querySelector(".button_one")
const resultField = document.querySelector(".result_field")
const todo1 = document.querySelector(".todo")

buttonOne.addEventListener("click", () => {
  const value = buttonOne.getAttribute("value")
  todo1.value = value
})

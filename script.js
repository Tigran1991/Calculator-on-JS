const actionBtns = document.getElementsByClassName("actionBtn")
const digitalBtns = document.getElementsByClassName("digitalBtn")
const resultButton = document.getElementById("btn_result")
const resultField = document.querySelector(".result_field")
const deleteBtn = document.getElementById("btn_delete")
const switchThemeText = document.getElementById("switch_theme_text")
const calculator = document.querySelector(".calculator")
const switchValue = document.getElementById("switchValue")

const changeCalculatorBackground = () => {
  console.log(switchValue.checked)
  if (!switchValue.checked) {
    calculator.style.background = `linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(66, 68, 84, 1) 100%
    )`
    for (const element of actionBtns) {
      element.style.border = "2px solid #fff"
    }
    for (const element of digitalBtns) {
      element.style.border = "2px solid #fff"
    }
    deleteBtn.style.border = "2px solid #fff"
    deleteBtn.style.color = "#fff"
    switchThemeText.style.color = "#fff"
    resultButton.style.border = "2px solid #fff"
  } else if (switchValue.checked) {
    calculator.style.background = "rgb(202, 184, 184)"
    for (const element of actionBtns) {
      element.style.border = "2px solid #333"
    }
    for (const element of digitalBtns) {
      element.style.border = "2px solid #333"
    }
    deleteBtn.style.border = "2px solid #333"
    deleteBtn.style.color = "#333"
    switchThemeText.style.color = "#333"
    resultButton.style.border = "2px solid #333"
  }
}

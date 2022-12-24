const actionBtns = document.getElementsByClassName("actionBtn")
const digitalBtns = document.getElementsByClassName("digitalBtn")
const resultButton = document.querySelector("#btn_result")
const deleteBtn = document.querySelector("#btn_delete")
const switchThemeText = document.querySelector("#switch_theme_text")
const calculator = document.querySelector("#calculator")
const switchTheme = document.querySelector("#switch_theme")
const enteredValue = document.querySelector("#entered_actions")
const resultField = document.querySelector("#result_field")

const changeStyles = (background, color) => {
  calculator.style.background = background
  for (const element of actionBtns) {
    element.style.border = `2px solid ${color}`
  }
  for (const element of digitalBtns) {
    element.style.border = `2px solid ${color}`
  }
  deleteBtn.style.border = `2px solid ${color}`
  deleteBtn.style.color = color
  switchThemeText.style.color = color
  resultButton.style.border = `2px solid ${color}`
}

const changeCalculatorBackground = () => {
  if (!switchTheme.checked) {
    changeStyles(
      `linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(66, 68, 84, 1) 100%
    )`,
      "#fff"
    )
  } else if (switchTheme.checked) {
    changeStyles("rgb(202, 184, 184)", "#333")
  }
}

const getButtonsValue = (value) => {
  enteredValue.value += value
}

const getResult = () => {
  const enteredCurrentValue = enteredValue.value
  if (enteredCurrentValue.includes("%")) {
    const enteredUpdatedValue = enteredCurrentValue.replace("%", "*") + "/100"
    const result = eval(enteredUpdatedValue)
    return (resultField.textContent = `= ${result}`)
  } else {
    const result = eval(enteredCurrentValue)
    return (resultField.textContent = `= ${result}`)
  }
}

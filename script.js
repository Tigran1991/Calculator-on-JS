const actionBtns = document.getElementsByClassName("btn action")
const digitalBtns = document.getElementsByClassName("btn digital")
const buttons = document.getElementsByClassName("btn")
const resultBtn = document.querySelector("#btn_result")
const deleteBtn = document.querySelector("#btn_delete")
const switchThemeText = document.querySelector("#switch_theme_text")
const calculator = document.querySelector("#calculator")
const switchTheme = document.querySelector("#switch_theme")
const enteredValue = document.querySelector("#entered_actions")
const resultField = document.querySelector("#result_field")

const addClickEventOnBtns = () => {
  const getButtonsValue = (e) => {
    enteredValue.value += e.target.value
  }

  for (const button of buttons) {
    button.addEventListener("click", getButtonsValue)
  }
}

addClickEventOnBtns()

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

resultBtn.addEventListener("click", getResult)

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
  resultBtn.style.border = `2px solid ${color}`
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

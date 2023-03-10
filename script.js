const calculator = document.querySelector("#calculator")

const makeCalculator = () => {
  return (calculator.innerHTML = `
  <div id='input_field'>
  <input type='text' id='entered_actions'/>
</div>
<div id='result_field'></div>
<div id='buttons_field'>
  <div id='theme_switcher_field'>
    <label id='switch'>
      <input type='checkbox' id='switch_theme'>
      <span class='slider round'></span>
    </label>
    <p id='switch_theme_text'>SWITCH THE THEME</p>
  </div>
    <button id='btn_delete'>C</button>
    <button class='btn action'>(</button>
    <button class='btn action'>)</button>
    <button class='btn action'>x</button>
    <button class='btn action'>&#8730</button>
    <button class='btn action'>%</button>
    <button class='btn action'>&plusmn</dibuttonv>
    <button class='btn action'>/</button>
    <button class='btn digital'>7</button>
    <button class='btn digital'>8</button>
    <button class='btn digital'>9</button>
    <button class='btn action' id='btn_subtract'>-</button>
    <button class='btn digital'>4</button>
    <button class='btn digital'>5</button>
    <button class='btn digital'>6</button>
    <button class='btn action'>+</button>
    <button class='btn digital'>1</button>
    <button class='btn digital'>2</button>
    <button class='btn digital'>3</button>
    <button id='btn_result'>=</button>
    <button class='btn digital'>.</button>
    <button class='btn digital'>0</button>
    <button id="btn_backspace">x</button>
</div>`)
}

makeCalculator()

const slider = document.querySelector(".slider")
const actionBtns = document.getElementsByClassName("btn action")
const digitalBtns = document.getElementsByClassName("btn digital")
const buttons = document.getElementsByClassName("btn")
const backspaceBtn = document.querySelector("#btn_backspace")
const resultBtn = document.querySelector("#btn_result")
const deleteBtn = document.querySelector("#btn_delete")
const switchThemeText = document.querySelector("#switch_theme_text")
const switchTheme = document.querySelector("#switch_theme")
const enteredValue = document.querySelector("#entered_actions")
const resultField = document.querySelector("#result_field")

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

const addClickEventOnBtns = () => {
  const getButtonsValue = (e) => {
    if (resultField.textContent !== "") {
      enteredValue.value = ""
      resultField.textContent = ""
      enteredValue.value += e.target.textContent
    } else {
      enteredValue.value += e.target.textContent
    }
  }

  for (const button of buttons) {
    button.addEventListener("click", getButtonsValue)
  }
}

addClickEventOnBtns()

const backspaceEneterdValue = () => {
  const enteredCurrentValue = enteredValue.value
  const updatedEnteredValue = enteredCurrentValue.slice(0, -1)
  enteredValue.value = updatedEnteredValue
  return updatedEnteredValue
}

const deleteEnteredValue = () => {
  enteredValue.value = ""
  resultField.textContent = ""
}

const getResult = () => {
  const enteredCurrentValue = enteredValue.value
  if (enteredCurrentValue.includes("%")) {
    const enteredUpdatedValue = enteredCurrentValue.replace("%", "*") + "/100"
    const result = eval(enteredUpdatedValue)
    return (resultField.textContent = `= ${result}`)
  } else if (enteredCurrentValue.includes("???")) {
    const rootValue = enteredCurrentValue.substring(1)
    const result = Math.sqrt(rootValue)
    return (resultField.textContent = `= ${result}`)
  } else {
    const result = eval(enteredCurrentValue)
    return (resultField.textContent = `= ${result}`)
  }
}

slider.addEventListener("click", changeCalculatorBackground)
backspaceBtn.addEventListener("click", backspaceEneterdValue)
deleteBtn.addEventListener("click", deleteEnteredValue)
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
  enteredValue.style.color = color
  resultField.style.color = color
}

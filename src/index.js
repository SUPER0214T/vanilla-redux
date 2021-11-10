import { createStore } from 'redux'

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");

const reducer = (count = 0, action) => {  // reducer는 함수의 형태로 만들어야 함
  console.log(count);
  switch (action.type) {
    case "ADD":
      return count += 1;
    case "MINUS":
      return count -= 1;
    default:
      return count;
  }
}

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState()
}

store.subscribe(onChange);

add.addEventListener('click', () => store.dispatch({type: "ADD"}))
minus.addEventListener('click', () => store.dispatch({type: "MINUS"}))
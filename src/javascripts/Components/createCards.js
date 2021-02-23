import printToDom from '../Helpers/printToDom';

const createCards = (arr) => {
  let cardString = '';
  for (let i = 0; i < arr.length; i += 1) {
    cardString += `<div class="card m-4 rounded-lg" style="width: 18rem;">
    <img src=${arr[i].url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text font-weight-bold text-success" id="att-msg">${arr[i].name} attempted to catch ${arr[i].attempted} fish</p>
      <p class="card-text text-secondary" id="timeAtt">at ${arr[i].timeAttempt}</p>
      <p class="card-text font-weight-bold text-success" id="su-msg">${arr[i].name} successfully caught ${arr[i].succeeded} fish</p>
      <p class="card-text text-secondary" id="timeSu">at ${arr[i].timeSucceed}</p>
      <button class="btn btn-secondary" type="button" id="attempted--${arr[i].id}">attempted</button>
      <button class="btn btn-secondary" type="button" id="succeeded--${arr[i].id}">succeeded</button>
    </div>
  </div>`;
  }
  printToDom('#bearCard', cardString);
};

export default createCards;

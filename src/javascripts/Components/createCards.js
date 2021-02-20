import printToDom from '../Helpers/printToDom';

const createCards = (arr) => {
  let cardString = '';
  for (let i = 0; i < arr.length; i += 1) {
    cardString += `<div class="card m-4 rounded-lg" style="width: 18rem;">
    <img src=${arr[i].url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">Bear stuff</p>
      <a href="#" class="btn btn-secondary">Go somewhere</a>
    </div>
  </div>`;
  }
  printToDom('#bearCard', cardString);
};

export default createCards;

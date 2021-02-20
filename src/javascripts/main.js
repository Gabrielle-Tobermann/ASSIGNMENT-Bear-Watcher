import '../styles/main.scss';

const bears = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createForm = () => {
  const formString = `<form class="border-top border-bottom border-secondary p-3 w-50 mb-3">
  <div class="form-group w-100">
    <label for="bearName" class="text-secondary">Enter bear name:</label>
    <input type="text" class="form-control" id="bear-name" aria-describedby="bearName" required>
  </div>
  <div class="form-group w-100">
    <label for="img-url" class="text-secondary">Enter image:</label>
    <input type="url" class="form-control" id="img-url" required>
  </div>
  <button type="submit" class="btn btn-secondary">Submit</button>
</form>`;

  printToDom('#bear-form', formString);
};

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

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const url = document.querySelector('#img-url').value;
  const obj = {
    name,
    url,
  };
  bears.push(obj);
  createCards(bears);
  document.querySelector('form').reset();
};

const river = () => {
  document.querySelector('.jumbotron').style.display = 'none';
  document.querySelector('form').style.display = 'none';
  const stringToPrint = '<div id="all-bears" class="text-secondary">Here are all the bears currently being tracked</div>';
  printToDom('#river', stringToPrint);
  createCards(bears);
};

const init = () => {
  createForm();
  createCards(bears);
  document.querySelector('form').addEventListener('submit', getFormInfo);
  document.querySelector('#river-btn').addEventListener('click', river);
};

init();

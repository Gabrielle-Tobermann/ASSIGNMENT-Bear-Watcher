import '../styles/main.scss';

const bears = [
  {
    name: 'Bob',
    url: 'blah',
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createForm = () => {
  const formString = `<form>
  <div class="form-group">
    <label for="bearName">Enter bear name</label>
    <input type="text" class="form-control" id="bear-name" aria-describedby="bearName">
  </div>
  <div class="form-group">
    <label for="img-url">Image</label>
    <input type="url" class="form-control" id="img-url">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  printToDom('#bear-form', formString);
};

const createCards = (arr) => {
  let cardString = '';
  for (let i = 0; i < arr.length; i += 1) {
    cardString += `<div class="card" style="width: 18rem;">
    <img src=${arr[i].url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${arr[i].name}</h5>
      <p class="card-text">Bear stuff</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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

const init = () => {
  createForm();
  createCards(bears);
  document.querySelector('form').addEventListener('submit', getFormInfo);
};

init();

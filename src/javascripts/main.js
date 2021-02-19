import '../styles/main.scss';

let bears = [];

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
    <input type="url" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  printToDom('#bear-form', formString);
};

const init = () => {
  createForm();
};

init();

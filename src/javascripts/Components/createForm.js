import printToDom from '../Helpers/printToDom';

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

export default createForm;

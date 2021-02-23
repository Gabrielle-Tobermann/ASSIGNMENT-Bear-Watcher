import printToDom from '../Helpers/printToDom';

const initalScreen = () => {
  const domString = `<div class="jumbotron">
  <div class="container">
    <h1 class="display-4 text-secondary">Hello and welcome!</h1>
    <p class="lead">Have you been watching bears catch fish with their <b>bear</b> hands? You can keep a record of them by filling out the form bellow!</p>
  </div>
</div>
<div id="bear-form" class="d-flex justify-content-center"></div>
<div id="river" class="m-5"></div>
<div id="bearCard" class="d-flex flex-wrap justify-content-center"></div>
<button type="button" class="btn btn-secondary m-5" id="river-btn">Take a look at the river! </button>
<div id="backButton"></div>`;

  printToDom('body', domString);
};

export default initalScreen;

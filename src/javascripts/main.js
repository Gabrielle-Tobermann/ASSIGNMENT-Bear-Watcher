import '../styles/main.scss';
import printToDom from './Helpers/printToDom';
import { bears, getFormInfo } from './Helpers/Data/bears';
import createForm from './Components/createForm';
import createCards from './Components/createCards';

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

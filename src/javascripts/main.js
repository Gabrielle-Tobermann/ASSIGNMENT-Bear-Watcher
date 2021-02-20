import '../styles/main.scss';
import { bears, getFormInfo } from './Helpers/Data/bears';
import createForm from './Components/createForm';
import createCards from './Components/createCards';
import river from './Components/river';

const init = () => {
  createForm();
  createCards(bears);
  document.querySelector('form').addEventListener('submit', getFormInfo);
  document.querySelector('#river-btn').addEventListener('click', river);
};

init();

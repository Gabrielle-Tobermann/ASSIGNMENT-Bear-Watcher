import '../styles/main.scss';
import { bears, getFormInfo, attempt } from './Helpers/Data/bears';
import createForm from './Components/createForm';
import createCards from './Components/createCards';
import river from './Components/river';

const init = () => {
  createForm();
  createCards(bears);
  document.querySelector('form').addEventListener('submit', getFormInfo);
  document.querySelector('#river-btn').addEventListener('click', river);
  document.querySelector('#bearCard').addEventListener('click', attempt);
};

init();

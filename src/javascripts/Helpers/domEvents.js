import { getFormInfo, attempt, succeed } from './Data/bears';
import river from '../Components/river';
import createForm from '../Components/createForm';

const domEvents = () => {
  createForm();
  document.querySelector('form').addEventListener('submit', getFormInfo);
  document.querySelector('#river-btn').addEventListener('click', river);
  document.querySelector('#bearCard').addEventListener('click', attempt);
  document.querySelector('#bearCard').addEventListener('click', succeed);
};

export default domEvents;

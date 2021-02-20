import printToDom from '../Helpers/printToDom';
import createCards from './createCards';
import { bears } from '../Helpers/Data/bears';

const river = () => {
  document.querySelector('.jumbotron').style.display = 'none';
  document.querySelector('form').style.display = 'none';
  const stringToPrint = '<div id="all-bears" class="text-secondary">Here are all the bears currently being tracked</div>';
  printToDom('#river', stringToPrint);
  createCards(bears);
};

export default river;

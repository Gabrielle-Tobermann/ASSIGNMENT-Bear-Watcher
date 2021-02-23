import printToDom from '../Helpers/printToDom';
import createCards from './createCards';
import { bears } from '../Helpers/Data/bears';
import initalScreen from './initialScreen';
import createForm from './createForm';

const trackedBears = [
  {
    name: 'Bob',
    url: 'https://lh3.googleusercontent.com/proxy/wizBvzFR1hzRCmRVkQsLlEla1OOthBI_ej7UrPSAfayU6ULQ5z7Fwi9bpfV2uoMptogyGobSOFfSRzjipBjUAyHjealUfNvDZ-k_yM5r9fWw7ZFXXyoROGVAFHOvbLGER46foR-RUBvabXTIwWpPChLdANxRzlngKOMd',
    attempted: 5,
    succeeded: 10,
    timeAttempt: new Date(),
    timeSucceed: new Date(),
    id: 1000,
  },
  {
    name: 'Claudette',
    url: 'https://images.immediate.co.uk/production/volatile/sites/23/2019/10/shutterstock_1318940468-d60b405.jpg?quality=90&resize=620%2C413',
    attempted: 8,
    succeeded: 13,
    timeAttempt: new Date(),
    timeSucceed: new Date(),
    id: 1001,
  },
  {
    name: 'Craig',
    url: 'https://www.clearcreekfm.com/sites/default/files/users/clearcreekfm/bear.jpg',
    attempted: 6,
    succeeded: 12,
    timeAttempt: new Date(),
    timeSucceed: new Date(),
    id: 1002,
  }
];

const river = () => {
  document.querySelector('.jumbotron').style.display = 'none';
  document.querySelector('form').style.display = 'none';
  document.querySelector('#river-btn').style.display = 'none';
  const stringToPrint = '<div id="all-bears" class="text-secondary">Here are all the bears currently being tracked</div>';
  printToDom('#river', stringToPrint);
  bears.push(...trackedBears);
  createCards(bears);
  const backButton = '<button class="btn btn-secondary mb-5" type="button">Go back to home page </button>';
  printToDom('#backButton', backButton);
  document.querySelector('#backButton').addEventListener('click', initalScreen);
  document.querySelector('#backButton').addEventListener('click', createForm);
};

export default river;

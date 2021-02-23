import '../styles/main.scss';
import initialScreen from './Components/initialScreen';
import domEvents from './Helpers/domEvents';

const init = () => {
  initialScreen();
  domEvents();
};

init();

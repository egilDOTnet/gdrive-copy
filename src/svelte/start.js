import Start from './components/start.html';
import about from './about';

const app = new Start({
  target: document.getElementById('start-tab'),
  data: {
    name: 'eric'
  }
});

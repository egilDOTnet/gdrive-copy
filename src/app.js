import App from './components/App';
import About from './components/About';
import Start from './components/Start';
import Resume from './components/Resume';
import Pause from './components/Pause';
import FAQ from './components/FAQ';
import Spinner from './components/icons/Spinner';

const app = new App({
  target: document.querySelector('#app'),
  data: {
    views: [
      {
        id: 'about',
        title: 'About',
        component: About
      },
      {
        id: 'start',
        title: 'Start',
        component: Start
      },
      {
        id: 'resume',
        title: 'Resume',
        component: Resume
      },
      {
        id: 'pause',
        title: 'Pause',
        component: Pause
      },
      {
        id: 'faq',
        title: 'FAQ',
        component: FAQ
      }
    ],
    // must match the id of one of the views
    active: 'start'
  },
  components: {
    About,
    Start,
    Resume,
    Pause,
    FAQ
  }
});

const spinner = new Spinner({
  target: document.getElementById('spinner')
});

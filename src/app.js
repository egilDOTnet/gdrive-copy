import App from './components/App';

const app = new App({
  target: document.querySelector('#app'),
  data: {
    views: [
      {
        id: 'about',
        title: 'About'
      },
      {
        id: 'start',
        title: 'Start'
      },
      {
        id: 'resume',
        title: 'Resume'
      },
      {
        id: 'pause',
        title: 'Pause'
      },
      {
        id: 'faq',
        title: 'FAQ'
      }
    ],
    // must match the id of one of the views
    active: 'start'
  }
});

import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

import './index.css';
import App from './App';


const startApp = (lang: string) => {
  ReactDOM.render(
    <React.StrictMode>
      <App lang={lang} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};


// get locale
const browserLanguage = navigator.language.toLowerCase().split(/[_-]+/)[0];
const appLanguage = browserLanguage === 'it' ? 'it' : 'en';

// setup moment locale
moment.locale(appLanguage === 'it' ? 'it' : 'en-gb');

startApp(appLanguage);

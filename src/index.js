import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from 'router/Router';
import { configureStore } from '06-store/configureStore';

import 'assets/styles/main.scss';

const store = configureStore();
const app = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    app
);

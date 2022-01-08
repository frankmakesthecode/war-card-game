import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';

ReactDOM.render(
  <Provider store={store}>
    <h1>War: The Card Game of Champions</h1>
    <Home />
  </Provider>,
  document.getElementById('app')
);

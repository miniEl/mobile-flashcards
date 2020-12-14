import React from 'react';
import { createStore } from 'redux';
import reducers from "./reducers";
import { Provider } from 'react-redux';
import middleware from './middleware/index';
import MainApp from './components/MainApp';

const store = createStore(reducers, middleware);

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './assets/redux/store';
import Header from './assets/components/header';
import Content from './assets/components/content';
import ModalWindow from './assets/components/modal';
import Filters from './assets/components/filters';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading="LDNG" persistor={persistor}>
        <Header />
        <Filters />
        <Content />
        <ModalWindow />
      </PersistGate>
    </Provider>
  );
}

export default App;

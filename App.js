import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import SubjectsScreen from './pages/SubjectsScreen/index';

export default function App() {
  return (
    <Provider store={store}>
      <SubjectsScreen />
    </Provider>
  );
}
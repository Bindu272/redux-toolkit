
import React from 'react';
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';


test('renders YourComponentUsingRedux with Redux store', () => {
  render(
    <Provider store={store}>
     <store/>
    </Provider>
  );

});



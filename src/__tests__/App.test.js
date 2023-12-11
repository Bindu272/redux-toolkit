import { render,  } from '@testing-library/react';
import App from '../App';
import React from 'react';

describe('App test',()=>{
  it('renders app correctly',()=>{
    render(<App/>)
  })
})
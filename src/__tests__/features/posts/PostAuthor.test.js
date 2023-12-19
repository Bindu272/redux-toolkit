import React from 'react';
import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PostAuthor from '../../../features/posts/PostAuthor';
import { useSelector } from 'react-redux';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockStore = configureStore();

describe('PostAuthor component', () => {
  it('renders author name when user is found', () => {
    const userId = 1;
    const userName = 'John Doe';


    useSelector.mockReturnValueOnce([
      { id: userId, name: userName },
   
    ]);

    const store = mockStore({});

    render(
      <Provider store={store}>
        <PostAuthor userId={userId} />
      </Provider>
    );

    const authorElement = screen.getByText(`by ${userName}`);
    expect(authorElement).toBeInTheDocument();
  });

  it('renders "Unknown author" when user is not found', () => {
    const userId = 1;

 
    useSelector.mockReturnValueOnce([]);

    const store = mockStore({});

  render(
      <Provider store={store}>
        <PostAuthor userId={userId} />
      </Provider>
    );

    const unknownAuthorElement = screen.getByText('by Unknown author');
    expect(unknownAuthorElement).toBeInTheDocument();
  });
});

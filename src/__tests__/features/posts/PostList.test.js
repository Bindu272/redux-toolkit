import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import PostsList from '../../../features/posts/PostsList';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockStore = configureStore();

describe('PostsList component', () => {
  it('renders posts correctly', () => {

    const dummyPosts = [
      {
        id: 1,
        title: 'Test Title 1',
        content: 'Test Content 1',
        userId: 123,
        date: '2023-12-14T12:34:56.789Z',
        reactions:{
          thumbsUp:0
        }
      },

    ];

    useSelector.mockReturnValue(dummyPosts);


    const store = mockStore({

    });

    render(
      <Provider store={store}>
        <PostsList />
      </Provider>
    );

    const postElements = screen.getAllByRole('article');
    expect(postElements).toHaveLength(dummyPosts.length);

    expect(screen.getByText('Test Title 1')).toBeInTheDocument();

  });
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReactionsButtons from '../../../features/posts/ReactionsButtons';

const mockStore = configureStore();

describe('ReactionsButtons', () => {
  it('should dispatch action when a reaction button is clicked', () => {
    const initialState = {

    };

    const store = mockStore(initialState);

    const post = {
      id: 1,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    };

  render(
      <Provider store={store}>
        <ReactionsButtons post={post} />
      </Provider>
    );

    fireEvent.click(screen.getByText(/👍/));

    const expectedAction = { type: 'posts/reactionAdded', payload: { postId: post.id, reaction: 'thumbsUp' } };
    expect(store.getActions()).toEqual([expectedAction]);
  });
});

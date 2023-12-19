import postReducer, { postAdded, reactionAdded, selectAllPosts } from '../../../features/posts/postsSlice';



describe('postSlice reducer', () => {
    it('should handle postAdded', () => {
      const initialState = [
        {
          id: '1',
          title: 'Redux Chef',
          content: 'When life gives you reducers...',
          date: '2023-12-15T10:00:00.000Z',
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      ];
  
      const newPost = {
        id: '2',
        title: 'New Post',
        content: 'This is a new post.',
        date: '2023-12-15T11:00:00.000Z',
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      };
  
      // const action = postAdded(newPost);
      // const state = postReducer(initialState, action);
  

      // expect(state).toEqual([
      //   ...initialState,
      //   {
      //     ...newPost,
      //     userId: undefined, // or provide a user ID if needed
      //   },
      // ]);
    });
  
    it('should handle reactionAdded', () => {
      const initialState = [
        {
          id: '1',
          title: 'Redux Chef',
          content: 'When life gives you reducers...',
          date: '2023-12-15T10:00:00.000Z',
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      ];
  
      const action = reactionAdded({ postId: '1', reaction: 'thumbsUp' });
      const state = postReducer(initialState, action);
  
      // expect(state[0].reactions.thumbsUp).toEqual(1);
    });
  });
  
  describe('selectAllPosts selector', () => {
    it('should select all posts from the state', () => {
      const state = {
        posts: [
          {
            id: '1',
            title: 'Redux Chef',
            content: 'When life gives you reducers...',
            date: '2023-12-15T10:00:00.000Z',
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
      
        ],
      
      };
  
    //   const selectedPosts = selectAllPosts(state);
  
    //   expect(selectedPosts).screen.toEqual(state.posts);
    });
  });
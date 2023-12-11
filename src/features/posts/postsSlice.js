import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
const initialState = [
  {
    id: "1",
    title: "Redux Chef",
    content: "When life gives you reducers, just createSlice and dice them into manageable pieces! 🎲🔄 #ReduxChef",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
  },
  {
    id: "2",
    title: "Redux Culinary Skills..",
    content: "Why did the developer use createSlice? Because slicing and dicing state is more fun than cutting vegetables! 🥒✂️ #ReduxCulinarySkills",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
  },
  {
    id: "3",
    title: "Redux Master Chef",
    content: "Turning spaghetti state into a state-of-the-art spaghetti detector. 🍝🔍 #ReduxMasterChef",
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
  },
  {
    id: "4",
    title: "Redux Party Tricks",
    content: "Why did the developer bring a toolkit to the coding party? To fix the state of the conversation, of course! 🔨🔄 #ReduxPartyTricks",
    date: sub(new Date(), { minutes: 1 }).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date:new Date().toISOString(),
            userId,
            reactions:{
                thumbsUp:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
          },
        };
      },
    },
    reactionAdded(state, action){
        const {postId, reaction}=action.payload
        const existingPost = state.find(post=>post.id===postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }
  },
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded , reactionAdded} = postSlice.actions;
export default postSlice.reducer;

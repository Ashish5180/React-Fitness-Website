import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content, image } = action.payload;
      const post = state.posts.find(post => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
        post.image = image;
      }
    },
  },
});

export const { addPost, deletePost, updatePost } = blogSlice.actions;
export default blogSlice.reducer;

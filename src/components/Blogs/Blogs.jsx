import React, { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import BlogSection from './BlogSection';

const Blog = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
    <BlogSection/>
    <div className="bg-gray-100 px-2 py-10 ">
      <h1 className='text-5xl font-semibold text-center '><i>Create Your Own <span className='text-6xl text-red-700'>Blog!</span></i></h1>
      <div className='flex justify-center p-6'>
      <button
        onClick={() => setIsAdding(true)}
        className="bg-green-500  text-white px-4 py-2 rounded mb-6 hover:bg-green-700"
      >
        Add New Post
      </button>
      </div>
      {isAdding && <PostForm onClose={() => setIsAdding(false)} onAddPost={handleAddPost} />}
      <PostList posts={posts} />
    </div>
    </>
  );
};

export default Blog;

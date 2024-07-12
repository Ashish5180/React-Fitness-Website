import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../React-Redux/BlogSlice';
import PostForm from './PostForm';
import PostCard from './PostCard';

const PostList = () => {
  const posts = useSelector((state) => state.blog.posts);
  const dispatch = useDispatch();
  const [editingPost, setEditingPost] = useState(null);

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {editingPost && (
        <PostForm post={editingPost} onClose={() => setEditingPost(null)} />
      )}
    </div>
  );
};

export default PostList;

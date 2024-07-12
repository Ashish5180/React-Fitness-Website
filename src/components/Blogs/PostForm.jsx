import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../React-Redux/BlogSlice';
import { v4 as uuidv4 } from 'uuid';

const PostForm = ({ post, onClose }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setImage('');
  };

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      try {
        const imageUrl = await readFileAsync(imageFile);
        console.log('File read successfully:', imageUrl);
        submitPost(imageUrl);
      } catch (error) {
        console.error('Error reading file:', error);
        return;
      }
    } else {
      submitPost(image);
    }
  };

  const submitPost = (imageUrl) => {
    if (post) {
      dispatch(updatePost({ id: post.id, title, content, image: imageUrl }));
      console.log('Updating post:', { id: post.id, title, content, image: imageUrl });
    } else {
      dispatch(addPost({ id: uuidv4(), title, content, image: imageUrl }));
      console.log('Adding post:', { id: uuidv4(), title, content, image: imageUrl });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Or Upload Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {post ? 'Update Post' : 'Add Post'}
      </button>
    </form>
  );
};

export default PostForm;

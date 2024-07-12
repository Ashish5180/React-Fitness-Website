import React from 'react';

const PostCard = ({ post, onEdit, onDelete }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="h-56 w-full object-cover"
        />
      )}
      <div className="flex-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold xl:text-2xl">{post.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(post)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
        <p className="mt-2 mb-4 text-base font-light text-gray-700">
          {post.content}
        </p>
        <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
          Learn More
        </span>
      </div>
    </article>
  );
};

export default PostCard;

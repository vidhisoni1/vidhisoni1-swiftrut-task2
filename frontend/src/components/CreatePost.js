import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ title, content });
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="content">Post Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

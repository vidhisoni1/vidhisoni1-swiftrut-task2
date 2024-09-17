import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await getPostById(id);
    setPost(response.data);
  };

  return (
    <div className="container mt-5">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p className="text-muted">Posted on: {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostDetail;

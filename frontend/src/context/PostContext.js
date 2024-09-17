import React, { createContext, useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from '../api';

// Create a context
export const PostContext = createContext();

// Provider component
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts
  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  // Create a new post
  const addPost = async (newPost) => {
    await createPost(newPost);
    fetchPosts(); // Refresh posts after adding
  };

  // Update a post
  const editPost = async (id, updatedPost) => {
    await updatePost(id, updatedPost);
    fetchPosts(); // Refresh posts after editing
  };

  // Delete a post
  const removePost = async (id) => {
    await deletePost(id);
    fetchPosts(); // Refresh posts after deleting
  };

  return (
    <PostContext.Provider value={{ posts, addPost, editPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};

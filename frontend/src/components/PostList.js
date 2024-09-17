import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const PostList = () => {
  const { posts, removePost } = useContext(PostContext);

  return (
    <div className="container mt-5">
      <h2>All Blog Posts</h2>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-6 mb-4" key={post._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content.substring(0, 100)}...</p>
                <Link to={`/post/${post._id}`} className="btn btn-primary mr-2">
                  View
                </Link>
                <Link to={`/edit/${post._id}`} className="btn btn-warning mr-2">
                  Edit
                </Link>
                <button
                  onClick={() => removePost(post._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;

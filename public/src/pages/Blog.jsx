import React from "react";
import "../css/Blog.css";

const Blog = () => {
  const DeleteBlog = () => {
    // Delete blog
  };

  const LikeBlog = () => {
        const likeButton = document.querySelector('.like-button');
        likeButton.innerHTML = '<i class="fa fa-heart" style="color: red;"></i>';
      };


  const CreateBlog = () => {
    // Create blog
  };

  const CommentBlog = () => {
    // Comment blog
  };

  const EditBlog = () => {
    // Edit blog
  };

  return (
    <body>
      <div className="navbar">
        <navbar>
          <ul>
            <li>
              <a href="#">Homepage</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </navbar>
      </div>
      <div className="blog">
        <div className="blog-header">
          <h4>Blog Title</h4>
          <h4>Author</h4>
        </div>
        <div className="blog-body">
          <p>Blog Content</p>
        </div>
        <div className="blog-comments">
        <form>
            <textarea placeholder="Add a comment"></textarea>
            <button onClick={CommentBlog}>Comment</button>
          </form>
          </div>
          <div className="blog-footer">
          <button onClick={LikeBlog}><i className="material-icons">favorite</i></button>
        </div>
      </div>
    </body>
  );
};

export default Blog;

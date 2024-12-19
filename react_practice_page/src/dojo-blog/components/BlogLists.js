import { Link } from "react-router-dom";

const BlogLists = ({ blogs, title }) => {
  return (
    <div className="blog-lists">
      <h2>{title}</h2>
      {blogs && Array.isArray(blogs) ? (
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/dojo-blog/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))
      ) : (
        <div>No blogs available</div>
      )}
    </div>
  );
};


export default BlogLists;

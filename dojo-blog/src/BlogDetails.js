const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isPending, error } = useFetch(
    "https://raw.githubusercontent.com/mark-trinidad/React_Practice/master/dojo-blog/data/db.json"
  );
  const navigate = useNavigate();

  const blog = blogs ? blogs.find(b => b.id === id) : null;

  const handleClick = () => {
    // Cannot delete, so consider disabling this for now
    console.warn("Delete operation is not supported on GitHub raw files.");
    navigate("/");
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

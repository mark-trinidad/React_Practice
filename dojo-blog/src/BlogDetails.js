import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blog, isPending, error} = useFetch(`https://raw.githubusercontent.com/mark-trinidad/React_Practice/master/dojo-blog/data/db.json${id}`);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("https://raw.githubusercontent.com/mark-trinidad/React_Practice/master/dojo-blog/data/db.json" + blog.id,{
      method: 'DELETE'
    }).then(()=>{
      navigate("/")
    })
  }
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{error}</div>}
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

import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState([]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null)
        })
        .catch((err) => {
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      <div>{error}</div>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

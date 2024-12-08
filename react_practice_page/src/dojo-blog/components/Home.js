import BlogLists from "./BlogLists";
import useFetch from "./useFetch";
import styles from "../dojo.module.css";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className={styles.home}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

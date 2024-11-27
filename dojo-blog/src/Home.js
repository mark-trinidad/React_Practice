import BlogLists from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
  const { data:blogs, isPending, error} = useFetch("https://raw.githubusercontent.com/mark-trinidad/React_Practice/master/dojo-blog/data/db.json");

  return (
    <div className="home">
      <div>{error}</div>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

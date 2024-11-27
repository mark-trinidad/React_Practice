import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That Page cannot be found</p>
      <Link to="/dojo-blog">Back to the homepage...</Link>
    </div>
  );
};

export default notFound;

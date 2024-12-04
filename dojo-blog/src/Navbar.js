import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to='/React_Practice/dojo-blog'>Home</Link>
        <Link to="/React_Practice/dojo-blog/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

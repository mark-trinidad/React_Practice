import { Link } from "react-router-dom";
import styles from "../dojo.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>The Dojo Blog</h1>
      <div className={styles.links}>
        <Link to='/dojo-blog'>Home</Link>
        <Link to="/dojo-blog/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

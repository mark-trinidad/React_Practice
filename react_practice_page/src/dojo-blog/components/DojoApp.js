import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import DojoStyles from "../dojo.module.css";

function DojoApp() {
  return (
    <div className="dojo-blog">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/dojo-blog/" element={<Home />} />
          <Route path="/dojo-blog/create" element={<Create />} />
          <Route path="/dojo-blog/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}


export default DojoApp;

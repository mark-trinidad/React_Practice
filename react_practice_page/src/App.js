import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import DojoApp from "./dojo-blog/components/DojoApp";
import styles from './index.module.css';

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Navbar />
        <div>
          <Routes>
            <Route path="/React_Practice/" element={<Projects />}></Route>
            <Route path="/React_Practice/dojo-blog/" element={<DojoApp />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

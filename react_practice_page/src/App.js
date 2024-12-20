import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Projects from "./components/Projects";
import DojoApp from "./dojo-blog/components/DojoApp";
import styles from './index.module.css';

function App() {
  const [isProjectClicked, setIsProjectClicked] = useState(false);

  const handleProjectClick = () => {
    setIsProjectClicked(true);
  };

  return (
    <Router basename="/React_Practice">
      <div className={styles.body}>
        <Navbar isProjectClicked={isProjectClicked} />
        <div>
          <Routes>
            <Route 
              path="/" 
              element={<Projects onProjectClick={handleProjectClick} />} 
            />
            <Route path="/dojo-blog/*" element={<DojoApp />} />
            <Route path="/" element={<Navigate to="/React_Practice/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

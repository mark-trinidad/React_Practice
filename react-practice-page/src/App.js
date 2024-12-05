import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import DojoApp from "./dojo-blog/components/DojoApp";
import ReactStyle from "./"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/React_Practice/" element={<Projects />}></Route>
            <Route path="/dojo-blog/" element={<DojoApp />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

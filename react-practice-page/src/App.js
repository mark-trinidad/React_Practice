import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div >
          <Routes>
            <Route path="/react_practice/" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

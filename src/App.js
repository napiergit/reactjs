import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import OldApp from "./OldApp";
import Home from "./Home";

function App() {
  return (
    <HashRouter basename="/reactjs">
      <Routes>
        <Route path="/" element={<div>1</div>} />
        <Route path="/2/" element={<div>2</div>} />
        <Route path="/3" element={<div>3</div>} />
        <Route path="/home/" element={<Home />} />
        <Route path="/reactjs/legacy" element={<OldApp />} />
        <Route path="/reactjs/1" element={<div>1</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OldApp from "./OldApp";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>1</div>} />
        <Route path="/reactjs" element={<div>2</div>} />
        <Route path="/reactjs/" element={<Home />} />
        <Route path="/reactjs/legacy" element={<OldApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

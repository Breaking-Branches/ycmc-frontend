import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ScannedResultPage from './pages/ScannedResultPage';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/scanned" element={<ScannedResultPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

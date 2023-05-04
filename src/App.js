import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ScannedResultPage from './pages/ScannedResultPage';
import SelectFilesPage from './pages/SelectFilesPage';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/scanned/:uuid" element={<ScannedResultPage/>} />
          <Route path="/select" element={<SelectFilesPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

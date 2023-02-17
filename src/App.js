import './App.css';
import FrontPage from './FrontPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

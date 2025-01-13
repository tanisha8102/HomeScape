import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/About-us'
import ContactPage from './pages/Contact'
import FAQPage from './pages/FAQ'
import Product from './pages/Product'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/product" element={<Product />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css'
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Index from './routes/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

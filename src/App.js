
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import './App.css';


function App() {
  return (
    <div className="App">

      
      {/* <Header /> */}
      <Routes>
      
      <Route path = "/" element = {<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

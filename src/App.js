import { Route, Routes } from 'react-router';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import './App.css';


function App() {
  return (
    <div className="App">

      
      {/* <Header /> */}
      <Routes>
      
      <Route path = "/" element = {<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      
      </Routes>
      
      
    </div>
  );
}

export default App;

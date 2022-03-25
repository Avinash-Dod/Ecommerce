import { Route, Routes } from "react-router";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";

function Nav()
{
    return (
<div>
<Routes>
      
      <Route path = "/" element = {<Home/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp/>} />
      
      </Routes>
      
</div>

    )

}
export default Nav;
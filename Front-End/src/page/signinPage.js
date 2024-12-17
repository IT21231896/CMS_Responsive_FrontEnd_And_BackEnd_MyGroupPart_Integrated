import React,{useState} from 'react';
import '../css/signin.css';
import Navbar from '../components/templetes/MainNav'
import Footer from '../components/templetes/Footer';
import { useNavigate, Link1 } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

import image from '../assets/Rectangle 1965.png'; 

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate(); // for navigation

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
    setSelectedValue(e.target.value);
    }
     // Handle sign-in form submission
     const handleSignIn = (e) => {
      e.preventDefault();

      if (!selectedValue) {
          toast.error("Please select a user type.");
          return;
      }

      if (selectedValue === "Admin") {
          // Redirect to admin dashboard
          navigate("/admin-dashboard");
      } else if (selectedValue === "Employee") {
          // Redirect to employee dashboard
          navigate("/employee-dashboard");
      } else {
          toast.error("Invalid user type selected.");
      }
  };
    

    return (
        <div className="page-container">
       {<Navbar/>}  
        <div className="signin-container">
            

            <main className="signin-main">
                <div className="signin-card">
                    <div className="signin-form">
                        <h2>Sign In</h2>
                        <form onSubmit={handleSignIn}>
                            {/* Added name attributes to the input fields */}
                            <select
                               name="dropdown"
                               value={selectedValue}
                              onChange={handleChange}
                              required
                            >
                            <option value="" disabled style={{color: '#aaa' /* Placeholder color */}}>
                             User Type
                           </option>
                           <option value="Admin">Admin</option>
                           <option value="Employee">Employee</option>
                           </select>
                             <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                            <a href="#forgot" className="forgot-link">Forgot password?</a>
                            <button type="submit" className="signin-button">SIGN IN</button>
                        </form>
                    </div> 
                    <div className="signin-image">
                        <img src={image} alt="Meeting" />
                    </div>
                </div>
            </main>
            </div>
            <div className="footer">
                {<Footer/>}
            </div>
            {/* Toast notification container */}
      <ToastContainer />
            
        </div>
    );
}

export default Signin;
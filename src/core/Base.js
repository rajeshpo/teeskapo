import React from "react";
import Menu from "./Menu";
import Button from '@material-ui/core/Button';
import { dark } from "@material-ui/core/styles/createPalette";
import { Link } from "react-router-dom";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    
    <div className="container-fluid" id="willhide">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className=" bg-dark mt-auto py-1">
      <div className=" footer container-fluid bg-success text-white text-center py-3">
        <p className="text-white">If you got any questions, feel free to reach out!</p>
        <div className="social-icons mb-1">
        <div className="social-icon">
        <a href="https://www.instagram.com/rajesh_tejh/" style={{textDecoration:"none",color:"white"}}><i class="fab fa-instagram"></i></a> 
         </div>
         <div className="social-icon">
        <a href="https://www.facebook.com/rajeshchitikala888/" style={{textDecoration:"none",color:"white"}}><i class="fab fa-facebook"></i></a> 
         </div>
         <div className="social-icon">
         <a href="https://mail.google.com"><i class="fas fa-sms" style={{textDecoration:"none",color:"pink"}}></i></a> 
            
         </div>
        </div>
        
        
  <a href="mailto:rajeshchitikala888@gmail.com" style={{textDecoration:"none"}}><Button variant="contained" color="secondary">Contact Us</Button></a> 
 
  <Link to="/privacypolicy" className="text-white text-center" style={{display:"block"}}>privacy policy</Link>   
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">STORE</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;

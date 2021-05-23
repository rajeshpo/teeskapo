import React from "react";
import Menu from "./Menu";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Rotis from "./categoryHelpers/Rotis";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => {

  let w = window.innerWidth;
  return (
    <div>
    <Menu />
    
    <div className="container-fluid" id="willhide">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
     {w>768?(  <div className="container-fluid Categories row">
      <div>
        <Link to="/user/biryaniitems" style={{color:"white"}} className="category-hover"><img className="category-image" src="https://image.freepik.com/free-vector/delicious-chicken-biryani-bowl_23-2148724730.jpg" alt="Default"/>  Biryani Items</Link>
      </div>
      <div>
        <Link to="/user/rotisandcurries" style={{color:"white"}}  className="category-hover"><img className="category-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYtsDgYDkXiGZF21iSEyS-jn0BSDMLifoqQ&usqp=CAU" alt="Default"/>  Rotis and Curries</Link>
      </div>
      <div>
        <Link to="/user/biryaniitems" style={{color:"white"}}  className="category-hover"> <img className="category-image"  src="https://media.istockphoto.com/vectors/soft-drink-bottles-vector-id689654950" alt="Default"/>  Cool Drinks</Link>
      </div>
      <div>
        <Link to="/user/biryaniitems" style={{color:"white"}}  className="category-hover"> <img className="category-image" src="https://media.istockphoto.com/vectors/funny-fast-food-menu-cartoon-character-vector-id638196212" alt="Default"/>  Fast Food Items</Link>
      </div>
      </div>):(  <div className="container-fluid Categories row ml-1">
      <div className="col-3">
        <Link to="/user/biryaniitems" style={{color:"white"}} className="category-hover"><img className="category-image" src="https://image.freepik.com/free-vector/delicious-chicken-biryani-bowl_23-2148724730.jpg" alt="Default"/><p style={{fontFamily:"initial",fontSize:"10px"}}>Biryani Items</p></Link>
      </div>
      <div className="col-3">
        <Link to="/user/rotisandcurries" style={{color:"white"}}  className="category-hover"><img className="category-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYtsDgYDkXiGZF21iSEyS-jn0BSDMLifoqQ&usqp=CAU" alt="Default"/><p style={{fontFamily:"initial",fontSize:"12px"}}>Rotis, Curries</p></Link>
      </div>
      <div className="col-3">
        <Link to="/user/biryaniitems" style={{color:"white"}}  className="category-hover"> <img className="category-image"  src="https://media.istockphoto.com/vectors/soft-drink-bottles-vector-id689654950" alt="Default"/><p style={{fontFamily:"initial",fontSize:"10px"}}>Cool Drinks</p></Link>
      </div>
      <div className="col-3">
        <Link to="/user/biryaniitems" style={{color:"white"}}  className="category-hover"> <img className="category-image" src="https://media.istockphoto.com/vectors/funny-fast-food-menu-cartoon-character-vector-id638196212" alt="Default"/><p style={{fontFamily:"initial",fontSize:"10px"}}>Fast Food</p></Link>
      </div>
      </div>)}
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
  )
}

export default Base;

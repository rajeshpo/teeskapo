import React, { useEffect, useState} from "react";
import ImageHelper from "./helper/ImageHelper";
import { Link,Redirect} from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAutheticated } from "../auth/helper";
 

import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  toast.configure()
  
 
const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined,
  showQ,
  calculatePrice,
   
  
  
 
}) => {
  const [redirect, setRedirect] = useState(false);
   
  const [count, setCount] = useState(product.count);
 
  let [count1,setCount1]=useState(0)
  

  //alert notification//

  const notify=()=>{
    toast.success(" Added to cart", {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     })
  }
  
 
   
  
 //alerts
  
 const cartTitle = product ? product.name : "A photo from pexels";
  const productId=product?product._id:"DEFAULT ID"
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const totalPrice = product ? product.totalprice : "DEFAULT";
  const category=product?(product.category.name):"DEFAULT"
  const addToCart = () => {
     
    isAutheticated()?(addItemToCart(product, () => setRedirect(true))):(alert("Please Login or Signup to continue!"))
    setCount1(1)
   
    
  };

  //so many notifications bug solved..
   if(count1===1){
     isAutheticated()&&notify()
     return setCount1(0)
   }


  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button id="added"
          onClick={addToCart}
          className="btn btn-block btn-outline-success  mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showGoToCart=()=>{
    return redirect&&<Link to="/cart" className="btn btn-block btn-outline-info mt-2 mb-2">Go To Cart</Link>  
  }
  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
        onClick={() => {
          removeItemFromCart(product._id);
          setReload(!reload);
          
        
    
        
        }}
        className="btn btn-block removeFromCart btn-outline-danger mt-2 mb-2"
      >
        Remove 
      </button>
      )
    );
  };
  let w = window.innerWidth;
   
  const handleChange=(e)=>{
   
      
    calculatePrice(e.target.value*cartPrice,productId,e.target.value)
    
   
 
  }
   
  return (
    <div className="card text-white bg-dark border border-info mb-2">
     
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
         
         
        <ImageHelper product={product} />
        <p className="bg-success font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        <p className="  bg-secondary font-weight-normal text-wrap rounded">Rs/- {cartPrice}</p>
        {showQ?<div>
        <form className="form mb-2">
        <select name="Quantity" id="Quantity" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2" >2</option>
          <option value= "3">3</option>
          <option value="4">4</option>
        </select>
         
        </form></div>:""}  
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}
           </div>

           
          <div className="col-12">{redirect?showGoToCart():showRemoveFromCart(removeFromCart)}</div>
        </div>
         
      </div>
    </div>
  );
};

export default Card;

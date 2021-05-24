import React, { useState, useEffect, useContext } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Payment from "./Payment";
import { Link } from "react-router-dom";
  

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  
  const [quotes,setQuotes]=useState("")
   
  
  useEffect(() => {
    if (typeof window !== undefined) {
      if (!localStorage.getItem("cart")) {
        return <p className="alert text-center text-white alert-success">Please add something into the cart</p>
      }
    }
    
    setProducts(loadCart());
    
    
  }, [reload]);

  
 
 
   
  const loadAllProducts = uniqueCart => {
  
    return (
      <div>
        {products.map((product, index) => (
          <div>
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
             />
           
          </div>
        ))}
      </div>
    );
  };



    const getAmount=(products)=>{
      let amount=0;
      products.map((p,i)=>{
        amount=amount+p.price;
      })
      return amount;
    }

    //motivational quotes 
    
    

    
  const loadCheckout = () => {
    return (
      <div>
        {products.length>0?( <div>
       <p className="alert alert-success" id="getAmount">Amount to pay {getAmount(products)} Rs/-</p>
         <div>
         <Link to="/user/paymentpage" className="btn btn-success btn-block rounded mt-3">
         Ready to pay
        </Link>
         </div>
         <div className="quotes">

         </div>

      </div>):<p className="alert alert-warning">No products in the cart</p>}
      </div>
    );
  };


  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      if(!response){
        return document.getElementById("quote").innerHTML="Getting a good quote for you !!!"
       }
       else return response.json();
    })
    .then(function(data) {
     if(!data){
      document.getElementById("quote").innerHTML="Getting a good quote for you !!!"
     }
     else{
      document.getElementById("quote").innerHTML=data[Math.floor(Math.random() * 1500)].text;
     }
    })

  
    
  let w = window.innerWidth;
  return (
    <Base title="Cart" description="Ready to checkout">
  {w>768?(     <div className="row text-center">
        <div className="col-4">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
             <Link to="/"><p className="alert alert-success btn-block rounded">Add a product</p></Link>
          )}
          { products.length>0 &&<Link to="/"><p className="btn btn-success btn-block rounded">Add More</p></Link>}
        </div>
        
        <div className="col-8">
        {loadCheckout()}
        <div className="container mt-3 mb-3 border border-white mt-5 py-2 px-1">
        <h5 className="text-success" style={{textDecoration:"overline"}}>Inspirational Quotes</h5>
           <p className="text-white" id="quote"></p>
        </div>
         
        </div>
      </div>):(     <div className="row text-center mt-5">
        <div className="col-6">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
             <Link to="/"><p className="alert alert-success btn-block rounded">Add a product</p></Link>
          )}
          { products.length>0 &&<Link to="/"><p className="btn btn-success btn-block rounded">Add More</p></Link>}
        </div>
        
        <div className="col-6">
        {loadCheckout()}
        <div className="container mt-3 mb-3 border border-white mt-5 py-3 px-3">
        <h5 className="text-success" style={{textDecoration:"overline"}}>Motivation</h5>

           <p className="text-white" id="quote"></p>
        </div>
    
        </div>
      </div>)}
    </Base>
  );
};

export default Cart;

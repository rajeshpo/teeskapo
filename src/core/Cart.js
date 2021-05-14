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
  const [showQuantity,setShowQuantity]=useState(1);
  
  
 
   
 
 
  useEffect(() => {
    setProducts(loadCart());
    
  }, [reload]);

   console.log("cartProducts",products);
   const uniqueCart=[...products.reduce((map,obj)=>map.set(obj._id,obj),new Map()).values()]
  console.log("uniqueCart",uniqueCart);
 
const totalDummyPrice=[];

products.map((p,i)=>{
  let price=p.price;
  let id=p._id;
  totalDummyPrice.push({price,id})
 
})
 
  const calculatePrice=(price,id)=>{
   
     if(totalDummyPrice.length===0){
      totalDummyPrice.push({price,id})
     }
  totalDummyPrice.map((p,i)=>{
    if(p.id===id){
    p.price=price;
    }
    else if(p.id!==id){
      totalDummyPrice.push({price,id})
    }
  })
  
  }
   
   
  const loadAllProducts = uniqueCart => {
  
    return (
      <div>
        {uniqueCart.map((product, index) => (
          <div>
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
            showQuantity={showQuantity}
            
           
           calculatePrice={calculatePrice}
            
           
          />
           
          </div>
        ))}
      </div>
    );
  };

  
  const calculateTotal=(e)=>{
    e.preventDefault(); 
    
    const uniqueValues=[...totalDummyPrice.reduce((map,obj)=>map.set(obj.id,obj),new Map()).values()]
   
  handsome(uniqueValues);
   }

   const handsome=(uniqueValues)=>{
     let amount=0;
     uniqueValues.map((p,i)=>{
      amount=amount+p.price
     })
    document.getElementById("getAmount").innerHTML=`Amount to Pay `+amount+` Rs/-`
    
   }
  const loadCheckout = () => {
    return (
      <div>
        {uniqueCart.length>0?( <div>
       <p className="alert alert-success" id="getAmount">Amount</p>
      <button className="btn btn-danger" onClick={calculateTotal}>Calculate</button>
      
      </div>):<p className="alert alert-warning">No products in the cart</p>}
      </div>
    );
  };


 

   
   
    
  let w = window.innerWidth;
  return (
    <Base title="Cart" description="Ready to checkout">
  {w>768?(     <div className="row text-center">
        <div className="col-4">
          {products.length > 0 ? (
            loadAllProducts(uniqueCart)
          ) : (
             <Link to="/"><p className="alert alert-success btn-block rounded">Add a product</p></Link>
          )}
          { products.length>0 &&<Link to="/"><p className="btn btn-success btn-block rounded">Add More</p></Link>}
        </div>
        
        <div className="col-8">
        {loadCheckout()}
        <Payment products={uniqueCart} setReload={setReload} />
        </div>
      </div>):(     <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (
            loadAllProducts(uniqueCart)
          ) : (
             <Link to="/"><p className="alert alert-success btn-block rounded">Add a product</p></Link>
          )}
          { products.length>0 &&<Link to="/"><p className="btn btn-success btn-block rounded">Add More</p></Link>}
        </div>
        
        <div className="col-6">
        {loadCheckout()}
        <Payment products={uniqueCart} setReload={setReload} />
           
        </div>
      </div>)}
    </Base>
  );
};

export default Cart;

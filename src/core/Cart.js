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
  const [showQ,setShowQ]=useState(1)
  const [quotes,setQuotes]=useState("")
  const [showPayment,setShowPayment]=useState(false)
   
   
  
  useEffect(() => {
    if (typeof window !== undefined) {
      if (!localStorage.getItem("cart")) {
        return <p className="alert text-center text-white alert-success">Please add something into the cart</p>
      }
    }
    
    setProducts(loadCart());
    
    
  }, [reload]);

  console.log("cartProducts",products);

  const uniqueCart=[...products.reduce((map,obj)=>map.set(obj._id,obj),new Map()).values()]
  console.log("uniqueCart",uniqueCart);
 
  const calculatePrice=(price,productId,value)=>{
    
    document.getElementById("getAmount").innerHTML="Calculate"
   
 uniqueCart.map((p,i)=>{
   if(productId===p._id){
     p.totalprice=price;
     p.quantity=Number(value)
   }
 })
 const totalCalculation=()=>{
  let amount=0
  uniqueCart.map((p,i)=>{
    let add=p.totalprice>0?p.totalprice:p.price;
amount=amount+add;
  })

  return document.getElementById("getAmount").innerHTML=`Amount ${amount}`
}
totalCalculation()
  }
 
 
   
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
            showQ={showQ}
           calculatePrice={calculatePrice}
             />
           
          </div>
        ))}
      </div>
    );
  };



  const getAmount=()=>{
    let amount=0;
    uniqueCart.map((p,i)=>{
  amount=amount+p.price;
    })
    return amount;
  }

    //motivational quotes 
    
    

    
  const loadCheckout = () => {
    return (
      <div>
        {uniqueCart.length>0?( <div>
       <p className="alert alert-success" id="getAmount">Amount to pay {getAmount()} Rs/-</p>
         <div>
         </div>
         <div className="quotes">

         </div>

      </div>):<p className="alert alert-warning">No products in the cart</p>}
      </div>
    );
  };


  // fetch("https://type.fit/api/quotes")
  //   .then(function(response) {
  //     if(!response){
  //       return document.getElementById("quote").innerHTML="Getting a good quote for you !!!"
  //      }
  //      else return response.json();
  //   })
  //   .then(function(data) {
  //    if(!data){
  //     document.getElementById("quote").innerHTML="Getting a good quote for you !!!"
  //    }
  //    else{
  //     document.getElementById("quote").innerHTML=data[Math.floor(Math.random() * 1500)].text;
  //    }
  //   })

  

    
  
    
  let w = window.innerWidth;
  return (
    <Base title="Cart" description="Ready to checkout" showCategoryItems={1}>
  {w>768?(<div className="row text-center">
        {!showPayment&& <div className="col-4" id="hideLoad">
          {products.length > 0 ? (
            loadAllProducts(uniqueCart)
          ) : (
             <Link to="/"><p className="alert alert-success btn-block rounded">Add a product</p></Link>
          )}
          { products.length>0 &&<Link to="/"><p className="btn btn-success btn-block rounded">Add More</p></Link>}
        </div>}
        
        {showPayment?( <div className="col-12">
        {loadCheckout()}
        
          
         {showPayment?(<Payment products={uniqueCart} setReload={setReload}/>):""}
           </div>):( <div className="col-8">
        {loadCheckout()}
         {uniqueCart.length>0?(<button className="btn btn-success btn-block rounded" onClick={(e)=>{setShowPayment(true)}}>Ready to pay</button>):""}
          
         {showPayment?(<Payment products={uniqueCart} setReload={setReload}/>):""}
           </div>)}
      </div>):(     <div className="row text-center mt-5">
         {!showPayment&&<div className="col-6"  id="hideLoad"> 
          {products.length > 0 ? (
            loadAllProducts(uniqueCart)
          ) : (
             <Link to="/"><p className="alert alert-success btn-block rounded">Add a product</p></Link>
          )}
          { products.length>0 &&<Link to="/"><p className="btn btn-success btn-block rounded">Add More</p></Link>}
        </div>}
        {showPayment?(<div className="col-12">
        {loadCheckout()}
         
         
        {showPayment?(<Payment products={uniqueCart} setReload={setReload}/>):""}

        </div>
):(<div className="col-6">
        {loadCheckout()}
        {uniqueCart.length>0?(<button className="btn btn-success btn-block rounded" onClick={(e)=>{setShowPayment(true)}}>Ready to pay</button>):""}
         
        {showPayment?(<Payment products={uniqueCart} setReload={setReload}/>):""}

        </div>
)}
         
         
               </div>)}
    </Base>
  );
};

export default Cart;

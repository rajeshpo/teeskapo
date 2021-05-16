import React, { useState, useEffect } from "react";
import "../../styles.css";
 
 
import Card from "../Card";
import { getProducts } from "../helper/coreapicalls";
 
import { isAutheticated } from "../../auth/helper/index";
// import DemoCarousel from "./Slider";

export default function Rotis() {
   
  const {user,token}=isAutheticated();
   
  const [products, setProducts] = useState([]);
   
  const [error, setError] = useState(false);
   
 

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data); 
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

 
   
  return (
    <div className="row text-center">
     <div className="row">
       {products.map((product, index) => {
        console.log(product);
        let w = window.innerWidth;
        if(product.category.name){
    console.log(product.category.name)
   if(product.category.name==="rotis"){
     return (
      w<768?( <div key={index} className="col-6 mb-4">
             <Card product={product} />
           </div>):( <div key={index} className="col-3 mb-4">
             <Card product={product} />
           </div>)
           
  );
   } 
  }
  else{
    return <p>Loading</p>
  }
         
       })}
     </div>
     
   </div>
  )
}

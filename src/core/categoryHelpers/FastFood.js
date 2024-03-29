import React, { useState, useEffect } from "react";
import "../../styles.css"; 
import Card from "../Card";
import { getProducts } from "../helper/coreapicalls";
import { isAutheticated } from "../../auth/helper/index";
import Base from "../Base";
 

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

  function searchbox(values){
    if(!values){
      getProducts().then(response=>{
        setProducts(response)
      })
    }

    let search= products.filter(function(product){
     let searchvalue=product.name+""+product.description+""+product.price;
        return searchvalue.toUpperCase().indexOf(values.toUpperCase())!==-1;
    })
   setProducts(search)
   if(products.length===0){
    getProducts().then(response=>{
      setProducts(response)
    })
    let search1= products.filter(function(product){
      let searchvalue=product.name;
         return searchvalue.toUpperCase().indexOf(values.slice(0,1).toUpperCase())!=-1;
     })
   setProducts(search1)
}
 }
 
  let w = window.innerWidth;
 
   
  return (
     <Base title="Fast Food" description="Get chill with the drinks" showCategoryItems={1}>
       <div className="row text-center mt-5">
    <h4 className="text-white ml-2" style={{textDecoration:"overline"}}>Fast Food </h4>
    {w>768?(<div className="flex-items1">
        <input placeholder="Search here"   className="form-control" onChange={(e)=>{ 
         searchbox(e.target.value)}}/><i class="fab fa-searchengin searchlaptop" style={{float:"right"}}></i>
      </div>):(
        <div className="flex-items"><i class="fab fa-searchengin searchphone" style={{float:"right"}}></i>
        <input placeholder="Search here"   className="form-control" onChange={(e)=>{ 
         searchbox(e.target.value)}}/>
      </div>
      )}
     {products.length>0?( <div className="row mt-5">
       {products.map((product, index) => {
       
        let w = window.innerWidth;
        if(product.category.name){
    
   if(product.category.name==="fastfood"){
     return (
      w<768?( <div key={index} className="col-6">
             <Card product={product} />
           </div>):( <div key={index} className="col-3 mb-3 perspective-right">
             <Card product={product} />
           </div>)
           
  );
   } 
  }

         
       })}
     </div>):(w<768?(<p className="text-white text-center mt-5">Items might be loading or not found</p>):(<p className="text-white text-center mt-5 offset-3">Items might be loading or not found</p>))}

     
   </div>
     </Base>
  )
}

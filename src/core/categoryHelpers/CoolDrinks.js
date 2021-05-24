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
  const [search,setSearch]=useState("")
   
 

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

  const searchItems=(search)=>{
    console.log(search);
    if(!search){
      getProducts().then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setProducts(data); 
        }
      });
    
    }
    let search1= products.filter(function(product){
      let searchvalue=product.name;
         return searchvalue.toUpperCase().indexOf(search.toUpperCase())!==-1;
     })
    return setProducts(search1);
      
  }
  let w = window.innerWidth;
 
   
  return (
     <Base title="Cool Drinks" description="Get chill with the drinks">
       <div className="row text-center">
    <h4 className="text-white ml-2" style={{textDecoration:"overline"}}>Cool Drinks</h4>
    {w>768?(<div className="flex-items1">
        <input placeholder="Search here" value={search} className="form-control" onChange={(e)=>{setSearch(e.target.value)
        searchItems(e.target.value)}}/><i class="fab fa-searchengin searchlaptop" style={{float:"right"}}></i>
      </div>):(
        <div className="flex-items"><i class="fab fa-searchengin searchphone" style={{float:"right"}}></i>
        <input placeholder="Search here" className="form-control" onChange={(e)=>{ 
        searchItems(e.target.value)}}/>
      </div>
      )}
     {products.length>0?( <div className="row mt-5">
       {products.map((product, index) => {
       
        let w = window.innerWidth;
        if(product.category.name){
    
   if(product.category.name==="cooldrinks"){
     return (
      w<768?( <div key={index} className="col-6 mb-4">
             <Card product={product} />
           </div>):( <div key={index} className="col-3 mb-4 perspective-right">
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

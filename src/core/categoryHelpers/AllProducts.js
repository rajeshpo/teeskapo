import React, { useState, useEffect } from "react";
import "../../styles.css";
 
 
import Card from "../Card";
import { getProducts } from "../helper/coreapicalls";
 
import { isAutheticated } from "../../auth/helper/index";
// import DemoCarousel from "./Slider";

export default function AllProducts() {
   
  const {user,token}=isAutheticated();
   
  const [products, setProducts] = useState([]);
   
  const [error, setError] = useState(false);

  let [search,setSearch]=useState("")
   

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
    <div className="row text-center">
    <h4 className="text-white ml-3" style={{textDecoration:"overline"}}>All Items</h4>
     {w>768?(<div className="flex-items1">
        <input placeholder="Search here"  className="form-control" onChange={(e)=>{ 
        searchbox(e.target.value) }}/><i class="fab fa-searchengin searchlaptop" style={{float:"right"}}></i>
      </div>):(
        <div className="flex-items"><i class="fab fa-searchengin searchphone" style={{float:"right"}}></i>
        <input placeholder="Search here" className="form-control" onChange={(e)=>{  searchbox(e.target.value)
        }}/>
      </div>
      )}
         
     {(products.length>0?( <div className="row mt-5 jkl">

{products.map((product, index) => { 
  let w = window.innerWidth;
 return (
      w<768?( <div key={index} className="col-6">
             <Card product={product} />
           </div>):( <div key={index} className="col-3 mb-4 perspective-right">
             <Card product={product}  />
           </div>)
           
  );
 
  
})}
</div>):<p className="text-center ml-5">Items might be loading or not found</p>)}
     
   </div>
  )
}

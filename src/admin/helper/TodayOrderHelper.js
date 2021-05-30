import React from 'react'
import ImageHelper2 from '../../core/helper/ImageHelper2';
 

const TodayOrderHelper=(product)=> {

     const date=product.product.createdAt
    console.log(product);
    const map=product.product.products
    const map1=product.product.products.length
    console.log(map); 
    
   
     let k=0;
let m=0;     
   
    return (
          
        <div className="card text-white bg-dark border border-info">
      <small><strong>Ordered {date.slice(0,10)}</strong></small>
      
        <small><strong>Status : {product.product.status  }</strong> </small>
        <small><strong>Amount : { product.product.amount }</strong> </small>
        <small><strong>Name : {product.product.name }</strong> </small>
        <small><strong>OrderId : { product.product._id}</strong> </small>
        <small><strong>Total Products : { map1}</strong> </small>
        <small><strong>Contact : { product.product.contact}</strong> </small>
        <small><strong>Email : { product.product.email}</strong> </small>
        { 
              
    map.map((i,p)=>{
         
      let n=k++
        return  <div>
        <small><strong>Product Name : {map[n].name} {map[n].price} RS/-</strong> </small>
        <small className="text-success"><strong>Q: {map[n].quantity}</strong> </small>
        </div>
    })
    
     }
     { 
              
              map.map((i,p)=>{
                   
                let n=m++
                  return <ImageHelper2  product={map[n]._id}/>
              })
              
               }
     
     
       
        
    </div>
 
  );
    
    }

export default TodayOrderHelper
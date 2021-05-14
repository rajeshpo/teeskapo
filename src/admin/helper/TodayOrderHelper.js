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
      <div className="card-header lead"><small><strong>Ordered {date.slice(0,10)}</strong> </small></div>
      <div className="card-body">
          
        <p className="lead  font-weight-normal text-wrap">
        <small><strong>Status : {product.product.status  }</strong> </small>
        </p>
        <p className="lead  font-weight-normal text-wrap">
        <small><strong>Time : {product.product.time}</strong> </small>
        </p>
        <p className=" lead font-weight-normal  rounded"><small><strong>Amount : { product.product.amount }</strong> </small></p>
       
      <p className="lead  rounded font-weight-normal text-wrap">
        <small><strong>Name : {product.product.name }</strong> </small>
        </p>
      <p className="lead   rounded font-weight-normal text-wrap">
        <small><strong>Contact : { product.product.contact}</strong> </small>
        </p>
      <p className="lead   text-wrap">
        <small><strong>Email : { product.product.email}</strong> </small>
        </p>
        <p className="lead  rounded font-weight-normal text-wrap">
        <small><strong>OrderId : { product.product._id}</strong> </small>
        </p>
        <p className="lead rounded font-weight-normal text-wrap">
        <small><strong>Total Products : { map1}</strong> </small>
        </p>
        { 
              
    map.map((i,p)=>{
         
      let n=k++
        return  <p className="lead bg-info rounded font-weight-normal text-wrap">
        <small><strong>Product Name : {map[n].name} {map[n].price} RS/-</strong> </small>
        </p>
    })
    
     }
     { 
              
              map.map((i,p)=>{
                   
                let n=m++
                  return <ImageHelper2  product={map[n]._id}/>
              })
              
               }
     
     
        </div>
        
    </div>
 
  );
    
    }

export default TodayOrderHelper
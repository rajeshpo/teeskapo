import React from 'react'
import ImageHelper2 from "../../core/helper/ImageHelper2";

const PurchaseCard=(product)=> {

    const products=product;
    
     const productId=products.product.products[0]._id;
     const date=products.product.createdAt;
     const time=products.product.time;
  // const category=products?(product.category.name):"DEFAULT"
  if(!product){
    return <div className="card text-white bg-dark border border-info">
     
    <p className="text-center text-white">Your orders appear here! Please buy something and thanks in advance.</p>
  </div>
  }
   
   
    return (
        <div className="card text-white bg-dark border border-info">
     
      <div className="card-header lead"><small><strong>Ordered {date.slice(0,10)}</strong> </small></div>
      <div className="card-header lead"><small><strong>Time {time}</strong> </small></div>
      <div className="card-body">
          
        <p className="lead bg-success font-weight-normal text-wrap">
        <small><strong>Status : { products.product.status}</strong> </small>
        </p>
      
       
        <p className="lead bg-info rounded font-weight-normal text-wrap">
        <small><strong>Amount : { products.product.amount} RS/-</strong> </small>
        </p>
      <p className="lead bg-info rounded font-weight-normal text-wrap">
        <small><strong> Product : {products.product.products[0].name}</strong> </small>
        </p>
       
        <ImageHelper2  product={productId} />

        </div>
    </div>
  );
    
    }

export default PurchaseCard
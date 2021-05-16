 
import React, { useState,useEffect } from "react";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { getOrders } from "../core/helper/orderHelper";
import PurchaseCard from "./helper/PurchaseCard";


const UserDashBoard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  
   const userId=isAutheticated()&&isAutheticated().user._id;
   const token=isAutheticated()&&isAutheticated().token;
   const user=isAutheticated()&&isAutheticated().user.name;
   const loadPurchaseList = (userId,token) => {
    getOrders(userId,token).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadPurchaseList(userId,token);
  }, []);


  return (
    <Base title="DashBoard" description="Your orders">
     <div className="row text-center">
         
         {isAutheticated()?<h4 className="mb-5 text-success">Hii {user.toUpperCase()}</h4>:""}
         <h4 className="ml-2 text-success">{products.length<1?"Your orders will appear here":""}</h4> 
          <div className="row">
            {products.map((product, index) => {
                 let w = window.innerWidth;
             return (
                w<768?( <div key={index} className="col-6 mb-4">
             <PurchaseCard product={product} />
           </div>):( <div key={index} className="col-3 mb-4">
             <PurchaseCard product={product} />
           </div>)
           
              );
            })}
          </div>
        </div>
    </Base>
  );
};

export default UserDashBoard;

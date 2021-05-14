import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import {getAllOrders } from "./helper/adminapicall";
import OrderCard from "./OrderCard";

 

   
 
 
 export default function ManageOrders() {
    const [orders, setOrders] = useState([]);
const [error,setError]=useState("")
    const userId  = isAutheticated()&&isAutheticated().user._id;
    const token  = isAutheticated()&&isAutheticated().token;
  
     
useEffect(()=>{
   getAllOrders(userId,token).then(data=>{
       if(data.error){
      setError(data.error)
       }
       else{
           setOrders(data)
       }
   }).catch(err=>{
       console.log(err);
   })
  
},[])

 

const user=isAutheticated()&&isAutheticated().user.name;
 

     return (
         
             <Base title="Manage Orders" description="Everything you need to deliver">
               <div className="row text-center">
               <div className="mb-3">{isAutheticated()?<h4 className="mb-5 text-success">Hii {user}</h4>:""}</div>
         
          
          <div className="row text-center ">
            {orders.map((order, index) => {
              return (
                <div key={index} className="col-3 mb-4">
                  <OrderCard product={order} />
                </div>
              );
            })}
          </div>
        </div>
             </Base>
          
     )
 }
 

  

 


 

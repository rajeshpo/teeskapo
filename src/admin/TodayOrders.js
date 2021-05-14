import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import {getAllOrders } from "./helper/adminapicall";
import TodayOrderHelper from "./helper/TodayOrderHelper";


 

 
 
 export default function TodayOrder() {
  
  
   const [orders,setOrders]=useState([])
   const [error,setError]=useState("")
   const userId  = isAutheticated()&&isAutheticated().user._id;
   const token  = isAutheticated()&&isAutheticated().token;
   
   const today=new Date().toISOString();
    
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


     return (
         <div>
             <Base title="Today Orders" description="">
             <div className="row">
                 {orders.map((order,i)=>{
                     let date=order.createdAt;
                     if(today.slice(0,10)===date.slice(0,10)){
                         return (
                            <div key={i} className="col-3 mb-4">
                  <TodayOrderHelper product={order} />
                </div>
                         )
                     }
                 })}
                 </div>
             </Base>
         </div>
     )
 }
 

    

 
import React, { useState } from 'react'
import Axios from 'axios'
import {createOrder} from './helper/orderHelper'
import { isAutheticated } from '../auth/helper'
import { cartEmpty } from './helper/cartHelper'

import emailjs from 'emailjs-com';

 

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
  toast.configure()

export const Razorpay=({products,setReload=f=>f,reload=undefined})=>{

   
 
  const name=isAutheticated()&&isAutheticated().user.name;
  const email=isAutheticated()&&isAutheticated().user.email;
  const [add,setAdd]=useState("")
  const [shopping,setShopping]=useState(false)
   
  const notify=()=>{
    toast.success(`Thanks for shopping with us ${name}`, {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     })
  }

  
  const getAmount=()=>{
    let amount=0
    products.map((p,i)=>{
      let add=p.totalprice>0?p.totalprice:p.price;
  amount=amount+add;
     
    })
    return amount
  }
   console.log("amount bri",getAmount());
   const razorPayPaymentHandler=async()=> {
    document.getElementById("paynow").innerHTML="One second I am on my way..."
    let userId = isAutheticated() && isAutheticated().user._id;
    const token = isAutheticated() && isAutheticated().token;
     
    const API_URL = `https://tshirtsonline.herokuapp.com/api/razorpay/`
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data)
    
    const options = {
      key: '',
      name: "avdojo",
      description: "avodojo",
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${API_URL}capture/${paymentId}`;
         const captureResponse = await Axios.post(url, {})
         const successObj = JSON.parse(captureResponse.data)
         const captured = successObj.captured;
         console.log("App -> razorPayPaymentHandler -> captured", successObj)
         if(captured){
             console.log('success')
             const time=new Date().toLocaleTimeString();
              
              
             const orderData={
                 amount:successObj.amount,
                 contact:successObj.contact,
                 email:successObj.email,
                 name:name,
                 order_id:successObj.order_id,
                 time:time,
                 address:add,  
                 status:"Recieved",
                 products:products

             }
             cartEmpty(()=>{
              console.log("Any crash?");
            })
             createOrder(userId,token,orderData)
             
             setReload(!reload)
        
             notify()
             setShopping(true)
            
             
         }
         
        } catch (err) {
          console.log(err);
        }
        
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }
  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_uvxx4i2', 'template_tkpo4yd', e.target, 'user_iIpxezi5CkBNjHhoaSrbS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    document.getElementById("address").style.display="none";
    document.getElementById("sentAddress").innerHTML="Address Sent Successfully";
     
    document.getElementById("sentAddress").style="text-center"
    document.getElementById("paynow").style.display="block";

  }

  console.log(add);
  let w = window.innerWidth;
    return (
       <div>
         {products.length>0?(<div className="mt-5">
        <div className="container mt-3 mb-3 border border-white" id="address">
        <form className="contact-form form-group" onSubmit={sendEmail}>
      <input className="form-control" type="hidden" name="contact_number" />
      <label>Name</label>
      <input className="form-control" type="text" name="user_name"  value={name}/>
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" value={email} />
      <label>Address</label>
      <textarea className="form-control" name="message" autofocus={true} required value={add} onChange={(e)=>setAdd(e.target.value)} />
      <input className="btn btn-success btn-block mt-3 rounded" type="submit" value="Send to Pay" />
    </form> 
        </div>
        <div> 
        <p id="sentAddress" className="text-white mb-3 mt-3 text-center"></p>
        

         {w>768?(<button style={{display:"none",alignItems:'center'}} id="paynow"
        onClick={razorPayPaymentHandler}
        className="btn btn-success btn-block rounded">
          Pay Now
        </button>):(<button style={{display:"none"}} id="paynow"
        onClick={razorPayPaymentHandler}
        className="btn btn-success btn-block rounded">
          Pay Now
        </button>)}
       
      </div>
      </div>):""}

      {shopping&&<Link to ="/" className="btn btn-success btn-block mt-5">Continue Shopping</Link>}
       </div>
    )
   
}

export default Razorpay










 
 

   
  
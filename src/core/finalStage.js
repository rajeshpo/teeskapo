import React, { useEffect,useState } from 'react'
import '../styles.css'
import Base from './Base'
import Payment from "./Payment";
import { loadCart } from "./helper/cartHelper";
const finalStage=()=>{
     
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products,setProducts]=useState([])
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload,setReload]=useState(false)
   // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {

    setProducts(loadCart());
    
  }, [reload]);

  console.log(products);
  
    return (
        <Base title="Payment page" description="Ready to pay">
             <div className="finalStage">
               <Payment products={products} setReload={setReload}/>
             </div>
            
        </Base>
        
    )
}
export default finalStage
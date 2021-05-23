import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import { getProducts } from "./helper/coreapicalls";
import { isAutheticated } from "../auth/helper";
import AllProducts from "./categoryHelpers/AllProducts";
// import DemoCarousel from "./Slider";
import Rotis from "./categoryHelpers/Rotis";
import Card from "./Card";



export default function Home() {
   
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

    
  let w = window.innerWidth;
  
   

  return (
    <Base title={isAutheticated()?`Hii ${user.name.toUpperCase()}`:"Hii User"} description={isAutheticated()?"Welcome to the store":"Come on!! enter into our extending family"}>
  
 
     <>
     
       <div className="container mb-5 mt-5">
       <section className="colored-section" id="testimonials">
       

<div id="testimonial-carousel" className="carousel slide bg-dark" data-ride="false">
  <div className="carousel-inner">
    <div className="carousel-item active container-fluid">
      <h5 className="testimonial-text">I am Rajesh, this website has really a good service capability.  </h5>
      <img loading="lazy" className="testimonial-image" src="https://instagram.fhyd11-1.fna.fbcdn.net/v/t51.2885-19/s320x320/89710537_2374801026145303_1096441619512557568_n.jpg?tp=1&_nc_ht=instagram.fhyd11-1.fna.fbcdn.net&_nc_ohc=Jnnc8r0BWWwAX_i7vQe&edm=ABfd0MgAAAAA&ccb=7-4&oh=a6a421f4b0b211516a30f8bf1ce305d1&oe=60ACC05E&_nc_sid=7bff83" alt="dog-profile"/>
      <em>Rajesh</em>
    </div>
    <div className="carousel-item container-fluid">
      <h5 className="testimonial-text">I am Dandugula Venkatesh, great experience with the dishes</h5>
      <img loading="lazy" className="testimonial-image" src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/p843x403/54433275_1133909026770566_425160784021028864_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=Xj9y1G9R3T0AX9QmYBw&_nc_oc=AQleYd0EyhjtzSUJjiKcayeRjt_azvercP90gsXrfMlu3AG93aN_ah1jMNA7W-95ASDVLO3Au4tEQEoKJYOq3D-c&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=1a34a468f57114720bb394996772dfbd&oe=60ABAE5C" alt="lady-profile"/>
      <em> Venkatesh</em>
    </div>
  </div>
  <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
<span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
<span className="carousel-control-next-icon"></span>
  </a>
</div>

</section>
       </div>
     </>
      
 {products.length>0?( <div className="row text-center">
         
       
          
         <AllProducts/>
          
          
        
         
        </div>):(<h4 style={{textAlign:"center"}}>Loading.....</h4>)}

 
     </Base>
  );
}

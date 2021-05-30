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
    <Base title={isAutheticated()?`Hii ${user.name.toUpperCase()}`:"Hii User"} description={isAutheticated()?"Welcome to the store":"Come on!! enter into our extending family"} showCategoryItems={1}>
  
 
     <>
       <div className="container mb-5">
       <section className="colored-section" id="testimonials">
       

<div id="testimonial-carousel" className="carousel slide bg-dark mt-3" data-ride="false">
  <div className="carousel-inner">
    <div className="carousel-item active container-fluid">
      <h5 className="testimonial-text">I am Rajesh, this website has really a good service capability.  </h5>
      <img loading="lazy" className="testimonial-image" src="https://media-exp1.licdn.com/dms/image/C5103AQEqMoZqqmhovQ/profile-displayphoto-shrink_200_200/0/1544269443559?e=1625097600&v=beta&t=cTgF3RfY3JNPCFto4RnhLroNnPzwu95mytxNGtAf_7s" alt="dog-profile"/>
      <em>Rajesh</em>
    </div>
    <div className="carousel-item container-fluid">
      <h5 className="testimonial-text">I am Chitikela shivanath, great experience with the dishes</h5>
      <img loading="lazy" className="testimonial-image" src="https://scontent.fdel27-2.fna.fbcdn.net/v/t1.6435-0/s526x395/176439541_1187873951646114_579631182932074303_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RKVShbhLv9MAX-60qwV&_nc_ht=scontent.fdel27-2.fna&tp=7&oh=b3b22c7b59121f11191e55749949ccbd&oe=60D879F2" alt="lady-profile"/>
      <em>Shivanath</em>
    </div>
    <div className="carousel-item container-fluid">
      <h5 className="testimonial-text">I am Ramesh, I had a wonderful experience with the delivery process by the team of teeskapo</h5>
      <img loading="lazy" className="testimonial-image" src="https://www.braingroom.com/img/Buyer/profile/26671_briangroom_social_pic.jpg" alt="lady-profile"/>
      <em>Ramesh</em>
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

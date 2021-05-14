import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getProduct, updateCategory} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper";
 
 
const UpdateCategory = ({match}) => {
  const [values, setValues] = useState({
    name: "",
    createdProduct:"",
    getaRedirect:false,
    error:"",
    loading:false

  });

  const { name,createdProduct,getaRedirect,error} = values;
  //gettting user and id
  const {user,token}=isAutheticated()

  const preload=(categoryId)=>{
    
    getProduct(categoryId).then(data=>{
         
      console.log(data)
       
      if(data.error){
        setValues({...values,error:data.error,})
      }
      else{
            setValues({
            ...values,
            name:data.name,
    })       
      } 
  }).catch(err=>console.log(err))
  }
  useEffect(()=>{
    preload(match.params.categoryId)
  },[])

  //submit and create a product
  const onSubmit = (event) => {

    event.preventDefault()
    setValues({...values,error:"",loading:true})
    updateCategory(match.params.categoryId,user._id,token,{name}).then(
      data=>{
        if(data.error){
          setValues({...values,error:data.error})
        }
        else{
          setValues({
            ...values,
            name:"",
            
            loading:false,
            createdProduct:data.name
          })
        }
      }
    ).catch(err=>console.log(err))

    
  };
   
  const successMessage=()=>{
    if(createdProduct){
        return <h4 className="alert alert-success py-2 rounded mt-2">Succeesfully updated {createdProduct}</h4>
    }
}
const errorMessage=()=>{
    if(error){
        return <h4 className="alert alert-danger text-white">Failed to update {createdProduct}</h4>
    }
}
  const handleChange = event => {
    let value=event.target.value;
     
    setValues({...values,name:value})///come here if u get any error
  };

  const updateProductForm = () => (
    <form>
      <span>Write a category</span>
      <div className="form-group mb-2">
        <input
          onChange={handleChange}
          
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
        {successMessage()}
        {errorMessage()}
        {updateProductForm()}</div>
      </div>
    </Base>
  );
};

export default UpdateCategory;

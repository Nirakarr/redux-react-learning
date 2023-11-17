import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const fetchProducts=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products').catch((error)=>{
      console.log("Error in Petching data",error);      
    })
    console.log(response);
  }
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductListing;

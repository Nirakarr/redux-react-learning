import React from "react";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div className="four wide column" style={{marginTop:"5%"}}>
      <div className="ui link cards">
      <div className="card">
        <div className="image">
        <img src="" alt={title} />
        </div>
        <div className="content">
          
          <div className="header">{title}</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductComponents;

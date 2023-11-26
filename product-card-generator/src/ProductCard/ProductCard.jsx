import React from "react";

function ProductCard({card}){
    let src = card.src;
    let name = card.name;
    let description = card.description;
    let price = card.price;


    return(
      <div className="productBox">
        <div className="imgBox">
          <img src={src} alt="loading" />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="footer">
          <h2>{price}</h2>
          <button>Add to cart</button>
        </div>
      </div>
    )
}

export default ProductCard
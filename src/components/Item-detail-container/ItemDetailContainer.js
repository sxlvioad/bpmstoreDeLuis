import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemCount from "../Counter/ItemCount";


const ItemDetailContainer = () => {
  const { products } = useProducts();

  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedCount, setSelectedCount] = useState(0)
  
  const addHandler = i => {
		setSelectedCount(i)
	}

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
      console.log("seleecionado", selectedItem);
    }
  }, [products]);

  return (
    <>
      {selectedItem && (
        <div className="detailContainer">
          <div className="probemos">
            <h1>{selectedItem.name && selectedItem.name}</h1>

            <hr />
            {selectedItem.artist && <h2>By: {selectedItem.artist}</h2>}
            {selectedItem.genre && <h2>By: {selectedItem.genre}</h2>}
            {selectedItem.type && <h2>By: {selectedItem.type}</h2>}
            {selectedItem.price && <h2>By: {selectedItem.price}</h2>}
            
                        {selectedCount > 0 ? 
            <Link to="/cart">Add {setSelectedCount} to cart</Link> 
            :
              <ItemCount stock={selectedItem.stock} initial={0} onAdd={addHandler} />
              }
          </div>
          <div>
            {selectedItem.img && (
              <img className="imgDetail" src={selectedItem.img} alt="A" />
            )}
            
          </div>

        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
import { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promise";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      console.log("Fin");
    }
  };

  return {
    products,
  };
};

export default useProducts;
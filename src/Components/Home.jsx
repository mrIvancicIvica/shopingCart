import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addToCart } from "../Redux/actions/productActions";
import { Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.products);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Grid container spacing={4}>
      {productList.map((product, index) => (
        <Product 
          key={index}
          img={product.image}
          title={product.title}
          description={product.category}
          price={product.price}
          addToCart={() => dispatch(addToCart(product))}
          id={product.id}
          
        />
      ))}
    </Grid>
  );
};

export default Home;

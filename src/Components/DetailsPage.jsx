import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, removeProduct, addToCart } from "../Redux/actions/productActions";
import Product from "./Product";

const DetailsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const productDetail = useSelector((state) => state.selectedProduct);
  console.log(
    "🚀 ~ file: DetailsPage.jsx ~ line 12 ~ DetailsPage ~ productDetail",
    productDetail
  );

  const fetchProductDetail = async (productId) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(getProduct(res.data));
  };

  useEffect(() => {
    fetchProductDetail(id);
    return () => {
      dispatch(removeProduct());
    };
  }, []);

  return (
    <div>
      <Product
        img={productDetail.image}
        price={productDetail.price}
        addToCart={() => dispatch(addToCart(productDetail))}
        description={productDetail.description}
      />
    </div>
  );
};

export default DetailsPage;

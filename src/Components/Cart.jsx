import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Stack,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteItem,
} from "../Redux/actions/productActions";
import DeleteIcon from "@mui/icons-material/Delete";
import SummaryCard from "../Components/SummaryCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      {cartItems.length === 0 ? (
        <div>
          <img
            style={{ marginLeft: 160, marginTop: 150 }}
            src={require("../Img/emptycard.png")}
          />
        </div>
      ) : (
        cartItems.map((item) => (
          <Container key={item.id} maxWidth="sm">
            <Card sx={{ width: "100%", marginBottom: 5 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="product"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => dispatch(removeFromCart(item))}
                  size="small"
                  color="primary"
                >
                  -
                </Button>
                <Typography variant="body2" color="primary">
                  {item.quantity} x {item.price} €
                </Typography>
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  size="small"
                  color="primary"
                >
                  +
                </Button>
                <Stack sx={{ marginLeft: 33 }}>
                  <IconButton
                    onClick={() => dispatch(deleteItem(item.id))}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </CardActions>
            </Card>
          </Container>
        ))
      )}
      <SummaryCard />
    </Container>
  );
};

export default Cart;

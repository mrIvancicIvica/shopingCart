import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
  CardActions,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Product = ({ id, img, title, description, price, addToCart }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 350 }}>
        <Link
          to={`products/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={img}
              alt="product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            onClick={addToCart}
            sx={{ marginRight: 10 }}
            size="small"
            color="primary"
          >
            <AddShoppingCartIcon />
          </Button>
          <Typography variant="h5" color={"text.secondary"}>
            Price:{price}€
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
} from "@mui/material";

const AppBarHeader = () => {
  const cartItems = useSelector((state) => state.products.cart);

  const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Shop
            </Link>
          </Typography>

          {currentUser ? (
            <div>
              <Link to={"/card"} style={{ color: "white" }}>
                <IconButton color="inherit">
                  <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
              <Button onClick={() => auth.signOut()} color="inherit">
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography>Login</Typography>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarHeader;

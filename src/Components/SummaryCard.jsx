import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
  coupon: yup.string("Coupon"),
});

const SummaryCard = () => {
  const products = useSelector((state) => state.products.cart);
  const itemPrices = products.reduce((a, b) => a + b.price * b.quantity, 0);
  const twentyOff = itemPrices * ((100 - 20) / 100);
  const fiveOff = itemPrices * ((100 - 5) / 100);
  const twentyEuroOff = itemPrices - 20;

  const [price, setPrice] = useState(itemPrices);

  useEffect(() => {
    setPrice(itemPrices);
  }, [itemPrices]);

  const formik = useFormik({
    initialValues: {
      coupon: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      switch (values.coupon) {
        case "20%OFF":
          return setPrice(twentyOff);
        case "5%OFF":
          return setPrice(fiveOff);
        case "20EUROFF":
          return setPrice(twentyEuroOff);
        default:
          return price;
      }
    },
  });

  return (
    <Box sx={{ width: "100%", minWidth: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid item xs>
          <Typography gutterBottom variant="h4" component="div">
            Order Summary
          </Typography>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              Subtotal
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              {price.toFixed(2)} €
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="coupon"
                name="coupon"
                label="Coupon"
                value={formik.values.coupon}
                onChange={formik.handleChange}
              />
              <Button type="submit" sx={{ marginTop: 1, marginLeft: 3 }}>
                Apply coupon
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
};

export default SummaryCard;

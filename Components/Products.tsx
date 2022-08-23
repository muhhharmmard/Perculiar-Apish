import { Typography, Card, Paper, Box, Container } from "@mui/material";

import {
  PRODUCTS
} from "../store/types"

import Product from "./Product";

const Products = ({ products }: PRODUCTS) => {
  return (
    <Paper className="w-screen flex bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 flex-wrap p-4 m-2">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </Paper>
  );
};
export default Products;

import { Typography, Card, Paper, Box, Container } from "@mui/material";

import {
  PRODUCTS
} from "../store/types"

import Product from "./Product";

const Products = ({ products }: PRODUCTS) => {
  return (
    <Container className="w-screen flex flex-wrap p-4 m-2">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </Container>
  );
};
export default Products;

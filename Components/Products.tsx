import {
  Typography,
  Card,
  Paper,
  Box,
  Container
} from "@mui/material"
import Product from "./Product"

const Products= ({products})=>{
  return(
    <Container className="p-4 m-2">
    {
      products.map(product=><Product product={product} key={product._id}/>)
    }
    </Container>
    )
}
export default Products



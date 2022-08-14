import {
  USER,
  PRODUCT
} from "../../../store/types"

import {
  Container,
  Card,
  Paper,
  Typography
} from "@mui/material"

import SellerProduct from "./SellerProduct"

const SellerProducts = ({
  seller
}: USER): JSX.Element=> {
  return(
    <Container className="">
    { seller.products.map((prod: PRODUCT)=> <SellerProduct product={product} />) }
    </Container>
    )
    }
    
    
    export default SellerProducts
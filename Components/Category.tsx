import {
  Container,
  Card,
  Paper,
  Typography
} from "@mui/material"

import Products from "./Products"

import {
  CATEGORIES,
  CATEGORY
} from "../store/types"



const Category = ({
  category
}:CATEGORY):JSX.Element => {

  return (
    <Paper className="p-4 m-2 shadow">
    <Container className="w-full flex justify -center ">
    <Typography variant="h3">
    {category.name}
    </Typography>
    </Container>
    <Container className="flex flex-wrap p-2 m-2 ">
    {/*
      category.products.map((prod)=> <DeptPro product={prod} />)
      */}
      <Products products={category.products} />
    </Container>
    </Paper>
  )
}

export default Category
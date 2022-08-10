
import {
  Container,
  Card,
  Paper,
  Typography
} from "@mui/material"

import DeptPro from "./DeptPro"



const Category = ({category}) =>{
  
  return (
    <Paper className="p-4 m-2 shadow">
    <Container className="w-full flex justify -center ">
    <Typography variant= "h3">
    {category.name}
    </Typography>
    </Container>
    <Container className="p-2 m-2 ">
    {
      category.products.map((prod)=> <DeptPro product={prod}/>)
    }
    </Container>
    </Paper>
    )
}

export default Category





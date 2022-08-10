
import {
  Container
} from "@mui/material"

import Category from "./Category"
const Categories= ({categories}) =>{
  
  return (
    <Container className="p-4 m-2 shadow">
    {
      categories.map((cat)=> <Category category={cat}/>)
    }
    </Container>
    )
}

export default Categories



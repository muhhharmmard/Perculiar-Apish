
import {
  Container
} from "@mui/material"

import { CATEGORIES, CATEGORY } from "../store/types"

import Category from "./Category"


const Categories= ({categories}:CATEGORIES):JSX.Element =>{
  
  return (
    <Container className="p-4 m-2 shadow">
    {
      categories.map((cat: CATEGORY)=> <Category category={cat}/>)
    }
    </Container>
    )
}

export default Categories



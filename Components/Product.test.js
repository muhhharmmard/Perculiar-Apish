import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Product from "./Product"

describe("testing product component",()=>{
  it("general",()=>{
    const product ={
      name:"blah",
      department:{
        name:"Asdd"
      },
      tags:[],
      owner:"Adetonwa Richard "
    }
    render(<Product product={product}/>)
    screen.debug()
  })
})


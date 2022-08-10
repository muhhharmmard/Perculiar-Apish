import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Products from "./Products"

describe("testing product component",()=>{
  it("general",()=>{
    const products =[{
      name:"blah",
      department:{
        name:"jjjss"
      },
      tags:[],
      owner:"Adetonwa Richard "
    }]
    render(<Products products={products}/>)
    screen.debug()
  })
})


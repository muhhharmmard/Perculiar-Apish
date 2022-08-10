import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DeptPro from "./DeptPro"

describe("testing department products component",()=>{
  it("general",()=>{
    const product ={
      name:"blah",
      department:{},
      image_url:"",
      price:50,
      tags:[],
      owner:"Adetonwa Richard "
    }
    render(<DeptPro product={product}/>)
    screen.debug()
  })
})


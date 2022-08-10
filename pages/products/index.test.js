import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductsI from "./index"

describe("testing departments b",()=>{
  it("general",()=>{
    
    render(<ProductsI />)
    screen.debug()
  })
})
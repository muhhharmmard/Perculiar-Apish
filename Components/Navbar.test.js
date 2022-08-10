import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar"

describe("testing loader component",()=>{
  it("general",()=>{
   
    render(<Navbar/>)
    screen.debug()
  })
})


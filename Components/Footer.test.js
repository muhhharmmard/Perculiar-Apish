import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer"

describe("testing departments component",()=>{
  it("general",()=>{
    render(<Footer/>)
    screen.debug()
  })
})


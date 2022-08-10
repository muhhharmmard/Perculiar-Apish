import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Loader from "./Loader"

describe("testing loader component",()=>{
  it("general",()=>{
   
    render(<Loader/>)
    screen.debug()
  })
})


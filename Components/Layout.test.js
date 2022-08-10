import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Layout from "./Layout"

describe("testing loader component",()=>{
  it("general",()=>{
   let children=(<h1>hi</h1>)
    render(<Layout children={children}/>)
    screen.debug()
  })
})


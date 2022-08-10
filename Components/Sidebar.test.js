import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar"

describe("testing tags component",()=>{
  it("general",()=>{
    const tags =[{
      name:"blah",
      products:[],
      department:{},
      owner:"Adetonwa Richard "
    }]
    render(<Sidebar tags={tags}/>)
    screen.debug()
  })
})


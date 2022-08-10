import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search"

describe("testing tags component",()=>{
  it("general",()=>{
    const tags =[{
      name:"blah",
      products:[],
      department:{},
      owner:"Adetonwa Richard "
    }]
    render(<Search tags={tags}/>)
    screen.debug()
  })
})


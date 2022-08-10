import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RelatedProd from "./RelatedProd"

describe("testing products component",()=>{
  it("general",()=>{
    const department =[{
      name:"blah",
      products:[{
      name:"blah",
      department:{
        name:"(((#$"
      },
      tags:[],
      owner:"Adetonwa Richard "
    }],
      department:{
        name:"(((#$"
      },
      tags:[],
      owner:"Adetonwa Richard "
    }]
    render(<RelatedProd department={department}/>)
    screen.debug()
  })
})


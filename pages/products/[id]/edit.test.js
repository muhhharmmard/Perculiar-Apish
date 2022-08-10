import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import EdProductPage from "./edit"

import {Provider} from "react-redux" 
import { store } from "../../../store/store"; 
import { SessionProvider } from "next-auth/react"
describe("testing edit product page",()=>{
  it("general",()=>{
    
    render(
       <SessionProvider>
      <Provider store={store}>
      <EdProductPage />
      </Provider>
      </SessionProvider>
      )
    screen.debug()
  })
})
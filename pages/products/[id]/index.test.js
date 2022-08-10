import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductPage from "./index"
import {Provider} from "react-redux" 
import { store } from "../../../store/store"; 
import { SessionProvider } from "next-auth/react"

describe("testing product page",()=>{
  it("general",()=>{
    
    render(
       <SessionProvider>
      <Provider store={store}>
      <ProductPage />
      </Provider>
      </SessionProvider>
      )
    screen.debug()
  })
})
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CreateProd from "./create"

import {Provider} from "react-redux" 
import { store } from "../../store/store"; 
import { SessionProvider } from "next-auth/react"
describe("testing create product page",()=>{
  it("general",()=>{
    render(
       <SessionProvider>
      <Provider store={store}>
      <CreateProd />
      </Provider>
      </SessionProvider>
      )
    screen.debug()
  })
})
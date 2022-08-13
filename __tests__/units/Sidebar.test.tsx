import {
  render,
  screen
} from "@testing-library/react"

import {
  Provider
} from "react-redux"
import {
  store
} from "../../store/store";
import {
  SessionProvider
} from "next-auth/react"
import Sidebar from "../../Components/Header"

import AppWrapper from "../../store/context"
describe("hh", ()=> {
  test("hh", () => {
    render(
      <SessionProvider>
      <Provider store={store}>
      <AppWrapper>
      <Sidebar />
      </AppWrapper>
      </Provider>
      </SessionProvider>
    )
  })
})
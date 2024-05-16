//componnent for the div of the website

import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Provider } from "react-redux"
import { Nav } from "./Nav"
import store from "../redux/store"

export const Main = () => {
    return <>
        <Provider store={store}>
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
         </Provider>
    </>
}
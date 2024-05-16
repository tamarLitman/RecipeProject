import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Nav } from "./Nav"

export const Main = () => {
    return <>
        {/* מנהל את הניתובים */}
        <BrowserRouter>
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
    </>
}
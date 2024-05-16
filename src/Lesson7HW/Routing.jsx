import { Route, Routes } from "react-router"
import {Home} from './Home'
import { Products } from "./Products"
import { Addproduct } from "./Addproduct"
import { Login } from "./Login"
import { Register } from "./Register"

export const Routing = () => {
    return<>
        <Routes>
            <Route path = 'Home' element={<Home></Home>}>
                <Route path='Register' element={<Register></Register>}></Route>
                <Route path='Login' element={<Login></Login>}>
                    <Route path='Register' element={<Register></Register>}></Route>
                </Route>
                <Route path='Products' element={<Products></Products>}>
                    <Route path='Addproduct' element={<Addproduct></Addproduct>}></Route>
                </Route>
            </Route>
            
        </Routes>
    </>
}

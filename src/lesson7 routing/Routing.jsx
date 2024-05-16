import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Welcome } from "./Welcome"
import { Login } from "./Login"
import { Register } from "./Register"

// לא שם שמור - מובן
export const Routing = () => {
    return <>
        {/* route = ניתוב */}
        {/* הצהרות על ניתובים */}
        <Routes>
            {/* הגדרה של ניתוב בודד */}
            {/* עבור הניתוב המסוים - path */}
            {/* element נטען את הקומפוננטה שכתובה ב */}
            <Route path="Home" element={<Home></Home>}>
                {/* נצהיר על הילדים בין שתי התגיות */}
                <Route path="Register" element={<Register></Register>}></Route>
                <Route path="Login" element={<Login></Login>}></Route>
            </Route>
            <Route path="Welcome/:name/:pass" element={<Welcome></Welcome>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
        </Routes>
    </>
}
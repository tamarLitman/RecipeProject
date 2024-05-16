import { useState } from "react"
import { Register } from "./Register"
import { Outlet, useNavigate } from "react-router"
import { NavLink } from "react-router-dom"

export const Home = () => {

    // const [flag, setFlag] = useState(false)
    const nav = useNavigate()

    const open = () => {
        // כאשר מנתבים מאבא לבן - אין לשים סלש
        nav('Register')
    }

    return <>
        <h1>HOME</h1>

        <div className='homeNav'>
            <NavLink to={'Register'} className='hlink'>Register</NavLink>
            <NavLink to={'Login'} className='hlink'>Login</NavLink>
        </div>

        {/* <button onClick={open}>Register</button> */}
        {/* {flag && <Register></Register>} */}
        {/* תגית של ריאקט שמאפשרת לטעון ילדים */}
        {/* היכן שנטען את התגית - תטען קומפוננטת הילד */}
        <Outlet></Outlet>
    </>
}
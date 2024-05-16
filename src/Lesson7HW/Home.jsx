
import { Outlet, useNavigate } from "react-router"
import { NavLink } from "react-router-dom"


export const Home=()=>{
    const nav = useNavigate()

    const open = () => {
        nav('Register')
    }

    return <>
        <h1>HOME</h1>

        <div className='homeNav'>
            <NavLink to={'Register'} className='hlink'>Register</NavLink>
            <br></br>
            <NavLink to={'Login'} className='hlink'>Login</NavLink>
            <br></br>
            <NavLink to={'Products'} className='hlink'>Products</NavLink>
        </div>
        <Outlet></Outlet>
    </>
}


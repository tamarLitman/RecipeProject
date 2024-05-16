import { Link, NavLink } from "react-router-dom"

export const Nav=()=>{
    return<>
        <div className='nav'>
            <NavLink to={'/Home'} className='link'>Home</NavLink>
        </div>
    </>
}
import { NavLink } from "react-router-dom"
import './NavBar.css'
import { Icon } from "@mui/material"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
// import icon from '../../pics_for_react/healthy-food.png'
export const Nav = () => {
    const user = useSelector(x => { return x.currentUser })
    const isAdmin = useSelector(u => { return u.isAdmin })

    return <>
        <div className="navigation" >
            {user.firstName && !isAdmin &&
                <h1 className="user-circle">{user.firstName[0]}</h1>}
            {isAdmin && <h1 className="user-circle">ADMIN</h1>}
            <NavLink to={'/Home_page'} className='link' ><a>Home</a></NavLink >
            {!user
                &&
                <NavLink to={'/Signin'} className='link'><a>Sign In</a></NavLink >
            }
            {!user &&
                <NavLink to={'/Login'} className='link'><a>Log In</a></NavLink >
            }
            <NavLink to={'/all_recipes'} className='link'><a>All Recipes</a></NavLink >
            {user.firstName && <NavLink to={'/PersonalArea'} className='link'><a>Personal Area</a></NavLink>}
            {isAdmin && <NavLink to={'/AddLevel'} className='link'><a>add level</a></NavLink >}
            {isAdmin && <NavLink to={'/AddCategory'} className='link'><a>Add category</a></NavLink >}
            <p></p>
            {/* <img src={icon}></img> */}
        </div>
    </>
}

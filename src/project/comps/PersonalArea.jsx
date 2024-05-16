import { useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import './NavBar.css'

export const PersonalArea = () => {

    return <>
        <h1 id="bla">my personal area</h1>
        <NavLink id='bla' to={'MyRecipes'}><h3 style={{ width: 170, margin: 10 }} >my recipes</h3></NavLink>
        <br></br>
        <NavLink id='bla' to={'AddRecipe'}><h3 style={{ width: 170, margin: 10 }} >add a recipe</h3></NavLink>
        <Outlet></Outlet>
    </>

}
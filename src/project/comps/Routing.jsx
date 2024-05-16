import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Home_page"
import { Signin } from "./Signin"
import { Login } from "./Login"
import { AllRecipes } from "./All_recipes"
import { PersonalArea } from "./PersonalArea"
import { AddRecipe } from "./AddRecipe"
import { MyRecipes } from "./MyRecipes"
import { AddLevel } from "./AddLevel"
import { AddCategory } from "./AddCategory"



export const Routing = () => {
    return <>
        <Routes>
            <Route path="/Home_page" element={<HomePage></HomePage>}>
            </Route>
            <Route path="/Signin" element={<Signin></Signin>}> </Route>
            <Route path="/Login" element={<Login></Login>}> </Route>
            <Route path="/All_recipes" element={<AllRecipes></AllRecipes>}> </Route>
            <Route path="/AddLevel" element={<AddLevel></AddLevel>}> </Route>
            <Route path="/AddCategory" element={<AddCategory></AddCategory>}> </Route>
            <Route path="/PersonalArea" element={<PersonalArea></PersonalArea>} >
                <Route path="MyRecipes" element={<MyRecipes></MyRecipes>}></Route>
                <Route path="AddRecipe" element={<AddRecipe></AddRecipe>}></Route>
            </Route>
        </Routes>
    </>
}
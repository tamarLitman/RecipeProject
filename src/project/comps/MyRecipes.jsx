import { useEffect, useState } from "react"
import { getRecipes } from "../api"
import { useSelector } from "react-redux"
import { RecipeDetails } from "./RecipeDetails"
import './recipes.css'

export const MyRecipes = () => {
    const currentUser = useSelector(u => { return u.currentUser })
    const [list, setList] = useState()
    const [flag, setFlag] = useState()
    const [recipe, setRecipe] = useState()
    useEffect(() => {
        getRecipes()
            .then(x => {
                setList(x.data)
            })
            .catch(x => {
                if (x && x.status != 200)
                    alert("couldn't get recipes")
            })
    }
    )
    return <>
        <div className="recipe-container" >
            {list && list.map(item => {
                {
                    if ((item.userName == `${currentUser.firstName} ${currentUser.lastName}`))
                        return (
                            <div
                            // style={{maxWidth:"100px"}}
                                className={`${item.categoryName}`} class="card">
                                <div class="card_body">
                                    <img class="card-image" src={`${item.pic}`}></img>
                                    <h2 class="card-title">{item.name}</h2>
                                    <p class="card-description">{item.userName}</p>
                                </div>
                                <button class="card-btn" placeholder="for more details" onClick={e => {
                                    setFlag(true)
                                    setRecipe(item)
                                }}>for more detailes</button>
                            </div>
                        )
                }
            })}
            {flag &&
             <div className="details">
                <RecipeDetails name={recipe.name} id={recipe.id} pic={recipe.pic}
                    preperation={recipe.preparationTime}
                    userId={recipe.userId} userName={recipe.userName}
                    categoryId={recipe.categoryId}
                    categoryName={recipe.categoryName} levelId={recipe.levelId}
                    levelName={recipe.levelName} note={recipe.note}
                    instructions={recipe.instructions} >
                </RecipeDetails>
                </div>}
        </div>
    </>
}
import { useEffect, useState } from "react"
import { getCategory, getLevel, getRecipes } from "../api"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { RecipeDetails } from "./RecipeDetails"
import './NavBar.css'
import './recipes.css'
import { NavLink } from "react-router-dom"
import zIndex from "@mui/material/styles/zIndex"
import { blue } from "@mui/material/colors"

export const AllRecipes = () => {
    const [list, setlist] = useState()
    const [listCategories, setCList] = useState()
    const [byCategory, setByCategory] = useState()
    const [listLevels, setLList] = useState()
    const [byLevel, setByLevel] = useState()
    const [listAuthors, setlAuthors] = useState()
    const [byAuthors, setByAuthors] = useState()
    const [flag, setFlag] = useState()
    const [recipe, setRecipe] = useState()

    useEffect(() => {

        getRecipes()
            .then(x => {
                setlist(x.data)
                setlAuthors(list && list.map(y => y.userName))
            }
            )
            .catch(x => {
                if (x && x.status != 200)
                    alert("couldn't get recipes")
            })

        getCategory()
            .then(x => { setCList(x.data) })
            .catch(x => {
                if (x && x.status != 200)
                    alert("coulden't get the recipe categories")
            })

        getLevel()
            .then(x => { setLList(x.data) })
            .catch(x => {
                if (x && x.status)
                    alert("couldn't get the recipe's levels")
            })
    }, [])


    return <>
        <br></br><br></br>
        <FormControl style={{ width: 150 }}>
            <InputLabel >categories</InputLabel>
            <Select
                onChange={(e) => setByCategory(e.target.value)}>

                <MenuItem value="">
                    <em>all categories</em>
                </MenuItem>
                {listCategories && listCategories.map(x =>
                    <MenuItem value={x.id} className="{x.category}">
                        {x.name}
                    </MenuItem>)}
            </Select>
        </FormControl>
        <FormControl style={{ width: 150 }}>
            <InputLabel >levels</InputLabel>
            <Select
                onChange={(e) => setByLevel(e.target.value)}>

                <MenuItem value="">
                    <em>all level</em>
                </MenuItem>
                {listLevels && listLevels.map(x =>
                    <MenuItem value={x.id}>
                        {x.name}
                    </MenuItem>)}
            </Select>
        </FormControl>

        <FormControl style={{ width: 150 }}>
            <InputLabel style={{ width: 100 }}>Authors </InputLabel>
            <Select
                onChange={(e) => setByAuthors(e.target.value)}>
                <MenuItem value="">
                    <em>all Authors</em>
                </MenuItem>
                {listAuthors && listAuthors.map(x =>
                    <MenuItem value={x.id}>
                        {x}
                    </MenuItem>)}
            </Select>
        </FormControl>

     
            <div className="recipe-container" >
                {list && list.map(item => {
                    {
                        if ((item.levelName == byLevel || !byLevel) && (item.categoryName == byCategory || !byCategory) && (item.userName == byAuthors || !byAuthors))
                            return (
                                <div
                                    className={`${item.categoryName}`} class="card">
                                    <div class="card_body">
                                        <img class="card-image" src={`${process.env.PUBLIC_URL}/images/${item.pic}`}></img>
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
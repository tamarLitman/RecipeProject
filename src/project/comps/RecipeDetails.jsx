import { useState } from "react"
import { postCommentsToRecipe, postRecipe } from "../api"
import './NavBar.css'
import './recipes.css'
import { useSelector } from "react-redux"
import { Comments } from "./Comments"

export const RecipeDetails = (props) => {

    const [flag, setFlag] = useState()
    const [flag2, setflag2] = useState()
    const currentUser = useSelector(u => { return u.currentUser })

    const { id, name, pic, preparationTime, userId, userName, categoryId, categoryName,
        levelId, levelName, note, instructions } = props

    const send = (event) => {
        let comment = {
            "recipeId": id,
            "userId": userId,
            "userName": userName,
            "comment": event.target[0].value
        }

        debugger

        postCommentsToRecipe(comment)
            .then(
                alert("thank's for your comment")
            )
            .catch(
                alert("something went wrong...")
            )
    }

    return <>
        <div>
            <p>id:<br></br> {id}</p>
            <p>name:<br></br> {name}</p>
            <p>pic: <br></br>{pic}</p>
            <p>preparation time:<br></br> {preparationTime}</p>
            <p>user id:<br></br> {userId}</p>
            <p>user name: <br></br>{userName}</p>
            <p>category id: <br></br>{categoryId}</p>
            <p>category name: <br></br>{categoryName}</p>
            <p>level id:<br></br> {levelId}</p>
            <p>level name:<br></br> {levelName}</p>
            <p>instructions:<br></br> {instructions}</p>

            <button onClick={e => setflag2(!flag2)}>comments</button>
            {flag2 && <Comments id={id}></Comments>}
            <br></br><br></br>
            {currentUser != "" && <button onClick={e => setFlag(!flag)}>to add a comment to the recipe</button>}
            <br></br><br></br>
            {flag && <form onSubmit={e => send(e)}>
                <input placeholder="write your comment here:" ></input>
                <button type="submit" >submit</button>
            </form>
            }
        </div>
    </>
}
import { Products } from "./Products"
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/action";

export const Register=()=>{
    const dispatch = useDispatch()    
    const nav = useNavigate()

    const newUser=(event)=>{ 
        const newUser = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        dispatch(addUser(newUser))
       nav(`Product`)
    }
    return<>

    <h1>hello</h1>
    <form onSubmit={(e)=>newUser(e)}>
        <input placeholder="name"></input>
        <input placeholder="password"></input>
        <input placeholder="אימות סיסמא"></input>
        <input type="submit" value='send' ></input>
    </form>
    {/* 
        </form> */}
    </>
}
import { useNavigate } from "react-router";
import { setCurrentUser } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Login=()=>{
    const nav=useNavigate()
    const list = useSelector(u => { return u.users })
    const dis = useDispatch()
    const login=(event)=>{
        let found=false;
        event.preventDefault()
        for (let i = 0; i < list.length; i++) {
            if (list[i].username == event.target[0].value &&
                list[i].password == event.target[1].value) {
                found=true;
                dis(setCurrentUser(list[i]))
                alert(`Hello ${list[i].username}!`)
            }
        }
        if(!found)
            nav(`Register`)
    }
    return<>
    <form onSubmit={(e)=> login(e)}>
        <input placeholder="name"></input>
        <input placeholder="password"></input>
        <input type='submit' value='send'></input>
        </form>
    </>
}
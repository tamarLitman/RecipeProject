import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { setCurrentUser } from "./redux/action";

export const Login = () => {

    const list = useSelector(u => { return u.users })
    const dis = useDispatch()

    const send = (event) => {
        event.preventDefault()

        for (let i = 0; i < list.length; i++) {
            if (list[i].username == event.target[0].value &&
                list[i].password == event.target[1].value) {
                // הצבה של המשתמש הנוכחי
                dis(setCurrentUser(list[i]))
                swal(`Hello ${list[i].username}!`, "login successfuly", "success")
            }
        }
    }

    return <>
        <h2>Login:</h2>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'un'}>Username:</label>
            <br></br>
            <input id={'un'} placeholder={"input username"}></input>
            <br></br>
            <br></br>
            <label htmlFor={'pw'}>Password:</label>
            <br></br>
            <input type={'password'} id={'pw'} placeholder="input password"></input>
            <br></br>
            <br></br>
            <input type="submit" value={'send'}></input>
        </form>
    </>
}
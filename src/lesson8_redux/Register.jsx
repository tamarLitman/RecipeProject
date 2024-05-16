import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { addUser } from "./redux/action";

export const Register = () => {

    // יצירת משתנה שיפעיל את הפעולות
    const dispatch = useDispatch()

    const send = (event) => {
        event.preventDefault()
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(user);

        // הפעלת פעולה של הוספת משתמש
        dispatch(addUser(user))

        swal(`Welcome ${user.username}!`, "register successfuly", "success")
    }

    return <>
        <h2>Register:</h2>
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
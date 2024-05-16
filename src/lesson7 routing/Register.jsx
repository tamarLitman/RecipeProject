import { useNavigate } from "react-router";
import swal from "sweetalert";

export const Register = () => {

    const nav = useNavigate()

    const send = (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(user);
        swal(`Welcome ${user.username}!`, "register successfuly", "success")
        // שימוש במשתנה שהגדרנו למעלה - מקבל בסוגריים את הניתוב הרצוי
        nav(`/Welcome/${user.username}/${user.password}`)
    }

    return <>
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
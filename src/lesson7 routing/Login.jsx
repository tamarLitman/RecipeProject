import { useNavigate } from "react-router";
import swal from "sweetalert";

export const Login = () => {

    // hooks - חסכון בקוד
    // קודים שריאקט הכינה לנו ומאפשרת שימוש - כמובן לפי התנאים שלה
    // בתוך פונקציות hooks א"א להגדיר משתני 

    // הגדרת משתנה שיאפשר לנו לנתב מתוך קומפוננטה
    // כמובן שנרויח ניתוב לפי תנאים מסויימים
    // לא שם שמור
    const nav = useNavigate()

    const send = (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(user);
        swal(`Welcome ${user.username}!`, "login successfuly", "success")
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
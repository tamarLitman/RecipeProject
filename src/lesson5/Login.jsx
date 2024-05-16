import { useState } from "react"
import swal from "sweetalert";

export const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const send = () => {
        const user = {
            //כאשר המפתח והערך בעלי שם זהה - מספיק לכתוב פעם אחת
            // username: username,
            username,
            //כאשר נרצה לקרוא למפתח בשם שונה מהמשתנה
            // email: username,
            // password: password,
            password
        }
        console.log(user);
        swal(`Wellcome ${user.username}!`, "login successfuly", "success")
    }

    return <>
        <h2>~~~~~Login~~~~~</h2>
        <label htmlFor={'un'}>Username:</label>
        <br></br>
        <input id={'un'} placeholder="input username" onBlur={(e) => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <label htmlFor={'pw'}>Password:</label>
        <br></br>
        <input id={'pw'} placeholder="input password" onBlur={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
    </>
}
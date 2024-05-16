import { useState } from "react"
import swal from "sweetalert";

export const LoginUser = () => {

    const [user, setUser] = useState({})

    const send = () => {
        console.log(user);
        swal(`Wellcome ${user.username}!`, "login successfuly", "success")

        //json עריכת אובייקט 
        //שפיכת כל הנתונים שכבר קיימים באובייקט והצבת המפתח החדש
        //אם המפתח קיים - הערך ישתנה, אם המפתח אינו קיים - יתווסף לאובייקט
        // setUser({ ...user, username: e.target.value })
        //הוספת איבר למערך - שפיכת כל הנתונים מהמערך הקודם והצבת הערך החדש במקום האחרון
        // setArr([ ...arr, object ])
    }

    return <>
        <h2>~~~~~Login~~~~~</h2>
        <label htmlFor={'un'}>Username:</label>
        <br></br>
        <input id={'un'} placeholder="input username" onBlur={(e) => setUser({ ...user, username: e.target.value })}></input>
        <br></br>
        <br></br>
        <label htmlFor={'pw'}>Password:</label>
        <br></br>
        <input id={'pw'} placeholder="input password" onBlur={(e) => setUser({ ...user, password: e.target.value })}></input >
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
    </>
}

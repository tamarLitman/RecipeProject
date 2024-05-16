import { useRef } from "react"
import swal from "sweetalert";

export const LoginRef = () => {

    //HTML יצירת מצביע לפקדים בדף ה 
    const nameRef = useRef()
    const passRef = useRef()
    const hRef = useRef()

    const send = () => {
        console.log(nameRef);
        console.log(passRef);

        const user = {
            //גישה לערך של הפקד עליו מצביע המשתנה
            username: nameRef.current.value,
            password: passRef.current.value
        }

        console.log(user);
        swal(`Wellcome ${user.username}!`, "login successfuly", "success")

        hRef.current.innerHTML = `~~~~~ ${user.username} ~~~~~`
    }

    return <>
        <h2 ref={hRef}>~~~~~ Login ~~~~~</h2>
        <label htmlFor={'un'}>Username:</label>
        <br></br>
        {/* nameRef - מצביע לפקד של הזנת השם */}
        <input id={'un'} placeholder="input username" ref={nameRef}></input>
        <br></br>
        <br></br>
        <label htmlFor={'pw'}>Password:</label>
        <br></br>
        <input id={'pw'} placeholder="input password" ref={passRef}></input>
        <br></br>
        <br></br>
        <button onClick={send}>send</button>
    </>
}
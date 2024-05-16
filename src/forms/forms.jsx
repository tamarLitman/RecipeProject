import { useState } from "react";
import {Main} from './main';
export const LoginForm = () => {
    const [currentUser,setCurrentUser] = useState({})
    const send=(event)=>{
        event.preventDefault()
        const user={
            name:event.target[0].value,
            id:event.target[1].value
        }
        setCurrentUser(user)
        alert(currentUser.name)
    }
    return<>
        <form onSubmit={(e) => send(e)}>
            <input placeholder="input name"></input>
            <input placeholder="input id"></input>
            <input placeholder="input phone"></input>
            <input type="submit"></input>
        </form>
    </>
} 
    
    
    export const  Login=()=>{
        const [user, setUser] = useState({})
            const send=()=>{
                console.log(user)
            }
    return<>
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

    export const SignIn=()=>{
        const nameRef=useState()
        const idRef=useState()
        const [currentUser, setUser] = useState({})
        const send=()=>{
            const user={
                name:nameRef.current.value,
                id:idRef.current.value
            }
            setUser(user)
            Main.setUsers(...user)
            alert(Main.users[0].name)
        }

        return<>
        <input ref={nameRef}></input>
        <input ref={idRef}></input>
        <button onClick={send}></button>
        </>
    }


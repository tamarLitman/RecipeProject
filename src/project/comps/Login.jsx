import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { setCurrentUser, setIsAdmin } from "../redux/action";
import { useEffect, useState } from "react";
import { getByEmail } from "../api";
import './NavBar.css'

export const Login = () => {
    const nav = useNavigate()
    const dis = useDispatch()
    const list = useSelector(u => { return u.users })
    const admin=useSelector(u=>{return u.administrator})
    const login = (event) => {
        debugger
        event.preventDefault()
        getByEmail(event.target[0].value, event.target[1].value)
        .then(x => {
            debugger
            console.log(x);
            dis(setCurrentUser(x.data))
            if(x.data.email==admin.email && x.data.password==admin.password){
                alert("hello admin")
                dis(setIsAdmin(true))
            }
            else
                alert(`Hello ${x.data.firstName} ${x.data.lastName}`)
            nav('/Home_page')
        })
        .catch(error => {
            alert("not found")
            nav('/Signin')
        })

    }
    return <>

        <div class="login-box">
            <h2>Log in</h2>
            <form onSubmit={(e) => login(e)}>
                <div class="user-box">
                    <input type="email" required="true"></input>
                    <label>email</label>
                </div>
                <div class="user-box">
                    <input type="password" required="true"></input>
                    <label>password</label>
                </div>
                <a   value={'log in'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input style={{width:100}}  type="submit" value={'log in'}></input>
                </a>
            </form>
        </div>
    </>
}
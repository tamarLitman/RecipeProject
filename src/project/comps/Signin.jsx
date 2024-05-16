import { useDispatch, useSelector } from "react-redux";
import { addUser, getByEmail } from "../api";
import swal from "sweetalert";
import { setCurrentUser } from "../redux/action";
import { useNavigate } from "react-router-dom";
import './NavBar.css'

export const Signin = () => {
    const dis = useDispatch()
    const nav = useNavigate()

    const signin = async (event) => {
        event.preventDefault()
        const user = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value
        }

        var temp = await getByEmail(user.email, user.password)
        console.log(temp);
        //console.log(temp.user);

        if (temp != null && temp.data != "") {

            alert("the user already exists")
            nav('/Login')
        }
        else {
            addUser(user)
                .then(x => {
                    debugger
                    if (x.status == 200) {

                        swal(`welcome!`, 'register success', 'success')
                        dis(setCurrentUser(x.data))
                        nav('/Home_page')
                    }
                    else {
                        swal(`Oopps!`, 'register failed', 'error')
                    }
                })
                .catch(err => {
                    alert("error")
                })
        }

    }

    return <>
        {/* <form onSubmit={(e) => signin(e)}>
            <input placeholder="first name"></input>
            <br></br>
            <input placeholder="last name"></input>
            <br></br>
            <input placeholder="email"></input>
            <br></br>
            <input placeholder="password"></input>
            <br></br>
            <input type="submit" value={'sign in'} className="btn"></input>
        </form> */}
        <div class="login-box">
            <h2>Sign in</h2>
            <form onSubmit={(e) => signin(e)}>
                <div class="user-box">
                    <input type="text" required="true"></input>
                    <label>first name</label>
                </div>
                <div class="user-box">
                    <input type="text" required="true"></input>
                    <label>last name</label>
                </div>
                <div class="user-box">
                    <input type="email" required="true"></input>
                    <label>email</label>
                </div>
                <div class="user-box">
                    <input type="password" required="true"></input>
                    <label>password</label>
                </div>

                <a   value={'sign in'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input style={{width:100}}  type="submit" value={'sign in'}></input>
                </a>
            </form>
        </div>
    </>
}
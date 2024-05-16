import swal from "sweetalert";

export const LoginForm = () => {

    const send = (event) => {
        // submit מבטל את ברירת המחדל של האירוע
        event.preventDefault()
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        console.log(user);
        swal(`Wellcome ${user.username}!`, "login successfuly", "success")
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'un'}>Username:</label>
            <br></br>
            <input id={'un'} placeholder="input username"></input>
            <br></br>
            <br></br>
            <label htmlFor={'pw'}>Password:</label>
            <br></br>
            <input id={'pw'} placeholder="input password"></input>
            <br></br>
            <br></br>
            <input type="submit" value={'send'}></input>
        </form>
    </>
}
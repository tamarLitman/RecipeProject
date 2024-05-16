import swal from "sweetalert"
import { addPlayer } from "./api"

export const SignUp = () => {

    const send = (e) => {
        e.preventDefault()

        const player = {
            id: 101,
            name: e.target[0].value,
            stars: e.target[1].value
        }

        addPlayer(player)
            .then(x => {
                console.log(x);
                if (x.status == 200) {
                    swal(`welcome!`, 'register success', 'success')
                }
                else {
                    swal(`Oopps!`, 'register failed', 'error')
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'un'}>name:</label>
            <br></br>
            <input id={'un'} placeholder="input name"></input>
            <br></br>
            <br></br>
            <label htmlFor={'pw'}>stars:</label>
            <br></br>
            <input id={'pw'} placeholder="input stars"></input>
            <br></br>
            <br></br>
            <input type="submit" value={'send'}></input>
        </form>
    </>
}
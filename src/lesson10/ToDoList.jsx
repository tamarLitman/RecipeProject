import { useEffect, useState } from "react"
import { getToDoes } from "./api"
import { useNavigate } from "react-router"

export const ToDoList = () => {

    const [list, setList] = useState()

    const nav = useNavigate()

    useEffect(() => {
        getToDoes()
            // תופס הצלחה
            .then(x => {
                // x = האובייקט שחזר מהשרת
                // data הנתונים נמצאים בתוך 
                console.log(x.status);
                setList(x.data)
            })
            // תופס כשלון
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    const send = (id) => {
        nav(`details/${id}`)
    }
    return <>
        {list && list.map(x =>
            <div key={x.id}>
                <p>{x.title}</p>
                <button onClick={() => send(x.id)}>show details</button>
            </div>
        )}
    </>
}
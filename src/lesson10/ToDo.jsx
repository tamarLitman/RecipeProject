import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getById } from "./api"

export const ToDo = (props) => {

    const [todo, setTodo] = useState()

    const p = useParams()

    useEffect(() => {
        getById(p.id)
            .then(x => {
                set(x.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    })

    return <>
        {todo &&
            <div>
                <p>{todo.title}</p>
                <p>{todo.userId}</p>
                {todo.completed && <p>GREAT!!! 👍😁</p>}
            </div>
        }
    </>
}
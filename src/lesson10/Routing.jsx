import { Route, Routes } from "react-router"
import { ToDo } from "./ToDo"
import { ToDoList } from "./ToDoList"

export const Routing = () => {
    return <>
        <Routes>
            <Route path={''} element={<ToDoList></ToDoList>}></Route>
            <Route path={'details/:id'} element={<ToDo></ToDo>}></Route>
        </Routes>
    </>
}
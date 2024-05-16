import { useSelector } from "react-redux"

export const Users = () => {

    // useSelector
    const list = useSelector(store => {
        return store.users
    })

    const user = useSelector(x => { return x.currentUser })
    return <>
        {user.username && <h1>Hello to {user.username}</h1>}
        {list && list.map(u => <h3>{u.username} - {u.password}</h3>)}
    </>
}
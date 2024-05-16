
export const Addproduct=()=>{
    const dispatch = useDispatch()   
    const add=(e)=>{
        const newItem = {
            username: e.target[0].value,
            calories: e.target[1].value,
            price:e.target[2].value
        }
        dispatch(addItem(newItem))
    }
    return<>
        <form onSubmit={(e)=>add(e)}>
            <input placeholder="prod name"></input>
            <input placeholder="calories"></input>
            <input placeholder="price"></input>
            <input type="submit" value='add'></input>
        </form>
    </>    
}
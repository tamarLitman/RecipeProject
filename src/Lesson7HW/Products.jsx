import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Products=()=>{
    const list = useSelector(u => { return u.items})
    const details=(event)=>{
        
    }
    return<>
        <div id='father'>
            {list.map((item,index)=><div>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <NavLink to={'/Details'} className='hlink'>Home</NavLink>
            </div>)}
        </div>
        <NavLink to={'/Addproduct'} callName='hlink'>add product</NavLink>
    </>
}
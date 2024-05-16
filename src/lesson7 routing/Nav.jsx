import './style.css'
import { Link, NavLink } from "react-router-dom"

export const Nav = () => {
    return <>
        <div className='nav'>
            {/* a = ניגש לשרת בשביל לחפש את העמוד הרצוי */}
            {/* <a href="/Home">Home</a> */}
            {/* Link - תגית של ריאקט */}
            {/* טוענת בתחילה את כל היישום לוקאלית, וניגשת לקבל את העמוד הרצוי */}
            {/* <Link to={'/Home'} className='link'>Home</Link> */}
            {/* <Link to={'/Welcome'} className='link'>Welcome</Link> */}
            {/* <Link to={'/Login'} className='link'>Login</Link> */}

            <NavLink to={'/Home'} className='link'>Home</NavLink>
            {/* <Link to={'/Welcome'} className='link'>Welcome</Link> */}
            <NavLink to={'/Login'} className='link'>Login</NavLink>
        </div>
    </>
}
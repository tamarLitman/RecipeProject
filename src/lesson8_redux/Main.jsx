import { Provider } from "react-redux"
import store from "./redux/store"
import { Users } from "./Users"
import { Login } from "./Login"
import { Register } from "./Register"

export const Main = () => {
    return <>
        {/* provider - ספק */}
        {/* מקבל כפרופס את המחסן */}
        {/* כל קומפוננטה שתהיה טעונה כילד של הספק תכיר את הסטור */}
        <Provider store={store}>
            {/* <Nav></Nav> */}
            {/* <Routing></Routing> */}
            <Users></Users>
            <Login></Login>
            <Register></Register>
            {/* <Footer></Footer> */}
        </Provider>
    </>
}
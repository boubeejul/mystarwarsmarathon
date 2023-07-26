import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
export function AllRoutes() {

    // const getUser = useContext(UserContext)
    // const isLogged = getUser.isLogged

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/login" Component={Login}/>
                </Routes>
                {/* <ToastContainer /> */}
        </BrowserRouter>
    )
}
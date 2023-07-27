import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Header } from "../components/Header";
import { MyMarathons } from "../pages/MyMarathons";
import { NewMarathon } from "../pages/NewMarathon";
import { UserProvider } from "../contexts/UserContext";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export function AllRoutes() {

    const getUser = useContext(UserContext)
    const isLogged = getUser.isLogged

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Login} />
                    <Route path="/register" Component={Register} />

                    <Route Component={Header}>
                        <Route path="/mymarathons" Component={MyMarathons} />
                        <Route path="/newmarathon" Component={NewMarathon} />
                    </Route>
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </UserProvider>
    )
}
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Header } from "../components/Header";
import { MyMarathons } from "../pages/MyMarathons";
import { NewMarathon } from "../pages/NewMarathon";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import { Protected } from "./Protected"
import 'react-toastify/dist/ReactToastify.css'
export function AllRoutes() {

    const getUser = useContext(UserContext)
    const isLogged = getUser.isLogged
    console.log(isLogged)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={isLogged ? <Navigate to="/mymarathons" /> : <Navigate to="/login" />}
                />

                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />

                <Route Component={Header}>
                    <Route
                        path="/mymarathons"
                        element={
                            <Protected isLogged={isLogged}>
                                <MyMarathons />
                            </Protected>
                        }
                    />
                    <Route
                        path="/newmarathon"
                        element={
                            <Protected isLogged={isLogged}>
                                <NewMarathon />
                            </Protected>
                        }
                    />
                </Route>
            </Routes>
            <ToastContainer />
        </BrowserRouter>

    )
}
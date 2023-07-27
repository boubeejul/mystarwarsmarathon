import { Nav, NavItem } from "./style"
import { BiSolidMoviePlay } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import { useLocation, useNavigate } from "react-router-dom";

export function Navigation() {

    const navigate = useNavigate()
    const location = useLocation()
    
    return (
        <Nav>
            <NavItem active={location.pathname === "/mymarathons"} onClick={() => navigate("/mymarathons")}><BiSolidMoviePlay size={25} /> Minhas Maratonas</NavItem>
            <NavItem active={location.pathname === "/newmarathon"} className="navTitle" onClick={() => navigate("/newmarathon")}><IoMdAddCircle size={25} />Nova Maratona</NavItem>
        </Nav>
    )
}
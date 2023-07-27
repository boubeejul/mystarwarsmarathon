import LogoHeader from "../../assets/LogoHeader.svg"
import { Container, UserWrapper, UpdateButton, DeleteButton, Wrapper } from "./style"
import { Outlet, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export function Header() {

    const getUser = useContext(UserContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        getUser.logout() 
        navigate("/")
    }

    return (
        <>
            <Container>
                <img src={LogoHeader} alt="logo do site" />

                <UserWrapper>
                    <span>{getUser.user.username}</span>

                    <Button sx={{ color: 'var(--branco)', fontFamily: 'Rajdhani', fontSize: 18, fontWeight: 'bold' }} onClick={handleOpen}>Sair</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            backgroundColor: 'var(--cinza-primario)',
                            border: '1px solid var(--amarelo)',
                            borderRadius: 3,
                            position: 'absolute',
                            top: '30%',
                            left: '50%',
                            width: 300,
                            transform: 'translate(-50%, -50%)',
                            padding: 2,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 5
                        }}>
                            <span style={{
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}>Deseja realmente sair?</span>

                            <Wrapper>
                                <UpdateButton onClick={handleClose}>Voltar</UpdateButton>
                                <DeleteButton onClick={handleLogout}>Sair</DeleteButton>
                            </Wrapper>
                        </Box>
                    </Modal>
                </UserWrapper>
            </Container>
            <Outlet />
        </>
    )
}
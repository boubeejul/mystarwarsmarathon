import { DeleteButton, Wrapper, UpdateButton } from "./style"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState, useContext } from "react";
import { axiosURL } from "../../services/axiosURL";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { MdCancel } from 'react-icons/md';
import { toast } from "react-toastify";

export function DeleteModal(props) {

    const getUser = useContext(UserContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = async () => {
        try {

            for await (const filmeMaratona of props.filme_maratona) {
                await axiosURL.delete(`/filme_maratona/${filmeMaratona.id_filme_maratona}`, {
                    headers: {
                        Authorization: `Bearer ${getUser.user.accessToken}`
                    }
                })
            }

            const response = await axiosURL.delete(`/maratona/${props.id}`, {
                headers: {
                    Authorization: `Bearer ${getUser.user.accessToken}`
                }
            })

            navigate(0)

        } catch (error) {
            toast.error(`(${error.response.status})` + ' Ocorreu um erro ao tentar apagar a maratona. Tente novamente.', {
                theme: "dark"
            })
        }
    }


    return (
        <>
            <DeleteButton onClick={handleOpen}><MdCancel />Apagar maratona</DeleteButton>

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
                    }}>Tem certeza que deseja excluir a maratona "{props.nome}"?</span>

                    <Wrapper>
                        <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
                        <UpdateButton onClick={handleClose}>Voltar</UpdateButton>
                    </Wrapper>
                </Box>
            </Modal>
        </>
    )
}
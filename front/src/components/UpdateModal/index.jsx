import { DeleteButton, Wrapper, UpdateButton } from "./style"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useContext } from "react";
import { axiosURL } from "../../services/axiosURL";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function UpdateModal(props) {

    const getUser = useContext(UserContext)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [marathon, setMarathon] = useState(props.maratona)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdate = async () => {
        try {
            const response = await axiosURL.put("/maratona", {...marathon,
                user: {
                    id: getUser.user.id
                }
            }, {
                headers: {
                    Authorization: `Bearer ${getUser.user.acessToken}`
                }
            })
            navigate(0)

        } catch (error) {
            console.log(error)
        }
    }

    const handleNewStatus = (e) => {

        let newStatus = marathon.status

        switch (e.value) {
            case 'Assistida':
                newStatus = "ASSISTIDA"
                break
            case 'Pendente':
                newStatus = "PENDENTE"
                break
            case 'Cancelada':
                newStatus = "CANCELADA"
                break
        }

        setMarathon({ ...marathon, status: newStatus })
    }


    return (
        <>
            <UpdateButton onClick={handleOpen}>Atualizar status</UpdateButton>

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
                    top: '50%',
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
                    }}>Atualizar status da maratona</span>

                    <label htmlFor="status">Selecione o status</label>
                    <RadioGroup
                        id="status"
                        aria-labelledby="status da maratona"
                        defaultValue={props.maratona.status}
                        name="status"
                        onChange={(e) => handleNewStatus(e.target)}
                        sx={{
                            margin: 'auto'
                        }}
                    >
                        <FormControlLabel value="Assistida" control={<Radio sx={{
                            color: 'var(--amarelo)',
                            '&.Mui-checked': {
                                color: 'var(--amarelo)',
                            },
                        }} />} label="Assistida" />
                        <FormControlLabel value="Pendente" control={<Radio sx={{
                            color: 'var(--amarelo)',
                            '&.Mui-checked': {
                                color: 'var(--amarelo)',
                            },
                        }} />} label="Pendente" />
                        <FormControlLabel value="Cancelada" control={<Radio sx={{
                            color: 'var(--amarelo)',
                            '&.Mui-checked': {
                                color: 'var(--amarelo)',
                            },
                        }} />} label="Cancelada" />
                    </RadioGroup>

                    <Wrapper>
                        <DeleteButton onClick={handleUpdate}>Atualizar</DeleteButton>
                        <UpdateButton onClick={handleClose}>Voltar</UpdateButton>
                    </Wrapper>
                </Box>
            </Modal>
        </>
    )
}
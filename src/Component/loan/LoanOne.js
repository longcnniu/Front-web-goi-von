import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import './LoanOne.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../../contexts/constants'

const LoanOne = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const [Truong1, setTruong1] = useState('')
    const [Truong2, setTruong2] = useState('')
    const [Truong3, setTruong3] = useState('')
    const [Truong4, setTruong4] = useState('')
    const [Truong5, setTruong5] = useState('')
    const [Truong6, setTruong6] = useState('')
    const [Truong7, setTruong7] = useState('')
    const [Truong8, setTruong8] = useState('')
    const [Truong9, setTruong9] = useState('')
    const [Truong10, setTruong10] = useState('')
    const [Truong11, setTruong11] = useState('')
    const [Truong12, setTruong12] = useState('')
    const [Truong13, setTruong13] = useState('')
    const [Truong14, setTruong14] = useState('')
    const [Truong15, setTruong15] = useState('')
    const [Truong16, setTruong16] = useState('')

    //=============
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };
    //=============
    const notify = (data) => toast.success(data, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const warning = (data) => {
        toast.warn(data, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const erro = (data) => {
        toast.error(data, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    //============

    const clickSend = () => {
        handleToggle()
        //============
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("tenCty", Truong3);
        urlencoded.append("NamThanhLap", Truong4);
        urlencoded.append("MaSoThue", Truong5);
        urlencoded.append("DiaChi", Truong6);
        urlencoded.append("TienVay", Truong7);
        urlencoded.append("MucDichDA", Truong8);
        urlencoded.append("TenDA", Truong9);
        urlencoded.append("DiaChiDA", Truong10);
        urlencoded.append("TSTheChap", Truong11);
        urlencoded.append("DienTich", Truong12);
        urlencoded.append("SLBanRaDuKien", Truong13);
        urlencoded.append("TienDaDauTu", Truong14);
        urlencoded.append("DaQuyHoach", Truong15);
        urlencoded.append("DaDuocCapPhep", Truong16);
        urlencoded.append("TenLienHe", Truong1);
        urlencoded.append("SoDTLienHe", Truong2);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/loan-1", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    handleClose()
                    notify(result.message)
                } else if (result.st) {
                    handleClose()
                    warning(result.message)
                } else {
                    erro(result.message)
                    handleClose()
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <ToastContainer />
            <div className='LoanOne-Main'>
                <div className='LoanOne-Container'>
                    <h3 className='LoanOne-Container-h3'>Vay th??? ch???p d??? ??n l???n</h3>
                    <h5 className='LoanOne-Container-h5'>Th??ng tin li??n h???</h5>
                    <TextField onChange={e => setTruong1(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n"
                    />

                    <TextField onChange={e => setTruong2(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? ??i???n tho???i"
                    />
                    <h5 className='LoanOne-Container-h5'>Th??ng tin c?? nh??n</h5>

                    <TextField onChange={e => setTruong3(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n c??ng ty"
                    />

                    <TextField onChange={e => setTruong4(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="N??m th??nh l???p c??ng ty"
                    />

                    <TextField onChange={e => setTruong5(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="M?? s??? thu??? c??ng ty"
                    />

                    <TextField onChange={e => setTruong6(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????a ch??? c??ng ty"
                    />

                    <h5 className='LoanOne-Container-h5'>Nhu c???u vay</h5>



                    <FormControl fullWidth>
                        <InputLabel htmlFor="outlined-adornment-amount">S??? Ti???n vay</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            onChange={e => setTruong7(e.target.value)}
                            startAdornment={<InputAdornment position="start">VN??</InputAdornment>}
                            label="S??? Ti???n vay"
                        />
                    </FormControl>

                    <TextField onChange={e => setTruong8(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="M???c ????ch vay"
                    />

                    <h5 className='LoanOne-Container-h5'>Th??ng tin t??i s???n th??? ch???p</h5>
                    <TextField onChange={e => setTruong9(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n d??? ??n"
                    />

                    <TextField onChange={e => setTruong10(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????a ch??? d??? ??n"
                    />

                    <TextField onChange={e => setTruong11(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??i s???n th??? ch???p: B??S/ T??i s???n h??nh th??nh t????ng lai"
                    />
                    <h5 className='LoanOne-Container-h5'>Th??ng tin t??i s???n th??? ch???p</h5>
                    <TextField onChange={e => setTruong12(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Di???n t??ch (ha)"
                    />
                    <TextField onChange={e => setTruong13(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? l?????ng sp b??n ra d??? ki???n"
                    />
                    <TextField onChange={e => setTruong14(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? ti???n c??ng ty ???? ?????u t?? v??o d??? ??n"
                    />

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">???? quy ho???ch 1/500</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong15}
                            label="Age"
                            onChange={e => setTruong15(e.target.value)}
                        >
                            <MenuItem value={0}>Ch??a</MenuItem>
                            <MenuItem value={1}>C??</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">???? ???????c c???p ph??p c???a UBND T???nh</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong16}
                            label="Age"
                            onChange={e => setTruong16(e.target.value)}
                        >
                            <MenuItem value={0}>Ch??a</MenuItem>
                            <MenuItem value={1}>C??</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" endIcon={<SendIcon />} onClick={clickSend}>
                        G???i
                    </Button>
                </div>
            </div>
            {/* ================ */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default LoanOne
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import './LoanOne.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { apiUrl } from '../../contexts/constants';


const LoanFour = () => {
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
    //=======

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
        urlencoded.append("LinhVucHoatDong", Truong7);
        urlencoded.append("LyDoTaiCauTruc", Truong8);
        urlencoded.append("HoTro", Truong9);
        urlencoded.append("UuDiem", Truong10);
        urlencoded.append("TenLienHe", Truong1);
        urlencoded.append("SoDTLienHe", Truong2);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/loan-4", requestOptions)
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
                    <h3 className='LoanOne-Container-h3'>Tái cấu trúc doanh nghiệp</h3>

                    <h5 className='LoanOne-Container-h5'>Thông tin liên hệ</h5>
                    <TextField
                        onChange={e => setTruong1(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Tên"
                    />

                    <TextField
                        onChange={e => setTruong2(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Số điện thoại"
                    />

                    <h5 className='LoanOne-Container-h5'>Thông tin cá nhân</h5>

                    <TextField
                        onChange={e => setTruong3(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Tên công ty"
                    />

                    <TextField
                        onChange={e => setTruong4(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Năm thành lập công ty"
                    />

                    <TextField
                        onChange={e => setTruong5(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Mã số thuế công ty"
                    />

                    <TextField
                        onChange={e => setTruong6(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Địa chỉ công ty"
                    />

                    <TextField
                        onChange={e => setTruong7(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Lĩnh vực hoạt động hiện tại"
                    />

                    <TextField
                        onChange={e => setTruong8(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Lý do tái cấu trúc (tóm tắt ngắn gọn lý do)"
                    />

                    <TextField
                        onChange={e => setTruong9(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Nếu có sự hỗ trợ DN cần hỗ trợ về phương diện nào"
                    />

                    <h5 className='LoanOne-Container-h5'>DN nêu ra các ưu điểm của mình về hướng phát triển tương lai nếu được
                        hỗ trợ: (Trình bày sơ lượt)…</h5>

                    <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={e => setTruong10(e.target.value)}></textarea>

                    <Button variant="contained" endIcon={<SendIcon />} onClick={clickSend}>
                        Gửi
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

export default LoanFour
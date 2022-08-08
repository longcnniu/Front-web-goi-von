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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { apiUrl } from '../../contexts/constants';


function LoanFive() {
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
    const [Truong17, setTruong17] = useState('')
    const [Truong18, setTruong18] = useState('')
    const [Truong19, setTruong19] = useState('')
    const [Truong20, setTruong20] = useState('')
    const [Truong21, setTruong21] = useState('')

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

    useEffect(() => {
        if (Truong19 === 0) {
            setTruong20('0')
        }else{
            setTruong20('')
        }

    }, [Truong19])


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
        urlencoded.append("HanMongMuon", Truong7);
        urlencoded.append("MucDichVay", Truong8);
        urlencoded.append("BCTaiChinhGanNhat", Truong9);
        urlencoded.append("DoanhThu", Truong10);
        urlencoded.append("DienTich", Truong11);
        urlencoded.append("DatO", Truong12);
        urlencoded.append("DatNN", Truong13);
        urlencoded.append("DatKhac", Truong14);
        urlencoded.append("DiaChiBDS", Truong15);
        urlencoded.append("NhanHieuOT", Truong16);
        urlencoded.append("NamSanXuatOT", Truong17);
        urlencoded.append("TrongTaiOT", Truong18);
        urlencoded.append("NghiVuThue", Truong19);
        urlencoded.append("TienNoThue", Truong20);
        urlencoded.append("NoXau", Truong21);
        urlencoded.append("TenLienHe", Truong1);
        urlencoded.append("SoDTLienHe", Truong2);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/loan-5", requestOptions)
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
                    <h3 className='LoanOne-Container-h3'>Vay hạn mức doanh nghiệp vừa và doanh nghiệp lớn</h3>

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
                        label="Năm thành lập"
                    />

                    <TextField
                        onChange={e => setTruong5(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Mã số thuế"
                    />

                    <TextField
                        onChange={e => setTruong6(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Địa chỉ công ty"
                    />

                    <h5 className='LoanOne-Container-h5'>Nhu cầu hạn mức tối đa</h5>

                    <TextField
                        onChange={e => setTruong7(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Hạn mức mong muốn"
                    />

                    <TextField
                        onChange={e => setTruong8(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Mục đích: Bổ sung vốn kinh doanh; bổ sung tài sản lưu động; Hạn mức"
                    />

                    <h5 className='LoanOne-Container-h5'>Nguồn thu</h5>

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">Báo cáo tài chính năm gần nhất</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong9}
                            label="Age"
                            onChange={e => setTruong9(e.target.value)}
                        >
                            <MenuItem value={0}>Lời</MenuItem>
                            <MenuItem value={1}>Lỗ</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="dense">
                        <InputLabel htmlFor="outlined-adornment-amount">Doanh thu năm gần nhất</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            onChange={e => setTruong10(e.target.value)}
                            startAdornment={<InputAdornment position="start">VNĐ</InputAdornment>}
                            label="Doanh thu năm gần nhất"
                        />
                    </FormControl>

                    <h5 className='LoanOne-Container-h5'>Thông tin tài sản thế chấp</h5>
                    <h6 className='LoanOne-Container-h5'>Bất động sản</h6>

                    <TextField
                        onChange={e => setTruong11(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Diện tích"
                    />

                    <h6 className='LoanOne-Container-h5'>Mục đích sử dụng</h6>
                    <TextField
                        onChange={e => setTruong12(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Đất ở"
                    />
                    <TextField
                        onChange={e => setTruong13(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Đất NN"
                    />
                    <TextField
                        onChange={e => setTruong14(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Đất khác"
                    />

                    <TextField
                        onChange={e => setTruong15(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Địa chỉ BĐS"
                    />

                    <h6 className='LoanOne-Container-h5'>Xe ô tô, xe tải, xe khác</h6>

                    <TextField
                        onChange={e => setTruong16(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Nhãn hiệu"
                    />

                    <TextField
                        onChange={e => setTruong17(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Năm sản xuất"
                    />

                    <TextField
                        onChange={e => setTruong18(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Trọng tải"
                    />

                    <h5 className='LoanOne-Container-h5'>Tình hình nộp thuế</h5>

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">Tình hình nộp thuế</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong19}
                            label="Age"
                            onChange={e => setTruong19(e.target.value)}
                        >
                            <MenuItem value={0}>Đã hoàn thành</MenuItem>
                            <MenuItem value={1}>Chưa hoàn thành</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        onChange={e => setTruong20(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        value={Truong20}
                        id="outlined-required"
                        label="Số tiền nợ thuế (Nếu không nợ bỏ qua mục này)"
                    />

                    <h5 className='LoanOne-Container-h5'>Tình hình dư nợ của doanh nghiệp hiện tại</h5>

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">Có từng phát sinh nợ xấu</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong21}
                            label="Age"
                            onChange={e => setTruong21(e.target.value)}
                        >
                            <MenuItem value={0}>Có</MenuItem>
                            <MenuItem value={1}>Không</MenuItem>
                        </Select>
                    </FormControl>

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

export default LoanFive
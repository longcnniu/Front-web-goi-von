import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { apiUrl } from '../../../contexts/constants'

const LoanThreeInbox = () => {

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

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/get-loan3/" + (window.location.href).split('/')[4], requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const data = result.data
                    setTruong1(data.TenLienHe)
                    setTruong2(data.SoDTLienHe)
                    setTruong3(data.HoVTen)
                    setTruong4(data.NamSinh)
                    setTruong5(data.CCCD)
                    setTruong6(data.NoiO)
                    setTruong7(data.TienVay)
                    setTruong8(data.ThoiGianVay)
                    setTruong9(data.MucDichVay)
                    setTruong10(data.PhuongThucTra)
                    setTruong11(data.NguonThu)
                    setTruong12(data.DienTich)
                    setTruong13(data.DatO)
                    setTruong14(data.DatNN)
                    setTruong15(data.DatKhac)
                    setTruong16(data.DiaChiBDS)
                    setTruong17(data.NhanHieuOT)
                    setTruong18(data.NamSanXuatOT)
                    setTruong19(data.TrongTaiOT)
                }
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <div className='LoanOne-Main'>
                <div className='LoanOne-Container'>
                    <h3 className='LoanOne-Container-h3'>Vay thế chấp khách hàng cá nhân</h3>
                    <h5 className='LoanOne-Container-h5'>Thông tin liên hệ</h5>
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong1(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Tên"
                        value={Truong1}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong2(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Số điện thoại"
                        value={Truong2}
                    />
                    <h5 className='LoanOne-Container-h5'>Thông tin cá nhân</h5>

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong3(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Họ và Tên"
                        value={Truong3}
                    />

                    <TextField onChange={e => setTruong4(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Năm sinh"
                        value={Truong4}
                    />

                    <TextField onChange={e => setTruong5(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Số CCCD/CMND"
                        value={Truong5}
                    />

                    <TextField onChange={e => setTruong6(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Nơi ở hiện tại"
                        value={Truong6}
                    />

                    <h5 className='LoanOne-Container-h5'>Nhu cầu vay</h5>

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel htmlFor="outlined-adornment-amount">Số Tiền vay</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            onChange={e => setTruong7(e.target.value)}
                            value={Truong7}
                            startAdornment={<InputAdornment position="start">VNĐ</InputAdornment>}
                            label="Số Tiền vay"
                        />
                    </FormControl>

                    <TextField onChange={e => setTruong8(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Thời hạng vay"
                        value={Truong8}
                    />

                    <TextField onChange={e => setTruong9(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Mục đích vay"
                        value={Truong9}
                    />

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel id="demo-simple-select-label">Phương thức trả</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong10}
                            label="PTC"
                            onChange={e => setTruong10(e.target.value)}
                        >
                            <MenuItem value={0}>Trả lãi</MenuItem>
                            <MenuItem value={1}>Trả góp</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel id="demo-simple-select-labels">Nguồn thu</InputLabel>
                        <Select
                            labelId="demo-simple-select-labels"
                            id="demo-simple-selects"
                            value={Truong11}
                            label="NT"
                            onChange={e => setTruong11(e.target.value)}
                        >
                            <MenuItem value={0}>Từ lương</MenuItem>
                            <MenuItem value={1}>Từ kinh doanh</MenuItem>
                        </Select>
                    </FormControl>

                    <h5 className='LoanOne-Container-h5'>Thông tin tài sản thế chấp</h5>
                    <h6 className='LoanOne-Container-h5'>Bất động sản</h6>

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong12(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Diện tích:"
                        value={Truong12}
                    />

                    <h6 className='LoanOne-Container-h5'>Mục đích sử dụng</h6>
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong13(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Đất ở"
                        value={Truong13}
                    />
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong14(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Đất NN"
                        value={Truong14}
                    />
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong15(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Đất khác"
                        value={Truong15}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong16(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Địa chỉ BĐS"
                        value={Truong16}
                    />

                    <h6 className='LoanOne-Container-h5'>Xe ô tô, xe tải, xe khác</h6>

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong17(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Nhãn hiệu"
                        value={Truong17}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong18(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Năm sản xuất"
                        value={Truong18}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong19(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Trọng tải"
                        value={Truong19}
                    />
                </div>
            </div>
        </>
    )
}

export default LoanThreeInbox
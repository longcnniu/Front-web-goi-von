import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { apiUrl } from '../../../contexts/constants'

const LoanOneInbox = () => {

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

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/get-loan1/" + (window.location.href).split('/')[4], requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const data = result.data
                    setTruong1(data.TenLienHe)
                    setTruong2(data.SoDTLienHe)
                    setTruong3(data.tenCty)
                    setTruong4(data.NamThanhLap)
                    setTruong5(data.MaSoThue)
                    setTruong6(data.DiaChi)
                    setTruong7(data.TienVay)
                    setTruong8(data.MucDichDA)
                    setTruong9(data.TenDA)
                    setTruong10(data.DiaChiDA)
                    setTruong11(data.TSTheChap)
                    setTruong12(data.DienTich)
                    setTruong13(data.SLBanRaDuKien)
                    setTruong14(data.TienDaDauTu)
                    setTruong15(data.DaQuyHoach)
                    setTruong16(data.DaDuocCapPhep)
                }
            })
            .catch(error => console.log('error', error));
    }, [])


    return (
        <>
            <div className='LoanOne-Main'>
                <div className='LoanOne-Container'>
                    <h3 className='LoanOne-Container-h3'>Vay th??? ch???p d??? ??n l???n</h3>
                    <h5 className='LoanOne-Container-h5'>Th??ng tin li??n h???</h5>
                    <TextField onChange={e => setTruong1(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n"
                        value={Truong1}
                    />

                    <TextField onChange={e => setTruong2(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? ??i???n tho???i"
                        value={Truong2}
                    />
                    <h5 className='LoanOne-Container-h5'>Th??ng tin c?? nh??n</h5>

                    <TextField onChange={e => setTruong3(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n c??ng ty"
                        value={Truong3}
                    />

                    <TextField onChange={e => setTruong4(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="N??m th??nh l???p c??ng ty"
                        value={Truong4}
                    />

                    <TextField onChange={e => setTruong5(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="M?? s??? thu??? c??ng ty"
                        value={Truong5}
                    />

                    <TextField onChange={e => setTruong6(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????a ch??? c??ng ty"
                        value={Truong6}
                    />

                    <h5 className='LoanOne-Container-h5'>Nhu c???u vay</h5>



                    <FormControl fullWidth disabled variant="standard">
                        <InputLabel htmlFor="outlined-adornment-amount">S??? Ti???n vay</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            onChange={e => setTruong7(e.target.value)}
                            value={Truong7}
                            startAdornment={<InputAdornment position="start">VN??</InputAdornment>}
                            label="S??? Ti???n vay"
                        />
                    </FormControl>

                    <TextField onChange={e => setTruong8(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="M???c ????ch vay"
                        value={Truong8}
                    />

                    <h5 className='LoanOne-Container-h5'>Th??ng tin t??i s???n th??? ch???p</h5>
                    <TextField onChange={e => setTruong9(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n d??? ??n"
                        value={Truong9}
                    />

                    <TextField onChange={e => setTruong10(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????a ch??? d??? ??n"
                        value={Truong10}
                    />

                    <TextField onChange={e => setTruong11(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??i s???n th??? ch???p: B??S/ T??i s???n h??nh th??nh t????ng lai"
                        value={Truong11}
                    />
                    <h5 className='LoanOne-Container-h5'>Th??ng tin t??i s???n th??? ch???p</h5>
                    <TextField onChange={e => setTruong12(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Di???n t??ch (ha)"
                        value={Truong12}
                    />
                    <TextField onChange={e => setTruong13(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? l?????ng sp b??n ra d??? ki???n"
                        value={Truong13}
                    />
                    <TextField onChange={e => setTruong14(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? ti???n c??ng ty ???? ?????u t?? v??o d??? ??n"
                        value={Truong14}
                    />

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel id="demo-simple-select-label">???? quy ho???ch 1/500</InputLabel>
                        <Select
                            disabled variant="standard"
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

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel id="demo-simple-select-label">???? ???????c c???p ph??p c???a UBND T???nh</InputLabel>
                        <Select
                            disabled variant="standard"
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

                </div>
            </div>
        </>
    )
}

export default LoanOneInbox
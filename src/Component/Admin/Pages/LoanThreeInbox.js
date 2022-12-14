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
                    <h3 className='LoanOne-Container-h3'>Vay th??? ch???p kh??ch h??ng c?? nh??n</h3>
                    <h5 className='LoanOne-Container-h5'>Th??ng tin li??n h???</h5>
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong1(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="T??n"
                        value={Truong1}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong2(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? ??i???n tho???i"
                        value={Truong2}
                    />
                    <h5 className='LoanOne-Container-h5'>Th??ng tin c?? nh??n</h5>

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong3(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="H??? v?? T??n"
                        value={Truong3}
                    />

                    <TextField onChange={e => setTruong4(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="N??m sinh"
                        value={Truong4}
                    />

                    <TextField onChange={e => setTruong5(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="S??? CCCD/CMND"
                        value={Truong5}
                    />

                    <TextField onChange={e => setTruong6(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="N??i ??? hi???n t???i"
                        value={Truong6}
                    />

                    <h5 className='LoanOne-Container-h5'>Nhu c???u vay</h5>

                    <FormControl fullWidth margin="dense" disabled variant="standard">
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
                        label="Th???i h???ng vay"
                        value={Truong8}
                    />

                    <TextField onChange={e => setTruong9(e.target.value)}
                        disabled variant="standard"
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="M???c ????ch vay"
                        value={Truong9}
                    />

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel id="demo-simple-select-label">Ph????ng th???c tr???</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Truong10}
                            label="PTC"
                            onChange={e => setTruong10(e.target.value)}
                        >
                            <MenuItem value={0}>Tr??? l??i</MenuItem>
                            <MenuItem value={1}>Tr??? g??p</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="dense" disabled variant="standard">
                        <InputLabel id="demo-simple-select-labels">Ngu???n thu</InputLabel>
                        <Select
                            labelId="demo-simple-select-labels"
                            id="demo-simple-selects"
                            value={Truong11}
                            label="NT"
                            onChange={e => setTruong11(e.target.value)}
                        >
                            <MenuItem value={0}>T??? l????ng</MenuItem>
                            <MenuItem value={1}>T??? kinh doanh</MenuItem>
                        </Select>
                    </FormControl>

                    <h5 className='LoanOne-Container-h5'>Th??ng tin t??i s???n th??? ch???p</h5>
                    <h6 className='LoanOne-Container-h5'>B???t ?????ng s???n</h6>

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong12(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Di???n t??ch:"
                        value={Truong12}
                    />

                    <h6 className='LoanOne-Container-h5'>M???c ????ch s??? d???ng</h6>
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong13(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????t ???"
                        value={Truong13}
                    />
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong14(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????t NN"
                        value={Truong14}
                    />
                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong15(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????t kh??c"
                        value={Truong15}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong16(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="?????a ch??? B??S"
                        value={Truong16}
                    />

                    <h6 className='LoanOne-Container-h5'>Xe ?? t??, xe t???i, xe kh??c</h6>

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong17(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Nh??n hi???u"
                        value={Truong17}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong18(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="N??m s???n xu???t"
                        value={Truong18}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong19(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Tr???ng t???i"
                        value={Truong19}
                    />
                </div>
            </div>
        </>
    )
}

export default LoanThreeInbox
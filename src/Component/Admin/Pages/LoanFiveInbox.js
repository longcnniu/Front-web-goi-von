import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { apiUrl } from '../../../contexts/constants'

function LoanFiveInbox() {

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

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/v1/get-loan5/" + (window.location.href).split('/')[4], requestOptions)
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
          setTruong7(data.HanMongMuon)
          setTruong8(data.MucDichVay)
          setTruong9(data.BCTaiChinhGanNhat)
          setTruong10(data.DoanhThu)
          setTruong11(data.DienTich)
          setTruong12(data.DatO)
          setTruong13(data.DatNN)
          setTruong14(data.DatKhac)
          setTruong15(data.DiaChiBDS)
          setTruong16(data.NhanHieuOT)
          setTruong17(data.NamSanXuatOT)
          setTruong18(data.TrongTaiOT)
          setTruong19(data.NghiVuThue)
          setTruong20(data.TienNoThue)
          setTruong21(data.NoXau)
        }
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <div className='LoanOne-Main'>
        <div className='LoanOne-Container'>
          <h3 className='LoanOne-Container-h3'>Vay h???n m???c doanh nghi???p v???a v?? doanh nghi???p l???n</h3>

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
            label="T??n c??ng ty"
            value={Truong3}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong4(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="N??m th??nh l???p"
            value={Truong4}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong5(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="M?? s??? thu???"
            value={Truong5}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong6(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="?????a ch??? c??ng ty"
            value={Truong6}
          />

          <h5 className='LoanOne-Container-h5'>Nhu c???u h???n m???c t???i ??a</h5>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong7(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="H???n m???c mong mu???n"
            value={Truong7}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong8(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="M???c ????ch: B??? sung v???n kinh doanh; b??? sung t??i s???n l??u ?????ng; H???n m???c"
            value={Truong8}
          />

          <h5 className='LoanOne-Container-h5'>Ngu???n thu</h5>

          <FormControl fullWidth margin="dense" disabled variant="standard">
            <InputLabel id="demo-simple-select-label">B??o c??o t??i ch??nh n??m g???n nh???t</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Truong9}
              label="Age"
              onChange={e => setTruong9(e.target.value)}
            >
              <MenuItem value={0}>L???i</MenuItem>
              <MenuItem value={1}>L???</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense" disabled variant="standard">
            <InputLabel htmlFor="outlined-adornment-amount">Doanh thu n??m g???n nh???t</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange('amount')}
              value={Truong10}
              onChange={e => setTruong10(e.target.value)}
              startAdornment={<InputAdornment position="start">VN??</InputAdornment>}
              label="Doanh thu n??m g???n nh???t"
            />
          </FormControl>

          <h5 className='LoanOne-Container-h5'>Th??ng tin t??i s???n th??? ch???p</h5>
          <h6 className='LoanOne-Container-h5'>B???t ?????ng s???n</h6>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong11(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Di???n t??ch"
            value={Truong11}
          />

          <h6 className='LoanOne-Container-h5'>M???c ????ch s??? d???ng</h6>
          <TextField
            disabled variant="standard"
            onChange={e => setTruong12(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="?????t ???"
            value={Truong12}
          />
          <TextField
            disabled variant="standard"
            onChange={e => setTruong13(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="?????t NN"
            value={Truong13}
          />
          <TextField
            disabled variant="standard"
            onChange={e => setTruong14(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="?????t kh??c"
            value={Truong14}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong15(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="?????a ch??? B??S"
            value={Truong15}
          />

          <h6 className='LoanOne-Container-h5'>Xe ?? t??, xe t???i, xe kh??c</h6>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong16(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Nh??n hi???u"
            value={Truong16}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong17(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="N??m s???n xu???t"
            value={Truong17}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong18(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Tr???ng t???i"
            value={Truong18}
          />

          <h5 className='LoanOne-Container-h5'>T??nh h??nh n???p thu???</h5>

          <FormControl fullWidth margin="dense" disabled variant="standard">
            <InputLabel id="demo-simple-select-label">T??nh h??nh n???p thu???</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Truong19}
              label="Age"
              onChange={e => setTruong19(e.target.value)}
            >
              <MenuItem value={0}>???? ho??n th??nh</MenuItem>
              <MenuItem value={1}>Ch??a ho??n th??nh</MenuItem>
            </Select>
          </FormControl>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong20(e.target.value)}
            margin="dense"
            fullWidth
            required
            value={Truong20}
            id="outlined-required"
            label="S??? ti???n n??? thu??? (N???u kh??ng n??? b??? qua m???c n??y)"
          />

          <h5 className='LoanOne-Container-h5'>T??nh h??nh d?? n??? c???a doanh nghi???p hi???n t???i</h5>

          <FormControl fullWidth margin="dense" disabled variant="standard">
            <InputLabel id="demo-simple-select-label">C?? t???ng ph??t sinh n??? x???u</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Truong21}
              label="Age"
              onChange={e => setTruong21(e.target.value)}
            >
              <MenuItem value={0}>C??</MenuItem>
              <MenuItem value={1}>Kh??ng</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  )
}

export default LoanFiveInbox
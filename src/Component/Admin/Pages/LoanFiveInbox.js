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
          <h3 className='LoanOne-Container-h3'>Vay hạn mức doanh nghiệp vừa và doanh nghiệp lớn</h3>

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
            label="Tên công ty"
            value={Truong3}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong4(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Năm thành lập"
            value={Truong4}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong5(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Mã số thuế"
            value={Truong5}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong6(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Địa chỉ công ty"
            value={Truong6}
          />

          <h5 className='LoanOne-Container-h5'>Nhu cầu hạn mức tối đa</h5>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong7(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Hạn mức mong muốn"
            value={Truong7}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong8(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Mục đích: Bổ sung vốn kinh doanh; bổ sung tài sản lưu động; Hạn mức"
            value={Truong8}
          />

          <h5 className='LoanOne-Container-h5'>Nguồn thu</h5>

          <FormControl fullWidth margin="dense" disabled variant="standard">
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

          <FormControl fullWidth margin="dense" disabled variant="standard">
            <InputLabel htmlFor="outlined-adornment-amount">Doanh thu năm gần nhất</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange('amount')}
              value={Truong10}
              onChange={e => setTruong10(e.target.value)}
              startAdornment={<InputAdornment position="start">VNĐ</InputAdornment>}
              label="Doanh thu năm gần nhất"
            />
          </FormControl>

          <h5 className='LoanOne-Container-h5'>Thông tin tài sản thế chấp</h5>
          <h6 className='LoanOne-Container-h5'>Bất động sản</h6>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong11(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Diện tích"
            value={Truong11}
          />

          <h6 className='LoanOne-Container-h5'>Mục đích sử dụng</h6>
          <TextField
            disabled variant="standard"
            onChange={e => setTruong12(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Đất ở"
            value={Truong12}
          />
          <TextField
            disabled variant="standard"
            onChange={e => setTruong13(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Đất NN"
            value={Truong13}
          />
          <TextField
            disabled variant="standard"
            onChange={e => setTruong14(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Đất khác"
            value={Truong14}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong15(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Địa chỉ BĐS"
            value={Truong15}
          />

          <h6 className='LoanOne-Container-h5'>Xe ô tô, xe tải, xe khác</h6>

          <TextField
            disabled variant="standard"
            onChange={e => setTruong16(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Nhãn hiệu"
            value={Truong16}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong17(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Năm sản xuất"
            value={Truong17}
          />

          <TextField
            disabled variant="standard"
            onChange={e => setTruong18(e.target.value)}
            margin="dense"
            fullWidth
            required
            id="outlined-required"
            label="Trọng tải"
            value={Truong18}
          />

          <h5 className='LoanOne-Container-h5'>Tình hình nộp thuế</h5>

          <FormControl fullWidth margin="dense" disabled variant="standard">
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
            disabled variant="standard"
            onChange={e => setTruong20(e.target.value)}
            margin="dense"
            fullWidth
            required
            value={Truong20}
            id="outlined-required"
            label="Số tiền nợ thuế (Nếu không nợ bỏ qua mục này)"
          />

          <h5 className='LoanOne-Container-h5'>Tình hình dư nợ của doanh nghiệp hiện tại</h5>

          <FormControl fullWidth margin="dense" disabled variant="standard">
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
        </div>
      </div>
    </>
  )
}

export default LoanFiveInbox
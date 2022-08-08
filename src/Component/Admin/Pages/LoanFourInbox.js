import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';

import { apiUrl } from '../../../contexts/constants'

function LoanFourInbox() {

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

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/get-loan4/" + (window.location.href).split('/')[4], requestOptions)
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
                    setTruong7(data.LinhVucHoatDong)
                    setTruong8(data.LyDoTaiCauTruc)
                    setTruong9(data.HoTro)
                    setTruong10(data.UuDiem)
                }
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <div className='LoanOne-Main'>
                <div className='LoanOne-Container'>
                    <h3 className='LoanOne-Container-h3'>Tái cấu trúc doanh nghiệp</h3>

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
                        label="Năm thành lập công ty"
                        value={Truong4}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong5(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Mã số thuế công ty"
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

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong7(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Lĩnh vực hoạt động hiện tại"
                        value={Truong7}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong8(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Lý do tái cấu trúc (tóm tắt ngắn gọn lý do)"
                        value={Truong8}
                    />

                    <TextField
                        disabled variant="standard"
                        onChange={e => setTruong9(e.target.value)}
                        margin="dense"
                        fullWidth
                        required
                        id="outlined-required"
                        label="Nếu có sự hỗ trợ DN cần hỗ trợ về phương diện nào"
                        value={Truong9}
                    />

                    <h5 className='LoanOne-Container-h5'>DN nêu ra các ưu điểm của mình về hướng phát triển tương lai nếu được
                        hỗ trợ: (Trình bày sơ lượt)…</h5>

                    <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={e => setTruong10(e.target.value)} value={Truong10} disabled variant="standard"></textarea>
                </div>
            </div>
        </>
    )
}

export default LoanFourInbox
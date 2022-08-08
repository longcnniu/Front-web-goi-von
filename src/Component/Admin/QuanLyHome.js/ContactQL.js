import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../../contexts/constants';
import '../Table/Table.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify'

function ContactQL() {

    const [data, setdata] = useState([])
    const [Id, setId] = useState('')
    const [first, setfirst] = useState('')
    const [Change, setChange] = useState(false)

    const [DataSec, setDataSec] = useState('');

    const handleChange = (event) => {
        setDataSec(event.target.value);
    };

    //================
    const successNof = (data) => {
        toast.success(data, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const errorNof = (data) => {
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
    //================

    //cap nhat
    const clickUpdata = () => {
        if (DataSec === '') {
            errorNof('Trọn trường cập nhật')
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append(DataSec, first);

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(apiUrl + `/v1/contact-${DataSec}/` + Id, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        setChange(!Change)
                        successNof(result.message)
                        //
                        setfirst('')
                        setDataSec('')
                    } else {
                        errorNof(result.message)
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    //lay du lieu 
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/Contact/", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setId(result.message[0]._id)
                    setdata(result.message)
                }

            })
            .catch(error => console.log('error', error));
    }, [Change])

    const Contact = data.map(data => (
        <tr key={data._id}>
            <td> {data.Phone}</td>
            <td> {data.Email}</td>
            <td>{data.DiaChi}</td>
        </tr>
    ))

    return (
        <>
            <ToastContainer />
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Trường muốn cập nhật</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={DataSec}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Phone'}>Phone</MenuItem>
                        <MenuItem value={'Email'}>Email</MenuItem>
                        <MenuItem value={'DiaChi'}>Địa chỉ</MenuItem>
                        <MenuItem value={'Url'}>URL địa chỉ</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="outlined-basic" label="Nội dung" variant="outlined" size="small" fullWidth onChange={e => setfirst(e.target.value)} value={first} margin="dense" />
                <div>
                    <Button variant="contained" size="large" onClick={clickUpdata}>Cập nhật</Button >
                </div>
            </div>

            <table className="content-table" >
                <thead>
                    <tr>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {Contact}
                </tbody>
            </table>
        </>
    )
}

export default ContactQL
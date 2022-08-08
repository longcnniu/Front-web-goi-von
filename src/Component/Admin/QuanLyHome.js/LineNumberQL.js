import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import { apiUrl } from '../../../contexts/constants';

const LineNumberQL = () => {

    const [data, setdata] = useState([])
    const [first, setfirst] = useState('')
    const [first1, setfirst1] = useState('')
    const [Change, setChange] = useState(false)

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

    //lay du lieu
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/linenumber/", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setdata(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }, [Change])


    //dang
    const clickAdd = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("Number", first);
        urlencoded.append("TD", first1);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/linenumber/", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setChange(!Change)
                    successNof(result.message)
                    setfirst('')
                    setfirst1('')
                } else {
                    errorNof(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    //xoa
    const clickDel = (data) => {
        return (event) => {
            var urlencoded = new URLSearchParams();

            var requestOptions = {
                method: 'DELETE',
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(apiUrl + "/v1/linenumber/" + data._id, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        setChange(!Change)
                        successNof(result.message)
                    } else {
                        errorNof(result.message)
                    }
                })
                .catch(error => console.log('error', error));
        }
    }


    const listTable = data.map(data => (
        <tr key={data._id}>
            <td> {data.Number}</td>
            <td>
                {data.TD}
            </td>
            <td>
                <IconButton aria-label="delete" size="large" onClick={clickDel(data)} color='error'>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    ))

    return (
        <>
            <ToastContainer />
            <TextField id="outlined-basic" label="Số" variant="outlined" size="small" fullWidth onChange={e => setfirst(e.target.value)} value={first} margin="dense" />
            <TextField id="outlined-basic" label="Tiêu đề" variant="outlined" size="small" fullWidth onChange={e => setfirst1(e.target.value)} value={first1} margin="dense" />
            <div>
                <Button variant="contained" size="large" onClick={clickAdd}>Thêm</Button >
            </div>
            <table className="content-table" >
                <thead>
                    <tr>
                        <th>Số</th>
                        <th>Nội dung</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    {listTable}
                </tbody>
            </table>
        </>
    )
}

export default LineNumberQL
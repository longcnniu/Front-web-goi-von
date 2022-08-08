import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';

import { apiUrl } from '../../../contexts/constants';

const CarouselsQL = () => {

    const [first, setfirst] = useState('')
    const [data, setdata] = useState([])
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

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/carousels", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setdata(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }, [Change])

    const clickDel = (data) => {
        return (event) => {
            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };

            fetch(apiUrl + "/v1/carousels/" + data._id, requestOptions)
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

    const clickAdd = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("url", first);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/carousels", requestOptions)
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

    const listTable = data.map(data => (
        <tr key={data._id}>
            <td> <img src={data.url} alt=''></img></td>
            <td>
                {data.url}
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
            <TextField id="outlined-basic" label="link Anh" variant="outlined" size="small" fullWidth onChange={e => setfirst(e.target.value)} value={first} />
            <Button variant="contained" size="large" onClick={clickAdd}>Thêm Ảnh</Button>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Ảnh</th>
                        <th>URL Ảnh</th>
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

export default CarouselsQL
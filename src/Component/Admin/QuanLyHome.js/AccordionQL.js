import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import { apiUrl } from '../../../contexts/constants';

const AccordionQL = () => {

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

        fetch(apiUrl + "/v1/accordions/", requestOptions)
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
        urlencoded.append("TD", first);
        urlencoded.append("ND", first1);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/accordions/", requestOptions)
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

    //xoa
    const clickDel = (data) => {
        return (event) => {
            var urlencoded = new URLSearchParams();

            var requestOptions = {
                method: 'DELETE',
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(apiUrl + "/v1/accordions/" + data._id, requestOptions)
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
            <td> {data.TD}</td>
            <td>
                {data.ND}
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
            <TextField id="outlined-basic" label="Tiêu đề" variant="outlined" size="small" fullWidth onChange={e => setfirst(e.target.value)} value={first} margin="dense" />
            <textarea id="w3review" name="w3review" rows="10" cols="150" onChange={e => setfirst1(e.target.value)} margin="dense" value={first1}></textarea>
            <div>
                <Button variant="contained" size="large" onClick={clickAdd}>Thêm</Button >
            </div>
            <table className="content-table" >
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
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

export default AccordionQL
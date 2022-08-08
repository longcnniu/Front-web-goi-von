import React, { useEffect, useState } from 'react'
import './Table.css'
import { apiUrl } from '../../../contexts/constants.js';
//
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ToastContainer, toast } from 'react-toastify';

const TableFour = () => {

    const [dataTable, setdataTable] = useState([])
    const [ChangeTable, setChangeTable] = useState(false)

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/get-loan4", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setdataTable(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }, [ChangeTable])

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

    const Seen = (data) => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/seen-loan4/" + data._id, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setChangeTable(!ChangeTable)
                }
            })
            .catch(error => console.log('error', error));
    }

    const clickNextPage = (data) => {
        return (event) => {
            // navigate('/loan1-inbox/' + data._id)
            window.open((window.location.href).split('/')[0] + '//' + (window.location.href).split('/')[2] + "/loan4-inbox/" + data._id);
            Seen(data)
        }
    }

    const clickDel = (data) => {
        return (event) => {
            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };

            fetch(apiUrl + "/v1/del-loan4/" + data._id, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        successNof(result.message)
                        setChangeTable(!ChangeTable)
                    } else {
                        errorNof(result.message)
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    const listTable = dataTable.map(data => (
        <tr key={data._id}>
            <td>{data.TieuDe}</td>
            <td>{data.TenLienHe}</td>
            <td>{new Date(data.createdAt).toLocaleString()}</td>
            <td>{data.TrangThai ? 'Đã Xem' : 'Chưa Xem'}</td>
            <td>
                <Tooltip title="Delete" onClick={clickDel(data)} color="error">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </td>
            <td>
                <Tooltip title="Next" onClick={clickNextPage(data)} color="primary">
                    <IconButton>
                        <ArrowForwardIcon />
                    </IconButton>
                </Tooltip>
            </td>
        </tr>
    ))

    return (
        <>
            <ToastContainer />
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Tên người gửi</th>
                        <th>Ngày nhận</th>
                        <th>Trạng thái</th>
                        <th>...</th>
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

export default TableFour
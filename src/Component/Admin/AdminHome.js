import React, { useEffect } from 'react'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import TabPanel from './TabPanel'
import Inbox from './VerticalEmail';
import CarouselsQL from './QuanLyHome.js/CarouselsQL';
import AccordionQL from './QuanLyHome.js/AccordionQL';
import ContactQL from './QuanLyHome.js/ContactQL';
import { apiUrl } from '../../contexts/constants';
import { useNavigate } from "react-router-dom";
import LineNumberQL from './QuanLyHome.js/LineNumberQL';


const AdminHome = () => {
    let navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    //kiem tra auth
    useEffect(() => {
        const checklogin = () => {
            //kiểm tra có cookie nào tồn tại hay không
            if (document.cookie.split(';').some((item) => item.trim().startsWith('accessToken='))) {
                //đoc cookie
                const cookieValue = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('accessToken='))
                    .split('=')[1];
                //Gửi req token lên server xác thực
                var myHeaders = new Headers();
                myHeaders.append("token", cookieValue);

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                return fetch(apiUrl + `/v1/login`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            navigate('/admin')
                        } else {
                            navigate('/login')
                        }
                    })
                    .catch(error => console.log('error', error));
            } else {
                navigate('/login')
            }
        }
        checklogin()
    }, [navigate])

    //===========

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Hình Ảnh" {...a11yProps(0)} />
                    <Tab label="Line Số" {...a11yProps(1)} />
                    <Tab label="Giải Đáp" {...a11yProps(2)} />
                    <Tab label="Liên Hệ" {...a11yProps(3)} />
                    <Tab label="Hộp thư" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CarouselsQL />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LineNumberQL/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AccordionQL />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ContactQL />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Inbox />
            </TabPanel>
        </Box>
    );
}

export default AdminHome
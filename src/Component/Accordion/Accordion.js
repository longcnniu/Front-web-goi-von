import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css'

import { apiUrl } from '../../contexts/constants'
import Skeleton from '@mui/material/Skeleton';

function Accordions() {

    const [Loading, setLoading] = useState(true)
    const [data, setdata] = useState([])

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
                    setLoading(false)
                }
            })
            .catch(error => console.log('error', error));
    }, [])

    const Accordions = data.map(data => (
        <Accordion.Item eventKey={data._id} key={data._id}>
            <Accordion.Header>{data.TD}</Accordion.Header>
            <Accordion.Body>
                {data.ND}
            </Accordion.Body>
        </Accordion.Item>
    ))

    let body
    if (Loading === false) {
        body = (
            <div className='Accordion-main' data-aos="fade-up">
                <Accordion>
                    {Accordions}
                </Accordion>
            </div>
        )
    } else {
        body = (
            <Skeleton variant="rectangular" width={'100%'} height={300} />
        )
    }

    return (
        body
    )
}

export default Accordions
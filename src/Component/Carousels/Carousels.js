import React, { useState, useEffect, memo } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { apiUrl } from '../../contexts/constants';
import Skeleton from '@mui/material/Skeleton';


const Carousels = () => {
    const [Loading, setLoading] = useState(true)
    const [index, setIndex] = useState(0);
    const [data, setdata] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/carousels", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result.message);
                if (result.success) {
                    setdata(result.message)
                    setLoading(true)
                }
            })
            .catch(error => console.log('error', error));
    }, [])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const Carousels = data.map(data => (
        <Carousel.Item key={data._id}>
            <img
                className="d-block w-100"
                src={`${data.url}`}
                alt="First slide"
            />
        </Carousel.Item>
    ))

    let body
    if (Loading === false) {
        body = (
            <>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {Carousels}
                </Carousel>
            </>
        )
    } else {
        body = (
            <Skeleton variant="rounded" width={'100%'} height={300} />
        )
    }

    return (body)
}

export default memo(Carousels)
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { apiUrl } from '../../contexts/constants';


const Carousels = () => {
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

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {Carousels}
            </Carousel>

        </>
    )
}

export default Carousels
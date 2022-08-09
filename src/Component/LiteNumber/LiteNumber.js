import React, { useEffect, useState } from 'react'
import AnimatedNumber from "animated-number-react";
import { apiUrl } from '../../contexts/constants'
import Skeleton from '@mui/material/Skeleton';

const LiteNumber = () => {
    const [Loading, setLoading] = useState(true)
    const [data, setdata] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(apiUrl + "/v1/linenumber", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setdata(result.message)
                    setLoading(false)
                }
            })
            .catch(error => console.log('error', error));
    }, [])

    const list = data.map(data => (
        <div className='LiteNumber-item' key={data._id}>
            <div>
                <AnimatedNumber
                    value={data.Number}
                    duration={5000}
                    formatValue={(n) => n.toFixed(0)}
                    frameStyle={(percentage) =>
                        percentage > 20 && percentage < 80 ? { opacity: 0.1 } : {}
                    }
                />
                <span className='LiteNumber-item-spa'>+</span>
            </div>
            <div>{data.TD}</div>
        </div>
    ))

    let body
    if (Loading === false) {
        body = (
            <div className='LiteNumber'>
                {list}
            </div>
        )
    } else {
        body = (
            <Skeleton variant="rectangular" width={'100%'} height={200} />
        )
    }

    return (body)
}

export default LiteNumber
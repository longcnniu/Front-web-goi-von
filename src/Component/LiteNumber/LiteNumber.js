import React, { useEffect, useState } from 'react'
import AnimatedNumber from "animated-number-react";
import { apiUrl } from '../../contexts/constants'

const LiteNumber = () => {

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

    return (
        <div className='LiteNumber'>
            {list}
        </div>
    )
}

export default LiteNumber
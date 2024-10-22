import React from 'react'
import prevIco from '../../assets/images/prev-ico.png'
const GoBackHistory = ({ title }) => {
    return (

        <h3
            className="fs-2 text-center fw-extrabold d-flex align-items-center justify-content-start gap-lg-5 gap-2">
            <img src={prevIco} className='goBackHistory' alt="" onClick={() => history.back()} />
            {title}
        </h3>
    )
}

export default GoBackHistory

import React from 'react'
import './bottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons'



const Bottom = () => {
    return (
        <div className="container">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faHome} />
            <FontAwesomeIcon icon={faPhone} />
            <h3>Made by WDES</h3>
        </div>
    )
}

export default Bottom;

import React from 'react'
import './bottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons'



const Bottom = () => {
    return (
        <div className="container">
            
            <div>
                <a href="https://www.instagram.com/wdes798/">
                    <FontAwesomeIcon icon={faInstagram} className="insta"/>
                </a>
            </div>
            <div>
                <a href='https://l.instagram.com/?u=https%3A%2F%2Fref1821.github.io%2Fwdes798%2F&e=ATMcTHv0yeAhBuAirJfn4H-9xEtbGWAPaL2tz9q2asCXq7JIoCXbh0qNKmQu4nlvhln0-KMYdlmaH9YbZTrvItA&s=1'>
                    <FontAwesomeIcon icon={faHome} className="home"/>
                </a>
            </div>
            <div>
                <a>
                    <FontAwesomeIcon icon={faPhone} className="contact"/>
                </a>
            </div>
            <h3 className='h'>Made by WDES</h3>
        </div>
    )
}

export default Bottom;

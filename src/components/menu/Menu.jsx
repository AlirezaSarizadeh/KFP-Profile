import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import recentIco from '../../assets/images/recent-ico.png'
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <Dropdown className='mt-3 menu-dropdown'>
            <Dropdown.Toggle variant="transparent" className='primaryColor gap-2 d-flex align-items-center menu-dropdown px-0' id="dropdown-basic">
                Menu
                <img src={recentIco} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as={Link} to={'/dentists/documents'}>Documnets</Dropdown.Item>
                <Dropdown.Item as={Link} to={'/dentists/photos'}>Photos</Dropdown.Item>
                <Dropdown.Item as={Link} to={'/dentists/videos'}>Videos</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Menu

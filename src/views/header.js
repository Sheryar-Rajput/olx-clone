import React from 'react'
import './header.css'
import logo from '../images/newLogo.png'
import { Button } from 'bootstrap'
import sell from '../images/Capture.PNG'
import search from '../images/search.svg'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import avatar1 from '../images/avatar1.png'
function Header() {
    const navigate = useNavigate()
    return (
        <div className='flex-container'  >

            <div className='right' >
                <img src={logo} className="logo" />
                <div className='nav-searchbox '  >
                    <input placeholder='Find car,mobile and more' className='nav-input' />
                    <img src={search} className="nav-search" />
                </div>

            </div>
            <div className='left'  >

               
                <button className='btn-nav' onClick={()=>{navigate('/Signup')}}  >
                    logout
                </button>
                <button className='btn-nav'  >
                <Avatar src={avatar1} />

                </button>
                <button className='btn-nav' onClick={()=>{navigate('/Sell')}}  >
                    <img src={sell} />
                </button>

            </div>






        </div>
    )
}

export default Header
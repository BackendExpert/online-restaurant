import React from 'react'
import { Outlet } from 'react-router-dom'

const WebSite = () => {
    return (
        <div className=''>
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default WebSite
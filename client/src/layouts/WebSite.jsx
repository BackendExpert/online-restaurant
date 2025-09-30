import React from 'react'
import { Outlet } from 'react-router-dom'
import WebNav from '../component/Nav/WebNav'
import MainFooter from '../component/Footers/MainFooter'

const WebSite = () => {
    return (
        <div className="relative">
            {/* Navigation stays on top */}
            <div className="fixed top-0 left-0 w-full z-50">
                <WebNav />
            </div>

            {/* Page content */}
            <div className="relative z-0">
                <Outlet />
            </div>

            <div className="">
                <MainFooter />
            </div>
        </div>
    )
}

export default WebSite

import React from 'react'
import "./Users.css"
import Profiles from './Profiles'
function Users() {
    return (
        <div className='user_container'>

            <div class="custom-shape-divider-bottom-1684356286">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>

            <div className='head_tag'>Join 100,000+ happy premium users</div>

            <div className="user_info">
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
                <Profiles />
            </div>

        </div>
    )
}

export default Users

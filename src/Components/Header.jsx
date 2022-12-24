import React from 'react'
import AccountIcon from './AccountIcon.jsx'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            LOGO
        </div>
        <div className="user-logo">
            <AccountIcon/>
        </div>
    </div>
  )
}

export default Header
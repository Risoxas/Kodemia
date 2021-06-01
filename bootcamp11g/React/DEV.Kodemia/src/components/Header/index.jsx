import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

import HeaderLogin from './HeaderLogin';
import HeaderRegister from './HeaderRegister';

import './index.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="header d-flex justify-content-between shadow-sm">
                <div className="logo-search d-flex justify-content-center align-items-center">
                    <HeaderLogo />
                    <HeaderSearch />
                </div>

                <div className="auth d-flex justify-content-center align-items-center">
                    <HeaderLogin />
                    <HeaderRegister />
                </div>
            </nav>
        )
    }
}

export default Header

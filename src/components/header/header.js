import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className = "header">
                <Link to = "/"><div className = "header__logo">Logo</div></Link>
                <div className = "header__links">
                    <div className = "header__link">
                        {/* <a href = "http://google.com">Google</a> */}
                        <Link to = "/register">Register</Link>
                    </div>
                    <div className = "header__link">
                        {/* <a href = "http://google.com">Google</a> */}
                        <Link to = "/login">Login</Link>
                    </div>
                    <div className = "header__link">
                        {/* <a href = "http://google.com">Google</a> */}
                        <Link to = "/about">About</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
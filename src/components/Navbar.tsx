import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                MyBlog
            </Link>
            <div className="navbar-links">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Trang chủ
                </NavLink>
                <Link to="/create" className="btn btn-primary">
                    Viết bài mới
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
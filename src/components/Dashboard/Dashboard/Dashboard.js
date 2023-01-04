import React from 'react';
import './Dashboard.css';
// import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { GrMenu } from 'react-icons/gr';
import { Outlet } from 'react-router-dom';
import Search from '../../Snippets/Search/Search';

const Dashboard = ({ setIsSideMenuOpenFunction, isSideMenuOpen }) => {
    const itemSearch = (value) => {
        console.log(value);
    };

    return (
        <div className={!isSideMenuOpen ? 'side-menu-open dashboard' : 'dashboard'}>
            <div className="dash-header">
                <div className="menu-icon">
                    <span>
                        <GrMenu onClick={setIsSideMenuOpenFunction} />
                    </span>
                </div>
                <Search itemSearch={itemSearch} placeholder="Search.." />
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;

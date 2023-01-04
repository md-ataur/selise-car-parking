import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

    const setIsSideMenuOpenFunction = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return (
        <>
            <Sidebar isSideMenuOpen={isSideMenuOpen} />
            <Dashboard
                setIsSideMenuOpenFunction={setIsSideMenuOpenFunction}
                isSideMenuOpen={isSideMenuOpen}
            />
        </>
    );
};

export default Layout;

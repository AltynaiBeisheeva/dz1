import React from 'react';
import Menu from "../Menu.jsx";

const Layout = ({ children }) => {
    return (
        <div>
            <Menu />
            <div style={{ marginLeft: '200px', padding: '20px' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;

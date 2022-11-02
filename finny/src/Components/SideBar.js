import React from 'react';
import "./Sidebar.css"

function SideBar({isMobile}) {
    return (
        <>
            <div className={isMobile ? 'sidebar-holder-mobile' : 'sidebar-holder'}>
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;
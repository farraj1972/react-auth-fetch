import React from 'react';
import BootstrapNavBar from '../../components/BootstrapNavBar';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';

const DefaultLayout = (props) => {
    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <BootstrapNavBar />
                <div className="body flex-grow-1 px-3">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
import React from 'react';
import NavBar from '../../components/NavBar';

const DefaultLayout = (props) => {
    return (
        <>
            <NavBar />
            <main >
                {props.children}
            </main>
        </>
    );
};

export default DefaultLayout;
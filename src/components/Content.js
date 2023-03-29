import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from '../routes'

const Content = () => {
    return (
        <div className='container container-lg'>
            <Suspense>
                <Routes>
                    {
                        routes.map((route, idx) => {
                            return (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        })
                    }
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />                    
                </Routes>
            </Suspense>
        </div>
    );
};

export default Content;
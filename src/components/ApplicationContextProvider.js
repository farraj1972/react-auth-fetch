import React, { createContext } from 'react';

export let applicationContext = createContext({});

const ApplicationContextProvider = ({initialContext, children}) => {
    return (
        <applicationContext.Provider value={initialContext}>
            {children}
        </applicationContext.Provider>
    );
};

export default ApplicationContextProvider;
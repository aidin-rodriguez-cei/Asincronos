import React, { createContext, useState } from 'react';

export const IngresoContext = createContext();

export const IngresoProvider = ({ children }) => {
    const [ingreso, setIngreso] = useState(null);

    const login = (usuario) => {
        setIngreso(usuario);
    };

    const logout = () => {
        setIngreso(null);
    };

    return (
        <IngresoContext.Provider value={{ ingreso, login, logout }}>
            {children}
        </IngresoContext.Provider>
    );
};

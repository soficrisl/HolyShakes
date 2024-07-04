// PageContext.js falta implemtar cuando se haga pull
import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePage = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('');

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
};
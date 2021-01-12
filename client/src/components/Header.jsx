import React from 'react';
import Logo from '@material-ui/icons/WbIncandescentOutlined';

export const Header = () => (
    <header >
        <h1 className="container">
            <Logo fontSize="large" className="logo" />
            <a href="/" className="brand">Keeper</a>
        </h1>
    </header>
);

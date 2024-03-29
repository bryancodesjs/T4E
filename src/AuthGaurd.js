import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../src/context/AuthContext';

export default function AuthGuard(props) {
    const { children } = props
    const auth = useContext(AuthContext);
    if (!auth.userLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <>
            {children}
        </>
    )
}
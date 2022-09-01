import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }: any) {
    const curentName = true;

    return curentName ? children : <Navigate to="/" />;
}

export default PublicRoute;

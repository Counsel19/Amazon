import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export function ProtectedRoute({ children, user, redirectPath,  ...rest}) {
    return(
        user? <Outlet {...rest}>{children}</Outlet> : <Navigate to={redirectPath} replace />
    )
}
import React from "react";
import routes from "../config/routes";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const userToParse = localStorage.getItem('User');
    const token = localStorage.getItem('Token');

    const user = userToParse ? JSON.parse(userToParse) : userToParse;

    return (
        <>
            {
                user && token ? children : <Navigate to={routes.auth.login} />
            }
        </>
    )
}

export default AdminRoute;

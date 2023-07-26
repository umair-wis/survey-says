import React from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
        <Header />
        {children}
        <Footer/>
        </>
    )
}

export default Layout;

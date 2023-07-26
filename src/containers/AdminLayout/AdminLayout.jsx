import React, { Children } from "react";
import AdminHeader from "./AdminHeader/AdminHeader";
import Sidebar from "./Sidebar/Sidebar";
import "./AdminLayout.scss";

const AdminLayout = ({ children }) => {
  return (
    <>
      <section id="admin_layout">
        <Sidebar />
        <div className="content">
          <AdminHeader />
          <div>{children}</div>
        </div>
      </section>
    </>
  );
};

export default AdminLayout;

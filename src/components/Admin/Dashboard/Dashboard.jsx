import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import axios from "axios";
import Pagination from "../../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { formDataList } from "../../../redux/slice/AdminSlice";
import { DotLoader } from "react-spinners";
import { Navigate } from "react-router-dom";
import routes from "../../../config/routes";

const Dashboard = () => {

  const userToParse = localStorage.getItem('User');
  const user = JSON.parse(userToParse);

  const token = localStorage.getItem('Token');

  const pageSize = 12;
  const pageNumber = 1;

  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch(formDataList({ pageSize, pageNumber, config }))
  }, [])

  const formList = useSelector((state) => state?.AdminSlice?.formData);

  const loader = useSelector((state) => state?.AdminSlice?.loader);

  const handleViewForm = (item) => {
    localStorage?.setItem('Form-id', item?._id);
    setRedirect(true);
  }

  if(!user || !token) {
    return <Navigate to={routes.auth.login} />
  }
  
  if(redirect) {
    return <Navigate to={routes.admin.viewForm}/>
  }

  return (
    <>
      {
        loader ?
          <div className="loaderWrapper">
            <DotLoader className="login-clip-loader" color={"#1686FC"} />
            <h1
              style={{
                color: "#1686FC",
                fontSize: "2.4rem",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Getting Form Data...
            </h1>
          </div>
          :
          <section id="dashboard">
            <h2>Form Data</h2>
            <div className="inner">
              {
                formList?.data?.map((item, index) => {
                  return (
                    <div className="dash_card" onClick={() => handleViewForm(item)}>
                      <h6>Form Number: {item?.orderNumber}</h6>
                      <h6>Status: {item?.status?.toUpperCase()}</h6>
                      <h6>Paid: {item?.paid === true ? 'Yes' : 'No'}</h6>
                      <p>Gender: {item?.gender}</p>
                    </div>
                  )
                })
              }
            </div>
            <Pagination itemsPerPage={pageSize} />
          </section>
      }
    </>
  );
};

export default Dashboard;

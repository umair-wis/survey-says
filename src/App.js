import React from "react";
import routes from "./config/routes";

import ColorGuidance from "./components/ColorGuidance/ColorGuidance";
import Images from "./components/Images/Images";
import Question1 from "./components/Question1/Question1";
import Question2 from "./components/Question2/Question2";
import Question3 from "./components/Question3/Question3";
import Text from "./components/Text/Text";
import ThankYou from "./components/ThankYou/ThankYou";
import Welcome from "./components/Welcome/Welcome";
import "./styles/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadImages from "./components/UploadImages/UploadImages";
import UploadedImages from "./components/UploadedImages/UploadedImages";
import ImagesState1V4 from "./components/ImagesState1V4/ImagesState1V4";
import ImagesState2V4 from "./components/ImagesState2V4/ImagesState2V4";
import ImagesState1V5 from "./components/ImagesState1V5/ImagesState1V5";
import ImagesState2V5 from "./components/ImagesState2V5/ImagesState2V5";
import ImagesState1V6 from "./components/ImagesState1V6/ImagesState1V6";
import ImagesState2V6 from "./components/ImagesState2V6/ImagesState2V6";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import StripePayment from "./components/StripePayment/StripePayment";
import AdminLayout from "./containers/AdminLayout/AdminLayout";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Login from "./components/Authentication/Login/Login";
import AdminRoute from "./privateRoutes/AdminRoute";
import ViewForm from "./components/Admin/ViewForms/ViewForm";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51JvxlaBMvxbiTv5A8gKB7QvEuAnX8V1DOexcJDJhWd8t5x0JQYza0v5C322UO2se1oiO0G9vj7JyhHDe7bBoPti600OeQBAGlZ"
  );

  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51JvxlaBMvxbiTv5AI8qId0VAxYyE3ixjcZWJMtUx5DTWsjbeZnSWM3KMAspLVxFqGMFUr0ctaBUHvjDuaiMI2eWm00gVrq8SID",
  };
  // const clientSecret = ''

  return (
    <>
        <Routes>
          {/* <Route path={routes.form.colorGuidance} element={<ColorGuidance />} /> */}
          <Route exact path={routes.home} element={<Welcome />} />
          <Route path={routes.form.question1} element={<Question1 />} />
          <Route path={routes.form.question2} element={<Question2 />} />
          <Route path={routes.form.question3} element={<Question3 />} />
          <Route path={routes.form.images} element={<Images />} />
          <Route path={routes.form.text} element={<Text />} />
          <Route path={routes.form.thankYou} element={<ThankYou />} />
          <Route path={routes.form.uploadImage} element={<UploadImages />} />
          <Route
            path={routes.form.uploadedImages}
            element={<UploadedImages />}
          />
          <Route path="/state1-v4" element={<ImagesState1V4 />}></Route>
          <Route path="/state2-v4" element={<ImagesState2V4 />}></Route>
          <Route path="/state1-v5" element={<ImagesState1V5 />}></Route>
          <Route path="/state2-v5" element={<ImagesState2V5 />}></Route>
          <Route path={routes.form.imagesControl}element={<ImagesState1V6 />}></Route>
          <Route path="/state2-v6" element={<ImagesState2V6 />}></Route>
          <Route
            path="/stripe"
            element={
              <Elements stripe={stripePromise}>
                <StripePayment />
              </Elements>
            }
          ></Route>
          <Route
            path={routes.admin.dashboard}
            element={
              <AdminRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </AdminRoute>
            }
          />
          <Route
            path={routes.admin.viewForm}
            element={
              <AdminRoute>
                <AdminLayout>
                  <ViewForm />
                </AdminLayout>
              </AdminRoute>
            }
          />
          <Route path={routes.auth.login} element={<Login />} />
        </Routes>
    </>
  );
}

export default App;

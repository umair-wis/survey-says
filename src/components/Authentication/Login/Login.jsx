import React, { useEffect, useState } from "react";
import { TextField } from "../../common/TextField";
import { Button } from "../../common/Button";
import logo from "../../../assets/images/logo.svg";
import { BiHide } from "react-icons/bi"
import "./login.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";
import routes from "../../../config/routes";
import { SyncLoader } from "react-spinners";

const Login = () => {

    useEffect(() => {
        localStorage.clear();
    }, [])

    const [user, setUser] = useState('')
    const [password, setPassword] = useState(localStorage.getItem("Token") || '')
    const [username, setUsername] = useState(localStorage.getItem('User') || null);
    const [token, setToken] = useState('');
    const [loader, setLoader] = useState(false);

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Enter your username.");
        }
        else if (!password) {
            toast.error('Enter your password.');
        }
        else {
            setLoader(true);
            const payload = {
                user: user,
                password: password
            }

            axios.post('https://api-form.surveysays.xyz/Admin/login', payload)
                .then((response) => {
                    setUsername(response?.data?.data?.user);
                    localStorage.setItem('User', JSON.stringify(response?.data?.data?.user));
                    setToken(response?.data?.data?.accessToken);
                    localStorage.setItem('Token', response?.data?.data?.accessToken);
                    setLoader(false);
                })
                .catch((err) => {
                    setLoader(false);
                    console.log({ err })
                })
        }
    }

    if (username && token) {
        return <Navigate to={routes.admin.dashboard} />
    }

    return (
        <>
            <section id="login-wrapper">
                <div className="logo"><img className="logo-img" src={logo} alt="logo" /></div>
                <div className="row login">
                    <div className="col-md-12 form">
                        <h2>Login</h2>
                        <TextField value={user} onChange={(e) => setUser(e.target.value)} placeholder="User" className="login-input" />
                        <div className="input_blk">
                            <i
                                // className='icon_blk fa fa-eye'
                                className={`icon_blk fa ${passwordVisibility ? "fa-eye" : "fa-eye-slash "
                                    }`}
                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                            />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login-input" type={passwordVisibility ? "text" : "password"} />
                        </div>

                        <Button className='login-button' onClick={handleLogin}>{loader ? <SyncLoader className="loader-login" color="black" size={9}/> : 'Login'}</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

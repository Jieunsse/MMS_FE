import fireImg from '../../assets/fire.png';
import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.currentTarget.value);
    };

    const handleSignIn = () => {
        event.preventDefault();
        axios.post('http://localhost:8080/member/login', { email, password }, {
            headers: {
                'Content-Type': "application/json",
            }
        })
            .then(res => {
                if(res.status === 200) {
                    console.log(res.status);
                    alert('로그인 성공');
                    navigate('/main');
                } else {
                    console.log(res.data);
                    alert('로그인 실패');
                }
            })
            .catch(err => {
                console.log(err);
                alert('로그인 실패');
                throw new Error(err);
            });
    }

    return (
        <section className="bg-gray-50 flex min-h-screen items-center justify-center ">
            <div className="bg-gray-100 flex flex-col sm:flex-row max-w-3xl items-center rounded-2xl p-5 shadow-lg">
                <div className="px-8 sm:w-1/2">
                    <h2 className="text-center text-2xl font-bold">Logo</h2>
                    <form className="flex flex-col gap-4" action="/member/login" method="post">
                        <input
                            type="text"
                            placeholder="email"
                            name="email"
                            className="mt-8 rounded-xl border p-2"
                            autoComplete="off"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="w-full rounded-xl border p-2"
                                autoComplete="off"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <button className="text-white rounded-xl bg-[#1876FB] py-2" onClick={handleSignIn}>
                            Login
                        </button>
                    </form>
                    <div className="text-gray-400 mt-10 grid grid-cols-3 items-center">
                        <hr className="border-gray-500" />
                        <p className="text-center">OR</p>
                        <hr className="border-gray-500" />
                    </div>
                    <button className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#dedede] py-2 text-sm">
                        Login With Google
                    </button>
                    <p className="border-gray-400 mt-5 border-b py-6 text-xs">
                        Forgot your password?
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                        <p>Do not have account yet?</p>
                        <button className="px5 mt-2 rounded-xl bg-[#dedede] px-2 py-2">
                            Register
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:block">
                    <img src={fireImg} alt="turtle" className="rounded-2xl mx-auto my-8 sm:my-0"/>
                </div>
            </div>
        </section>
    );
};

export default Login;

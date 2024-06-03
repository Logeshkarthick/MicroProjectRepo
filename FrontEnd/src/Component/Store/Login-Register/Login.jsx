import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Cookies from 'js-cookie';
import Logo from '../Images/LOGO.png'
function Login() {

    const navigate = useNavigate();
    const [details, setDetails] = useState({
        "email": "",
        "password": ""
    })

    const [match, setMatch] = useState({
        "fname": "",
        "lname": "",
        "email": "",
        "mobile": "",
        "password": ""
    });

    const [pass, setPass] = useState({
        "fname": "",
        "lname": "",
        "email": "",
        "mobile": "",
        "password": ""
    });
    const [all, setAll] = useState([])

    const onInputChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        database();
    }, [])

    const database = async () => {
        const datas = await axios.get("http://localhost:1818/LoginList")

        setAll(datas.data)

    }


    const onPost = (e) => {
        e.preventDefault();

        const user = all.find((item) => item.email === details.email && item.password === details.password);
        console.log("hello")
        console.log(user)
        if (user && user.email === details.email && user.password === details.password) {
            Swal.fire("Login Success !");
            console.log(user)
            Cookies.set('user', JSON.stringify(user));
            navigate("/Component");

        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter a valid Mail or Password"
            });
        }


    }

    return (
        <div>

            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                <div class="sm:mx-auto sm:w-full sm:max-w-sm" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Logo} alt='Meat-Zo Logo' style={{ width: '225px', height: '80px' }}></img>
                </div>
                <div class="sm:mx-auto sm:w-full sm:max-w-sm" >

                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" style={{ marginTop: '10px' }}>Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => onPost(e)} class="space-y-6">
                        <div>
                            <div class="flex items-center justify-between">
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            </div>
                            <div class="mt-2">
                                <input type="text" name="email" onChange={(e) => onInputChange(e)} autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div class="mt-2">
                                <input type="text" name="password" onChange={(e) => onInputChange(e)} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"  to="/Register"> Register Here</Link>

                    </p>
                </div>

            </div>

        </div>
    )
}

export default Login
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Logo from '../Images/LOGO.png'
function Register() {
  const navigate = useNavigate();

  const [all, setAll] = useState([])

  const database = async () => {
    const datas = await axios.get("http://localhost:1818/LoginList")

    setAll(datas.data)

  }

  useEffect(() => {
    database();
  }, [])

  const [user, setUser] = useState({

    "fname": "",
    "lname": "",
    "email": "",
    "mobile": "",
    "password": ""
  })



  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

  };



  const onPost = async (e) => {
    e.preventDefault();
    console.log(user)
    const finder = all.find((item) => item.email === user.email)
    if (finder && user.email === finder.email) {
      alert("Mail ID Exists");
    } else {
      await axios.post(`http://localhost:1818/Login`, user)
      successbar();
      navigate("/Login")
    }
  }

  const successbar = () => {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Registration Success !!",
      showConfirmButton: false,
      timer: 1500
    });

  }

  return (
    <div>
      {/* <form onSubmit={(e) => onPost(e)}>
        <input type="text" placeholder='ID' name="id" onChange={(e) => onInputChange(e)}></input>
        <input type="text" placeholder='First Name' name="fname" onChange={(e) => onInputChange(e)}></input>
        <input type="text" placeholder='Second Name' name="lname" onChange={(e) => onInputChange(e)}></input>
        <input type="text" placeholder='Email' name="email" onChange={(e) => onInputChange(e)}></input>
        <input type="text" placeholder='Password' name="password" onChange={(e) => onInputChange(e)}></input>
        <button>Add User</button>

      </form> */}

      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={Logo} alt='Meat-Zo Logo' style={{ width: '225px', height: '80px' }}></img>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm" >

          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" style = {{marginTop: '10px'}}>Register your Account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => onPost(e)} class="space-y-6">

            <div>
              <div class="flex items-center justify-between">
              <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
              </div>
              <div class="mt-2">
                <input type="text" name="fname" onChange={(e) => onInputChange(e)} autocomplete="fname" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
            <div class="flex items-center justify-between">
              <label for="lname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
              </div>
              <div class="mt-2">
                <input type="text" name="lname" onChange={(e) => onInputChange(e)} autocomplete="lname" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

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
              <label for="mobile" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
              </div>
              <div class="mt-2">
                <input type="text" name="mobile" onChange={(e) => onInputChange(e)} autocomplete="mobile" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

              </div>
              <div class="mt-2">
                <input type="text" name="password" onChange={(e) => onInputChange(e)} autocomplete="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </div>
          </form>


        </div>

      </div>
    </div>
  )
}

export default Register

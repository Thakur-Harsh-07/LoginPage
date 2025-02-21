import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const LoginForm = ({setLoggin}) => {
   

    const[formData, setFormData] = useState({
      name:"",
      email:"",
      password:""
    });
    
    // const[password, setShowPassword] = useState(false);
  
    function changeHandler(event) {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
    function submitHandler(event) {
        event.preventDefault();
        setLoggin(true);
        toast.success("Logged In");
        
      }
      console.log(formData);
  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
      Login
    </h2>
    <form onSubmit={submitHandler} className="space-y-4">
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        value={formData.name}
        onChange={changeHandler}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        // type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Log In
      </button>
    </form>
  </div>
  )
}

export default LoginForm
import { useState } from "react";
import toast from "react-hot-toast";

import { loginUserApi } from "../api/Api";
import Buttons from "./component/Buttons";
import { Navigate } from "react-router";
import {jwtDecode} from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  // if (token) {
  //   return <Navigate to="/dashboard" />;
  // }

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill in all fields");
    }
    try {
      const data = {
        email,
        password,
      };
      const req = await loginUserApi(data);
      if (req?.data?.success) {
        localStorage.setItem("token", req?.data?.token);
        toast.success(req.data.message);
        const decode = await jwtDecode(req?.data?.token);

        console.log(decode);
        if (decode.role === "user") {
          setTimeout(() => {
            window.location.href = "/user-dashboard";
          }, 1000);
        } else {
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1000);
        }

        // localStorage.setItem("user".res?.data?.user);

        return;
      } else {
        return toast.error(req?.data?.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="p-5">
      <form className="mt-10 bg-gray-300 p-5 rounded-lg space-y-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full p-2 rounded"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-2 rounded"
        />

        {/* Custom button component */}
        <Buttons label="login" onClick={submit} />
      </form>
    </div>
  );
}

export default Login;

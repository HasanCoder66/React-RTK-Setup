import { useState } from "react";
import InputField from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/feature/authSlice";
import "../App.css"

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form))

    setTimeout(() => {
navigate("/login")
    },1500)
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 min-w-[400px] ">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
          name="name"
        />

        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          name="email"
        />

        <InputField
          label="Phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone"
          name="phone"
        />

        <InputField
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          name="password"
        />

        <InputField
          label="Confirm Password"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          name="confirmPassword"
        />

        <Button type="submit" title="Signup" onClick={handleSubmit} />
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to={"/login"}>
          <span className="text-black font-semibold cursor-pointer">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
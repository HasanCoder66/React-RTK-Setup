import { useState } from "react";
import InputField from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/feature/authSlice";
import "../App.css"
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 min-w-[400px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          name="email"
        />

        <InputField
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          name="password"
        />

        <Button type="submit" title={"Login"} />
      </form>

      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <span className="text-black font-semibold cursor-pointer">
            Signup
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Login;

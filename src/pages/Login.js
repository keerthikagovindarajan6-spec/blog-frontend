import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await API.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("🎉 Login Successful");

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#ffe4ec,#f3e8ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "450px",
          borderRadius: "30px",
          padding: "30px",
          background: "white",
        }}
      >
        <div className="text-center mb-4">
          <div style={{ fontSize: "70px" }}>🌸💻☕</div>

          <h2
            style={{
              color: "#6d28d9",
              fontWeight: "bold",
            }}
          >
            Nova Blog
          </h2>

          <p className="text-muted">Welcome Back ✨</p>
        </div>

        <input
          className="form-control mb-3"
          placeholder="📧 Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="🔒 Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />

        <button
          className="btn w-100"
          onClick={loginUser}
          style={{
            background: "#ff4fa3",
            color: "white",
            borderRadius: "20px",
            padding: "12px",
            fontWeight: "bold",
          }}
        >
          💖 Login
        </button>

        <div className="text-center mt-4">
          <small className="text-muted">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#ff4fa3",
              }}
            >
              Register 🌷
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;

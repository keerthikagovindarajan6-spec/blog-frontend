import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const res = await API.post("/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);

      navigate("/");
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err.response);
      console.log("DATA:", err.response?.data);

      alert(err.response?.data?.message || err.message || "Error");
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
          <div style={{ fontSize: "70px" }}>🌸📝💖</div>

          <h2
            style={{
              color: "#6d28d9",
              fontWeight: "bold",
            }}
          >
            Create Account
          </h2>

          <p className="text-muted">Join Nova Blog Today ✨</p>
        </div>

        <input
          className="form-control mb-3"
          placeholder="👤 Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />

        <input
          className="form-control mb-3"
          placeholder="📧 Enter Email"
          value={email}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />

        <button
          className="btn w-100"
          onClick={registerUser}
          style={{
            background: "#ff4fa3",
            color: "white",
            borderRadius: "20px",
            padding: "12px",
            fontWeight: "bold",
          }}
        >
          💖 Create Account
        </button>

        <div className="text-center mt-4">
          <small>
            Already have an account?{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Login 🌷
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/axios";

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async () => {
    try {
      const res = await API.post("/create-blog", {
        title,
        content,
      });

      alert(res.data.message);
      
      navigate("/home");
      setTitle("");
      setContent("");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
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
          width: "700px",
          borderRadius: "30px",
          padding: "30px",
          background: "white",
        }}
      >
        <div className="text-center mb-4">
          <div style={{ fontSize: "70px" }}>📝🌸💖</div>

          <h2
            style={{
              color: "#6d28d9",
              fontWeight: "bold",
            }}
          >
            Create New Blog
          </h2>

          <p className="text-muted">Share your thoughts with the world ✨</p>
        </div>

        <input
          className="form-control mb-3"
          placeholder="📝 Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />

        <textarea
          className="form-control mb-4"
          rows="8"
          placeholder="✍️ Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />

        <button
          className="btn w-100"
          onClick={createPost}
          style={{
            background: "#ff4fa3",
            color: "white",
            borderRadius: "20px",
            padding: "12px",
            fontWeight: "bold",
          }}
        >
          🚀 Publish Blog
        </button>
      </div>
    </div>
  );
}

export default CreatePost;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await API.get("/blogs");

      const blog = res.data.find((item) => item.id === parseInt(id));

      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateBlog = async () => {
    try {
      const res = await API.put(`/update-blog/${id}`, {
        title,
        content,
      });

      alert(res.data.message);

      navigate("/home");
    } catch (err) {
      console.log(err);
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
        <h2
          className="text-center mb-4"
          style={{
            color: "#6d28d9",
            fontWeight: "bold",
          }}
        >
          ✏️ Edit Blog
        </h2>

        <input
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-4"
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="btn w-100"
          onClick={updateBlog}
          style={{
            background: "#ff4fa3",
            color: "white",
            borderRadius: "20px",
            padding: "12px",
            fontWeight: "bold",
          }}
        >
          Update Blog 🚀
        </button>
      </div>
    </div>
  );
}

export default EditBlog;

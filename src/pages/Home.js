import { FaPen, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Home() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);
  const deleteBlog = async (id) => {
    try {
      await API.delete(`/delete-blog/${id}`);
      fetchBlogs();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ background: "#fffafc", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg px-5"
        style={{
          background: "linear-gradient(90deg,#ffe4ec,#f8d7ff)",
        }}
      >
        <h2 style={{ color: "#ff4fa3", fontWeight: "bold" }}>🌸 Nova Blog</h2>

        <div className="ms-auto">
          <button className="btn btn-light me-2">🏠 Home</button>
          <button className="btn btn-light me-2">📝 Blogs</button>
          <button className="btn btn-light">📞 Contact</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1
              style={{
                fontSize: "55px",
                fontWeight: "bold",
                color: "#6d28d9",
              }}
            >
              Share Your Story.
              <br />
              Inspire The World 💖
            </h1>

            <p className="text-muted mt-3">
              Write, share and connect through meaningful blogs.
            </p>

            <button
              className="btn btn-lg me-3"
              onClick={() => navigate("/create")}
              style={{
                background: "#ff4fa3",
                color: "white",
                borderRadius: "30px",
              }}
            >
              <FaPen /> Write Blog
            </button>

            <button
              className="btn btn-outline-secondary btn-lg"
              style={{ borderRadius: "30px" }}
            >
              <FaBookOpen /> Explore
            </button>
          </div>

          <div className="col-md-6 text-center">
            <div style={{ fontSize: "150px" }}>💻☕📚</div>
          </div>
        </div>
      </div>

      {/* Dummy Blog Cards */}
      <div className="container pb-5">
        <h2
          className="text-center mb-4"
          style={{
            color: "#6d28d9",
            fontWeight: "bold",
          }}
        >
          All Blogs 💕
        </h2>

        <div className="row">
          <div className="col-md-4">
            <div
              className="card shadow border-0"
              style={{
                borderRadius: "25px",
                background: "#fff0f6",
              }}
            >
              <div className="card-body">
                <div style={{ fontSize: "60px" }}>📚</div>

                <h4>Study Tips</h4>

                <p className="text-muted">
                  Improve your learning with smart habits.
                </p>

                <button className="btn btn-sm btn-primary">Read More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card shadow border-0"
              style={{
                borderRadius: "25px",
                background: "#f3e8ff",
              }}
            >
              <div className="card-body">
                <div style={{ fontSize: "60px" }}>
                  <FaLaptopCode />
                </div>

                <h4>Web Development</h4>

                <p className="text-muted">React + Flask Full Stack Guide.</p>

                <button className="btn btn-sm btn-success">Read More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card shadow border-0"
              style={{
                borderRadius: "25px",
                background: "#ecfccb",
              }}
            >
              <div className="card-body">
                <div style={{ fontSize: "60px" }}>🌿</div>

                <h4>Lifestyle</h4>

                <p className="text-muted">Daily habits to improve your life.</p>

                <button className="btn btn-sm btn-warning">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Created Blogs */}
      <div className="container pb-5">
        <h2
          className="text-center mb-4"
          style={{
            color: "#ff4fa3",
            fontWeight: "bold",
          }}
        >
          Your Blogs ✨
        </h2>
        <h5 className="text-center mb-4">Total Blogs: {blogs.length} 🚀</h5>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div
                className="card shadow border-0"
                style={{
                  borderRadius: "25px",
                  background: "#ffffff",
                }}
              >
                <div className="card-body">
                  <div style={{ fontSize: "60px" }}>📝</div>

                  <h4>{blog.title}</h4>

                  <p className="text-muted">{blog.content}</p>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => navigate(`/blog/${blog.id}`)}
                    >
                      Read More
                    </button>

                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => navigate(`/edit/${blog.id}`)}
                    >
                      Edit ✏️
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Delete 🗑️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);
  const fetchComments = async () => {
    try {
      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addComment = async () => {
    try {
      await API.post("/add-comment", {
        blog_id: id,
        text,
      });

      setText("");
      fetchComments();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBlog = async () => {
    try {
      const res = await API.get("/blogs");

      const foundBlog = res.data.find((item) => item.id === parseInt(id));

      setBlog(foundBlog);
    } catch (err) {
      console.log(err);
    }
  };

  if (!blog) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1>{blog.title}</h1>

        <hr />

        <p style={{ fontSize: "18px" }}>{blog.content}</p>
        <hr />

        <h3>💬 Comments</h3>

        {comments.map((comment) => (
          <div key={comment.id} className="card p-2 mb-2">
            {comment.text}
          </div>
        ))}

        <textarea
          className="form-control mt-3"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn btn-primary mt-3" onClick={addComment}>
          Add Comment 🚀
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;

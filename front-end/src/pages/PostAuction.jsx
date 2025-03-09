import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/PostAuction.css"; // ✅ Import CSS for styling

function PostAuction() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startingPrice: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auctions", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessage({ type: "success", text: "Auction posted successfully!" });
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to post auction" });
    }
  };

  return (
    <div className="post-auction-container">
      <h2>Post an Auction</h2>
      {message && <p className={`message ${message.type}`}>{message.text}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Auction Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
        <input type="number" name="startingPrice" placeholder="Starting Price ($)" onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
}

export default PostAuction;

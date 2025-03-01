import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Dashboard.css'; // ✅ Import CSS

function Dashboard() {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ Check if User is Authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to access the dashboard.");
      navigate("/signin");
    }
  }, []);

  // ✅ Fetch Auctions from Backend
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auctions");
        if (!response.ok) throw new Error("Failed to fetch auctions");

        const data = await response.json();
        setAuctions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Manage your auctions, place bids, and explore new deals.</p>
        <Link to="/post-auction" className="btn-primary">+ Post New Auction</Link>
      </header>

      <section className="auction-list">
        <h3>Active Auctions</h3>

        {loading && <p>Loading auctions...</p>}
        {error && <p className="error">{error}</p>}

        <div className="auction-grid">
          {auctions.length > 0 ? (
            auctions.map((auction) => (
              <div key={auction._id} className="auction-card">
                <img src={auction.image || "https://via.placeholder.com/300"} alt={auction.title} />
                <h4>{auction.title}</h4>
                <p>Current Bid: ${auction.currentBid}</p>
                <Link to={`/auction/${auction._id}`} className="btn-secondary">View Auction</Link>
              </div>
            ))
          ) : (
            !loading && <p>No active auctions available.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

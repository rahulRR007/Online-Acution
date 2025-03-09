import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/AuctionDetail.css"  ; // ✅ Import CSS for styling

function AuctionDetail() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auctions/${id}`);
        setAuction(response.data);
      } catch (err) {
        setError("Failed to load auction details");
      } finally {
        setLoading(false);
      }
    };
    fetchAuction();
  }, [id]);

  if (loading) return <p>Loading auction details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!auction) return <p>Auction not found.</p>;

  return (
    <div className="auction-detail-container">
      <h2>{auction.title}</h2>
      <img src={auction.imageUrl || "https://via.placeholder.com/300"} alt={auction.title} />
      <p><strong>Description:</strong> {auction.description}</p>
      <p><strong>Starting Price:</strong> ${auction.startingPrice}</p>
      <p><strong>Current Bid:</strong> ${auction.currentBid || "No bids yet"}</p>
      <button className="bid-button">Place Bid</button>
    </div>
  );
}

export default AuctionDetail;

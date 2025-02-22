import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // ✅ Import CSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Manage your auctions, place bids, and explore new deals.</p>
        <Link to="/post-auction" className="btn-primary">+ Post New Auction</Link>
      </header>

      <section className="auction-list">
        <h3>Active Auctions</h3>
        <div className="auction-grid">
          <div className="auction-card">
            <img src="https://via.placeholder.com/300" alt="Auction 1" />
            <h4>Vintage Watch</h4>
            <p>Current Bid: $120</p>
            <Link to="/auction/1" className="btn-secondary">View Auction</Link>
          </div>

          <div className="auction-card">
            <img src="https://via.placeholder.com/300" alt="Auction 2" />
            <h4>Classic Car Model</h4>
            <p>Current Bid: $250</p>
            <Link to="/auction/2" className="btn-secondary">View Auction</Link>
          </div>

          <div className="auction-card">
            <img src="https://via.placeholder.com/300" alt="Auction 3" />
            <h4>Rare Coin Collection</h4>
            <p>Current Bid: $75</p>
            <Link to="/auction/3" className="btn-secondary">View Auction</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

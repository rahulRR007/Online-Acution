import { Link } from 'react-router-dom';
import "../styles/LandingPage.css"; // ✅ Import the CSS file

function LandingPage() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>Welcome to Auction Hub</h1>
        <p>Discover, bid, and win amazing items in real-time auctions!</p>
        <Link to="/dashboard" className="btn-primary">Explore Auctions</Link>
      </div>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>🏆 Bid in Real-Time</h3>
            <p>Engage in live bidding and compete with others for exclusive items.</p>
          </div>
          <div className="feature-item">
            <h3>🔒 Secure Transactions</h3>
            <p>Enjoy safe and verified payments with trusted sellers.</p>
          </div>
          <div className="feature-item">
            <h3>🚀 Easy to Use</h3>
            <p>Seamlessly browse and bid with our simple, user-friendly interface.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>📝 <strong>Sign Up</strong>: Create an account in seconds.</li>
          <li>🔍 <strong>Browse Auctions</strong>: Explore a variety of items up for bidding.</li>
          <li>💰 <strong>Place Bids</strong>: Bid live and secure the best deals.</li>
          <li>📦 <strong>Win & Receive</strong>: Win the auction and get your item delivered.</li>
        </ol>
      </section>

      <section className="cta">
        <h2>Ready to Start Bidding?</h2>
        <p>Join thousands of users and grab exclusive deals now.</p>
        <Link to="/signup" className="btn-secondary">Get Started</Link>
      </section>
    </div>
  );
}

export default LandingPage;

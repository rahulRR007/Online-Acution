import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PostAuction from './pages/PostAuction';
import AuctionDetail from './pages/AuctionDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-auction" element={<PostAuction />} />
        <Route path="/auction/:id" element={<AuctionDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

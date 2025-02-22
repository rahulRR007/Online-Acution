import { useParams } from 'react-router-dom';

function AuctionDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Auction Details</h2>
      <p>Auction ID: {id}</p>
      <button>Place Bid</button>
    </div>
  );
}

export default AuctionDetail;

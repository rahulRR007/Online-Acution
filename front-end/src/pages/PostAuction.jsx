import { useState } from 'react';

function PostAuction() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Auction Posted:', { title, description });
  };

  return (
    <div className="container">
      <h2>Post an Auction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Auction Title" onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required></textarea>
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
}

export default PostAuction;

const Bid = require("../models/Bid");
const Auction = require("../models/Auction");

const placeBid = async (req, res) => {
  try {
    const { auctionId, amount } = req.body;
    const userId = req.user.id;

    const auction = await Auction.findById(auctionId);
    if (!auction) return res.status(404).json({ message: "Auction not found" });

    // Check if auction is still open
    if (new Date() > new Date(auction.endTime)) {
      return res.status(400).json({ message: "Auction has ended" });
    }

    // Check if bid is higher than the current highest bid
    const highestBid = await Bid.findOne({ auction: auctionId }).sort({ amount: -1 });
    if (highestBid && amount <= highestBid.amount) {
      return res.status(400).json({ message: "Bid must be higher than current highest bid" });
    }

    const newBid = new Bid({ auction: auctionId, bidder: userId, amount });
    await newBid.save();

    res.status(201).json(newBid);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getBidsByAuction = async (req, res) => {
  try {
    const bids = await Bid.find({ auction: req.params.auctionId })
      .populate("bidder", "name email")
      .sort({ amount: -1 });

    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { placeBid, getBidsByAuction };

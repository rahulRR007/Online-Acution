const Auction = require("../models/Auction");

const createAuction = async (req, res) => {
  try {
    const { title, description, startingPrice, endTime, imageUrl } = req.body;

    const newAuction = new Auction({
      title,
      description,
      startingPrice,
      endTime,
      imageUrl,
      seller: req.user.id, // User who created the auction
    });

    await newAuction.save();
    res.status(201).json(newAuction);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().populate("seller", "name email");
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id).populate("seller", "name email");
    if (!auction) return res.status(404).json({ message: "Auction not found" });

    res.json(auction);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createAuction, getAllAuctions, getAuctionById };

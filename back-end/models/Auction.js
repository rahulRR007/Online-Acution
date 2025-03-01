const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    startingBid: Number,
    currentBid: Number,
    endTime: Date
});

module.exports = mongoose.model("Auction", AuctionSchema);

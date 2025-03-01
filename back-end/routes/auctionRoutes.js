const express = require("express");
const Auction = require("../models/Auction");

const router = express.Router();

// ✅ Get All Auctions
router.get("/", async (req, res) => {
    try {
        const auctions = await Auction.find();
        res.json(auctions);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// ✅ Create New Auction
router.post("/", async (req, res) => {
    try {
        const { title, description, image, startingBid, endTime } = req.body;

        const newAuction = new Auction({
            title,
            description,
            image,
            startingBid,
            currentBid: startingBid,
            endTime
        });

        await newAuction.save();
        res.status(201).json({ message: "Auction Created Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;

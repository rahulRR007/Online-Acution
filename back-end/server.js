const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;
// ✅ Middleware
app.use(express.json());  // Parse JSON data
app.use(cors());
          // Enable CORS

// ✅ MongoDB Connection

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/auctionDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed", err));

// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
const auctionRoutes = require("./routes/auctionRoutes");

app.get("/",(req,res)=>
{
  res.send("hello")
}
)
// ✅ Use Routes
app.use("/api/auth", authRoutes);      // Authentication Routes
app.use("/api/auctions", auctionRoutes);  // Auction Routes

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

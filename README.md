# 🏷️ Online Auction System  

## 📌 Project Overview  
The **Online Auction System** is a web-based platform that allows users to create, manage, and participate in online auctions. It provides real-time bidding functionality, user authentication, and secure transactions.

---

## 🚀 Features  

### ✅ **User Authentication**  
- Sign Up & Sign In using JWT authentication  
- Secure password storage with bcrypt  

### ✅ **Auction Management (CRUD Operations)**  
- **Create** → Post new auctions with title, description, image, starting bid, and end time  
- **Read** → View all active auctions or a specific auction  
- **Update** → Users can place bids and update auction details  
- **Delete** → Remove auctions (if needed)  

### ✅ **Bidding System**  
- Users can place bids on auctions  
- Current highest bid updates dynamically  

### ✅ **Frontend (React + Material UI + Tailwind CSS)**  
- Responsive and modern UI  
- Pages: Dashboard, Auction Details, Post Auction, Sign Up, Sign In  

### ✅ **Backend (Node.js + Express + MongoDB)**  
- RESTful API with **Express.js**  
- **MongoDB Atlas** for data storage  
- API Endpoints: `/api/auth`, `/api/auctions`, `/api/bids`  

---

## 🛠️ Technology Stack  

### **Frontend:**  
- React.js  
- React Router  
- Material UI & Tailwind CSS  

### **Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ORM)  
- JWT for Authentication  

---

## 📥 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/online-auction.git
cd online-auction

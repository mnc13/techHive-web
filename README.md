# 🛒 TechHive — Your Ultimate Tech Shopping Platform

**TechHive** is a dynamic and responsive full-stack e-commerce web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. Whether you're looking for everyday tech essentials or dream gadgets like **drones, gaming gear, and high-performance accessories**, TechHive has it all.

This platform supports both **user and admin functionalities**, allowing for seamless shopping and efficient management of the store.

---

## ✨ Features

### 🧑‍💻 User Features
- ✅ Sign Up / Login 
- 🔍 Browse, search, and filter products
- 🛒 Add to Cart and Wishlist
- 📦 Place Orders & Track them
- 💼 Profile management
- 📱 Fully responsive design
- - ⭐ Product ratings and reviews

### 🛠️ Admin Panel
- 🔑 Admin authentication
- 📋 Manage all products (Add, Edit, Delete)
- 👥 View and manage users
- 📦 View and manage orders
- 📊 Dashboard for store overview

---

## 🧰 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js    |
| Database     | MongoDB (Mongoose)     |
| Authentication | JSON Web Tokens (JWT) |
| State Management | Context API / Redux (optional) |

---

## 📁 Folder Structure

```
techhive/
├── client/         # React frontend
├── server/         # Express backend
├── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB installed or cloud URI (e.g., MongoDB Atlas)

---

### 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/repo.git
cd repo
```

2. **Install dependencies**

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```


## 🏃 Running the Project

Run both client and server simultaneously in development mode:

- **Backend (server)**:
  ```bash
  cd server
  npm run dev
  ```

- **Frontend (client)**:
  ```bash
  cd client
  npm run dev
  ```

---

## 🖥️ Admin Access

> To access the admin dashboard, log in with an account marked as admin in the database or during registration.

Admin users will be redirected to the admin panel on login, with access to:
- Product management
- Order list and update
- User roles and deletion
- Dashboard statistics

---


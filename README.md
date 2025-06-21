# 🍱 Food Rescue App

A full-stack web application that connects restaurants and individuals with surplus food to people in need. The platform allows donors to list excess food, and volunteers can request pickups to redistribute it.

---

## 📌 Project Overview

**Goal**: To reduce food waste and fight hunger by building a seamless, user-friendly interface for food donations and pickups.

**Tech Stack**:
- **Frontend**: Next.js, TypeScript, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **API Design**: RESTful endpoints
- **Styling**: Lucide Icons, Tailwind gradients, modern UI components

---

## 🌟 Features

### 🔼 Donor Side
- Submit donation details (restaurant name, food type, quantity, location, contact)
- View past donations in **History**
- Responsive and mobile-friendly UI

### 👀 Volunteer Side
- Browse available food donations
- Click "Request Pickup" to mark food as picked up
- Filter out already picked up donations

---

## 🧠 Folder Structure

Food-Rescue-App/
├── backend/
│ ├── models/
│ │ └── FoodItem.js
│ ├── routes/
│ │ └── foodRoutes.js
│ └── server.js
├── frontend/
│ └── app/
│ ├── browse/
│ ├── donate/
│ ├── history/
│ ├── components/
│ │ ├── AddDonationForm.tsx
│ │ └── DonationCard.tsx


---

## 🔁 API Endpoints

### Base URL: `http://localhost:5000/api/food`

| Method | Endpoint          | Description                      |
|--------|-------------------|----------------------------------|
| GET    | `/`               | Fetch all donations              |
| POST   | `/`               | Create a new food donation       |
| PATCH  | `/:id/pickup`     | Mark a donation as picked up     |

> Uses Mongoose validation and error handling

---

## 🛠️ How to Run Locally

### 📦 Backend

```bash
cd backend
npm install
node server.js


## Frontend

cd frontend
npm install
npm run dev


🧪 Testing Data

{
  "restaurantName": "Green Bites",
  "foodType": "Vegetarian Rice",
  "quantity": "20 meals",
  "location": "MG Road, Bangalore",
  "phone": "9876543210"
}


📷 Screenshots
📤 Donate Page	📥 Browse Page	📜 History Page

<p align="center">
  <img src="![alt text](image.png)" alt="Food Rescue App Screenshot" width="200"/>
   <img src="![alt text](image.png)" alt="Food Rescue App Screenshot" width="200"/>
    <img src="![alt text](image.png)" alt="Food Rescue App Screenshot" width="200"/>
</p>




💼 Why This Project Matters
Showcases full-stack skills (CRUD, REST APIs, state management)

Addresses real-world problem (food waste)

Clean, production-level code with professional UI/UX

Prepared to extend with authentication, maps, notifications, etc.

✨ Future Enhancements
User login system (Admin/Volunteer)

Pickup location map integration (Google Maps)

Notifications to NGOs

Food expiry handling

👨‍💻 Developer
Maneesh Kumar
MCA | Full-Stack Developer | Passionate about impactful software
LinkedIn | GitHub


📄 License
This is a student project for learning purposes. Not intended for production or open-source reuse.





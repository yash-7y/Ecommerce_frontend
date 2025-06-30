# 🛒 eCommerce_Frontend

A modern eCommerce frontend built with **React**, **TypeScript**, **Vite**, and **Redux Toolkit**, designed to work with a separate Express.js backend. Features real-time UI, Stripe integration, responsive design, and dashboard analytics.

---

## 🧰 Tech Stack

- **React 18** with **TypeScript**
- **Vite** for blazing-fast builds
- **Redux Toolkit** for state management
- **React Router v7** for routing
- **Stripe.js** for secure payment integration
- **Firebase** for authentication
- **Chart.js** for admin dashboard visualization
- **SASS** for styling

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### 1. Clone the Repository

git clone https://github.com/your-username/ecom-frontend.git
cd ecom-frontend

2. Install Dependencies
npm install

3. Start Development Server
npm run dev

4. Build for Production
npm run build

5. Preview Production Build
npm run preview


🌐 Environment Variables
Create a .env file in the root of your frontend directory:

VITE_API_BASE_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
# Add other Firebase or Stripe keys as needed


💳 Stripe Integration
Handles secure payments using:
@stripe/react-stripe-js
@stripe/stripe-js

You'll need to configure your Stripe keys in both frontend .env and backend .env.


📈 Admin Dashboard
Admin analytics use:
chart.js
react-chartjs-2
moment.js for date formatting


🔐 Authentication
Firebase Authentication is used to manage user sessions. Make sure to configure Firebase with your project keys.



📦 Backend API
This project connects to an Express.js backend (see ecommerce_backend) for:

Product & order management
Stripe checkout endpoints
User authentication (JWT or Firebase)
File uploads via multer

🛠️ Related Projects
Backend: ecommerce_backend


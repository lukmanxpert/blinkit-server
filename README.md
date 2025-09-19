# ⚙️ BlinkIt Backend – MERN Stack E-Commerce API  

This is the **backend server** for the **BlinkIt eCommerce application**, built with **Node.js, Express, and MongoDB**.  
It provides RESTful APIs for authentication, product management, categories, orders, payments, and more.  

---

## ✨ Features  

- 🔐 **Authentication & Authorization** – JWT-based auth with hashed passwords (`bcryptjs`)  
- 👤 **User Management** – Register, Login, Profile, Roles (User/Admin)  
- 📦 **Product Management** – Categories, Subcategories, Products (CRUD operations)  
- 🛍️ **Order System** – Place, update, and track orders  
- 💳 **Payments** – Stripe integration (online) + Cash on Delivery option  
- 📤 **File Uploads** – Image upload using `multer` & `cloudinary`  
- 📧 **Email Notifications** – Email service via `resend`  
- 🔒 **Security Middleware** – Helmet, Cookie Parser, CORS  
- 📊 **Logging** – Request logging with Morgan  
- ☁️ **Serverless Ready** – Configured for Vercel deployment using `serverless-http`  

---

## 🛠️ Tech Stack  

- **Runtime:** Node.js  
- **Framework:** Express 5  
- **Database:** MongoDB + Mongoose  
- **Authentication:** JWT + bcryptjs  
- **File Upload:** Multer + Cloudinary  
- **Payments:** Stripe  
- **Deployment:** Vercel / Serverless  

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/blinkit-server.git
cd blinkit-server
```

### 2️⃣ Install dependencies  
```bash
npm install
```

### 3️⃣ Setup environment variables  

Create a `.env` file in the root folder and add:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RESEND_API_KEY=your_resend_api_key
CLIENT_URL=http://localhost:5173
```

### 4️⃣ Run the server  
```bash
npm start
```

Server will run at 👉 `http://localhost:5000`  

---

## 📡 API Endpoints (Overview)  

| Method | Endpoint                  | Description                  | Auth |
|--------|---------------------------|------------------------------|------|
| POST   | `/api/auth/register`      | Register a new user          | ❌   |
| POST   | `/api/auth/login`         | Login user                   | ❌   |
| GET    | `/api/auth/profile`       | Get user profile             | ✅   |
| POST   | `/api/products`           | Add new product (Admin)      | ✅   |
| GET    | `/api/products`           | Get all products             | ❌   |
| GET    | `/api/products/:id`       | Get product details          | ❌   |
| PUT    | `/api/products/:id`       | Update product (Admin)       | ✅   |
| DELETE | `/api/products/:id`       | Delete product (Admin)       | ✅   |
| POST   | `/api/orders`             | Place order                  | ✅   |
| GET    | `/api/orders/:id`         | Get order details            | ✅   |
| POST   | `/api/payments/stripe`    | Process Stripe payment       | ✅   |
| POST   | `/api/upload`             | Upload image (Cloudinary)    | ✅   |

---

## 👨‍💻 Admin Credentials (For Testing)  

Use the following credentials to log in as **Admin**:  
- **Email:** `lukmanmiah2004@gmail.com`  
- **Password:** `111111`  

---

## 📦 Deployment  

- **Frontend:** Vercel → [BlinkIt Live](https://blinkit-client-drab.vercel.app)  
- **Backend:** Vercel / Render (serverless-http)  

---

## 🙌 Contributing  

Contributions, issues, and feature requests are welcome!  
Feel free to fork this repo and submit a pull request.  

---

## 📜 License  

This project is licensed under the **MIT License**.  

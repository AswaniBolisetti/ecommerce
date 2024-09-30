# E-commerce Full Stack Application

This repository contains the code for a full-stack e-commerce application, including a frontend, backend, and an admin panel.

## Repository URL
[https://github.com/AswaniBolisetti/ecommerce.git](https://github.com/AswaniBolisetti/ecommerce.git)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- MongoDB Atlas account and cluster set up
- NPM

## Getting Started

Follow these instructions to set up and run the application locally.

### 1. Clone the repository
git clone https://github.com/AswaniBolisetti/ecommerce.git
cd ecommerce
2. Connect to MongoDB Atlas
To connect the backend to MongoDB Atlas:

Create a MongoDB Atlas account.
Create a new cluster in MongoDB Atlas.
Obtain the connection string for your cluster.
Replace the MongoDB connection string in the backend configuration file(index.js) or the .env file located in the backend directory:
env
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

3. Install Dependencies and run
Navigate to the different parts of the project and install dependencies and run the application : 

Frontend-> open new terminal -> cd frontend -> npm install -> npm start
Backend -> open new terminal -> cd backend -> npm install -> node ./index.js
Admin -> open new terminal -> cd admin -> npm install -> npm run dev

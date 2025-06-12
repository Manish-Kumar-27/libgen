# 📚 LibGen Search App

This is a full-stack web application that allows users to **search books from Library Genesis (LibGen)** and get **downloadable mirror links**.  
It uses **React** for the frontend and **Node.js (Express)** for the backend, which scrapes LibGen search results using Cheerio.

---

## 🚀 How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Manish-Kumar-27/libgen.git
cd libgen

```

---

### 2. Start the Backend

```bash
cd server
npm install
npm start
```

- This runs the backend API at: `http://localhost:5000`

---

### 3. Start the Frontend

Open a new terminal:

```bash
cd client
npm install
npm start
```

- This runs the React frontend at: `http://localhost:3000`

> Make sure the frontend has this in `client/package.json`:

```json
"proxy": "http://localhost:5000"
```

This allows the frontend to send requests to the backend without CORS issues.

---

## 🧪 Features

- Search books by title or keywords
- Display details like title, author, year, language, and file size
- Direct download links from LibGen mirror sites

---

## 📌 Notes

- This app uses web scraping to fetch results from LibGen.
- ## It is for **educational purposes only**.

```
This project helps to understand how to use the Libgen Api to fetch books
```

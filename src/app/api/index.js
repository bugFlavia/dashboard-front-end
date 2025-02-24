// src/app/api/users/index.js
export default async function handler(req, res) {
    const response = await fetch('http://localhost:3003/users'); // URL do seu servidor Express
    const data = await response.json();
    res.status(200).json(data);
  }
  
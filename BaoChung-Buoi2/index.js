// Import thư viện express
const express = require('express');

// Khởi tạo ứng dụng express
const app = express();

// Tạo một route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Khởi chạy server tại cổng 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

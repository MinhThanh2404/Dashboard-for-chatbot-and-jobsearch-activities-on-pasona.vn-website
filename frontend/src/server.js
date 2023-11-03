const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, 'avatar' + ext);
  }
});

const upload = multer({ storage: storage });

// Define a route to handle file uploads
app.post('/upload', upload.single('profilePhoto'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Router = require('./routes/productRouter.js');

var corOptions = {
  origin: 'http://localhost:3000'
};

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cors(corOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '2mb' }));

// Routers
app.use('/api/products', Router);

// Testing API
app.get('/', (req, res) => {
  res.json({ message: 'hello from vinay' });
});

// Port
const PORT = process.env.PORT || 3000;

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
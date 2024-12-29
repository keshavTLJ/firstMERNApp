require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const productRouter = require('./routes/productRoutes');

const server = express();


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected")
}
main().catch(err => console.log(err));

//BodyParsers
server.use(cors());
server.use(express.json());

//API routes
server.use('/products', productRouter);

//serving static files
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));

//Handle React routing, return all requests to React app
server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
})

server.listen(process.env.PORT || 8080, () => {
  console.log("server started")
});

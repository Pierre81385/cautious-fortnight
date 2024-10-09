// Import Express
const express = require('express');
const app = express();

// Define a port
const PORT = process.env.PORT || 3001;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const ClickUpRouter = require("./routes/ClickUpRoutes");

app.use("/clickup", ClickUpRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
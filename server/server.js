const express = require('express');
const cors = require('cors');
const weatherRoute = require('./routes/weather');
require('dotenv').config();

const app = express();
app.use(cors());

app.use('/weather', weatherRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

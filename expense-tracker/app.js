const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const transactionRoutes = require('./routes/transactionRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/summary', summaryRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

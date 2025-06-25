const express = require('express');

const { sequelize,connectDB } = require('./db/database');
const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/uploads', express.static('uploads')); // Serve static files from the 'uploads' directory

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {

res.send('Hello, World! user data are available here.');

});

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

app.use('/api/user/', require('./routes/userRoute'));

app.use('/api/users', require('./routes/userrou'));


const startServer = async () => {
  await connectDB();
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
startServer(); 
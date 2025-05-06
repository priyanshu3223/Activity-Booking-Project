const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const activityRoutes = require('./routes/activity');
const bookingRoutes = require('./routes/booking');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// DB Sync & Start Server
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});

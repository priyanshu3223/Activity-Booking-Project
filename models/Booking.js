module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
      // No need to define userId or activityId here
    });
  
    return Booking;
  };
  
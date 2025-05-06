const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user.id,
      activityId: req.params.activityId
    });
    res.json({ msg: 'Activity booked successfully', booking });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.user.id },
      include: [Activity]
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

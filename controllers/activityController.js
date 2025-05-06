const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

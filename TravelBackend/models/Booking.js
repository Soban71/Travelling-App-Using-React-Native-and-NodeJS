const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    place: String,
    days: Number,
    price: String,
    contact: String,
    contactType: String,
    paymentType: String,
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);

  module.exports = Booking;
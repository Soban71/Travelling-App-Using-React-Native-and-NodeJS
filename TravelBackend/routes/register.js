
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const Booking=require('../models/Booking.js')

const router = express.Router();

router.post('/Signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});


router.post('/Login', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Login failed. Incorrect email.' });
    }

    return res.status(200).json({ message: 'Login successful', user: user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});


router.post('/bookings', async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    await newBooking.save();
    res.status(200).json({ message: 'Booking saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



module.exports = router;
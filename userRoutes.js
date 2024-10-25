const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path'); // To handle file paths
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({ name, email, phone, password });
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        // Path to the existing catalog.pdf
        const catalogPdfPath = path.join(__dirname, 'C:\Users\ADMIN\meanpro\pdfs\catalog.pdf'); 

        // Return registration success response with the path to the catalog PDF
        return res.status(201).json({
            message: 'User registered successfully',
            token,
            pdfPath: catalogPdfPath 
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

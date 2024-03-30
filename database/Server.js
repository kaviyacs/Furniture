const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
// Create Express app
const app = express();
app.use(cors());
// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(' Successfully MongoDB connected'))
    .catch(err => console.log(err));

// Define schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    companyName: {
        type: String
    },
    state: {
        type: String
    },
    houseNumber: {
        type: String,
        required: true
    },
    apartmentUnit: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    additionalInformation: {
        type: String
    }
});

// Create model
const User = mongoose.model('User', UserSchema);

// Register route
app.post('/api/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Define port
const PORT = process.env.PORT || 5004;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

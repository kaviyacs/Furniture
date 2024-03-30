// // src/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/adminPanelDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5005;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require("cors");
// // Create Express app
// const app = express();
// app.use(cors());
// // Body parser middleware
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/myapply', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log(' Successfully MongoDB connected'))
//     .catch(err => console.log(err));

// // Define schema
// const UserSchema = new mongoose.Schema({
//   username: {
//         type: String,
//         required: true
//     },

//     password: {
//         type: String,
//         required: true
//     }
// });

// // Create model
// const User = mongoose.model('User', UserSchema);

// // Register route
// app.post('/api/register', async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// // Define port
// const PORT = process.env.PORT || 5004;

// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
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
mongoose.connect('mongodb://localhost:27017/myapps', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(' Successfully MongoDB connected'))
    .catch(err => console.log(err));

// Define schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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

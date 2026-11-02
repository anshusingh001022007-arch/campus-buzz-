const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Test API
app.get("/api", (req, res) => {
    res.json({
        message: "CampusBuzz backend is working!"
    });
});

// Temporary signup API
app.post("/api/signup", (req, res) => {
    const { name, roll, email, phone, password } = req.body;

    if (!name || !roll || !email || !phone || !password) {
        return res.status(400).json({
            message: "Please fill in all required fields."
        });
    }

    res.status(201).json({
        message: "Signup request received successfully!"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`CampusBuzz server running on port ${PORT}`);
});
const express = require("express");
const router = express.Router();

const userModel = require("../models/user");

router.get("/", (req, res) => {
    const users = userModel.getUsers();

    res.json(users);
});

module.exports = router;
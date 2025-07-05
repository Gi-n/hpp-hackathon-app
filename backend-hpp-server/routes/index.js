const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const privateRoutes = require("./user.routes");
const { authMiddleware } = require("../middlewares/auth.middleware");

// public routes (no authentication required
router.use('/api/auth', authRoutes);

// private routes (authentication required)
router.use('/api/users', authMiddleware, privateRoutes);

module.exports = router;
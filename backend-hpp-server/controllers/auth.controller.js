import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import catchAsync from "../utils/catchAsync.js";

export const loginUser = catchAsync( async (req, res) => {
    const { email, password } = req.body;

    if (email === undefined || password === undefined) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // compare Password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  
});

export const registerUser = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    if (!user) {
      return res.status(500).json({ message: "User registration failed" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: res._id,
        name: res.name,
        email: res.email,
      },
    });
});
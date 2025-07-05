import catchAsync from "../utils/catchAsync.js";
import User from "../models/user.model.js";

export const getUserProfile = catchAsync( async (req, res) => {
    const getAllUsers = await User.find();
    if (!getAllUsers) {
        return res.status(404).json({ message: "No users found" });
    }   
    res.status(200).json({
        message: "Users fetched successfully",
        users: getAllUsers,
    });
});
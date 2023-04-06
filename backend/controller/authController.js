import User from "../model/userModel.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

//Controller for Register User
export const registerUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(), //for hashed pass
    country: req.body.country || "Not Added",
    city: req.body.city || "Not Added",
    address: req.body.address || "Not Added",
    phone: req.body.phone || "Not Added",
    image: req.body.image || "user.png",
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Controller for Login User
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("we dont have this user");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Invalid Password!");

    const accessToken = jwt.sign(
      {
        _id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    return res.status(200).json({ ...others, accessToken });
  } catch (error) {
    return error;
  }
};

import express from "express";
import EmployeeModel from "../models/employees.js";
import cors from "cors";
const router = express.Router();
router.use(cors());

//login
router.post("/login", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    await EmployeeModel.findOne({ Email: Email }).then((User) => {
      if (User) {
        if (User.Password === Password) {
          res.json("success" );
        } else {
          res.json({ message: "incorrect User" });
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Password or Email Incorrect" });
  }
});

export default router;

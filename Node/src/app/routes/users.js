const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

const userController = new UserController();

/* GET users listing. */
router.get("/", async function (req, res) {
  try {
    const users = await userController.getUsers();
    return res.json({ message: "list of users", users });
  } catch (error) {
    return res.status(400).json({ message: "Error getting users" });
  }
});

router.get("/:id", async function (req, res) {
  // Implement this
  try {
    return res.json({ message: "list user" });
  } catch (error) {
    return res.status(400).json({ message: "Error getting user" });
  }
});

router.patch("/:id", async function (req, res) {
  try {
    const user = await userController.updateUser(req.params.id, req.body);
    return res.json({ message: "User updated successfully", user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async function (req, res) {
  // Implement this
  console.log(req, res);
});

module.exports = router;

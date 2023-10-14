const { userModel } = require("../../infra/db/models/userModel");
const { userSchema } = require("../validations");

class UserController {
  userRepo;
  constructor() {
    this.userRepo = userModel;
  }
  async getUsers() {
    // Implement this method
    return [];
  }

  async getUser(id) {
    const user = await this.userRepo.findOne({ _id: id });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getByUserName(username) {
    // Implement this using this.getUser as a hint
    return {};
  }

  async storeUser(user) {
    const { error } = userSchema.validate(user);

    if (error) {
      throw new Error(error);
    }

    /**
     * Implement this
     *
     * Hint*
     * We need to check if the user exists in the
     * database before we create the user
     */

    return {};
  }

  async updateUser(id, user) {
    console.log(id);
    const { error } = userSchema.validate(user);

    if (error) {
      throw new Error(error);
    }
    /**
     * Implement this
     *
     * Hint*
     * Mongoose has a findOneAndUpdate function
     */

    return {};
  }

  async deleteUser(id) {
    /**
     * Implement this
     *
     * Hint*
     * Mongoose has a deleteOne function
     */

    return {};
  }

  async checkIfEmailAndUsernameExist(email, username) {
    const user = await this.userRepo.findOne({
      $or: [{ email }, { username }],
    });

    return !!user;
  }
}

module.exports = UserController;

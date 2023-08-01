import { user } from "../models";
import { encryptPwd } from "../helpers/bcrypt";

class UserController {
  static async getAllUsers(req, res) {
    //
    try {
      let users = await user.findAll({
        order: [["id", "asc"]],
      });

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async findById(req, res) {
    //

    try {
      const id = +req.params.id;
      const result = await user.findOne({
        where: { id },
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    //
    try {
      const { username, email, password } = req.body;
      const role = "admin";
      const image = "https://via.placeholder.com/100";
      const hashPwd = encryptPwd(password)
      const userResult = await user.create({
        username,
        email,
        password : hashPwd,
        role,
        image,
      });

      res.status(201).json(userResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    //
    try {
      const id = Number(req.params.id);
      let result = await user.destroy({
        where: { id },
      });
      result === 1
        ? res.status(200).json({
            message: `User ${id} deleted successfully.`,
          })
        : res.status(400).json({
            message: `User id ${id} not deleted.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    //
    try {
      const id = +req.params.id;
      const { username, email, password, image } = req.body;
      const result = await user.update(
        {
          username,
          email,
          password,
          image,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Author has been updated.`,
          })
        : res.status(400).json({
            message: `Author has not been updated.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    //
    try {
      const { email, password } = req.body;

      let userFound = await user.findOne({
        where: { email },
      });

      if (userFound) {
        if (userFound.password === password) res.status(200).json(userFound);
        else
          res.status(400).json({
            message: `Invalid password`,
          });
      } else {
        res.status(404).json({
          message: `User not found.`,
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default UserController;
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import { validate } from "class-validator";

import { User } from "../entity/User";
import config from "../config/config";
import { AppDataSource } from "../data-source";

export class AuthController {
  async login(req: Request, res: Response) {
    //Check if username and password are set
    let { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Email and password is null");
    }

    //Get user from database
    const userRepository = AppDataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      res.status(401).send();
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.email },
      config.jwtSecret,
      { expiresIn: "1d" }
    );

    //Send the jwt in the response
    res.send({
      token: token,
    });
  }

  async changePassword(req: Request, res: Response) {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    const userRepository = AppDataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send();
      return;
    }

    //Validate de model (password lenght)
    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    res.status(204).send();
  }

  async signup(req: Request, res: Response) {
    //Get parameters from the body
    let { email, username, password } = req.body;
    let user = new User();

    user.email = email;
    user.username = username;
    user.password = password;
    user.isAdmin = false;

    //Validade if the parameters are ok
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Hash the password, to securely store on DB
    user.hashPassword();

    //Try to save. If fails, the username is already in use
    const userRepository = AppDataSource.getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }

    //If all ok, send 201 response
    res.status(201).send("User created");
  }
}

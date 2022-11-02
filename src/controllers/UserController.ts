import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repository";
import { hideProperty } from "../utils/hideProperty";
import { MulterRequest, IUser } from "../types";
import cloudinary from "./../utils/cloudinary";

export class UserController {
  static async getProfile(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.headers["user"] as any;
    const myProfile = await userRepository.findOneOrFail({
      where: {
        id: userId,
      },
    });

    if (myProfile) res.status(200).json(hideProperty(myProfile, "password"));
    else res.status(400).send("Cannot found user");
  }

  static async editProfile(
    req: MulterRequest,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.headers["user"] as any;
    // Filter object want to update
    const updateInfo: Partial<
      Pick<IUser, "avatar" | "username" | "location" | "description">
    > = {
      username: "",
      avatar: "",
      location: "",
      description: "",
    };

    Object.keys(updateInfo).forEach((objKey) => {
      if (!req.body[objKey]) delete updateInfo[objKey];
      else updateInfo[objKey] = req.body[objKey];
    });

    await userRepository.update(userId, { ...updateInfo });
    const updateUser = await userRepository.findOneBy({ id: +userId });

    res.status(200).send(hideProperty(updateUser, "password"));
  }
}


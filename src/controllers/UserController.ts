import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repository";
import { hideProperty } from "../utils/hideProperty";
import { MulterRequest, IUser } from "../types";
import { imagekit } from "../utils/imageKit";

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
    const uploadImage = async () => {
      try {
        if (req.file) {
          const { url } = await imagekit.upload({
            file: req.file.buffer.toString("base64"), //required
            fileName: req.file.originalname, //required
          });

          const res = await userRepository.update(userId, { avatar: url });
          return res;
        }
      } catch (err) {
        console.log(err);
      }
    };

    const updateUser = async () => {
      try {
        Object.keys(updateInfo).forEach((objKey) => {
          if (!req.body[objKey]) delete updateInfo[objKey];
          else {
            updateInfo[objKey] = req.body[objKey];
          }
        });

        const res = await userRepository.update(userId, { ...updateInfo });
        return res;
      } catch (err) {
        console.log(err);
      }
    };
    const getUser = async () => {
      try {
        const user = await userRepository.findOneBy({ id: +userId });
        res.status(200).send(hideProperty(user, "password"));
      } catch (err) {
        res.status(401).send(err);
      }
    };

    await uploadImage();
    await updateUser();
    await getUser();
  }
}


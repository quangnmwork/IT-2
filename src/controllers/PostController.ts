import { Response, Request } from "express";
import { Post } from "../entity/Post";
import { postRepository, userRepository } from "../repository";
import { IPost } from "../types";
export class PostController {
  static async getAllPost(req: Request, res: Response) {
    const allPost = await postRepository.find({
      relations: {
        user: true,
      },
    });
    res.status(201).send(allPost);
  }
  static async getMyPost(req: Request, res: Response) {
    const { userId } = req.headers["user"] as any;
    const allPost = await postRepository.findBy({ user: userId });
    res.status(201).send(allPost);
  }
  static async addPost(req: Request, res: Response) {
    const { userId } = req.headers["user"] as any;
    const newPost = new Post();
    const user = await userRepository.findOneBy({ id: userId });
    newPost.category = req.body.category || "other";
    newPost.content = req.body.content || "";
    newPost.like = 0;
    newPost.user = user;
    newPost.tags = req.body.tags || [];

    try {
      const resPost = await postRepository.save(newPost);

      console.log(resPost);
      res.status(201).send("2");
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }
}

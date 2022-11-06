import { Response, Request } from "express";
import { Post } from "../entity/Post";
import { postRepository, userRepository } from "../repository";
import { IPost } from "../types";
export class PostController {
  static async getAllPost(req: Request, res: Response) {
    const allPost = await postRepository.find({});
    res.status(201).send(allPost);
  }

  static async addPost(req: Request, res: Response) {
    const { userId } = req.headers["user"] as any;
    const newPost = new Post();

    newPost.category = req.body.category || "other";
    newPost.content = req.body.content || "";
    newPost.like = 0;
    newPost.user = userId;
    newPost.tags = req.body.tags || [];

    try {
      const resPost = await postRepository.save(newPost);
      const user = await userRepository.findOneBy({ id: userId });
      if (!user.posts) {
        user.posts = [resPost];
      } else {
        user.posts.push(resPost);
      }
      await userRepository.save(user);
      res.status(201).send(resPost);
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }
}

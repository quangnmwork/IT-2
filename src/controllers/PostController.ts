import { Response, Request } from "express";
import { Post } from "../entity/Post";
import { postRepository, userRepository } from "../repository";
import { IPost, MulterRequest } from "../types";
import { imageKitUpload } from "../utils/imageKit";
export class PostController {
  static async getAllPost(req: Request, res: Response) {
    const allPost = await postRepository.find({
      relations: {
        user: true,
      },
    });
    res.status(201).send(allPost);
  }

  static async getPostByUserId(req: MulterRequest, res: Response) {
    const userId = req.params["userId"] as any;
    const allPost = await postRepository.findBy({ user: userId });
    res.status(201).send(allPost);
  }

  static async addPost(req: MulterRequest, res: Response) {
    const { userId } = req.headers["user"] as any;
    const newPost = new Post();
    const user = await userRepository.findOneBy({ id: userId });

    newPost.category = req.body.category || "other";
    newPost.content = req.body.content || "";
    newPost.like = 0;
    newPost.user = user;
    newPost.tags = req.body.tags || [];

    const uploadImage = async () => {
      try {
        if (req.file) {
          const { url } = await imageKitUpload(
            req.file.buffer,
            req.file.originalname
          );

          newPost.thumbnail = url;
        }
      } catch (err) {
        console.log(err);
      }
    };

    try {
      await uploadImage();
      const resPost = await postRepository.save(newPost);
      res.status(201).send(resPost);
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }
  static async getPostById(req:Request, res:Response)
  {
    const post = await postRepository.findOneBy({id: req.params.id as any})
    res.status(200).send(post)
  }
  
  static async deletePostById(req:Request , res:Response)
  {
    const postId = req.params.postId;
    await postRepository.delete({id: postId as any})
    res.status(204).send("Delete successfuly")
  }
}

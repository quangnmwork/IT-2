import { Request, Response } from "express";
import { Comment } from "../entity/Comment";
import {
  commentRepository,
  postRepository,
  userRepository,
} from "../repository";

export class CommentController {
  static async addComment(req: Request, res: Response) {
    const { userId } = req.headers["user"] as any;
    const user = await userRepository.findOneBy({ id: userId });
    const post = await postRepository.findOneBy({
      id: req.params.postId as any,
    });
    const comment = new Comment();
    comment.post = post;
    comment.user = user;
    comment.content = req.body.content || "";

    try {
      const resComment = await commentRepository.save(comment);
      res.status(200).send(resComment);
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }

  static async editComment(req: Request, res: Response) {
    const commentId = req.params.commentId as any;

    try {
      await commentRepository.update(
        { id: commentId },
        {
          content: req.body.content,
        }
      );

      const comment = await commentRepository.findOneBy({ id: commentId });
      res.status(200).send(comment);
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }

  static async deleteComment(req: Request, res: Response) {
    const commentId = req.params.commentId as any;

    try {
      await commentRepository.delete({ id: commentId });

      res.status(200).send("Delete successfully");
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }

  static async getAllCommentByBlogId(req: Request, res: Response) {
    try {
      const resComment = await commentRepository.find({
        relations: { user: true },
        where: {
          post: { id: req.params.postId as any },
        },
      });
      res.status(200).send(resComment);
    } catch (err) {
      console.log(err);
      res.status(401).send("There is something wrong");
    }
  }
}

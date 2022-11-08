import { AppDataSource } from "../data-source";
import { Comment } from "../entity/Comment";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

export const userRepository = AppDataSource.getRepository(User);
export const postRepository = AppDataSource.getRepository(Post);
export const commentRepository = AppDataSource.getRepository(Comment);

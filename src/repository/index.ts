import { AppDataSource } from "../data-source";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

export const userRepository = AppDataSource.getRepository(User);
export const postRepository = AppDataSource.getRepository(Post);

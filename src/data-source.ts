import "reflect-metadata";
import { DataSource } from "typeorm";
import { Comment } from "./entity/Comment";
import { Post } from "./entity/Post";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  // logging: true,
  entities: [User, Post, Comment],
  migrations: [],
  subscribers: [],
});


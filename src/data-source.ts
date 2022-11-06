import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  //   logging: true,
  entities: [User, Post],
  migrations: [],
  subscribers: [],
});


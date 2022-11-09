import * as express from "express";
import * as bodyParser from "body-parser";
import auth from "./routes/auth.routes";
import post from "./routes/post.routes";
import comment from "./routes/comment.routes";
import user from "./routes/user.routes";
import { AppDataSource } from "./data-source";
import * as cors from "cors";

const config = {
  port: 5000,
};

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.use("/auth", auth);
    app.use("/user", user);
    app.use("/post", post);
    app.use("/comment", comment);
    app.listen(config.port);

    console.log(`Express server has started on port ${config.port}`);
  })
  .catch((error) => console.log(error));


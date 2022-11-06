import * as express from "express";
import * as bodyParser from "body-parser";
import auth from "./routes/auth.routes";
import post from "./routes/post.routes";
import user from "./routes/user.routes";
import { AppDataSource } from "./data-source";

const config = {
  port: 5000,
};

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use("/auth", auth);
    app.use("/user", user);
    app.use("/post", post);
    app.listen(config.port);

    console.log(`Express server has started on port ${config.port}`);
  })
  .catch((error) => console.log(error));


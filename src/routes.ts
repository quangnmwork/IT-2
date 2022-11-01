import { AuthController } from "./controller/AuthController";
import { UserController } from "./controller/UserController";

interface IRoute {
  method: "get" | "post" | "update" | "delete";
  action: string;
  route: string;
  controller: any;
}

export const Routes: IRoute[] = [
  {
    method: "post",
    action: "signup",
    route: "/signup",
    controller: AuthController,
  },
  {
    method: "post",
    action: "login",
    route: "/login",
    controller: AuthController,
  },
];


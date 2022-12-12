import { Router } from "express";

import { UserController } from "../controllers/UserController";
import { checkToken } from "../middlewares/checkToken";
import { upload } from "../utils/multer";

const router = Router();

router.get("/", UserController.getAllUser);

router.use(checkToken);
router.get("/me", UserController.getProfile);

router.patch("/editMe", upload.single("avatar"), UserController.editProfile);

//Change my password

export default router;

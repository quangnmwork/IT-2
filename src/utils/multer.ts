const multer = require("multer");
const path = require("path");

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req: any, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File không phải ảnh"), false);
      return;
    }
    cb(null, true);
  },
});

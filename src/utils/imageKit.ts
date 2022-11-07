const ImageKit = require("imagekit");

const config = {
  publicKey: "public_UgWkctmMk+LySCexbAXEwAYE58Y=",
  privateKey: "private_gl5t2ix28QMbW5+yZ4/8OMqhYSE=",
  urlEndPoint: "https://ik.imagekit.io/quang18",
};

export const imagekit = new ImageKit({
  publicKey: config.publicKey,
  privateKey: config.privateKey,
  urlEndpoint: config.urlEndPoint,
});

export const imageKitUpload = async (buffer: Buffer, filename: string) => {
  try {
    const res = await imagekit.upload({
      file: buffer.toString("base64"), //required
      fileName: filename, //required
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

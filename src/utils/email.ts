const nodemailer = require("nodemailer");

const EMAIL_USERNAME = "itnihongo2@gmail.com";
const EMAIL_PASSWORD = "nodejs2022";

const transport = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

export class Email {
  from: string;
  code: string;
  firstName: any;
  to: any;

  constructor(user: { email: string; name: string }, code: string) {
    this.to = user.email;
    this.firstName = user.name;
    this.code = code;
    this.from = `From admin`;
  }

  async sendMail() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Hello",
      text: "Hello world",
      html: `<h1>Hello ${this.firstName}</h1>. Your code is ${this.code}`,
    };
    await transport.sendMail(mailOptions);
  }
}

const email = new Email(
  { email: "itnihongo2@gmail.com", name: "Quang" },
  "234"
);

email
  .sendMail()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

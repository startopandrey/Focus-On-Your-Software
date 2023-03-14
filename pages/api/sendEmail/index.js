const nodemailer = require("nodemailer");
export default async function handler(req, res) {
  if (req.method == "POST") {
    const message = req.body;
console.log(message)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "andrey01test@gmail.com",
        pass: "tlgxijzzuddutrjy",
      },
    });

    if (message) {
      try {
        const emailOptions = {
          from: "andrey01test@gmail.com",
          to: "focusonyoursoftware@gmail.com",
          subject: "NEW PROJECT HAVE BEEN SUBMITED, WAKE UP, BRO ;)",
          html: `<p>Name:${message.name}, Email: ${message.email}, Company: ${message.company}, Message: ${message.message} </p>`,
        };

        const data = await transporter.sendMail(emailOptions);
        if (data) {
          res.status(200).json({
            status: "SUCCESS",
            message: "Email Has Been Sent",
            data,
          });
        }else{
            res.status(400);
        }
      } catch (error) {
        res.status(400);
      }
    }
    res.status(200).json({ message: message });
  }
}

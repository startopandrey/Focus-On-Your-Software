const nodemailer = require("nodemailer");
export default async function handler(req, res) {
  if (req.method == "POST") {
    const message = req.body;
    console.log(message);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "foyb.development@gmail.com",
        pass: "rbvsxxzbiflhcpws",
      },
    });

    if (message) {
      try {
        const emailOptions = {
          from: "foyb.development@gmail.com",
          to: "focusonyoursoftware@gmail.com",
          subject: "NEW PROJECT HAVE BEEN SUBMITED, WAKE UP, BRO ;)",
          html: `<p>Name:${message.name}, Email: ${message.email}, Company: ${message.company}, Message: ${message.message} </p>`,
        };
console.log("hi")
        const data = await transporter.sendMail(emailOptions);
        if (data) {
          return  res.status(200).json({
            status: "SUCCESS",
            message: "Email Has Been Sent",
            data,
          });
          
        } else {
          return   res.status(400);
        }
      } catch (error) {
        return res.status(400);
      }
    }
    return  res.status(200).json({ message: message });
  }
}

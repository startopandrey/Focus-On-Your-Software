const sparkpost = require("sparkpost");
sgMail.setApiKey(
  "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"
);
export default async function handler(req, res) {
  const client = new sparkpost("8ef309877faa6e7ea2c78f19143eaa51838579f6");
  if (req.method == "POST") {
    const message = req.body;
    console.log(message);
    client.transmissions.send({
      content: {
        from: "startopandrey@gmail.com",
        to: "focusonyoursoftware@gmail.com",
        subject: "NEW PROJECT HAVE BEEN SUBMITED, WAKE UP, BRO ;)",
        html: `<p>Name:${message.name}, Email: ${message.email}, Company: ${message.company}, Message: ${message.message} </p>`,
      },
      recipients: [{ address: message.email }],
    }).then((data)=> {
            return res.status(200).json({
            status: "SUCCESS",
            message: "Email Has Been Sent",
            data,
          });
    })
    // if (message) {
    //   try {
    //     const emailOptions = {
    //       from: "startopandrey@gmail.com",
    //       to: "focusonyoursoftware@gmail.com",
    //       subject: "NEW PROJECT HAVE BEEN SUBMITED, WAKE UP, BRO ;)",
    //       html: `<p>Name:${message.name}, Email: ${message.email}, Company: ${message.company}, Message: ${message.message} </p>`,
    //     };

    //     const data = await sgMail.send(emailOptions);
    //     console.log(data)
    //     if (data) {
    //       res.statusCode = 200
    //       return res.status(200).json({
    //         status: "SUCCESS",
    //         message: "Email Has Been Sent",
    //         data,
    //       });
    //     } else {
    //       return res.status(400);
    //     }
    //   } catch (error) {
    //     return res.status(400);
    //   }
    // }
    return res.status(200).json({ message: message });
  }
}

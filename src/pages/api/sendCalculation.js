import axios from "axios";
export default async function handler(req, res) {
  const message = req.body;
  if (req.method === "POST") {
    const data = await axios.post(
      'https://foys.herokuapp.com/send/calculation',
      // "http://localhost:4000/send/email",
      message
    );
    if (data) {
      res.status(200).json({ success: "success" });
    }
    res.status(400).json({ error: "error" });
  }
  res.status(400).json({ error: "error" });
}

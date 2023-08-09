import { MongoClient } from "mongodb";

async function newsletter(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://naji:LLg8GGZNRbxxZcNu@cluster0.p5janj2.mongodb.net/newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: "Signed Up!" });
  }
}

export default newsletter;

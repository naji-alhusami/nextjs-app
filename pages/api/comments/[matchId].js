function handler(req, res) {
  const matchId = req.query.matchId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);

    res.status(201).json({ message: "Added Comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Ahmed", text: "First Commment" },
      { id: "c2", name: "Naji", text: "Second Comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;

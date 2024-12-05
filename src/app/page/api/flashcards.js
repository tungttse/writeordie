let flashcards = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(flashcards);
  } else if (req.method === 'POST') {
    const { front, back } = req.body;
    const newCard = { id: Date.now(), front, back };
    flashcards.push(newCard);
    res.status(201).json(newCard);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    flashcards = flashcards.filter(card => card.id !== parseInt(id));
    res.status(204).end();
  }
}
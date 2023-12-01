const express = require('express');
const app = express();
const port = 3000;

app.get('/books', (req, res) => {
  const books = {
    fantasy: 'Harry Potter',
    mystery: 'And Then There Were None',
    historical: 'War and Peace',
  };

  res.status(200).json(books);
});

app.get('/reverse', (req, res) => {
  try {
    const wordToReverse = req.input;

    if (!wordToReverse) {
      res.status(400).send('missing word');
      return;
    }

    const toReturn = wordToReverse.split('').reverse().join('');

    res.status(200).send(toReturn);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

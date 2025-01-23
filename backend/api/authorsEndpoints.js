import Author from "../models/Author.js"
import router from 'express'

const Router = router()

Router.post('/authors', async (req, res) => {
  try {
      const author = new Author(req.body);
      await author.save();
      res.status(201).json(author);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

Router.get('/authors', async (req, res) => {
  try {
      const authors = await Author.find();
      res.json(authors);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

Router.get('/authors/:id', async (req, res) => {
  try {
      const author = await Author.findById(req.params.id);
      if (!author) {
          return res.status(404).json({ error: 'Author not found' });
      }
      res.json(author);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

Router.put('/authors/:id', async (req, res) => {
  try {
      const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!author) {
          return res.status(404).json({ error: 'Author not found' });
      }
      res.json(author);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

Router.delete('/authors/:id', async (req, res) => {
  try {
      const author = await Author.findByIdAndDelete(req.params.id);
      if (author) {
        return res.status(200).json( 'Author has been deleted' );
      }
        else {
          return res.status(404).json({ error: 'Author not found' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

export default Router
import Publisher from "../models/Publisher.js"
import router from 'express'

const Router = router()

Router.post('/publishers', async (req, res) => {
  try {
      const publisher = new Publisher(req.body);
      await publisher.save();
      res.status(201).json(publisher);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

Router.get('/publishers', async (req, res) => {
  try {
      const publishers = await Publisher.find();
      res.json(publishers);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

Router.get('/publishers/:id', async (req, res) => {
  try {
      const publisher = await Publisher.findById(req.params.id);
      if (!publisher) {
          return res.status(404).json({ error: 'Publisher not found' });
      }
      res.json(publisher);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

Router.put('/publishers/:id', async (req, res) => {
  try {
      const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!publisher) {
          return res.status(404).json({ error: 'Book not found' });
      }
      res.json(publisher);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

Router.delete('/publishers/:id', async (req, res) => {
  try {
      const publisher = await Publisher.findByIdAndDelete(req.params.id);
      if (publisher) {
        return res.status(200).json( 'publisher has been deleted' );
      }
        else {
          return res.status(404).json({ error: 'publisher not found' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

export default Router
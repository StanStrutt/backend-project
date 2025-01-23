import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import booksRouter from "./api/booksEndpoints.js"
import authorsRouter from "./api/authorsEndpoints.js"
import publishersRouter from "./api/publishersEndpoints.js"


const app = express()
app.use(cors())
app.use(express.json());

app.use(booksRouter);
app.use(authorsRouter);
app.use(publishersRouter);


mongoose.connect('mongodb://127.0.0.1:27017/books', 
).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







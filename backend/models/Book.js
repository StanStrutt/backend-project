import mongoose, { Schema } from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    publisher: { type: Schema.Types.ObjectId, ref: "Publisher" },
    numberOfPages: { type: Number, required: true },
    yearPublished: { type: Number, required: true },
    __v: { type: Number, select: false}
})

export default mongoose.model('Book', BookSchema);
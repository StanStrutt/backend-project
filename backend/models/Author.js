import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    yearOfBirth: { type: Number, required: true },
    yearOfDeath: { type: Number },
    __v: { type: Number, select: false}
})

export default mongoose.model('Author', AuthorSchema);
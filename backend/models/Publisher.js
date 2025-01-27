import mongoose from 'mongoose';

const PublisherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    yearFounded: { type: Number },
    headquartersLocation: { type: String },
    __v: { type: Number, select: false}
})

export default mongoose.model('Publisher', PublisherSchema);
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creators: String,
    tags:[String],
    selectedFiles: String,
    likeCount:{
        type: Number,
        default: 0,
    },
    CreatedAt:{
        type: Date,
        default: new Date(),
    }
})

const postMessage = mongoose.model('PostMessage', postMessage);

export default postMessage;

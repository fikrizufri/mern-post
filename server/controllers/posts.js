import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {

    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    }catch (e) {
        res.status(400).json({message:err.message});
    }
}
export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    }catch (err) {
        res.status(409).json({message: err.message});
        
    }
}
//create handlers for routes. Declare callback functions to be used in ./routes/posts.js

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages); 
    }catch (error){
        res.status(404).json({message: error.message});

    }
    res.send('This works');
}

export const createPost = async (req, res) =>{
    const body = req.body
    
    const newPost = new PostMessage(post)
    try{
        await newpost.save()
        res.status(201).json(newPost)
     }catch (error) {
        res.status(409).json({message: error.message});
     }
     res.send('Post Creation');
}
const Post = require('../models/post');

const getPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json(
        posts
    );
}
const createPost = async (req, res) => {
    const { body } = req.body;

    const post = await Post.create({
        body
    });

    console.log(post);

    res.status(200).json({
        message: 'blog posted'
    });
}

module.exports = { 
    getPosts, 
    createPost 
};
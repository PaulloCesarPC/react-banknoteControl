const Post = require('../models/PostNote');

module.exports = {
    async index(req,res){
        try{
            const post = await Post.findById(req.params.id)
            return res.json(post);

        }
        catch(err){
            return res.status(400).send({error: 'Error get ID'})
        }
    },

    async store(req,res){
    try{
        const {id, student, subject, type,value} = req.body;
        const post = await Post.create({
            id,
            student,
            subject,
            type,
            value
        })
        return res.json(post);

    }
    catch(err){
        return res.status(400).send({error: 'Error criacao'})
    }

    },

    async deleteNote(req,res){
        try{

           await Post.findByIdAndRemove(req.params.id)
            return res.send({sucess: true});
        }
        catch(err){
            return res.status(400).send({error: 'Error delete'})
        }
        
    },

    async getAll(req,res){
        try{
            const posts = await Post.find().sort();
            return res.json(posts);

        }
        catch(err){
            return res.status(400).send({error: 'Error getAll'})
        }
    },
};

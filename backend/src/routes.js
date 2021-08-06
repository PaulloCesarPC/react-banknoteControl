const express = require('express');
const NewNote = require('./controllers/NewNote');



const routes = new express.Router();

routes.get('/allposts', NewNote.getAll);
routes.post('/posts', NewNote.store);
routes.get('/posts', NewNote.index);

routes.delete('/posts/:id', NewNote.deleteNote);
// routes.post('/posts', upload.single('image'), PostController.store);

//  routes.post('/posts/:id/like', LikeController.store);


module.exports = routes;
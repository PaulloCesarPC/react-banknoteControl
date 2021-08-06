const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();
const server = require('http').Server(app);
const io  = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });


mongoose.connect('mongodb+srv://notespc:notespc@cluster0.u1dot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true
});

app.use((req,res, next) => {
    req.io = io; 

    next();
})
app.use(express.json());
app.use(cors());
// app.use('/files', static(resolve(__dirname, '..', 'uploads', 'resized' )));
app.use(require('./routes'));
server.listen(3333);




import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


const CONNECTIONS_URL = `mongodb+srv://dbgila:gila2020@cluster0.f6re6.mongodb.net/<dbname>?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTIONS_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=> console.log(`running : ${PORT}`)))
.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import monsterRoutes from './routes/monster.js';

const app = express();

app.use('http://localhost5000/monsters', monsterRoutes);
app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/monsters', monsterRoutes);

const CONNECTION_URL = 'mongodb+srv://Yellowdeonta12:Deonta13@cluster0.2jy76.mongodb.net/MERN_APP?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => app.listen(PORT, ()=>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


mongoose.set('useFindAndModify', false);

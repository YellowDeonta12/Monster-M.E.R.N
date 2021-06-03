import mongoose from 'mongoose';

const monsterSchema = mongoose.Schema({
    monsterNo: Number,
    monsterName: String,
    variant: String,
    section: {
        type: String, 
        default: 'A'
    } 
});

const monster = mongoose.model('monster', monsterSchema);

export default monster;
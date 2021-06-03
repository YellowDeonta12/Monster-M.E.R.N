import MonsterData from '../models/monster.js';

export const getMonsters = async (req, res)=> {
    try {
        const allMonsters = await MonsterData.find();

        res.status(200).json(allMonsters);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    } 
}

export const createMonster =  async (req, res)=> {
    const monster = req.body;
    
    const newMonster = new MonsterData(monster);

    try {
        await newMonster.save();
        res.status(201).json(newMonster);
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }

}

export const deleteMonster = async (req, res)=> {
    const id = req.params.id;

    try {
        await MonsterData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted')
    } catch (error) {
        console.log(error);
    }

}


import express from 'express';
import { getMonsters, createMonster, deleteMonster } from '../controllers/monster.js';
import monster from '../models/monster.js';

const router = express.Router();

router.get('/', getMonsters);
router.post('/', createMonster);
router.delete('/:id', deleteMonster);

export default router;
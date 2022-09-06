import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import { createUser,
        listUsers,
        getUser,
        deleteUser,
        updateUser } from '../controllers/users.js'

const router = express.Router();

let users = []

// this route get all users 
router.get('/', listUsers)

// this route post a user to database ( i used postman software to use post method )
router.post('/', createUser)

// this route searchs for an user by id 
router.get("/:id", getUser)

// this route deletes an user by id 
router.delete('/:id', deleteUser)

// this route updates one or more proporties of an user by id 
router.patch('/:id', updateUser)

export default router;

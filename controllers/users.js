import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req,res) => {
    const postedUser = req.body;

    const user = {...postedUser, id: uuidv4()}

    users.push(user)

    console.log(`User with the name ${user.firstName} ${user.lastName} Posted!`);

    res.send(`User with the name ${user.firstName} ${user.lastName} Posted!`)
}

export const listUsers = (req,res) => {
    res.send(users);
}

export const getUser = (req,res) => {
    
    const { id } = req.params;

    const searchedUser = users.find((user) => user.id === id)

    res.send(searchedUser);

}

export const deleteUser =  (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`User with id: ${id} has been deleted!`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const selectedUser = users.find((user) => user.id === id);

    const {firstName, lastName, age} = req.body;

    if(firstName) selectedUser.firstName = firstName;
    if(lastName) selectedUser.lastName = lastName;
    if(age) selectedUser.age = age;
    
    res.send(`User with the ${id} has been updated!`)
}



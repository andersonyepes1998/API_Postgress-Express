import { todoModel } from "../models/todo.model.js";

//Si no vamos a utilizar el req solo podemos poner un _ para no pooner el req...
const getAll = async (_, res) => {
    try {
        const response = await todoModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const createPost = async (req, res) => {
    try {
        const { title } = req.body;
        const response = await todoModel.create(title);
        res.json(response);
    } catch (error) { 
        console.log(error);
    }
}

export const todoController ={
    getAll,
    createPost
}
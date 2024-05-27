import { todoModel } from "../models/todo.model.js";

//Si no vamos a utilizar el req solo podemos poner un _ para no pooner el req...
const getAll = async (_, res) => {
    try {
        const response = await todoModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error del servidor'});
    }
}

const findId = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await todoModel.findAllOne(id);
        if(!response) {
            return res.status(404).json({message: 'El resgitro no existe en la base de datosss'});
        }
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

const createPost = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title){
            return res.status(401).json({error: 'El campo de title no existe'});
        } 
        const response = await todoModel.create(title);
        res.json(response);

    } catch (error) { 
        console.log(error);
        return res.status(500).json({error: 'Error del servidor'});
    }
}

const updatePatch = async (req, res) => {
    try {
        const { title } = req.body;
        const { id } = req.params;
        const response = await todoModel.updateTodos(title, id);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error del servidor'});
    }
}

const deleteTodos = async (req, res) =>{
    try {
        const {id} = req.params;
        const response = await todoModel.deleteTodo(id);
        console.log(response);

        if(!response){
            res.status(404).json({error: 'El registro no exite en la base de datos'});
        }

        res.json({response});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error del servidor'});
    }
}

export const todoController ={
    getAll,
    findId,
    createPost,
    updatePatch,
    deleteTodos
}
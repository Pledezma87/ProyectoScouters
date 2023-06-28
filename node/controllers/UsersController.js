import UsersModel from '../models/UsersModel.js';

// Definir métodos para el CRUD 

// Mostrar TODOS los usuarios

export const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.json( {message: error.message})
    }

}

// Mostrar UN usuario

export const getUser = async (req, res) => {
        try {
            const id = req.params.id
           await UsersModel.findById({_id:id}).then( (users)=>{
                res.status(200).json(users)
            })
            } catch (error) {
            res.json( {message: error.message})  
        }
}
// Crear un usuario

export const createUser = async (req, res) => {
    try {
        await UsersModel.create(req.body)
        res.status(200).json({
            "message":"Usuario creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
        
    }

}

// Actualizar un usuario
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        await UsersModel.updateOne({_id:id}, req.body).then( res=> {
            console.log(res)
        })
        res.status(200).json({
            "message":"Usuario actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }

}
// Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await UsersModel.deleteOne({_id:id }).then( res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Usuario eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
    
}
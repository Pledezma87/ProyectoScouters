import InformModel from '../models/InformModel.js';

// Definir métodos para el CRUD 

// Mostrar TODOS los Informes

export const getAllInforms = async (req, res) => {
    try {
        const inform = await InformModel.find()
        res.status(200).json(inform)
    } catch (error) {
        res.json( {message: error.message})
    }

}

// Mostrar UN Informe

export const getInform = async (req, res) => {
        try {
            const id = req.params.id
             await InformModel.findById({_id:id}).then( (inform)=>{
                res.status(200).json(inform)
            })
            } catch (error) {
            res.json( {message: error.message})  
        }
}
// Crear un Informe

export const createInform = async (req, res) => {
    try {
        await InformModel.create(req.body)
        res.status(200).json({
            "message":"Informe creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
        
    }

}

// Actualizar un Informe
export const updateInform = async (req, res) => {
    try {
        const id = req.params.id
        await InformModel.updateOne({_id:id}, req.body).then( res=> {
            console.log(res)
        })
        res.status(200).json({
            "message":"Informe actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }

}
// Eliminar un Informe
export const deleteInform = async (req, res) => {
    try {
        const id = req.params.id
        await InformModel.deleteOne({_id:id }).then( res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Informe eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
    
}
import PlayersModel from '../models/PlayersModel.js';


// Definir métodos para el CRUD 

// Mostrar TODAS las fichas

export const getAllPlayers = async (req, res) => {
    try {
        const players = await PlayersModel.find()
        res.status(200).json(players)
    } catch (error) {
        res.json( {message: error.message})
    }

}

// Mostrar UNA ficha

export const getPlayer = async (req, res) => {
        try {
            const id = req.params.id
           await PlayersModel.findById({_id:id}).then( (players)=>{
                res.status(200).json(players)
            })
            } catch (error) {
            res.json( {message: error.message})  
        }
}
// Crear una ficha

export const createPlayer = async (req, res) => {
    try {
        await PlayersModel.create(req.body)
        res.status(200).json({
            "message":"Ficha creada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
        
    }

}

// Actualizar una ficha
export const updatePlayer = async (req, res) => {
    try {
        const id = req.params.id
        await PlayersModel.updateOne({_id:id}, req.body).then( res=> {
            console.log(res)
        })
        res.status(200).json({
            "message":"Ficha actualizada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }

}
// Eliminar una ficha
export const deletePlayer = async (req, res) => {
    try {
        const id = req.params.id
        await PlayersModel.deleteOne({_id:id }).then( res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Ficha eliminada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
    
}
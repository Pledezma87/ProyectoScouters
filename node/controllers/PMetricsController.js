import InformModel from '../models/PMetricsModel.js';

// Definir métodos para el CRUD 

// Mostrar TODOS las métricas

export const getAllMetrics = async (req, res) => {
    try {
        const metric = await PMetricModel.find()
        res.status(200).json(metric)
    } catch (error) {
        res.json( {message: error.message})
    }

}

// Mostrar UNA métrica

export const getMetric = async (req, res) => {
        try {
            const id = req.params.id
             await PMetricModel.findById({_id:id}).then( (metric)=>{
                res.status(200).json(metric)
            })
            } catch (error) {
            res.json( {message: error.message})  
        }
}
// Crear una métrica

export const createMetric = async (req, res) => {
    try {
        await PMetricModel.create(req.body)
        res.status(200).json({
            "message":"Métrica creada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
        
    }

}

// Actualizar una métrica

export const updateMetric = async (req, res) => {
    try {
        const id = req.params.id
        await PMetricModel.updateOne({_id:id}, req.body).then( res=> {
            console.log(res)
        })
        res.status(200).json({
            "message":"Métrica actualizada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }

}
// Eliminar una métrica

export const deleteMetric = async (req, res) => {
    try {
        const id = req.params.id
        await PMetricModel.deleteOne({_id:id }).then( res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Métrica eliminada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
    
}
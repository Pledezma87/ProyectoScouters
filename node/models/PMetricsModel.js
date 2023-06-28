import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PMetricsSchema = new Schema(
    {
        Id_player: {type: Object},
        Id_user: {type: Object},
        Disparo: {type:Number},
        Pase: {type:Number},
        Regate: {type:Number},
        Cabeza: {type:Number},
        Rating:{type:Number}
        
        },

    {collection: 'player-metrics'}
)

export default mongoose.model('PMetricsModel', PMetricsSchema, 'player-metrics' )
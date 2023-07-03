import express from 'express';
import cors from 'cors';
// importamos la conexión a la DB
import db from './database/db.js';
// importamos nuestro enrutador
import PlayerRoutes from './routes/PlayerRoutes.js';
import InformRoutes from './routes/InformRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import PMetricsRoutes from './routes/PMetricsRoutes.js'
// import PMetricRoutes from './routes/PMetricsRoutes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// import PMetricRoutes from './routes/PMetricsRoutes.js';
mongoose.connect('mongodb://127.0.0.1:27017/Scouters', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/informs', InformRoutes)
app.use('/players', PlayerRoutes)
app.use('/player-metrics', PMetricsRoutes)
app.use('/users', UserRoutes)

app.listen(8000, () =>{
    console.log('Server up running in http://localhost:8000/')
}) 


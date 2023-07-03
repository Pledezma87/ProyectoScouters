import express from 'express';
import cors from 'cors';
// importamos la conexión a la DB
import db from './database/db.js';
// importamos nuestro enrutador
import PlayerRoutes from './routes/PlayerRoutes.js';
import InformRoutes from './routes/InformRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
// import PMetricRoutes from './routes/PMetricsRoutes.js';
import { authenticateUser } from './authMiddelware/authMiddelware.js';
import bodyParser from 'body-parser';


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/informs', InformRoutes)
app.use('/players', PlayerRoutes)
app.use('/users', UserRoutes)



// app.use('/player-metrics', PMetricRoutes)


app.listen(8000, () =>{
    console.log('Server up running in http://localhost:8000/')
}) 


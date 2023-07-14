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
import multer from 'multer';





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


//función
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {

      cb(null,`${Date.now()}-${file.originalname}`);
    },
  });

  //función
  const upload=multer({storage})
 
  
  //rutas multer
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
     
      return res.status(404).send({
        success: "Error",
        error: 'Error al subir la imagen',
      });
    }
    console.log(req.file);
    return res.status(200).send({
      success:"Ok",
      message: 'Imagen subida con exito',
    });
  });
    

app.listen(8000, () =>{
    console.log('Server up running in http://localhost:8000/')
})
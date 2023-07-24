import express from 'express';
    import cors from 'cors';
    // importamos la conexión a la DB
    import db from './database/db.js';
    // importamos nuestro enrutador
    import PlayerRoutes from './routes/PlayerRoutes.js';
    import InformRoutes from './routes/InformRoutes.js';
    import UserRoutes from './routes/UserRoutes.js';
    import PMetricsRoutes from './routes/PMetricsRoutes.js'
    import bodyParser from 'body-parser';
    import mongoose from 'mongoose';
    import multer from 'multer';
  

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
 

const storage = multer.diskStorage({
  destination: './uploads/nif', // Carpeta de destino para los archivos adjuntos
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split('.').pop();
    console.log(file)
    cb(null, uniqueSuffix + '.' + extension);
  }
});

// Crea la instancia de Multer
const upload = multer({ storage });

// Ruta para la subida de archivos
app.post('/uploads/nif', upload.single('file'), async (req, res) => {
  try {
    // Obtén la información relevante del archivo subido
    const { filename, path } = req.file;
    
    // Aquí puedes realizar las operaciones adicionales que desees con el archivo, como procesamiento o almacenamiento en otro lugar, si es necesario.

    // Envía la respuesta de éxito al cliente
    return res.status(200).json({ message: 'Archivo subido correctamente' });
  } catch (error) {
    // Manejo de errores
    console.error('Error al guardar la imagen en la base de datos:', error);
    return res.status(500).json({ error: 'Error al guardar la imagen en la base de datos. Por favor, inténtalo de nuevo más tarde.' });
  }
});









    app.listen(8000, () =>{
        console.log('Server up running in http://localhost:8000/')
    })
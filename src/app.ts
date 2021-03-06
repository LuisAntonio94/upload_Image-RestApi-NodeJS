import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/index';

const app = express();

// settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use('/api', indexRouter);
//Carpeta por la cual puede ser accedida desde el navegador
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;
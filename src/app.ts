import express from "express";
import morgan from "morgan";

const app = express();

// settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));

export default app;
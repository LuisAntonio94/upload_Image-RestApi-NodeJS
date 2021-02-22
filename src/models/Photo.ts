import { Schema, model, Document } from 'mongoose';

// Tipos de datos de Mongoose
const schema = new Schema({
	title: String,
	description: String,
	imagePath: String,
});

// Tipos de datos de Typescript
// Estrablecemos la estructura del Documento de MongoDB
interface IPhoto extends Document {
	title: string;
	description: string;
	imagePath: string;
}
// Ese modelo cumplira con la estructura de la Interfaz
export default model<IPhoto>('Photo', schema);

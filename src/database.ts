/* eslint-disable spaced-comment */
import mongoose from 'mongoose';

// Configurar opciones de Conexion
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
	autoIndex: false, // No construyas índices
	//poolSize: 10, // Mantiene hasta 10 conexiones de socket
	serverSelectionTimeoutMS: 5000, //Sigue intentando enviar operaciones durante 2 segundos
	//socketTimeoutMS: 45000, // Cerrar los sockets después de 45 segundos de inactividad
	//family: 4 // Use IPv4, omita probar IPv6
};

export async function startConnection() {
	///*
	// Primera Opcion (Promise)
	mongoose
		.connect('mongodb://localhost:27017/photo-gallery-db', options)
		.then(() => console.log('Mongoose establecio conexion con la Base de Datos MongoDB!!!'))
		//Este catch es solo para controlar error al iniciar la conexion inicial
		.catch((error) => console.error(`#1 Error al conectar la Base de Datos: ${error}`));
	//*/

	/*
    // Segunda Opcion (Async/Await)
    try {
        await mongoose.connect('mongodb://localhost:27017/photo-gallery-db', options);
        console.log('Base de Datos conectada!')
    } catch (error) {
        console.error(`#1 Error al conectar la Base de Datos: ${error}`);
    }
    */
}

// eslint-disable-next-line max-len
//###############################################################################################################
// Manejo de Eventos de conexión
const db = mongoose.connection;
db.on('connecting', () => {
	console.log('Mongoose comienza a hacer su conexión inicial con el servidor MongoDB!!!');
});
db.on('connected', () => {
	console.log('Mongoose realiza correctamente su conexión con el servidor MongoDB!!!');
});
db.on('disconnecting', () => {
	console.log('Su aplicación llamada para desconectarse de MongoDB!!!');
});
db.on('disconnected', () => {
	console.log('Mongoose perdió la conexión con el servidor MongoDB!!!');
});
db.on('reconnected', () => {
	console.log('Mongoose perdió la conectividad con MongoDB y se volvió a conectar correctamente!!!');
});
db.on('error', (error) => {
	console.error(`#2 Error al conectar la Base de Datos: ${error}`); // ${error.reason}
});

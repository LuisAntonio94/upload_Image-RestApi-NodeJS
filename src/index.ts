import app from './App'; // ES6
// const app = require("./app"); // CommonJS
import { startConnection } from './Database';

/* Modo CallBack
app.listen(app.get('port'), () => {
    startConnection();
    console.log('server on port', app.get('port'));
});
*/

/* Modo Async/Await */
async function main() {
	startConnection();
	await app.listen(app.get('port'));
	console.log('Servidor corriendo en el puerto: ', app.get('port'));
}
main();

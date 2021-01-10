import app from "./app"; //ES6
//const app = require("./app"); //CommonJS

/* Modo CallBack
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
*/

/* Modo Async/Await */
async function main() {
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'))
}
main();
/**
 * file: server.js
 * description: arquivo responsável por toda a configuração e execução da aplicação
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
const dotenv = require('dotenv');

dotenv.config();

const app = require('./src/app');
console.log(process.env.port);
const port = process.env.port || 3000;

app.listen(port, () => {
console.log('Aplicação executando na porta...: ', port);
});

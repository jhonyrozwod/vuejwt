const app = require('./src/app');
console.log(process.env.port);
const port = process.env.port || 3000;

app.listen(port, () => {
console.log('Aplicação executando na porta...: ', port);
});

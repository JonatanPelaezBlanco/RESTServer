//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Fecha de exiracion Token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//Seed de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


//BBDD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://Jpelaezblanco:Qw3rty99@cluster0-9qape.mongodb.net/test?retryWrites=true'
};


process.env.URLDB = urlDB;
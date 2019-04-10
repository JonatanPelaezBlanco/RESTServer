//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Fecha de exiracion Token
process.env.CADUCIDAD_TOKEN = '48h';

//Seed de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '177158585509-ugqe0911pcclj82rqkvotaqq17q935p3.apps.googleusercontent.com';


//BBDD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://Jpelaezblanco:Qw3rty99@cluster0-9qape.mongodb.net/test?retryWrites=true'
};


process.env.URLDB = urlDB;
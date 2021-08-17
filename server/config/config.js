//=========================
//Puerto
//=========================
process.env.PORT = process.env.PORT || 3000;
//=========================
//entorno
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//=========================
//Vencimiento token
//=========================
//60 segundos
//60 minutos
//24 horas
//30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 *30;

//=========================
//SEED de autenticación
//=========================

process.env.SEED = process.env.SEED || 'secret'



//=========================
//base de datos
//=========================
let urlDB;
if(process.env.NODE_ENV ==='dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb+srv://admin:<admin>@cafe.mpwo1.mongodb.net/cafe?retryWrites=true&w=majority'
}
process.env.urlDB = urlDB;

//=========================
//google client id
//=========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '552018051544-9cndfhmo0d5n9ns2kavtplhhc2odjcdc.apps.googleusercontent.com'
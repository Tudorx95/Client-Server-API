const config= require('./dbConfig');
const sqlConnectionToServer= require('mssql');

const getAngajati= async ()=>{
    try {
        let pool= await sqlConnectionToServer.connect(config);
        let angajati = pool.request().query('select * from Angajat');
        console.log(angajati);
        return angajati;
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    getAngajati
}
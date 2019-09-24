//Yargs nos permite obtener parametros desde la linea de comandos
const argv = require('yargs')
                .options({
                    direccion:{
                        alias:'d', //para usar el -d en vez de --direccion
                        desc:'Dirección de la cuidad para obtener el clima',
                        demand:true //Obligatorio
                    }
                }).argv;

const {getLugarLatLng} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

const getData = async (direccion)=>{

    //uso de 2 funciones con Promises
    try
    {
        const coords = await getLugarLatLng(direccion);
        const temp = await getClima(coords.lat,coords.lon);

        return `La temperatura de ${coords.direccion} es de ${temp}°C`;
    }
    catch(e)
    {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }
  
};

const result = getData(argv.direccion);

result.then(resp=>{console.log(resp);}).catch(err => {console.log(err);});
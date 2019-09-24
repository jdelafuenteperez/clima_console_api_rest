const axios = require('axios');

const getLugarLatLng = async (dir)=>{

    //Reemplaza los caracteres no seguros para una URL como el ' ' por %20
    const encodedURL =  encodeURI(dir);
    //Consumo GET de una API con Headers
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout:5000,
        headers:{   'x-rapidapi-key':'dbc8b38d8dmsh0b1a4c705e2ded9p1bdb24jsn4d1a0bb3f5f7',
                    'x-rapidapi-host':'devru-latitude-longitude-find-v1.p.rapidapi.com'},
        
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0)
    {
       throw new Error(`No hay resultados para ${dir}`);

    }

    const data  = resp.data.Results[0];
    const {name:direccion,lat,lon} = data;//Obtención de variables por Destructuración

        return {direccion,lat,lon};
};

module.exports = {getLugarLatLng};


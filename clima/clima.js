const axios = require('axios');

const getClima = async (lat,lon)=>
{
    //Consumo GET de una API simple
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb1e300a35937074cb59ee8efb58bb4b&units=metric`);
    return resp.data.main.temp;
}

module.exports={getClima};
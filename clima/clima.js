const axios = require('axios')

const getClima = async (params) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lng}&appid=987be58bbb5c5c61240f6f2641237067&units=metric`)

    return resp.data.main.temp
}


module.exports = {
    getClima
}
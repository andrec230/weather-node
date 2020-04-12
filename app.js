const { argv } = require('./config/yargs')
const { getLugarLatLon } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')


const getInfo = async (direccion) => {

    try {
        const resp = await getLugarLatLon(direccion)
        const params = {
            lat: resp.lat,
            lng: resp.lng
        }
        const temp = await getClima(params)
        return `La temperatura para '${resp.dir}' es de ${temp} °C`        
    } catch (error) {
        return `No se pudo obtener la temperatura para '${argv.direccion}'`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log())
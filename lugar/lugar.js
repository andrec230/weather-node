const axios = require('axios')

const getLugarLatLon = async (direccion) => {
    const encodedUrl = encodeURI( direccion )

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'x-rapidapi-key': '0227f42ce9msh30f366aa395ceb9p17c89djsn1e5064b69666'}
    });

    const resp = await instance.get()
    if(resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`)
    }

    const city = resp.data.Results[0]
    const response = {
        dir: city.name,
        lat: city.lat,
        lng: city.lon
    }
    return response
}

module.exports = {
    getLugarLatLon
}
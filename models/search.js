const axios = require('axios');



class Busquedas {
	historial = ['buenos aires', 'madrid', 'barcelona']

	constructor() {
		//TODO leer DDBB si existe
	}
	get paramsMapbox() {
		return {
			'access_token': 'pk.eyJ1IjoiY3J1emNydXoiLCJhIjoiY2w2bDF6Nm55MDI2YjNqcTZpYWVyazJmdSJ9._9Cm1d7Wxd1SYVRSzgmINQ',
			'limit': 5,
			'language': 'es'

		}

	}



	async ciudad(lugar = '') {
		try {

			//aqui hacemos la peticion http
			const instance = axios.create({
				baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
				params: this.paramsMapbox

				
			})
			const resp = await instance.get()


			// console.log('ciudad',lugar)
			// const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/hurlingham%20buenos.json?limit=5&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoiY3J1emNydXoiLCJhIjoiY2w2bDF6Nm55MDI2YjNqcTZpYWVyazJmdSJ9._9Cm1d7Wxd1SYVRSzgmINQ')
			console.log(resp.data)

			return [] //returna las ciudades que coinsidan con los lugugares con los q escribe la persona
		} catch (error) {
			return []

		}
		return []//return retyornar lso lugares
	}
}
module.exports = Busquedas
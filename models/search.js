const axios = require('axios');



class Busquedas {
	historial = ['buenos aires', 'madrid', 'barcelona']

	constructor() {
		//TODO leer DDBB si existe
	}
	async ciudad(lugar = '') {
		try {
			
				//aqui hacemos la peticion http
				// console.log('ciudad',lugar)
				const resp = await axios.get('https://reqres.in/api/users?page=2')
				console.log(resp.data)
			
				return [] //returna las ciudades que coinsidan con los lugugares con los q escribe la persona
			} catch (error) {
				return []
			
			}
			return []//return retyornar lso lugares
	}
}
module.exports = Busquedas
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")
const Busquedas = require("./models/search")

const main = async()=>{
	const busquedas = new Busquedas()	
	let opt 

	do{
		opt = await inquirerMenu()
		console.log({ opt })

		if( opt !== 0 )await pausa()

	}while( opt !== 0)
}

main()
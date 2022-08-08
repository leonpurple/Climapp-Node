const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")
const Busquedas = require("./models/search")

const main = async () => {
	const busquedas = new Busquedas()
	let opt

	do {
		opt = await inquirerMenu()
		switch (opt) {
			case 1:
				//mostrar mensaje 
				const lugar = await leerInput('Ciudad: ')
				console.log(lugar)

				//buscar los lugares

				//seleccionar el lugar 

				//datos de clima

				//mostrar resultados
				console.log('\nInformación de la ciudad\n'.yellow)
				console.log('Ciudad'.yellow)
				console.log('Lat'.red)
				console.log('Long'.red)
				console.log('Temperatura'.cyan)
				console.log('Mínima'.green)
				console.log('Máxima'.green)
				
			break

		}

		if (opt !== 0) await pausa()

	} while (opt !== 0)
}

main()
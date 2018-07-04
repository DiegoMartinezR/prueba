var Controlador = require('./controlador')
var mainDir     = "";

module.exports = {
	principal: function(app){
		//Obtener todas las areas
		app.get('/api/areas', Controlador.getAreas );

		//Crear una nueva area
		app.post('/api/area', Controlador.setArea);

		//A la aplicacion principal
		app.get( '*', function(req, res){
			res.sendFile( mainDir + '/angular/index.html' );
		});
		
	},

	iniciar: function (mdir){
		mainDir = mdir;
	}
}
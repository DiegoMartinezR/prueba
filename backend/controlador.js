var Area = require('./modelos/area');

//Obtiene todas las areas

exports.getAreas = function(req, res) {
	Area.find( {}, function(err,areas){
		if(err)
			res.send(err);
		res.json(areas);
	});
}



exports.setAreas = function(req, res) {
	Area.create ({ Nombre : req.body.Nombre,
					Abreviatura: req.body.Abreviatura,
					Estado: req.body.Estado }, function(err, area){

						id(err)
							res.send(err);

						Area.find(function(err, area){
							if(err)
								res.send(err);
							res.json(area);
						});

						});

}

	
	

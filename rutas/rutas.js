var express = require('express');
var router = express.Router();
var fcargos = require('./rutas_cargos.js');

//Pagina principal
router.get('/', c_inicio);


//Opciones de mantenimiento de cargo
router.get ('/m_cargos_listado', fcargos.listado);
router.get ('/m_cargos_nuevo', fcargos.nuevo);
router.get ('/m_cargos_editar/:xid', fcargos.editar);
router.post ('/m_cargos_grabar_editar', fcargos.grabar_editar);
router.post ('/m_cargos_grabar_nuevo', fcargos.grabar_nuevo);
router.get('/m_cargos_eliminar/:xid', fcargos.eliminar);
//Opciones principales

router.get('/mantenimientos',c_mantenimientos);
router.get('/procesos',c_procesos);
router.get('/reportes',c_reportes);


function c_mantenimientos(req, res){
	res.render('mantenimientos',{});

}

function c_procesos(req, res){
	res.send('procesos');
}

function c_reportes(req, res){
	res.send('reportes');
}

function c_inicio(req, res) {
	res.render('index',{});
}

module.exports = router;
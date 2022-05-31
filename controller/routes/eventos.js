const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){

    app.get('/eventos-inscricao', function (req, res){
        res.render('forms/form-3inscricaoEventos');
    })
   
}
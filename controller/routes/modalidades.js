const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){
    
    app.get('/modalidades/inscricao', function (req, res){
        res.render('forms/form-4inscricaoModalidades');
    });
     
}
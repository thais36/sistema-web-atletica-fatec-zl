const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../controller/SQL/usuarioDB')

module.exports = function (app){

    app.get("/", function(req, resp){
        resp.send("Bem-vindo ao meu app");
    })

    app.get('/index', function (req, res){
        res.render('pages/index');
    })
    
    app.get('/quemsomos', function (req, res){
        res.render('pages/quemsomos');
    })
    
    app.get('/modalidades', function (req, res){
        res.render('pages/modalidades');
    })

    app.get('/campeonatos', function (req, res){
        res.render('pages/campeonatos');
    })

    app.get('/eventos', function (req, res){
        res.render('pages/eventos');
    })

    app.get('/loja_virtual', function (req, res){
        res.render('pages/loja_virtual');
    })

    app.get('/contato', function (req, res){
        res.render('pages/contato');
    })

    app.get('/acessibilidade', function (req, res){
        res.render('pages/acessibilidade');
    })

    app.get('/login', function (req, res){
        res.render('pages/form-1login');
    })

    app.get('/cadastro', function (req, res){
        res.render('pages/form-2cadastro');
    })

    app.get('/eventos-inscricao', function (req, res){
        res.render('pages/form-3inscricaoEventos');
    })

    app.get('/modalidades-inscricao', function (req, res){
        res.render('pages/form-4inscricaoModalidades');
    });

}
const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/eventosDB')

module.exports = function (app){
    app.get('/eventos-inscricao', function (req, res){
        res.render('forms/form-3inscricaoEventos');
    })
    app.get('/sucesso-eventos', function (req, res){
        res.render('forms/sucesso-evento');
    })
    
    app.post('/eventos-salvar', async(req, res) => {
        try {
            var eventos = {nome: req.body.nome,
                           cpf: req.body.cpf,
                           data: req.body.data,
                           horario: req.body.horario,
                           local: req.body.local,                                                                             
                        }
            usuarioBanco.insertInscricaoEvento(eventos);
            res.render('forms/sucesso-cadastro', {mensagem: 'inscrito'});
        } catch (error){
            res.render('forms/sucesso-cadastro', { mensagem: "Erro na inscricao"})
        }
    })

    app.get('/eventos--salvar', function (req, res){
        res.render('forms/sucesso-evento', {mensagem: 'comprado'});
    })
}
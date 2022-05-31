const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/cadastroDB')

module.exports = function (app){

    app.get('/cadastro', function (req, res){
        res.render('forms/form-2cadastro');
    })

    app.post('/cadastro-salvar', (req, res) => {
        try {
            var usuario = {email: req.body.email,
                           cpf: req.body.cpf,
                           nome: req.body.nome,
                           data: req.body.data,
                           telefone: req.body.telefone,
                           senha: seguranca.ocultarsenha(req.body.senha)                        
                        }
            usuarioBanco.insertUsuario(usuario);
            res.render('forms/sucesso-cadastro', {mensagem: 'cadastrado'});
            //corrigir erro do css
        } catch (error){
            res.render('forms/form-2cadastro', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }
    })    
}
const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){
    
    app.get("/", function(req, res){
        res.redirect('/index');
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
        if(req.query.fail) res.render('pages/form-1login', { mensagemLogin: 'Usúario e/ou senha incorretos!'});
        else res.render('pages/form-1login', { mensagemLogin: null});
    })

    app.get('/cadastro', function (req, res){
        res.render('pages/form-2cadastro');
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
            res.render('pages/sucesso-cadastro', {mensagem: 'cadastrado'});
            //corrigir erro do css
        } catch (error){
            res.render('pages/form-2cadastro', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }
    })    

    app.get('/eventos-inscricao', function (req, res){
        res.render('pages/form-3inscricaoEventos');
    })

    app.get('/modalidades-inscricao', function (req, res){
        res.render('pages/form-4inscricaoModalidades');
    });

    app.get('/usuario', seguranca.autenticar, function (req, res){
        res.render('usuario/usuario');
    });

    app.get('/not-found', function (req, res){
        res.render('usuario/not-found');
    });

}



/*
module.exports = function (app){

    //GET da Página Inicial
    app.get("/", function(req, resp){
        resp.send("<h1>Bem-vindo ao meu app</h1>");
    })

    //GET da Página de cadastro de novos usuários    
    app.get('/cadastro', function (req, res){
        if(req.query.fail) 
            res.render('usuario/CadastroUsuario', {mensagem: 'Cadastro'});
        else
            res.render('usuario/CadastroUsuario', {mensagem: null});

    })
    
    //POST da página EditUsuario.ejs
    app.post('/cadastro/usuario/edit/salvar', (req, res) => {
        var usuario = { 
            nome: req.body.nome,
            senha: req.body.senha,
            id: req.body.id
        };
        try {
            usuarioBanco.updateUsuario(usuario);
            res.render('usuario/Sucesso', {mensagem: 'alterado'});
        } catch (error){
            res.render('usuario/EditUsuario', {title: 'Edição Cadastro', mensagem: "Erro no cadastro"})
        }
    })

    //POST da página CadastroUsuario.ejs 
    app.post('/cadastro/usuario/salvar', seguranca.autenticar, (req, res) => {
        try {
            var usuario = {nome: req.body.nome,
                           senha: seguranca.ocultarsenha(req.body.senha)}
            usuarioBanco.insertUsuario(usuario);
            res.render('usuario/Sucesso', {mensagem: 'cadastrado'});
        } catch (error){
            res.render('usuario/CadastroUsuario', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }
    })

    //GET da página lista.ejs
    app.get('/lista/usuario', seguranca.autenticar, async (req, res, next) => {
        try{
            const docs = await usuarioBanco.selectUsuario();
            res.render('usuario/Lista', { mensagem: 'Lista de Usuário', docs });
        } catch (err){
            next(err);
        }
    });

    //GET do botão delete da página lista.ejs
    app.get('/delete/usuario/:id', seguranca.autenticar, async (req, res, next) => {
        try{
            var id = req.params.id;
            await usuarioBanco.deleteUsuario(id);
            const docs = await usuarioBanco.selectUsuario();
            res.render('usuario/Lista', { mensagem: 'Usuário excluído com sucesso', docs });
        } catch (err){
            next(err);
        }
    });

    //GET do botão editar da página lista.ejs
    app.get('/edit/usuario/:id', seguranca.autenticar, async (req, res, next) => {
        try{
            var id = req.params.id;
            const usuario = await usuarioBanco.getUsuarioId(id);
            res.render('usuario/EditUsuario', { mensagem: '', usuario });
        } catch (err){
            next(err);
        }
    });

    //GET da página Login.ejs
    app.get('/login', function (req, res) {
        if(req.query.fail) res.render('usuario/Login', { mensagemLogin: 'Usúario e/ou senha incorretos!'});
        else res.render('usuario/Login', { mensagemLogin: null});
    });

}

*/
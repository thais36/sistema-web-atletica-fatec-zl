const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){
    

    app.get('/usuario', seguranca.autenticar, async(req, res, next) => {
        try {
                if (req.user.id != null) {
                    const usuarioID = req.user.id;
                    console.log(usuarioID);
                    const usuarioLogado = await usuarioBanco.getUsuarioId(usuarioID);
                    console.log(usuarioLogado);
                    res.render('usuario/usuario', {usuarioLogado});
                } else {
                    console.log("Deu null");
                } 
        } catch (err){
            next(err);
        }
    });



}


// ============================= ANOTAÇÕES =============

/*
try{
            const usuario = req.user.id;
            const usuarioLogado = UsuarioBanco.getUsuarioId(usuario)
            res.render('usuario/usuario');
        } catch {
            res.render('forms/form-1login');
        }


*/

/*
app.get('/home/usuario', seguranca.autenticar, async(req, res, next) => {
        try {
                if (req.user.perfil != 'adm') {
                    const cpfUser = req.user.cpf;
                    const professor = await profBanco.getProfessorCpf(cpfUser);
                    console.log(professor);
                    res.redirect('/home/docente');
                    res.render('professor/HomeDocente', { professor});
                } else {
                    const usuario = req.user;
                    const docs = await usuarioBanco.selectUsuario();
                    const professor = await profBanco.selectProfessor();
                    const edital = await editalBanco.selectEdital();
                    const coord = await coordBanco.selectCoord();
                    const disc = await discBanco.selectDisciplina();
                    const concurso = await concursoBanco.selectConcurso();
                    res.render('usuario/HomeUsuario', { mensagem: 'Lista de Usuários', docs, professor,
                     usuario, edital, coord, disc, concurso});   
                } 
        } catch (err){
            next(err);
        }
    });



*/

/*
    app.get('/usuario', seguranca.autenticar, function (req, res, next){
        try {
            if (req.user.id != null) {
                const usuario = req.user.id;
                console.log(usuario);
                const usuarioLogado () => {
                    await usuarioBanco.getUsuarioId(usuario);
                }
                console.log(usuarioLogado);
                res.render('usuario/usuario');
            } else {
                console.log("Não funcionou");
            } 
    } catch (err){
        next(err);
    }
        
    });

    */
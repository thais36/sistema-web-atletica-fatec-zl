const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){
    
    app.get('/modalidades-inscricao', function (req, res){
        res.render('forms/form-4inscricaoModalidades');
    });

        //POST da página EditInscricaoModalidades.ejs
        app.post('/cadastro/usuario/edit/salvar', (req, res) => {
            var modalidades = {
                nome: req.body.nome,
                genero: req.body.genero,
                tipo: req.body.tipo,
                horario: req.body.tipo,
                dia_da_semana: req.body.dia_da_semana,
                equipamento: req.body.equipamento
            }
            usuarioBanco.insertInscricaoModalidade(modalidades);
            res.render('pages/sucesso-cadastro', {mensagem: 'inscrito'});
        } catch (error){
            res.render('pages/form-4inscricaomodalidades', { title: 'Inscrição-Modalidades', mensagem: "Erro na inscrição"})
        }
        
     
}

const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function insertModalidade(modalidades){
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO TABELA (nome, genero, tipo, horario, dia_da_semana, equipamento) VALUES (?,?,?,?,?,?);';
    const values = [usuario.nome, usuario.genero, usuario.tipo, usuario.horario, usuario.dia_da_semana, usuario.equipamento];
    return await conn.query(sql, values);
}

module.exports = { insertModalidade }

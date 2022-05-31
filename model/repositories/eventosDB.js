const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function xxxx(usuario){
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO TABELA (COLUNA, COLUNA, COLUNA, COLUNA, COLUNA, COLUNA) VALUES (?,?,?,?,?,?);';
    const values = [usuario.cpf, usuario.nome, usuario.email, usuario.senha, usuario.telefone, usuario.data];
    return await conn.query(sql, values);
}

module.exports = { xxxx }
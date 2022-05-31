const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function insertUsuario(usuario){
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO membro (cpf, nome, email, senha, telefone, data_nascimento) VALUES (?,?,?,?,?,?);';
    const values = [usuario.cpf, usuario.nome, usuario.email, usuario.senha, usuario.telefone, usuario.data];
    return await conn.query(sql, values);
}

module.exports = { insertUsuario }
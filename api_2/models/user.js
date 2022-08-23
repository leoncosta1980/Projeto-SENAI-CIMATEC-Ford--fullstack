const conexao = require('../infraestrutura/conexao')

class User{

  findByUserName(user_name, res){
    const sql = 'SELECT * FROM user WHERE user_name=?'

    conexao.query(sql, user_name, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(resultados)}
        })
  }

  addUser(user, res){
    const sql = 'INSERT INTO user SET ?'

    conexao.query(sql, user, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(user)}
        })
  }

  listUser(res){
    const sql = 'SELECT * FROM user'

    conexao.query(sql, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(resultados)}
        })
  }

  getUserById(id, res){
    const sql = `SELECT * FROM user WHERE user_id=${id}`

    conexao.query(sql, (erro, resultados)=>{
      const user = resultados[0];
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(user)}
        })
  }

  updateUser(id, values, res){
    const sql = 'UPDATE user SET ? WHERE user_id=?'

    conexao.query(sql, [values, id], (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json({...values,id})}
        })
  }

  deleteUser(id, res){
    const sql = 'DELETE FROM user WHERE user_id=?'

    conexao.query(sql, id, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json({id})}
        })
  }
}

module.exports = new User()

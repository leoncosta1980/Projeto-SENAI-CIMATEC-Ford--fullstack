const conexao = require('../infraestrutura/conexao')

class VehicleModel {
  addVehicleModel(VehicleModel,res){
  const sql = 'INSERT INTO vehicle_model SET ?'

  conexao.query(sql, VehicleModel, (erro, resultados)=>{
    if(erro){
      res.status(400).json(erro)
      }else{
        res.status(201).json(VehicleModel)}
      })

  }

  listVehicleModel(res){
    const sql = 'SELECT * FROM vehicle_model'

    conexao.query(sql, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(resultados)}
        })
  }

  getVehicleModelByID(id, res){
    const sql = `SELECT * FROM vehicle_model WHERE id_vehicle_Model=${id}`

    conexao.query(sql, (erro, resultados)=>{
      const vehicle_model = resultados[0];
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(vehicle_model)}
        })
  }

  updateVehicleModel(id, values, res){
    const sql = `UPDATE vehicle_model SET ? WHERE id_vehicle_Model=?`

    conexao.query(sql, [values, id], (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json({...values,id})}
        })
  }

  deleteVehicleModel(id, res){
    const sql = 'DELETE FROM vehicle_model WHERE id_vehicle_Model=?'

    conexao.query(sql, id, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json({id})}
        })
  }

}

module.exports = new VehicleModel()

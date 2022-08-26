const conexao = require('../infraestrutura/conexao')

class VehicleData {
  addVehicleData(VehicleData,res){
  const sql = 'INSERT INTO vehicle_data SET ?'

  conexao.query(sql, VehicleData, (erro, resultados)=>{
    if(erro){
      res.status(400).json(erro)
    }else{
      res.status(200).json(VehicleData)}
  })
  }

  listVehicleData(valor, res){
    let sql = 'SELECT id_vehicle, vehicle_vin, odometer, tire_Pressure, vehicle_status, battery_status, fuel_level, latitude, longitude FROM vehicle_data'
    if (valor) {
      sql = `SELECT id_vehicle, vehicle_vin, odometer, tire_Pressure, vehicle_status, battery_status, fuel_level, latitude, longitude FROM vehicle_data WHERE vehicle_vin LIKE '%${valor}'`
    }

    conexao.query(sql, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(resultados)}
        })
  }

  getVehicleDataByID(id, res){
    const sql = `SELECT id_vehicle, vehicle_vin, odometer, tire_Pressure, vehicle_status, battery_status, fuel_level, latitude, longitude FROM vehicle_data WHERE id_vehicle=${id}`

    conexao.query(sql, (erro, resultados)=>{
      const vehicle_data = resultados[0];
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json(vehicle_data)}
        })
  }

  updateVehicleData(id, values, res){
    const sql = 'UPDATE vehicle_data SET ? WHERE id_vehicle=?'

    conexao.query(sql, [values, id], (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json({...values,id})}
        })
  }

  deleteVehicleData(id, res){
    const sql = 'DELETE FROM vehicle_data WHERE id_vehicle=?'

    conexao.query(sql, id, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
        }else{
          res.status(200).json({id})}
        })
  }
}

module.exports = new VehicleData()

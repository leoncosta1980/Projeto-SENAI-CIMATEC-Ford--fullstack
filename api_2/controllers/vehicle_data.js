const VehicleData = require('../models/vehicle_data')

module.exports = app => {

  app.get('/vehicleData', (req, res) => {
    VehicleData.listVehicleData(req.query.valor, res)
  })

  app.get('/vehicleData/:id', (req, res) => {
    const id = parseInt(req.params.id)
    VehicleData.getVehicleDataByID(id, res)
  })

  app.post('/vehicleData', (req, res) => {
    const vehicleData = req.body
    VehicleData.addVehicleData(vehicleData,res)
  })

  app.patch('/vehicleData/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body
    VehicleData.updateVehicleData(id, values, res)
  })

  app.delete('/vehicleData/:id', (req, res) => {
    const id = parseInt(req.params.id)
    VehicleData.deleteVehicleData(id, res)
  })
}

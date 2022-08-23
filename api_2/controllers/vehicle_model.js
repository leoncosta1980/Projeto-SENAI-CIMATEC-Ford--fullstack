const VehicleModel = require('../models/vehicle_model')

module.exports = app => {

  app.get('/vehicleModel', (req, res) => {
    VehicleModel.listVehicleModel(res)
  })

  app.get('/vehicleModel/:id', (req, res) => {
    const id = parseInt(req.params.id)

    VehicleModel.getVehicleModelByID(id, res)
  })

  app.post('/vehicleModel', (req, res) => {
    const vehicle_model = req.body
    VehicleModel.addVehicleModel(vehicle_model, res)
  })

  app.patch('/vehicleModel/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body
    VehicleModel.updateVehicleModel(id, values, res)
  })

  app.delete('/vehicleModel/:id', (req, res) => {
    const id = parseInt(req.params.id)
    VehicleModel.deleteVehicleModel(id, res)
  })
}

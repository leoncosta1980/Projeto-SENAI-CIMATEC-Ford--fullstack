const User = require('../models/user')

module.exports = app => {

  app.get('/user', (req, res) => {
    User.listUser(res)
  })

  app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    User.getUserById(id, res)
  })

  app.post('/user', (req, res) => {
    const user = req.body
    User.addUser(user, res)
  })

  app.post('/user/login', (req, res) => {
    const user_name = req.body.user_name
    User.findByUserName(user_name, res)
  })

  app.patch('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body
    User.updateUser(id, values, res)
  })

  app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    User.deleteUser(id, res)
  })

}

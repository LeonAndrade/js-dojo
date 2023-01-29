// import controller obj with route handlers
const UserController = require('./controller/UserController')

// Route objects array
module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser,
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser,
  },
];
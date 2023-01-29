let users = require('../mocks/users');

// Export controller object for route handlers.
module.exports = {

  listUsers(request, response) {

    // Destructure order param from request query property.
    const { order } = request.query;
  
    // Run sort logic and save sorted users array.
    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc')  {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });
    
    response.send(200, sortedUsers);
  },
  
  getUserById(request, response) {
    // Destructure user id from request params property
    const { id } = request.params;

    // Get user that matches given id
    const user = users.find((user) => user.id === Number(id));
  
    !user
      ? response.send(400, {'error': 'User not found.'})
      : response.send(200, user);
  },
  
  createUser(request, response) {
    
    // Destructure body from request properties
    const { body } = request;

    // Get last registered user id
    const lastUserId = users[users.length - 1].id;

    // Instantiate newUser obj incrementing lastUserId
    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    };

    // Add newUser to users array
    users.push(newUser);

    response.send(200, newUser);
  },
  
  updateUser(request, response) {

    // Destructure user id from request properties to a reassignable variable
    let { id } = request.params;

    // Destructure user name from request body property to a constant variable
    const { name } = request.body;
  
    // Cast id from string to number.
    id = Number(id);

    // Search users for given user id
    const userExists = users.find((user) => user.id === id);

    // Check if user exists
    if (!userExists) {
      return response.send(400, { error: 'User not found' });
    }

    // If an user exists with given id, iterate through users array...
    users = users.map((user) => {
      
      // if user id is matched, destructure current user object into a new object and override name property
      // else return the current user object
      return user.id === id ? { ...user, name } : user
    });

    response.send(200, {id, name});
  },
  
  deleteUser(request, response) {
    let { id } = request.params;
  
    // Cast id from string to number.
    id = Number(id);

    users = users.filter(user => user.id !== id);

    response.send(200, { deleted: true });
  },
}
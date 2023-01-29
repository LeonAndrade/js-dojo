/**
 *  Parses the body and attaches a callback to handle the request.
 * 
 * @param request object
 * @param callback handler 
 */
function bodyParser(request, callback) {

  // initialize an empty body.
  let body = '';

  // while receiving data, append to body string
  request.on('data', (chunk) => {
    body += chunk;
  });

  // On 'end' event save body to request
  // and run the actual handler callback method.
  request.on('end', () => {
    body = JSON.parse(body);
    request.body = body;
    callback();
  });
}

module.exports = bodyParser;
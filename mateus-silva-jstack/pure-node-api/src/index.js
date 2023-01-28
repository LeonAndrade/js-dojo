const http = require('http');
const { URL } = require('url');

const routes = require('./routes'); 
const bodyParser = require('./helpers/bodyParser');

const server = http.createServer((request, response) => {
  
  // This is how express prints request and url
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  // url.parse got deprecated, URL is recommended
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  // URL.searchParams returns an iterable so we need to convert to a POJO;
  const queryParams = Object.fromEntries(parsedUrl.searchParams);
  
  // destructure pathname from URL
  let { pathname } = parsedUrl;
  
  // initialize an empty reassignable id for dynamic url params
  let id = null;

  // split endpoint to replace :id with the real query param value
  const splitEndpoint = pathname.split('/').filter((routeItem) => Boolean(routeItem));
  
  // We care only about endpoints with at least 1 param after base path.
  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  // get route handler
  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  // Handle route
  if (route) {
    request.query = queryParams;
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    };

    if (['POST', 'PUT'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
      } else {
        route.handler(request, response);
      }
  
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);
  }

});

// Run server locally
server.listen(3000, () => console.log('🔥 Server is started at http://localhost:3000'));
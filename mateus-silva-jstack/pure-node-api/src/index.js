// module to manage a local http server
const http = require('http');

// parseURL got deprecated for security reasons
const { URL } = require('url');

// import local routes array
const routes = require('./routes'); 

// import method to parse body content
const bodyParser = require('./helpers/bodyParser');

// create the local server
const server = http.createServer((request, response) => {
  
  // This is how express framework prints request and url
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

  // get route associated with current endopoint and http method.
  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  // If there is route associated, run request/response flow.
  if (route) {

    // Assign queryParams obj to request query property
    request.query = queryParams;

    // Assign current user id to request params property
    request.params = { id };

    // Encapsulate response logic within the response.send property
    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    };

    // If method includes an incoming body.
    if (['POST', 'PUT'].includes(request.method)) {
      
      // parse the body and run associated route handler callback
      bodyParser(request, () => route.handler(request, response));
      
    } else {
      // For https methods with body, just handle the request
      route.handler(request, response);
    }
  
  // If there is no route associated to current endpoint and http method
  } else {

    // return 404 (Not Found) with appropriate error message
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);
  
  }

});

// Run server locally
server.listen(3000, () => console.log('🔥 Server is started at http://localhost:3000'));
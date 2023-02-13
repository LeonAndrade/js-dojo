# Set up node version for service image
FROM node:18-bullseye

# Set environment variables
# ENV NODE_ENV="production"
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_USER=$DB_USER
ENV DB_DATABASE=$DB_DATABASE
ENV DB_PASSWORD=$DB_PASSWORD

# Create an empty node_modules dir and assign node user permissions on project dir
RUN mkdir -p /mycontacts/backend/node_modules && chown -R node:node /mycontacts/backend

# Set working directory inside container
WORKDIR /mycontacts/backend

# Copy package files
COPY ./package*.json ./

# Set node user to prevent running commands as super-user
USER node

# Install package files
RUN yarn install

# Bundle app code and assign permissions to node user
COPY --chown=node:node . .

# Expose bind port for internal communication with other services
EXPOSE 3000

# Run entry point script
CMD [ "node_modules/.bin/nodemon", "src/index.js" ]

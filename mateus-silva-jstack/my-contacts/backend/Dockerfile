# Set up node version for service image
FROM node:18-bullseye

# Expose port for internal communication with other services
EXPOSE 3000

COPY . .

# Set node user to prevent running commands as super-user
USER node

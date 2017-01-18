###########################################################
#
# Dockerfile for rim-vigo-saksbehandling
#
###########################################################

# Setting the base to nodejs 6.9.4
FROM node:6.9.4-alpine

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT node index.js
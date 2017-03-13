###########################################################
#
# Dockerfile for rim-vigo-saksbehandling
#
###########################################################

# Setting the base to nodejs 7.7.2
FROM node:7.7.2-alpine

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
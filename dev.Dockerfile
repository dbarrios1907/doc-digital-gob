FROM node:lts-alpine

ARG APP

# Sets the variable to inform Docker that the container
# listens on the specified network port.
EXPOSE 4000

# Setting up certificates and logs
# ENV CERT_DIR /opt/certs
# RUN mkdir -p /opt/logs
# RUN mkdir -p $CERT_DIR
# COPY ../certs/ $CERT_DIR

# Sets the default working directory of the image.
ENV DIR /opt/apps

RUN mkdir -p $DIR
# Sets the default working directory of the image for any
# RUN, CMD, ENTRYPOINT, COPY, and ADD statements that come
# with it in the Dockerfile.
WORKDIR $DIR

# Setup thirdparty dependencies
COPY ./docker/package.json $DIR
COPY ./yarn.lock $DIR

RUN npm install -g nodemon yarn
RUN yarn

# HEALTHCHECK --interval=1m30s --timeout=12s --start-period=40s --retries=3 CMD curl --fail http://${APP}:4000/.well-known/apollo/server-health || exit 1

# ENTRYPOINT nodemon $(echo $APP/main.js)


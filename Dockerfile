ARG nodeVersion=lts
ARG nodeOptions=""
ARG appPath="./"

FROM node:${nodeVersion}-alpine

ARG appPath
ENV HOME=/home/app

RUN mkdir -p $HOME

WORKDIR ${HOME}

ADD --chown=node:node ${appPath} ${HOME}/
ADD --chown=node:node ${modules} ${HOME}/


ENV HOME=/home/app
ENV APP_DIR=/home/app
ENV NODE_OPTIONS=${nodeOptions}
WORKDIR ${HOME}

RUN chown node:node ${HOME} && chown node:node ${HOME}/
USER 1000

RUN npm install -g yarn
RUN yarn
RUN yarn build

EXPOSE 2992 3000
CMD ["yarn", "start"]

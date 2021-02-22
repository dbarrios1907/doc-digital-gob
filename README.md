# doc-digital-gob

## DockerBuild

Docker image Args defaults:

- ARG nodeVersion=lts
- ARG nodeOptions=""
- ARG appPath="."

```
docker build -t docdigitalv3-front:1.0.0 .
```
```
docker run --rm -it -p 8080:80 docdigitalv3-front:1.0.0
```

## Project Demonstration
[https://clever-fermi-0d7c3c.netlify.app/usuarios/index](Demo)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

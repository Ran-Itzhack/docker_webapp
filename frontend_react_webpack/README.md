# docker_frontend_react_webpack

## How to Fix npm ERR ERESOLVE Unable to Resolve Dependency Tree React Error in Visual Studio Code

- `npm config set legacy-peer-deps true`
Second, clear the cache:
- `rm -rf node_modules` 
- `npm cache clean --force`
- `npm cache verify`

docker container run -d --rm --name frontend_react_webpack

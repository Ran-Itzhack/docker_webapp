#!/bin/bash

docker build . \
 -t image_nginx_v3:0.0.1


 docker build . -t docker_webapp_ec2

 docker run -d -it \
    --name nodejs_webap_environment_variables \
    -e MONGO_USERNAME=ran \
    -e MONGO_PASSWORD=your_password \
    -e MONGO_PORT=27017 \
    -e MONGO_DB=mongo_db_name \
    -p 3000:3000 --name \
     nodejs_webapp_env_var
    -p 5011:80 \
    image_nginx_v11

nginx -t && service nginx reload


apt-get update -y
apt-get install vim
apt-get install -y iputils-ping

vim /etc/nginx/nginx.conf
vim /etc/nginx/conf.d/default.conf
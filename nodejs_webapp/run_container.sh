docker container run -d -it --rm nodejs_webapp_env_var -e MONGO_USERNAME=ran \
    -e MONGO_PASSWORD=your_password \
    -e MONGO_PORT=27017 \
    -e MONGO_DB=mongo_db_name \
    --name nodejs_webap_environment_variables \
    -p 3000:3000
    
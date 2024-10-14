FROM nginx:latest

RUN echo '++++++++ Hello Dockerfile !!! ++++++++'
RUN echo '++++++++ nginx:latest version start runing ... ++++++++'

RUN apt -y update && \
    apt -y install vim && \
    apt install -y iputils-ping

COPY nginx.conf /etc/nginx/nginx.conf
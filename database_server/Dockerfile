FROM mongo:8.0.1

RUN echo '++++++++ Hello Dockerfile !!! ++++++++'
RUN echo '++++++++ mongo:8.0.1 version start runing ... ++++++++'

RUN apt-get -y update && \
    apt-get -y install vim && \
    apt-get install -y curl && \
    apt-get install -y iputils-ping

# RUN apk update && \
#     add vim && \
#     add curl \
#     add iputils-ping


EXPOSE 27017
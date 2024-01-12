FROM node:18
RUN npm i -g @nestjs/cli
WORKDIR /api

# protoc
ARG PROTOC_VERSION="25.1"
ARG ARCH="x86_64"

RUN apt-get update --yes && apt-get install --yes unzip
ADD "https://github.com/protocolbuffers/protobuf/releases/download/v$PROTOC_VERSION/protoc-$PROTOC_VERSION-linux-$ARCH.zip" protoc.zip
RUN mkdir /usr/local/lib/protoc && unzip protoc.zip -d /usr/local/lib/protoc && rm protoc.zip
RUN ln -s /usr/local/lib/protoc/bin/protoc /usr/local/bin/protoc

RUN protoc --version

ENTRYPOINT ["/bin/bash"]
# CMD ["npm", "run", "start:dev"]

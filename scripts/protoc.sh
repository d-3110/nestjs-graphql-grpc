#!/bin/sh

proto_dir=src/proto
proto_out_dir=src/grpc

protoc --plugin=$(yarn bin)/protoc-gen-ts_proto \
  --ts_proto_out=${proto_out_dir} \
  --ts_proto_opt=nestJs=true \
  --ts_proto_opt=outputClientImple=false \
  --ts_proto_opt=addGrpcMetadata=true \
  -Isrc/proto\
  ${proto_dir}/*.proto
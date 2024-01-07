.PHONY: protoc
protoc:
	# protoc
	# コンテナの外から用
	# docker-compose run --rm --entrypoint sh protoc ./scripts/protoc.sh
	sh ./scripts/protoc.sh
SHELL := /usr/bin/env bash

.PHONY: dev
dev: node_modules/.installed .env.local
	source .env.local && npm run dev

node_modules/.installed: package.json
	npm i && touch node_modules/.installed

.env.local:
	cp .env.sample .env.local

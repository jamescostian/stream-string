MODULE_BINS = node_modules/.bin
JSHINT = $(MODULE_BINS)/jshint
TAPE = $(MODULE_BINS)/tape
FAUCET = $(MODULE_BINS)/faucet
ISTANBUL = $(MODULE_BINS)/istanbul

test: jshint faucet

faucet:
	$(FAUCET)

cov:
	$(ISTANBUL) cover $(TAPE) test/**/*.js

travis: jshint cov

jshint:
	$(JSHINT) index.js package.json test

.PHONY: test faucet cov travis jshint

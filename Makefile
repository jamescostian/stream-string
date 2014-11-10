MODULE_BINS = node_modules/.bin
JSHINT = $(MODULE_BINS)/jshint
MOCHA = $(MODULE_BINS)/_mocha
ISTANBUL = $(MODULE_BINS)/istanbul

mocha:
	$(MOCHA) --bail

cov:
	$(ISTANBUL) cover $(MOCHA) -- --reporter spec

travis: mocha
	$(ISTANBUL) cover $(MOCHA) --report lcovonly -- --reporter spec

jshint:
	$(JSHINT) index.js

test: jshint mocha cov

.PHONY: mocha

start: node_modules
	npm start

node_modules: package.json
	npm install

clean:
	rm -rf node_modules

.PHONY: clean

compile:
	npm run build
install:
	npm install
generate_types:
	# just generate types for the one library javascript file I have
	# needs to be JS since its used in astro.config.js
	npx -p typescript tsc src/helpers/join.js --declaration --allowJs --emitDeclarationOnly --outDir src/helpers
check:
	python3 ./scripts/check_conflicting_dirs.py ./src/content
dev:
	npm run dev
deploy: install compile
	rsync -Pavh --delete ./dist/ ~/static_files/x

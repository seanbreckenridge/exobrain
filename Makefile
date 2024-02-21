compile: install
	npm run build
install:
	npm install
generate_types:
	# just generate types for the one library javascript file I have
	# needs to be JS since its used in astro.config.js
	npx -p typescript tsc src/helpers/join.js --declaration --allowJs --emitDeclarationOnly --outDir src/helpers
check:
	python3 ./scripts/check_conflicting_dirs.py ./src/content
	npm run astro check
dev:
	npm run dev
move_to_www: compile
	rm -rf ~/static_files/x
	mv dist ~/static_files/x

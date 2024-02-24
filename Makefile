compile:
	npm run build
install:
	npm install
spell:
	# https://github.com/codespell-project/codespell using a wrapper script of mine:
	# https://github.com/seanbreckenridge/dotfiles/blob/08c77680069ffd3313e02d4c99fa1f7b1f0c4169/.config/shortcuts.toml#L838-L850
	spell '.' './src/'
generate_types:
	# just generate types for the one library javascript file I have
	# needs to be JS since its used in astro.config.js
	npx -p typescript tsc src/helpers/join.js --declaration --allowJs --emitDeclarationOnly --outDir src/helpers
check:
	python3 ./scripts/check_conflicting_dirs.py ./src/content
dev:
	npm run dev
deploy: install compile
	rsync -Pah --checksum --delete ./dist/ ~/static_files/x

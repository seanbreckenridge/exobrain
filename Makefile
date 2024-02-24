SOURCE_FILES := $(shell find ./src ./public -type f)

./dist/sitemap-0.xml: package.json package-lock.json $(SOURCE_FILES)
	npm run build || (npm install && npm run build)

built: ./dist/sitemap-0.xml

build:
	npm run build

spell:
	@ # https://github.com/codespell-project/codespell using a wrapper script of mine:
	@ # https://github.com/seanbreckenridge/dotfiles/blob/08c77680069ffd3313e02d4c99fa1f7b1f0c4169/.config/shortcuts.toml#L838-L850
	spell '.' './src/'

generate_types: built
	# just generate types for the one library javascript file I have
	# needs to be JS since its used in astro.config.js
	npx -p typescript tsc src/helpers/join.js --declaration --allowJs --emitDeclarationOnly --outDir src/helpers

check:
	python3 ./scripts/check_conflicting_dirs.py ./src/content

dev:
	npm run dev

sync_on_server: built
	rsync -Pahz --checksum --delete ./dist/ ~/static_files/x

sync_to_server: built
	rsync -Pahz --checksum -e ssh --delete ./dist/ vultr:~/static_files/x
	@ echo "Synced to server"

deploy: package.json built sync_on_server
	echo "Manual compile on server done"

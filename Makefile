SOURCE_FILES := $(shell find ./src ./public -type f)

./dist/sitemap-0.xml: package.json package-lock.json astro.config.mjs ./tsconfig.json $(SOURCE_FILES)
	npm run build || (npm install && npm run build)

built: ./dist/sitemap-0.xml

build:
	npm run build

generate_types: built
	# just generate types for the one library javascript file I have
	# needs to be JS since its used in astro.config.js
	npx -p typescript tsc src/helpers/join.js --declaration --allowJs --emitDeclarationOnly --outDir src/helpers

spell:
	@ # https://github.com/codespell-project/codespell using a wrapper script of mine:
	@ # https://github.com/seanbreckenridge/dotfiles/blob/08c77680069ffd3313e02d4c99fa1f7b1f0c4169/.config/shortcuts.toml#L838-L850
	spell '.' './src/'

check:
	python3 ./scripts/check_conflicting_dirs.py ./src/content

lint: check spell

dev:
	npm run dev

LOCAL_NOTES_DIR := $(shell if [ -d "${XDG_DOCUMENTS_DIR}" ]; then realpath "$(XDG_DOCUMENTS_DIR)/Notes/exo/"; else echo ""; fi)

link_personal_notes:
	@ # sync from ~/Documents/Notes/exo/ to ./src/content/notes/personal
	rsync -Pavh --checksum --link-dest="$(LOCAL_NOTES_DIR)/" "$(LOCAL_NOTES_DIR)/" ~/Repos/exobrain/src/content/notes/personal

sync_personal_notes_to_server:
	@ # sync from the local directory to remote, so that if we're building on remote, we can build
	@ # the latest notes. this is needed sometimes since I can't build on my phone
	rsync -Pavh --checksum ./src/content/notes/personal/ vultr:~/code/exobrain/src/content/notes/personal

sync_on_server: built
	# dont delete here, since stuff in ./notes/personal/ (that is synced after its built from
	# my computer) might be deleted
	rsync -Pahz --delete --checksum ./dist/ ~/static_files/x

sync_to_server: built
	rsync -Pahz --checksum -e ssh --delete ./dist/ vultr:~/static_files/x
	@ echo "Synced to server" | boxes

deploy: package.json built sync_on_server
	@ echo "Manual compile on server done"

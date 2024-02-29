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

stork:
	stork build --input ./stork_input.toml --output ./dist/index.st

dev: stork
	cp ./dist/index.st ./public/index.st
	# wait 2 seconds, then open in browser
	setsid -f sh -c 'sleep 2 && xdg-open http://localhost:4321/x/'
	npm run dev

./dist/index.st: built ./stork_input.toml stork

built_and_stork: built ./dist/index.st

LOCAL_NOTES_DIR := $(shell if [ -d "${XDG_DOCUMENTS_DIR}" ]; then realpath "$(XDG_DOCUMENTS_DIR)/Notes/exo/"; else echo ""; fi)

link_personal_notes:
	@ # sync from ~/Documents/Notes/exo/ to ./src/content/notes/personal
	rsync -Pavh --checksum --link-dest="$(LOCAL_NOTES_DIR)/" "$(LOCAL_NOTES_DIR)/" ./src/content/notes/personal

# in case I made changes on my phone in my ~/Documents directory
# I can't link between the two directories because its a cross-device link
# TODO: might be able to use a symbolic link? Not sure how that would work with astros content collections
copy_personal_notes:
	rsync -Pavh --checksum "$(LOCAL_NOTES_DIR)/" ./src/content/notes/personal

sync_personal_notes_to_server:
	@ # sync from the local directory to remote, so that if we're building on remote, we can build
	@ # the latest notes. this is needed sometimes since I can't build on my phone
	rsync -Pavh --checksum ./src/content/notes/personal/ vultr:~/code/exobrain/src/content/notes/personal

sync_on_server: built
	# dont delete here, since search index/personal files might be differently
	# synced from my machine
	rsync -Pahz --checksum ./dist/ ~/static_files/x

sync_to_server: built_and_stork
	rsync -Pahz --checksum -e ssh --delete ./dist/ vultr:~/static_files/x
	@ echo "Synced to server" | boxes

deploy: package.json built_and_stork sync_on_server
	@ echo "Manual compile on server done"

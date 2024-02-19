compile:
	npm install
	npm run build
check:
	python3 ./scripts/check_conflicting_dirs.py ./src/content
	npm run astro check
dev:
	npm run dev
move_to_www: compile
	rm -rf ~/static_files/x
	mv dist ~/static_files/x

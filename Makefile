compile:
	npm install
	npm run build
dev:
	npm run dev
move_to_www: compile
	rm -rf ~/static_files/x
	mv dist ~/static_files/x

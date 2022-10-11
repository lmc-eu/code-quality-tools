# Defining shell is necessary in order to modify PATH
SHELL 				:= sh
export PATH 	:= bin/:node_modules/.bin/:$(PATH)
export NODE_OPTIONS := --trace-deprecation

# On CI servers, use the `npm ci` installer to avoid introducing changes to the package-lock.json
# On developer machines, prefer the generally more flexible `npm install`. 💪
YARN_I 				:= $(if $(CI), install --frozen-lockfile, install)

# Modify these variables in local.mk to add flags to the commands, ie.
# YARN_FLAGS += --prefer-offline
YARN_FLAGS 		:=
LERNA_FLAGS 	:=

# Git hooks to be installed into the project workspace
# GITFILES := $(patsubst bin/githooks/%, .git/hooks/%, $(wildcard bin/githooks/*))

# Misc
.DEFAULT_GOAL = help
.PHONY        : # Not needed here, but you can put your all your targets to be sure
                # there is no name conflict between your files and your targets.

##
## --- 💻 CQT Makefile ----------------------------------------------------------

.PHONY: help
help: ## print this help message
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) \
	| awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' \
	| sed -e 's/\[32m##/[33m/'

##
## --- 📦 Package management ----------------------------------------------------

.PHONY: install
install: node_modules ## install dependencies

.PHONY: outdated
outdated: ## get list of all outdated packages
	yarn outdated || true
	lerna exec "yarn outdated || true"

.PHONY: unlock
unlock: pristine ## recreates the lockfile
	rm -f yarn.lock packages/*/yarn.lock
	touch package.json

.PHONY: clean
clean: ## cleans the project
	rm -rf {.nyc_output,coverage}
	find . -name '*.log' -print -delete

.PHONY: pristine
pristine: clean ## clean all installed dependencies
	rm -rf node_modules packages/*/node_modules

.PHONY: node_modules
node_modules: package.json ## install node modules
	yarn $(YARN_I) $(YARN_FLAGS) && lerna bootstrap && touch node_modules

##
## --- 🚀 Release management ----------------------------------------------------

.PHONY: prerelease
prerelease: ## create a new pre-release
	@bin/make/prerelease.sh

.PHONY: release
release: ## create a new release
	@bin/make/release.sh

.PHONY: release-sync
release-sync: ## sync release with main branch
	@bin/ci/sync-release.sh

.PHONY: publish
publish: ## publish a release
# @bin/make/publish.sh
# @ee: https://github.com/lerna/lerna/tree/main/commands/publish#readme
# Publish packages updated since the last release
#  `from-package` - list of packages to publish is determined by inspecting each `package.json`
#  `--yes` - skip all confirmation prompts
#  `--no-verify-access` - disable verification of the logged-in npm user's access to the packages about to be published
	yarn lerna publish from-package --yes --no-verify-access $(LERNA_FLAGS)

# GENERIC TARGETS

# If this file exists, load it and add it to this makefile.
# Useful for defining per-developer variables or make targets. This file should not be under
# version control. ⚠️
-include local.mk

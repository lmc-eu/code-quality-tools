#!/bin/sh

set -o errexit

head=$(git rev-parse --abbrev-ref HEAD)

printf "\n=====>\tCreating release branch...\n"

git branch --force release
git checkout release

printf "\n=====>\tCreating release locally...\n"

yarn lerna version --conventional-prerelease
yarn lerna publish from-git --pre-dist-tag next

printf "\n=====>\tSwitching back to previous branch...\n"

git checkout "${head}"

printf "\n=====>\tMerging release branch...\n"

git merge release

printf "\n=====>\tPushing...\n"

git push --tags origin "${head}:${head}"

printf "\n=====>\tReleased 🎉\n"

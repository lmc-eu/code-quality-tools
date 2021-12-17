#!/bin/sh

set -o errexit

printf "\n=====>\tFetching current main...\n"

# Ensure we are merging the release into current branch tips to avoid pushes being rejected
git fetch --no-tags --depth=50 origin main

printf "\n=====>\tMerging to main...\n"

git rebase origin/main
git checkout main
git merge --ff-only release

# Print the repo status after merging, for troubleshooting purposes
git status
git log --oneline HEAD~10..HEAD

printf "\n=====>\tPushing main...\n"

git push origin main

printf "\n=====>\tDeleting release branch...\n"
git push origin :release

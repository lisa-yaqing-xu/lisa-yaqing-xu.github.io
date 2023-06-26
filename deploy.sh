#!/usr/bin/env bash
ng build --prod
cp CNAME dist
cp dist/index.html dist/404.html

git add .
git commit -m 'build'
git push origin :deploy --force
git subtree push --prefix dist origin deploy

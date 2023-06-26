#!/usr/bin/env bash
ng build
mkdir -p docs || exit 1
cp -a dist/lisa-personal-site/. docs
cp CNAME docs/CNAME
cp docs/index.html docs/404.html

git add .
git commit -m 'build for deploy'

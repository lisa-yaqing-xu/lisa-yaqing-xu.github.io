#!/usr/bin/env bash
ng build --configuration production
mkdir -p docs || exit 1
cp -a dist/lisa-personal-site/. docs
cp src/favicon.png docs/favicon.png
cp CNAME docs/CNAME
cp robots.txt docs/robots.txt
cp docs/index.html docs/404.html

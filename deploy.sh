#!/usr/bin/env bash
ng build --configuration production
if [[ -d docs ]]; then
    rm -rf docs
fi
mkdir -p docs
cp -a dist/lisa-personal-site/. docs
cp src/favicon.png docs/favicon.png
cp CNAME docs/CNAME
cp robots.txt docs/robots.txt
cp docs/index.html docs/404.html

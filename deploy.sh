#!/usr/bin/env bash
ng build --configuration production
mkdir -p docs || exit 1
cp -a dist/lisa-personal-site/. docs
cp CNAME docs/CNAME
cp robots.txt docs/robots.txt
cp docs/index.html docs/404.html

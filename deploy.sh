ng build --prod
cp CNAME dist
git subtree push --prefix dist origin master

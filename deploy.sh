ng build --prod
cp CNAME distba
git subtree push --prefix dist origin master

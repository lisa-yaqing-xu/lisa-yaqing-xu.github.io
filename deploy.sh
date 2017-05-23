ng build --prod
cp CNAME dist
git add .
git commit -m 'build'
git push origin development
git subtree push --prefix dist origin master

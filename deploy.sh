ng build --prod
cp CNAME dist
cp dist/index.html dist/404.html

git add .
git commit -m 'build'
git push origin development
git subtree push --prefix dist origin master
